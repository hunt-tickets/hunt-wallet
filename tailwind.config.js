const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Hunt Tickets Brand Colors
        'hunt-bg': '#0a0a0a',
        'hunt-glass': 'rgba(255, 255, 255, 0.03)',
        'hunt-border': 'rgba(255, 255, 255, 0.08)',
        'hunt-text-primary': '#ffffff',
        'hunt-text-secondary': 'rgba(255, 255, 255, 0.6)',
        'hunt-text-tertiary': 'rgba(255, 255, 255, 0.8)',
        'hunt-blue': '#3b82f6',
        'hunt-green': '#10b981',
        'hunt-purple': '#8b5cf6',
        'hunt-yellow': '#fbbf24',
        'hunt-red': '#ef4444',
      },
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'wallet': '0 20px 40px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}