import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },

  palette: {
    primary: {
      main: "#D34457",
      dark: "#E4484E",
    },
    secondary: {
      main: "#09090b",
    },
 
  },
});

export default theme;
