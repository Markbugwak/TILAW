# TILAW image credits

Food photographs are loaded from Wikimedia Commons' static upload CDN using direct file URLs rather than the `Special:FilePath` redirect endpoint. This avoids the redirect endpoint that was returning HTTP 429 errors in development; the images are still hosted by Wikimedia, not bundled locally.

- **Cebu lechon at Mactan-Cebu International Airport (story section)** — Ralffralff, [source](https://commons.wikimedia.org/wiki/File:Lechon_Cebu_(whole)_in_MCIA,_Cebu.jpg), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). No changes made.

- **Lechon Cebu** — Bim24, [source](https://commons.wikimedia.org/wiki/File:Lechon_sa_Cebu.jpg), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). No changes made.
- **Puso / hanging rice** — LadyPinayForever, [source](https://commons.wikimedia.org/wiki/File:Puso_or_Hanging_Rice.jpg), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). No changes made.
- **Ngohiong** — Herbertkikoy, [source](https://commons.wikimedia.org/wiki/File:Ngohiong.jpg), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). No changes made.
- **Kinilaw (shown for the Sutukil dish entry)** — whologwhy, [source](https://commons.wikimedia.org/wiki/File:KINILAW_(Carcar,_Cebu).jpg), [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/). Used as a representative Sutukil-associated seafood dish, not as a photo of the full Sutukil set. No changes made.
- **Otap** — Obsidian Soul, [source](https://commons.wikimedia.org/wiki/File:Otap.jpg), [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/). No changes made.

**Torta sa Argao:** left without a photo because a suitable authentic image with a clearly verified reuse license has not been confirmed. The site displays its neutral photo-verification placeholder instead of using a misleading image.

These direct CDN links reduce reliance on Wikimedia's redirect endpoint, but do not make the files self-hosted. If Wikimedia's image CDN itself rate-limits requests, download the credited files and commit them under `public/images/foods/` to fully self-host them.
