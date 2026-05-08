# Screenshots brief - CTA-App-1-10

Capture sequence for App Store Connect + Google Play Console listings.
Joe-side asset work; this brief locks the sequence + caption text so
captures are reproducible.

## Required device sizes

### iOS

- **6.7" iPhone (1290 x 2796 portrait)** -- Apple auto-scales this
  master down to smaller iOS sizes for the listing. ONE master capture
  per shot below covers all current iOS device sizes.
- Up to 10 screenshots per device size, per language. We use 8 below.

### Android

- **Phone (1080 x 1920 portrait minimum, 16:9 long edge)** -- 2 to 8
  screenshots accepted; we use the same 8 as iOS.
- **Feature graphic (1024 x 500)** -- separate asset, see
  feature-graphic-brief.md.

## Theme strategy

Capture each shot in BOTH dark mode AND light mode. Pick the higher-
contrast variant per shot for the listing -- darker UI usually wins on
the storefront thumbnail grid because the storefront background is
white.

## Capture sequence (8 screenshots)

| # | Surface | Caption overlay (Apple indexes these per 2025 algorithm) |
| --- | --- | --- |
| 1 | Feed view, active alert badge visible | "Every congressional stock trade. Live." |
| 2 | Trade detail with politician info + "Subscribe to alerts" pill (unfilled state) | "Subscribe to any member." |
| 3 | Same Trade detail as #2 but post-tap: pill in filled / subscribed state | "Push alerts the moment they file." |
| 4 | Settings screen with push toggle in the ON position | "You control what you hear about." |
| 5 | Methodology page mid-scroll (shows data sources + 30-min refresh cadence) | "See exactly where the data comes from." |
| 6 | About page showing privacy stance + GitHub open-source link | "No accounts. No tracking. Open source." |
| 7 | Trade detail with LATE filing chip clearly visible | "Late filings flagged automatically." |
| 8 | Drawer open showing full navigation surface | "Built for journalists and civic watchers." |

## Caption typography rules

- Caption sits above the screenshot frame in the marketing layout (NOT
  rendered inside the app screenshot itself).
- Sans-serif, weight 600+, contrast >= 4.5:1 against the caption-strip
  background (matches WCAG AA minimum).
- Brand color cta-accent (#6366f1) is the accent; default to white text
  on a dark accent strip for the caption-strip background, OR dark
  text on white if light theme used for that shot.

## Capture-time checklist

- [ ] App is on production build (NOT a debug build with dev banners).
- [ ] Status bar shows full signal + full battery + a clean time
  (9:41 AM is Apple convention; Play has no convention -- pick a
  consistent time across all 8 shots).
- [ ] No personally identifying data visible (no Joe's name in any
  test data; use the live feed which is all public-record names).
- [ ] Push notification on shot #3 is the sample app's own push, NOT
  someone else's notification leaking through.
- [ ] Drawer shot (#8) shows the actual navigation surface, not a
  half-open swipe state.

## Output naming

Save originals at master resolution as:
```
store/app-store/screenshots/
  01-feed-dark.png       (or -light if that variant won)
  02-trade-detail-unsubscribed-dark.png
  03-trade-detail-subscribed-dark.png
  04-settings-dark.png
  05-methodology-dark.png
  06-about-dark.png
  07-late-filing-chip-dark.png
  08-drawer-dark.png

store/google-play/screenshots/
  (same names; same theme choices unless Play's white storefront
   forces a different per-shot decision)
```
