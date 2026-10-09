# TILAW release checklist

**Last source review:** 10 October 2026  
**Status:** Pending manual browser and deployment verification. A passing CI build is necessary but does not prove third-party photos, directions, or responsive interactions work in a real browser.

## Automated checks

- [ ] GitHub Actions passes ESLint.
- [ ] GitHub Actions passes TypeScript (`npx tsc --noEmit`).
- [ ] GitHub Actions completes the Next.js production build.
- [ ] Review any dependency/install warnings; do not apply forceful dependency upgrades without testing.

## Photo and content audit

- [ ] Open all 12 requested venue photos and confirm each URL loads.
- [ ] Confirm each photo depicts the named venue/branch, or clearly label it as representative dish photography.
- [ ] Replace duplicated ngohiong imagery with distinct, branch-specific images if verified images are available.
- [ ] Confirm image source, attribution, and reuse permission; prefer owned/licensed files over third-party hotlinks.
- [ ] Confirm venue names, branch addresses, hours, and dish descriptions against current primary or reliable sources.
- [ ] Keep uncertain details qualified and include a last-reviewed date; never imply hours are guaranteed.

## Browser and mobile checks

- [ ] At desktop width, check all dish cards, photo credits, filters, search, map pins, selected-place panel, and directions links.
- [ ] At 390px and 320px viewport widths, check navigation open/close, search, category tabs, card overflow, map filters, selected-place details, and directions.
- [ ] Test keyboard-only navigation and visible focus states.
- [ ] Enable reduced motion and confirm entrances/transitions are disabled without hiding content.
- [ ] Simulate a failed image request and confirm a labeled fallback appears without collapsing the layout.
- [ ] Inspect browser console and network requests for React errors, failed assets, and broken external links.

## Release and Vercel

- [ ] Confirm the production build passes in GitHub Actions on the PR.
- [ ] Merge only after reviewing the diff and required checks.
- [ ] Confirm Vercel finishes a successful deployment for the intended commit.
- [ ] Open the deployed URL in desktop and mobile browsers and repeat the critical navigation, search, map, image, and external-link checks.
- [ ] Record the deployed commit and date of the final manual verification here.

## Current known caveats

- Some venue image URLs are third-party hotlinks and have not been confirmed as the exact branch or cleared for reuse.
- STK ta Bay! uses representative kinilaw photography; Pochero Kinaraan uses representative chicken pochero photography.
- The same image URL is currently used for both Ann's Ngohiong by Doming's and Doming's Ngohiong.
- Map markers intentionally remain absent for venues whose entrance coordinates have not been verified.
