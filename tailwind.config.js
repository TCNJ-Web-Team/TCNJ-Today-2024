/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xl: "1920px", // Custom size for extra-large screens
        lg: "1250px", // Custom size for large screens
        betweenLgMd: { min: "900px", max: "1250px" },

        md: "900px", // Custom size for medium screens
        sm: "550px", // Custom size for small screens
        // xs: "430px", // Custom size for extra-small screens
      },
      boxShadow: {
        "3xl": "5px 5px 10px rgba(0, 0, 0, 0.16)",
      },
      backgroundImage: {
        yellowWhiteGradient: "linear-gradient(#FDD700 90%, white 90%)",
      },

      fontFamily: {
        bitter: ["Bitter", ...defaultTheme.fontFamily.sans],
        domine: ["Domine", ...defaultTheme.fontFamily.sans],
        chunkfive: ["Alfa Slab One", ...defaultTheme.fontFamily.sans],
        alfaslab: ["Alfa Slab One", ...defaultTheme.fontFamily.sans],
        opensans: ["Open Sans", ...defaultTheme.fontFamily.sans],
        interstate: ["Interstate-Condensed", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "custom-16.25": "4.063rem",
      },
      colors: {
        transparent: "transparent",
        // TEXT AND BG
        tcnjyellow: "#FDD700",
        tcnjblue: "#293F6F",
        // BG COLORS
        lightgrey: "#F1F1F1",
        // darkgrey: "#C8DAE6",
        // TEXT COLORS
        darkgrey: "#2E2E2E",
        primarylinkblue: "#33739F",
        darklinkblue: "#2B6388",
        lightlinkblue: "#9BD0F3",
      },
    },
  },
  plugins: [],
};
