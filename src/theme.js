import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#000046",
        contrastText: "#fff",
        primaryBorder: "1px solid #000046"
      },
      white: {
        main: "#fff",
      },
      secondary: {
        main: "#262662",
        contrastText: "#fff",
        secondaryBorder: "1px solid #444",
      },
      secondaryText: {
          main: "#5B5B5B"
      },
      checkbox: {
          main: "#BC53C"
      }
    },
  
    typography: {
      HtmlFontSize: 14,
      fontFamily: "Montserrat",
      fontSize: 14,
      fontWeightRegular: "400",
      fontWeightMedium: "500",
      fontWeightSemiBold: "600",
      fontWeightBold: "700",
      fontWeightExtraBold: "800",
      h1: {
        fontFamily: "Montserrat",
        fontWeight: "700",
        color: "#202020",
      },
      h2: {
        fontFamily: "Montserrat",
        fontWeight: "700",
        color: "#202020",
      },
      h3: {
        fontFamily: "Montserrat",
        fontSize: "36px",
        fontWeight: "600",
        color: "#202020",
      },
      h4: {
        fontFamily: "Montserrat",
        fontSize: "24px",
        fontWeight: "500",
        color: "#202020",
      },
      h5: {
        fontFamily: "Montserrat",
        fontSize: "20px",
        fontWeight: "500",
        color: "#202020",
      },
      h6: {
        fontFamily: "Montserrat",
        fontSize: "1.375rem",
        fontWeight: "500",
        color: "#202020",
      },
      body1: {
        fontFamily: "Montserrat",
        fontSize: "16px",
        fontWeight: "400",
        color: "#202020",
      },
      body2: {
        fontFamily: "Montserrat",
        fontSize: "14px",
        fontWeight: "400",
        color: "#444444",
      },
      subtitle1: {
        fontFamily: "Montserrat",
        fontSize: "12px",
        fontWeight: "400",
        color: "#A6A6A6",
      },
      subtitle2: {
        fontFamily: "Montserrat",
        fontSize: "16px",
        fontWeight: "400",
        color: "#5B5B5B",
      },
    },
    spacing: 6,
    shape: {
      borderRadius: 0,
    },
    a: {
      hover: "#EE5F22",
    },
    shadows: ["none"],
  
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "@font-face": "Montserrat",
          html: {
            boxSizing: "border-box",
          },
          body: {
            backgroundColor: "#FFF",
            fontFamily: "Montserrat",
            fontWeight: "400",
            fontSize: 16,
            color: "#202020",
            overflowX: "hidden",
          },
  
          a: {
            textDecoration: "none",
          },
  
          li: {
            listStyle: "none",
          },
          ul: {
            margin: 0,
            padding: 0,
          },
        },
      },
  
      MuiButton: {
        root: {
          minWidth: 0,
        },
        text: {
          color: "white",
        },
      },
    },
  });
  
  export default theme;