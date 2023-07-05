/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      lgg: "1200px",
      xl: "1440px",
      xxl: "1640px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(from-yellow-400   to-pink-500)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        borderColor: "#DBDBDB",
        Typography: "#787486",
        Heading: "#0D062D",
        redTagColor: "#D8727D",
        orangeTagColor: "#D58D49",
        greenTagColor: "#68B266",
        blueColor: "#5030E5",
        blubColor: "#FBCB18",
        mobileBg: "#7AC555",
        wesbiteBg: "#FFA500",
        designBg: "#E4CCFD",
        wireframesBg: "#76A5EA",
        hoverBg: "#5030E5",
        blubBgColor: "#F5F5F5",
        PLUS2IMAGE_BG: "#F4D7DA",
        PLUS2IMAGE_TEXT: "#D25B68",
        donebg: "#8BC48A",
        bulbGradient: "rgba(251, 203, 24, 0.3)",
      },
    },
  },
  plugins: [],
}
