import React from "react";
// import { Form } from "./Form";
// import { Welcome } from "./Welcome";
// import { Private } from "PrivateScreen";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import Main from "./components/Main";
import Login from "./components/Login";
import NotFound from "./components/NotFound";

import user from "./reducers/user";
import thoughts from "./reducers/thoughts";

const reducer = combineReducers({
  user: user.reducer,
  thoughts: thoughts.reducer,
});

const store = configureStore({ reducer });

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
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
};
