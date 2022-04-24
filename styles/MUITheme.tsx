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
          "&:hover .MuiInputLabel-root": {
            color: "#FF922B",
          },
          "&:hover .MuiInputLabel-root.Mui-error": {
            color: "#d32f2f",
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
          "& .MuiOutlinedInput-root.Mui-error": {
            "&:hover fieldset": {
              borderColor: "#d32f2f",
            },
          },
          "& .MuiInputBase-root": {
            color: "#fff",
          },
          "& .MuiInputBase-root::before": {
            borderBottom: "1px solid #fff",
          },
          "&:hover .MuiInputBase-root::before": {
            borderColor: "#FF922B !important",
          },
        },
      },
    },
  },
});

export default MUITheme;
