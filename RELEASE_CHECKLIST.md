# TILAW release checklist

**Last source review:** 10 October 2026  
**Status:** User confirms the site works on mobile and laptop and that photo verification looks good. Automated checks, keyboard/reduced-motion checks, source permissions, and the final production-deployment record still need explicit confirmation. A passing CI build alone does not prove every third-party link works in a real browser.

## Automated checks

- [ ] GitHub Actions passes ESLint.
- [ ] GitHub Actions passes TypeScript (`npx tsc --noEmit`).
- [ ] GitHub Actions completes the Next.js production build.
- [ ] Review any dependency/install warnings; do not apply forceful dependency upgrades without testing.

## Photo and content audit

- [x] User-confirmed photo verification across the site; retain labeled fallbacks because remote hosts can still change.
- [ ] Confirm each photo depicts the named venue/branch, or clearly label it as representative dish photography.
- [ ] Replace duplicated ngohiong imagery with distinct, branch-specific images if verified images are available.
- [ ] Confirm image source, attribution, and reuse permission; prefer owned/licensed files over third-party hotlinks.
- [ ] Confirm venue names, branch addresses, hours, and dish descriptions against current primary or reliable sources.
- [ ] Keep uncertain details qualified and include a last-reviewed date; never imply hours are guaranteed.

## Browser and mobile checks

- [x] User-confirmed the site works on laptop; detailed keyboard, console, and external-link checks remain below.
- [x] User-confirmed the site works on mobile; detailed narrow-viewport and accessibility checks remain below.
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
