/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gray: "#8f8f8f",
        yellowgreen: "#aef666",
        mediumslateblue: "#a566f6",
        mediumspringgreen: "#66f68e",
        dimgray: "#585858",
      },
      spacing: {},
      fontFamily: {
        "studio-pro": "'Studio Pro'",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      "77xl": "96px",
      "13xl": "32px",
      "29xl": "48px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
