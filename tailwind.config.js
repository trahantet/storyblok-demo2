/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lav: "#E5D4F5",
        sage: "#B1D8B7",
        header: "#4C2D23"
      },
      fontFamily: {
        // 'sans': ['ui-sans-serif', 'system-ui'],
        // 'serif': ['ui-serif', 'Georgia',],
        // 'mono': ['ui-monospace', 'SFMono-Regular'],
        // 'display': ['Oswald', ],
        body: ["var(--font-work-sans)"],
        inter: ["var(--font-inter)"],
        yeseva: ["var(--font-yeseva-one)"],
        sailors: ["var(--font-montserrat)"],
        quicksand: ["var(--font-quicksand)"]
      },
      backgroundSize: {
        '30%': '30%',
        '60%': '60%',
      }
    },
  },
  plugins: [],
  safelist: [
    {
        pattern: /grid-cols-./,
    }
  ],
};
