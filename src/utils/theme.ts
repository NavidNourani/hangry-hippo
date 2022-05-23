import { ThemeOptions } from "@mui/material";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#919eabfc",
    },
    background: {
      default: "#161c24",
      paper: "#161c24",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "700",
        },
        contained: {
          backgroundColor: "#c93c01",
          color: "#fff",
          ":hover": {
            backgroundColor: "#982d00",
          },
        },
        outlined: {
          color: "#fff",
        },
      },
    },
  },
  typography: {
    allVariants: {
      color: "#fff",
    },
    body1: {},
    caption: {
      color: "#637381",
    },
  },
};
