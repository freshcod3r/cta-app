// External URL constants. Centralized so a single rename (custom domain
// flip, GitHub handle change, etc.) updates every screen at once.
//
// PRIVACY_URL points at the canonical privacy policy shipped by the
// CTA Worker (CTA-34, commit adbdec1). Treat it as the authoritative
// surface; mobile About has a user-friendly summary, but the legal
// document is the worker route.
export const WEB_URL = "https://congresstradealerts.com";
export const PRIVACY_URL = "https://congresstradealerts.com/privacy";
export const GITHUB_URL = "https://github.com/freshcod3r/cta-app";
