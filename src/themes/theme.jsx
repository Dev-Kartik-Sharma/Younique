import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#FFFFFF",
    },
    info: {
      main: "#F03023",
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 400,
      md: 900,
      lg: 1400,
    },
  },
});

theme.typography.h1 = {
  fontFamily: "Lato",
  fontWeight: 300,
  fontSize: 64,
  lineHeight: 1.25,
};

theme.typography.h2 = {
  fontFamily: "Lato",
  fontWeight: 300,
  fontSize: 56,
};

theme.typography.h3 = {
  fontFamily: "Lato",
  fontWeight: 900,
  fontSize: 24,
};

theme.typography.subtitle1 = {
  fontFamily: "Lato",
  fontWeight: 400,
  fontSize: 20,
  color: "#444444",
};

theme.typography.subtitle2 = {
  fontFamily: "Lato",
  fontWeight: 400,
  fontSize: 16,
};

export default createTheme(theme);
