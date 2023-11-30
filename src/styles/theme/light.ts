import { ThemeProps } from "./types";
import { Inter } from "next/font/google";

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  weight: ["100", "400", "600", "700"],
});

const light: ThemeProps = {
  colors: {
    primary_50: "#A727FA",
    primary_100: "#7327BB",
    secondary_25: "#00A3FF",
    secondary_50: "#2253FF",
    secondary_75: "#150185",
    tertiary_100: "#F300F8",
    background_90: "#00001F",
    background_100: "#000000",
    text_color: "#FFFFFF"
  },
  breakpoints: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1280px",
    "2xl": "1536px",
  },
  fontFamily: {
    Inter: inter.style.fontFamily,
  },
  fontWeights: {
    light: "100",
    regular: "400",
    semiBold: "600",
    bold: "700",
  },
  fontSizes: {
    xs: "1.2rem",
    sm: "1.4rem",
    md: "1.6rem",
    lg: "1.8rem",
    xl: "2rem",
    "2xl": "2.4rem",
    "3xl": "2.8rem",
    "4xl": "3.2rem",
    "5xl": "3.6rem",
    "6xl": "4rem",
    "7xl": "4.8rem",
  },
  lineHeights: {
    xs: "1.5rem",
    sm: "1.7rem",
    md: "1.9rem",
    lg: "2.2rem",
    xl: "2.4rem",
    "2xl": "2.9rem",
    "3xl": "3.4rem",
    "4xl": "3.9rem",
    "5xl": "4.4rem",
    "6xl": "4.8rem",
    "7xl": "5.8rem",
  },
};

export default light