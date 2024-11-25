import { createTheme, ThemeOptions } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "rgb(218, 160, 74)",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#25272d",
      paper: "#2f323a",
    },
  },
  components: {
    MuiTableRow: {
      styleOverrides: {
        root: {
          cursor: "pointer",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          background: "var(--c-gray-800)",
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            background: "var(--c-bg-primary)",
            color: "rgb(237, 234, 232)",
            fontSize: ".875rem",
          },
        },
      ],
    },
  },
};

const caidoTheme = createTheme(themeOptions);
export { caidoTheme };
