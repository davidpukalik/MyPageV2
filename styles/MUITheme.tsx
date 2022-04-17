import { createTheme } from "@mui/material/styles";

const MUITheme = createTheme({
  palette: {
    primary: {
      main: "#FF922B",
      dark: "#d87519",
      light: "#ff922b1a",
    },
    secondary: {
      main: "#fff",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label": {
            color: "#fff",
          },
          "&:hover label": {
            color: "#FF922B",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              color: "#fff",
              borderColor: "#fff",
            },
            "&:hover fieldset": {
              borderColor: "#FF922B",
            },
          },
          "& .MuiInputBase-root": {
            color: "#fff",
          },
          "& .MuiInputBase-root::before": {
            borderBottom: "1px solid #fff",
          },
          "&:hover .MuiInputBase-root::before": {
            borderBottom: "1px solid #ff922bfb",
          },
        },
      },
    },
  },
});

export default MUITheme;
