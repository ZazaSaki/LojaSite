# Simple Pure — Site de vitrine

Site estático da **Simple Pure** — spa e cosmética natural em Castelo Branco, Portugal.

Vitrine informacional (sem carrinho, checkout ou pagamentos), com as áreas **Sobre**, **Serviços**, **Produtos**, **Promoções** e **Localização**.

## Stack

- **Next.js 16** (App Router) com export estático puro (`output: "export"`).
- **Tailwind CSS v4** (`@tailwindcss/postcss`).
- **lucide-react** para ícones.
- Dados de negócio lidos em tempo de build a partir de `public/exelTest.xlsx`.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build estático

```bash
npm run build
```

O comando gera a pasta `out/` com HTML/CSS/JS estáticos, pronta a servir por qualquer servidor de ficheiros:

```bash
npx serve out
# ou
python3 -m http.server -d out
```

## Estrutura

- `lib/catalog.js` — parser único do Excel (`public/exelTest.xlsx`) e funções de consulta de produtos/famílias.
- `lib/site.js` — strings reais de marca, serviços, promoção e localização.
- `lib/format.js` — helpers de formatação (preço pt-PT, slug, EAN).
- `app/` — rotas App Router (páginas estáticas pré-renderizadas).
- `components/` — componentes partilhados (header, footer, cards, etc.).
