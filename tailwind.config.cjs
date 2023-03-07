/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // colors: {
    //   transparent: "transparent",
    //   current: "currentColor",
    //   white: "#ffffff",
    //   navcol: "#659DBD",
    // },
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
    fontFamily: {
      signature: ["Cherish"],
      signature2: ["Splash"],
      signature3: ["Qwigley"],
      signature4: ["Water Brush"],
      signature5: ["Gajraj One"],
      signature6: ["Mynerve"],
      signature8: ["Rampart One"],
      signature9: ["Rubik Iso"],
      signature10: ["Mynerve"],
      signature11: ["Indie Flower"],
      signature12: ["Alegreya"],
    },
  },
  plugins: [],
};
