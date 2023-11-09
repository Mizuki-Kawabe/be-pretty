"use client";

import { createTheme, ThemeOptions } from "@mui/material";
import { Merriweather } from "next/font/google";
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const theme = createTheme({
  components: {
    // Buttonサイズをカスタム
    MuiButton: {
      styleOverrides: {
        iconSizeSmall: {
          "& > *:first-child": {
            fontSize: 10,
          },
        },
        iconSizeMedium: {
          "& > *:first-child": {
            fontSize: 20,
          },
        },
        iconSizeLarge: {
          "& > *:first-child": {
            fontSize: 25,
          },
        },
      },
    },
  },
  // Typographyをカスタム
  typography: {
    fontFamily: merriweather.style.fontFamily,
    h1: {
      fontSize: 24,
      fontWeight: 700,
    },
    h2: {
      fontSize: 24,
      fontWeight: 700,
    },
    button: {
      textTransform: "none",
    },
  },
  // パレットを設定
  palette: {
    // primary: {
    //   main: "green",
    // },
    // secondary: {
    //   main: "blue",
    // },
    // text: {
    //   primary: COLORS.textBlack,
    //   secondary: COLORS.textGray,
    // },
  },
  // その他
});

export default theme;
