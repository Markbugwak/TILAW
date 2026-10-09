# TILAW

**Ang lami sa Sugbo.**

TILAW is a public-facing guide to Cebuano food culture, featuring local dishes and an interactive map of places associated with local specialties.

## Starter project

- Responsive editorial-style landing page
- Searchable dish directory with category filters
- Interactive Leaflet map powered by OpenStreetMap tiles
- Place detail panel and Google Maps exploration links
- No visitor login, registration, or backend required

## Project structure

- `app/page.tsx` — homepage and page sections
- `app/layout.tsx` — root layout and metadata
- `app/globals.css` — visual design system and responsive styles
- `components/food-map.tsx` — map filters and selected-place panel
- `components/leaflet-map.tsx` — interactive map and pins
- `lib/dishes.ts` — dish directory data
- `lib/places.ts` — town and food-area pin data

## Run locally

Requires Node.js 20.9+ and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before launch

Map pins currently represent towns or food areas associated with dishes, not verified restaurant addresses. Do not present a town-level pin as a verified eatery. Verify descriptions and add individual restaurants only after checking their address, operating details, and dish offering. Prototype photography uses remote Unsplash URLs; replace mismatched images with dish-specific photographs you have permission to publish.

## Checks and deployment

```bash
npm run lint
npm run build
```

Import the repository into Vercel to deploy. No environment variables are required for this frontend version.
