/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      baggers: ["var(--font-bangers)"],
      bebas: ["var(--font-bebas)"],
    },
    extend: {
      animation: {
        'loop-scroll': 'loop-scroll 8s linear infinite',
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(300%)' },
        },
      },
      colors: {
        "default-br": "rgba(230, 253, 255, 0.10)",
        ash: "rgba(136, 136, 136, 0.85)",
        "main-white": "#D7D7D7",
        "rare-blue": "rgba(0, 25, 255, 0.60)",
      },
      boxShadow: {
        timeline: "15px 15px 26px 1px rgba(0, 0, 0, 0.27)",
        main: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        social: "9px 12px 17px 0px rgba(0, 0, 0, 0.36)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "default-bg":
          "linear-gradient(248deg, rgba(0, 148, 255, 0.17) 1.52%, rgba(255, 255, 255, 0.00) 96.99%)",
        glass:
          "linear-gradient(240deg, rgba(175, 175, 175, 0.17) 0.22%, rgba(146, 146, 146, 0.07) 88.91%)",
        "dark-black":
          "linear-gradient(241deg, #0F0F0F -36.55%, rgba(19, 19, 19, 0.12) 125.42%)",
        "social-bg":
          " linear-gradient(110deg, rgba(26, 26, 26, 0.70) 0.39%, rgba(0, 0, 0, 0.12) 98.96%)",
      },
    },
  },
  plugins: [  ],
};
