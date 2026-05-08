# Store-listing assets

Marketing copy and screenshot frames for App Store Connect (iOS) and
Google Play Console (Android). Scaffolded by CTA-App-1-9 (engineering
surface only). Marketing copy + screenshots are CTA-App-1-10 scope and
remain empty until ASO research outputs are folded into a copy ticket.

## Layout

```
store/
  README.md                          (this file)
  app-store/
    metadata.txt                     (App Store Connect copy)
    screenshots/                     (device-framed PNGs)
  google-play/
    metadata.txt                     (Play Console copy)
    screenshots/                     (device-framed PNGs)
```

## Field length limits

### App Store Connect (iOS)

| Field | Max length | Notes |
| --- | --- | --- |
| Name | 30 chars | App name as shown on the home screen / store listing. |
| Subtitle | 30 chars | One-line tagline directly under the name. |
| Promotional text | 170 chars | Editable without resubmitting; use for time-sensitive copy. |
| Description | 4000 chars | Full app description. |
| Keywords | 100 chars | Comma-separated; counts against the 100-char total. |
| Support URL | -- | Required. |
| Marketing URL | -- | Optional. |
| Privacy Policy URL | -- | Required. Use `https://congresstradealerts.com/privacy`. |

### Google Play Console (Android)

| Field | Max length | Notes |
| --- | --- | --- |
| App name | 30 chars | Title as shown on the Play Store. |
| Short description | 80 chars | Shown above the screenshots in the listing. |
| Full description | 4000 chars | Below-the-fold description. |
| Privacy Policy URL | -- | Required. Use `https://congresstradealerts.com/privacy`. |
| Support email | -- | Required and publicly displayed. |

## Screenshot dimensions

### iOS (required: at least one set)

- 6.7" iPhone (1290 x 2796 portrait, 2796 x 1290 landscape)
- 6.5" iPhone (1284 x 2778 or 1242 x 2688)
- 5.5" iPhone (1242 x 2208) -- legacy, no longer required as of 2024 but
  Apple may still request

Per-language: up to 10 screenshots per device size.

### Android

- Phone: at least 2, up to 8. 16:9 or 9:16, 320--3840 px on the long edge.
- Feature graphic: 1024 x 500 PNG/JPG (NOT a screenshot -- a banner).

## Workflow (CTA-App-1-10 will execute)

1. Drop ASO research outputs into chat. Synthesize into draft copy.
2. Fill `metadata.txt` for each store, respecting the per-field char
   limits above.
3. Capture device-framed screenshots from EAS preview/production builds
   on real hardware (iPhone for iOS, Pixel/Samsung for Android).
4. Commit the populated copy + image assets.
5. Submit via `eas submit -p ios` and `eas submit -p android` after
   substituting real credentials into `eas.json` (see
   `submission-instructions.md` at repo root).
