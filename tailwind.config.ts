import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#06080f",
        panel: "#0d111d",
        text: "#f7f8fb",
        muted: "#99a3b8",
        accent: "#74a8ff"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(0,0,0,0.45)",
        glass: "0 8px 30px rgba(0,0,0,0.3)"
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(circle at 20% 20%, rgba(111, 145, 255, 0.28), transparent 45%), radial-gradient(circle at 80% 0%, rgba(172, 119, 255, 0.18), transparent 40%), linear-gradient(180deg, #070b16 0%, #06080f 60%)"
      }
    }
  },
  plugins: []
};

export default config;
