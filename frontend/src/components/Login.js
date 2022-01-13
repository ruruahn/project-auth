import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, batch } from "react-redux";
import { useNavigate } from "react-router-dom";

// MUI components import
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Input from "@mui/material/Input";
import { Radio } from "@mui/material";

import { API_URL } from "../utils/constants";
import user from "../reducers/user";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alertShown, setAlertShown] = useState("");
  const [mode, setMode] = useState("signup");

  const accessToken = useSelector((store) => store.user.accessToken);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    setUsername("");
    setPassword("");
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    };

    fetch(API_URL(mode), options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          batch(() => {
            dispatch(user.actions.setUserId(data.response.userId));
            dispatch(user.actions.setUsername(data.response.username));
            dispatch(user.actions.setAccessToken(data.response.accessToken));
            dispatch(user.actions.setError(null));
          });
        } else {
          batch(() => {
            dispatch(user.actions.setUserId(null));
            dispatch(user.actions.setUsername(null));
            dispatch(user.actions.setAccessToken(null));
            dispatch(user.actions.setError(data.response));
          });
        }
      });
  };

  const onButtonClick = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      setAlertShown("Oops , you forgot to fill your credentials.");
    } else if (password.length < 5) {
      setAlertShown("Your password should be at least 5 characters long.");
    } else {
      onFormSubmit(e);
    }
  };

  return (
    <div className="grid ">
      {/* <div>
        <Link className="back-link" to="/">
          To '/' !
        </Link>
      </div> */}
      <Box className="card" sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <CardContent>
            <div className="label-wrapper">
              <div className="tag-wrapper">
                <label className="new-label" htmlFor="signup">
                  Signup
                </label>
                <Radio inputProps={{ "aria-label": "signup" }} id="signup" type="radio" checked={mode === "signup"} onChange={() => setMode("signup")} />
              </div>
              <div className="tag-wrapper">
                <label className="new-label" htmlFor="signin">
                  Signin
                </label>
                <Radio
                  inputProps={{ "aria-label": "signin" }}
                  className="credentials"
                  id="signin"
                  type="radio"
                  checked={mode === "signin"}
                  onChange={() => setMode("signin")}
                />
              </div>
            </div>
            <form className="container" onSubmit={onFormSubmit}>
              <label className="new-label" htmlFor="username">
                Username
              </label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ fontSize: 16, color: username.length < 2 ? "#cb3365" : "inherit" }}
              />
              <label className="new-label" htmlFor="password">
                Password
              </label>
              <Input
                className="credentials"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ fontSize: 16, color: password.length < 5 ? "#cb3365" : "inherit" }}
              />
              <CardActions>
                <Button
                  onClick={onButtonClick}
                  className="move-btn"
                  type="submit"
                  variant="contained"
                  style={{ letterSpacing: 2, fontWeight: "light", marginLeft: -8 }}
                >
                  Submit
                </Button>
              </CardActions>
              {alertShown !== "" && (
                <div>
                  <Alert severity="error">{alertShown}</Alert>
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Login;
