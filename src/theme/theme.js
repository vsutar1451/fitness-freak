import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#D4AF37", // Gold
      red: "#D62828"
    },


    secondary: {
      main: "#ffffff",
    },

    background: {
      default: "#0A0A0A",
      paper: "#171717",
    },

    text: {
      primary: "#ffffff",
      secondary: "#B0B0B0",
    },
  },

  typography: {
    fontFamily: "Poppins, sans-serif",

    h1: {
      fontWeight: 700,
    },

    h2: {
      fontWeight: 700,
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
});

export default theme;