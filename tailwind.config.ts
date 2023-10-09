import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes : {
        scaleIn: {
          "from" : {
            opacity: "0",
          },
          "to" : {
            opacity: "1",
          }
        },
        scaleOut: {
          "from" : {
            opacity: "1",
          },
          "to" : {
            opacity: "0",
          }
        },
      },
      animation: {
        scaleIn: "scaleIn 200ms ease",
        scaleOut: "scaleOut 200ms ease",
      },
      height : {
        "radix-navigation-menu-viewport-width" : "var(--radix-navigation-menu-viewport-width)",
        "radix-navigation-menu-viewport-height" : "var(--radix-navigation-menu-viewport-height)"
      }
    },
  },
  plugins: [
    require("tailwindcss-radix")(),
  ],
} satisfies Config

