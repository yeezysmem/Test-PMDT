import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
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
        main: "#F42C3C",
        contrastText: "#fff",
        secondaryBorder: "1px solid #444",
      },
      secondaryText: {
          main: "#5B5B5B"
      },
      checkbox: {
          main: "#F42C3C"
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
      
      MuiSwitch: {
        switchBase: {
          // Controls default (unchecked) color for the thumb
          color: "#5B5B5B"
        },
        colorSecondary: {
         
          "&$checked": {
            // Controls checked color for the thumb
            color: "#000046"
          }
        },
        thumb: {
          marginTop:3,
          width: 14,
          height: 14,
        },
        track: {
          width:28,
          // Controls default (unchecked) color for the track
          opacity: 0.9,
          backgroundColor: "#EAEAEA",
          "$checked$checked + &": {
            // Controls checked color for the track
            opacity: 0.7,
            backgroundColor: "#E5E5FF"
          }
        }
      },
      MuiCheckbox: {
        colorSecondary: {
          color:"#FBC53C",
          "&:hover": {
            color: "#FBC53C"
          },
          "&$checked": {
            color: "#FBC53C",
            
        }
      },
    },
    
      MuiCssBaseline: {
        "@global": {
          ".MuiAccordionSummary-root": {
            padding:"0 !important",
            margin:"0 !important",
           
           
          },
          ".MuiAccordionSummary-content": {
            margin:"0 !important",
            
          },
          ".Mui-expanded": {
            margin:"0 !important"
          },
          ".MuiToggleButton-root": {
            borderRadius: 8,
            border:"1px solid #000046 !important",
            color:"#000046 !important", 
            textTransform:"capitalize !important",
            fontSize:14,
           "&.Mui-selected": {
              background:"#000046 !important",
              color:"#fff !important", 
              
           },

          },
          ".MuiInput-input": {
            color:"#fff !important"
          },
          ".MuiInput-root": {
            "&:after": {
              border:"none !important"
            },
            "&:before": {
              border:"none !important"
            }
          },
          ".Mui-selected": {
            background:"#000046"
          },
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