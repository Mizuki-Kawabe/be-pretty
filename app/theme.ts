import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles'

export const theme = (options: ThemeOptions = {}) => {
  return createMuiTheme({
    overrides: {
      // Buttonサイズをカスタム
      MuiButton: {
        iconSizeSmall: {
          '& > *:first-child': {
            fontSize: 10
          }
        },
        iconSizeMedium: {
          '& > *:first-child': {
            fontSize: 20
          }
        },
        iconSizeLarge: {
          '& > *:first-child': {
            fontSize: 25
          }
        }
      }
    },
    // Typographyをカスタム
    typography: {
      fontFamily: "'Noto Sans JP', sans-serif;",
      h1: {
        fontSize: 24,
        fontWeight: 700
      },
      h2: {
        fontSize: 24,
        fontWeight: 700
      },
     ...
    },
    // パレットを設定
    palette: {
      primary: {
        main: 'green'
      },
      secondary: {
        main: 'blue'
      },
      text: {
        primary: COLORS.textBlack,
        secondary: COLORS.textGray
      }
    },
    // その他
  });
};
 
export default theme;