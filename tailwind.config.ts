import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        deep: {
          green: "#0f2f1a"
        }
      },
      boxShadow: {
        subtle: "0 10px 40px rgba(0,0,0,0.06)"
      }
    }
  },
  plugins: []
};

export default config;
