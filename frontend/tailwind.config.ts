import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        scroll: "scroll 20s linear infinite" //Scrolling Animation
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(100%)' }, // Start off-screen to the right
          '100%': { transform: 'translateX(-100%)' }, // Move off-screen to the left
        },
      },
      scrollBehavior: {
        smooth: 'smooth',
      },
    },
  },
  plugins: [],
} satisfies Config;
