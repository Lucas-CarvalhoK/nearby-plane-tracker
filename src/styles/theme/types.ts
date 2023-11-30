export type ThemeProps = {
    colors: {
      primary_50: string;
      primary_100: string;
      secondary_25: string;
      secondary_50: string;
      secondary_75: string;
      tertiary_100: string;
      background_90: string;
      background_100: string;
      text_color: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
    };
    fontFamily: {
      Inter: string;
    },
    fontWeights: {
      light: string;
      regular: string;
      semiBold: string;
      bold: string;
    },
    fontSizes: {
      xs: string,
      sm: string,
      md: string,
      lg: string,
      xl: string,
      "2xl": string,
      "3xl": string,
      "4xl": string,
      "5xl": string,
      "6xl": string,
      "7xl": string,
    },
    lineHeights: {
      xs: string,
      sm: string,
      md: string,
      lg: string,
      xl: string,
      "2xl": string,
      "3xl": string,
      "4xl": string,
      "5xl": string,
      "6xl": string,
      "7xl": string,
    }
  };