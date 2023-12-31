import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        lightTheme: {
          primary: "#d400ff",
          secondary: "#f32c00",
          accent: "#367800",
          neutral: "#0e0516",
          "base-100": "#fff2f0", // Not used because a different method is used to add a dark mode
          info: "#00a5ff",
          success: "#009326",
          warning: "#a94d00",
          error: "#ff6e76",
          body: {
            "backfround-colour": "#e3e6e6", // Thus way we I can asss a dark theme with different colours
          }
        },
      },
    ],
  },
}
export default config
