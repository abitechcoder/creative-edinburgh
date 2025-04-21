import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        SkyBlue: "#C3EBFA",
        SkyBlueLight: "#EDF9FD",
        PurpleDeep: "#CFCEFF",
        PurpleDeepLight: "#F1F0FF",
        YellowDeep: "#FAE27C",
        YellowLight: "#FEFCE8",
        primary: "#f0ae1e",
        secondary: "#7b479c",
        tertiary: "#1CA1C8",
      },
    },
  },
  plugins: [],
};
export default config;
