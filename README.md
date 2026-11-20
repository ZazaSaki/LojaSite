# Simple Pure: Loja Site

Showcase website for **Simple Pure** (*O seu ritual SPA*), a natural spa and beauty shop at **Av. Nuno Álvares 27 loja 1, 6000-083 Castelo Branco**.

It is a fully static site (Next.js `output: "export"`): no server, no API routes, no cart or checkout. All copy is in Portuguese (pt-PT).

## Getting started

Requires **Node.js 20.9+** and **npm** (do not use Yarn, pnpm or Bun).

```bash
npm install
npm run dev       # development server at http://localhost:3005
npm run build     # static export into out/
npm run preview   # serve out/ at http://localhost:3005
npm run verify    # data integrity checks + TypeScript
npm run audit     # after a build: verify + content reconciliation + link/asset check
```

`npm run dev` and `npm run build` first run `npm run data`, which regenerates the catalogue from the spreadsheet.

Set `NEXT_PUBLIC_SITE_URL` (e.g. `https://example.pt`) when building for production, so that Open Graph URLs, `sitemap.xml` and `robots.txt` use the real domain. It defaults to `http://localhost:3005`.

## Tech stack

| | |
|---|---|
| Framework | Next.js 16 (App Router, static export), React 19, TypeScript |
| Styling | Tailwind CSS 4 (design tokens in `src/app/globals.css`) |
| Motion | `motion` (scroll reveals, parallax), `lenis` (smooth scroll); both are disabled when the visitor prefers reduced motion |
| Fonts | Cormorant Garamond and Jost, self-hosted via `@fontsource-variable` (the build needs no network) |
| Icons | `lucide-react` |
| Build-time only | `xlsx` (SheetJS) to read the spreadsheet, `sharp` to prepare images, `serve` for previews |

## Pages

| Route | What it shows |
|---|---|
| `/` | Hero, introduction, service groups, product families, the promotion, location |
| `/promocoes/` | The current promotion |
| `/services/` | Service groups A–D, their service lines, and "Outros Serviços" |
| `/products/` | Full catalogue with family filters, accent-insensitive search ("Procurar") and sorting. Filters are kept in the URL (`?familia=gemology&q=creme&ordem=preco-asc`) |
| `/products/family/<slug>/` | One page per family (7), e.g. `/products/family/mossi-epil/` |
| `/products/item/<id>/` | One page per product (160), e.g. `/products/item/20101/` |
| `/about/` | "Quem somos?" and "Onde estamos?" (the map image loads first; Google Maps loads only on click) |

## How the data works

```
data/exelTest.xlsx ──► scripts/extract-catalog.mjs ──► src/data/catalog.json ──► src/lib/catalog.ts ──► pages
  (sheet "Produtos",        (npm run data; also runs         (generated, committed)
   serviceGroups,            before dev and build)
   itemFamilies)
```

The spreadsheet lives in `data/`, not `public/`, so the raw file (with its internal cost and stock columns) is **not** published.

`extract-catalog.mjs` reads the `Produtos` sheet from **row 5** until column A is empty:

| Column | Field | Used as |
|---|---|---|
| A | Código | `id` (Ref.) |
| B | Família | `family` (empty → **"Outros"**) |
| C | Descrição / Nome | `name`: verbatim, only whitespace is trimmed or collapsed |
| E | Código de barras (ean) | `ean` (shown on the product page) |
| K | IVA incluído nos preços? | `vatIncluded` ("Preços com IVA incluído") |
| L | Preço de venda | `price`, shown in pt-PT format, e.g. `25,60 €` |

`shortName` is the name without the family prefix ("Gehwol med Sensitive" → "med Sensitive"). It is used only inside a family's own listing; the full name is always shown on the product page and in the full catalogue.

**To update the catalogue:** replace `data/exelTest.xlsx` with a file in the same layout, then run `npm run build` followed by `npm run audit`. The audit has three parts:

- `scripts/verify-catalog.mjs`: every product, price and EAN in `catalog.json` matches the sheet, and every page was exported.
- `scripts/audit-content.mjs`: reads the **exported HTML** and checks that every product (name, price, Ref., family, EAN), service group and line, the promotion, the brand facts and the address actually appear on the site. It prints an "Original Count vs New Site Count" table.
- `scripts/audit-links.mjs`: every internal link, image and `#anchor` in `out/` resolves, and every image referenced in `src/` exists in `public/`.

Hand-written content (brand lines, address, promotion, services) is in **`src/content/site.ts`**.

### Content to review

Some text was not in the original material. In `src/content/site.ts` all of it is marked `review: true`:

- **Mood lines**: short atmospheric phrases, e.g. "Um lugar para abrandar, respirar e voltar a si." They make no claims about treatments, prices, durations or contacts. Replace them with real copy when available.
- **Which service line belongs to which group**: the spreadsheet lists the groups (`serviceGroups`) and the lines (`itemFamilies`) separately. Only EPIL → C and MANICURE/MEDPEDICURE → D are obvious from the names. RITUAL/MASSAGE/THERAPYS → A and FACE/BODY/FOTOTERAPIA/BELL → B are inferred.

The legacy nav label "Home" is now "Início", and the footer heading "Menu" is now "Navegação", so that all interface text is Portuguese.

Typos fixed in labels (product names were **not** changed): `estica` → `estética`, `Valido` → `Válido`, `PURE BOBY` → `PURE BODY`, `PURE FOTOTERAPI` → `PURE FOTOTERAPIA`. `PURE THERAPYS` and `PURE BELL` are kept as written.

### Data issues found in the spreadsheet (left untouched)

- Rows are not in code order (20123, 20124, 20414–20421, 20601–20605… were appended later). The site sorts by code.
- Geralsan products (20201–20203) are filed under the **Gehwol** family.
- 19 products have no family (Dr.Organic, Yogi Tea, Tiger Balm, Otosan, Solgar…), so they appear under "Outros". The `itemFamilies` sheet also lists "Bem Estar" and "Produtos", which no product uses.
- Products 20336 and later have no brand prefix in their name, unlike earlier rows.
- Same EAN `8016887000097` on 20712 (Lash gel 500) and 20911 (Otosan Spray Ouvido). Non-standard codes: `MELVCM75` (20503), `6309831` (20913).
- Possible typos in product names, shown as written: "Limpesa", "Predra da Lua", "Sotf Feet", "Divsor", "Softner", "Carring", "Anti-Esterias", "Color Vibar".
- The old `public/dataBase.json` (145 rows, removed) was an outdated snapshot that the old site never read; it read the spreadsheet. Seven of its prices (20312, 20314, 20317, 20318, 20332, 20333, 20334) and two names differ from the spreadsheet. The site uses the spreadsheet.
- No product photos exist, so each product gets an abstract, family-coloured label tile instead of a fake photo.

## Images

Source photos are in `assets/source/`. `npm run images` (sharp) regenerates:

- `public/images/*.webp`: optimised photos, plus `src/data/images.json` with sizes and blur placeholders
- `public/images/logo.png` / `logo-light.png`: the logo with a transparent background
- `public/images/mark.png`, `src/app/icon.png`, `src/app/apple-icon.png`: the faceted mark isolated from the logo
- `public/images/og.jpg`: social sharing card

## Project structure

```
data/exelTest.xlsx         product spreadsheet (source of truth, not published)
assets/source/             original photos and logo
scripts/                   extract-catalog, verify-catalog, prepare-images
src/app/                   routes, layout, globals.css, sitemap/robots, icons
src/components/            Header, Footer, HomeHero, CatalogBrowser, ProductCard, LabelArt, MapCard, …
src/content/site.ts        hand-written content (brand, address, promo, services, mood copy)
src/data/                  generated catalog.json and images.json
src/lib/                   catalog helpers (formatting, search normalisation), site URL
```

The previous label editor (`/Editor`), upload page and API routes were removed because a static site cannot have them. They remain in git history.
