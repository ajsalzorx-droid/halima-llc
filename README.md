# Halima Trading L.L.C. E-commerce Website

A modern, responsive product catalogue and quotation-led e-commerce experience for Halima Trading L.L.C., Abu Dhabi.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal.

## Included

- Responsive homepage, shop, product detail, categories, brands, about, corporate, cart, quote and contact pages
- Search, category filtering and sorting
- LocalStorage-powered cart with quantity controls
- Dynamic WhatsApp and email order summaries
- Formal quotation workflow
- SEO metadata, schema, sitemap and robots
- Accessible reduced-motion support

Product records are in `data/products.ts` and are separated from the interface so the project can later connect to Shopify, WooCommerce, Supabase, Firebase, Sanity, Strapi or a custom backend.

Copy `.env.example` to `.env.local` if contact details are later moved into runtime configuration.
