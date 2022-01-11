import React from "react";
import { Form } from "./Form";
import { Welcome } from "./Welcome";
import { Private } from "PrivateScreen";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#248e6b",
    },
    secondary: {
      main: "#cb3365",
    },
  },
  typography: {
    fontFamily: "Fira Code",
  },
});

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Welcome />
      <Form />
      <Private />
    </ThemeProvider>
  );
};
