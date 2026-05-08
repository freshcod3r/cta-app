/** @type {import('tailwindcss').Config} */
//
// Brand tokens locked in CTA-App-1-4. Hex values mirror the web app's
// CSS custom properties (verified against https://congresstradealerts.com
// inline `:root` block):
//   cta-accent  <- --color-accent-brand   indigo / brand primary
//   cta-buy     <- --color-gain           emerald / purchases / gains
//   cta-sell    <- --color-loss           red / sells / losses
//   cta-late    <- --color-accent-warn    amber / late-filing warnings
//   cta-dem     <- --color-dem            blue / Democratic party badge
//   cta-rep     <- --color-rep            red / Republican party badge
//
// Any later surface (Feed in CTA-App-1-5, etc.) inherits via these
// utility classes (e.g. `bg-cta-buy`, `text-cta-late`).
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./features/**/*.{js,jsx,ts,tsx}",
    "./lib/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "cta-accent": "#6366f1",
        "cta-buy": "#10b981",
        "cta-sell": "#ef4444",
        "cta-late": "#f59e0b",
        "cta-dem": "#3b82f6",
        "cta-rep": "#ef4444",
      },
    },
  },
  plugins: [],
};
