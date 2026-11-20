// One-off asset preparation (run with `npm run images`). Source photos live in
// assets/source; optimised outputs are written to public/images and src/app.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = (f) => path.join(root, "assets/source", f);
const out = (f) => path.join(root, "public/images", f);
fs.mkdirSync(path.join(root, "public/images"), { recursive: true });

// Photos -> WebP (+ tiny blurred placeholder encoded as base64 in a JSON manifest)
const manifest = {};
for (const [file, name] of [["backGround.jpg", "ritual"], ["Promo.jpg", "promo"], ["map.png", "mapa"]]) {
  const img = sharp(src(file));
  const { width, height } = await img.metadata();
  await img.clone().webp({ quality: 84, effort: 6 }).toFile(out(`${name}.webp`));
  const blur = await img.clone().resize(24).webp({ quality: 40 }).toBuffer();
  manifest[name] = { src: `/images/${name}.webp`, width, height, blur: `data:image/webp;base64,${blur.toString("base64")}` };
}

// Logo: "un-multiply" the white background into real transparency, keeping the ink colour.
async function knockout(file, tint) {
  const { data, info } = await sharp(src(file)).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const px = Buffer.alloc(data.length);
  for (let i = 0; i < data.length; i += 4) {
    const [r, g, b] = [data[i], data[i + 1], data[i + 2]];
    const a = Math.min(1, (255 - Math.min(r, g, b)) / 255 * 1.35);
    if (a < 0.04) { px[i + 3] = 0; continue; }
    const un = (c) => Math.max(0, Math.min(255, Math.round((c - (1 - a) * 255) / a)));
    const [tr, tg, tb] = tint ?? [un(r), un(g), un(b)];
    px[i] = tr; px[i + 1] = tg; px[i + 2] = tb; px[i + 3] = Math.round(a * 255);
  }
  return sharp(px, { raw: { width: info.width, height: info.height, channels: 4 } });
}
await (await knockout("logo.png")).png().toFile(out("logo.png"));
await (await knockout("logo.png", [245, 240, 232])).png().toFile(out("logo-light.png"));

// Favicon / app icons from the faceted mark (top-right of the logo) on linen.
// Keep only the three facet "leaves" (the three largest connected shapes), dropping the wordmark.
const full = await (await knockout("logo.png")).raw().toBuffer({ resolveWithObject: true });
{
  const { width: W, height: H } = full.info;
  const d = full.data;
  const lab = new Int32Array(W * H).fill(-1);
  const sizes = [];
  for (let s0 = 0; s0 < W * H; s0++) {
    if (lab[s0] >= 0 || d[s0 * 4 + 3] < 60) continue;
    const id = sizes.length;
    const stack = [s0];
    lab[s0] = id;
    let n = 0;
    while (stack.length) {
      const p = stack.pop();
      n++;
      const x = p % W, y = (p / W) | 0;
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const nx = x + dx, ny = y + dy;
        if (nx < 0 || ny < 0 || nx >= W || ny >= H) continue;
        const q = ny * W + nx;
        if (lab[q] < 0 && d[q * 4 + 3] >= 60) { lab[q] = id; stack.push(q); }
      }
    }
    sizes.push(n);
  }
  const keep = new Set(sizes.map((n, i) => [n, i]).sort((a, b) => b[0] - a[0]).slice(0, 3).map(([, i]) => i));
  // Soft anti-aliased edge pixels belong to whichever leaf is within 2px.
  const near = (x, y) => {
    for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++) {
      const nx = x + dx, ny = y + dy;
      if (nx >= 0 && ny >= 0 && nx < W && ny < H && keep.has(lab[ny * W + nx])) return true;
    }
    return false;
  };
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) if (!near(x, y)) d[(y * W + x) * 4 + 3] = 0;
}
const mark = await sharp(full.data, { raw: full.info }).trim().png().toBuffer();
await sharp(mark).toFile(out("mark.png"));
for (const [size, file] of [[512, "src/app/icon.png"], [180, "src/app/apple-icon.png"]]) {
  const inner = await sharp(mark).resize(Math.round(size * 0.74), Math.round(size * 0.74), { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background: "#F5F0E8" } })
    .composite([{ input: inner, gravity: "center" }])
    .png()
    .toFile(path.join(root, file));
}

// Open Graph card: the ritual photo, darkened, with the light logo on the left.
{
  const bg = await sharp(src("backGround.jpg")).resize(1200, 630, { fit: "cover", position: "right" })
    .modulate({ brightness: 0.62 }).toBuffer();
  const logo = await sharp(out("logo-light.png")).resize(330).toBuffer();
  const veil = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><defs><linearGradient id="g"><stop offset="0" stop-color="#1e1815" stop-opacity="0.92"/><stop offset="0.45" stop-color="#1e1815" stop-opacity="0.7"/><stop offset="0.8" stop-color="#1e1815" stop-opacity="0"/></linearGradient></defs><rect width="1200" height="630" fill="url(#g)"/></svg>`);
  await sharp(bg).composite([{ input: veil, left: 0, top: 0 }, { input: logo, left: 90, top: 150 }]).jpeg({ quality: 84, mozjpeg: true }).toFile(out("og.jpg"));
}

fs.writeFileSync(path.join(root, "src/data/images.json"), JSON.stringify(manifest, null, 2) + "\n");
console.log("images ready:", Object.keys(manifest).join(", "), "+ logo, logo-light, icons");
