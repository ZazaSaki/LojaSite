// Post-build audit: every internal href/src in out/*.html must resolve to a file in out/,
// and every image path referenced in the source must exist in public/.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "out");
const walk = (d, ext) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => {
  const p = path.join(d, e.name);
  return e.isDirectory() ? walk(p, ext) : ext.some((x) => p.endsWith(x)) ? [p] : [];
});
const resolve = (url) => {
  const clean = decodeURI(url.split("#")[0].split("?")[0]);
  if (!clean) return true;
  const f = path.join(out, clean);
  return fs.existsSync(f) && fs.statSync(f).isFile() ? true : fs.existsSync(path.join(f, "index.html"));
};

const broken = new Map();
let checked = 0;
const anchors = new Set();
for (const file of walk(out, [".html"])) {
  const html = fs.readFileSync(file, "utf8");
  for (const m of html.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    const url = m[1].replace(/&amp;/g, "&");
    if (/^(https?:|mailto:|tel:|data:|#)/.test(url)) continue;
    checked++;
    if (!resolve(url)) broken.set(url, path.relative(out, file));
    if (url.includes("#")) anchors.add(url);
  }
}
// Fragment targets (e.g. /services/#epil) must exist as ids on the target page.
for (const url of anchors) {
  const [p, id] = url.split("#");
  const page = path.join(out, p, p.endsWith(".html") ? "" : "index.html");
  if (fs.existsSync(page) && !fs.readFileSync(page, "utf8").includes(`id="${id}"`)) broken.set(url, "missing #" + id);
}

// Image paths referenced from source code must exist in public/.
const srcRefs = new Set();
for (const f of walk(path.join(root, "src"), [".ts", ".tsx", ".json", ".css"]))
  for (const m of fs.readFileSync(f, "utf8").matchAll(/["'(`](\/images\/[^"')`\s]+)/g)) srcRefs.add(m[1]);
const missingAssets = [...srcRefs].filter((r) => !fs.existsSync(path.join(root, "public", r)));

console.log(`internal links/resources checked: ${checked} (${anchors.size} distinct #anchors)`);
console.log(`image paths referenced in src: ${srcRefs.size} -> ${[...srcRefs].join(", ")}`);
if (broken.size || missingAssets.length) {
  for (const [u, f] of broken) console.error(`✗ broken: ${u}  (${f})`);
  for (const a of missingAssets) console.error(`✗ missing asset: public${a}`);
  process.exit(1);
}
console.log("✓ no broken internal links or missing assets");
