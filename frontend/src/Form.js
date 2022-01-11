import React, { useState } from "react";

// MUI components import
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Input from "@mui/material/Input";

// import { API_URL } from "../utils/links";

export const Form = ({ thoughts, setThoughts }) => {
  const [newThought, setNewThought] = useState("");
  const [alertShown, setAlertShown] = useState("");
  const API_URL = "https://mary-snopok-auth-project.herokuapp.com";

  const onButtonClick = (e) => {
    e.preventDefault();
    if (newThought === "") {
      setAlertShown("Oops , you forgot to fill your credentials.");
    } else if (newThought.length <= 5) {
      setAlertShown("Your credentials should be between 5 and 10 characters long.");
    } else {
      onFormSubmit();
    }
  };

  const onFormSubmit = () => {
    setNewThought("");
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: newThought }),
    };
    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => setThoughts([data, ...thoughts]));
  };

  return (
    <div className="grid ">
      <Box className="card" sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <CardContent>
            <form className="container" onSubmit={onButtonClick}>
              <label className="new-label" htmlFor="newThought">
                Please add your details.
              </label>
              <Input
                className="credentials"
                id="username"
                type="text"
                placeholder="username"
                value={newThought}
                onChange={(e) => {
                  setAlertShown("");
                  setNewThought(e.target.value);
                }}
                style={{ fontSize: 16, color: newThought.length < 5 || newThought.length > 10 ? "#cb3365" : "inherit" }}
              />
              <Input
                className="credentials"
                id="newThought"
                type="text"
                placeholder="password"
                value={newThought}
                onChange={(e) => {
                  setAlertShown("");
                  setNewThought(e.target.value);
                }}
                style={{ fontSize: 16, color: newThought.length < 5 || newThought.length > 10 ? "#cb3365" : "inherit" }}
              />
              {alertShown !== "" && (
                <div style={{ marginLeft: -2 }}>
                  <Alert severity="error">{alertShown}</Alert>
                </div>
              )}
              <p className="symbols-counter" style={{ color: newThought.length < 5 || newThought.length > 10 ? "#cb3365" : "inherit" }}>
                {newThought.length} out of min 5 and max 10 characters
              </p>
              <CardActions>
                <div className="move-btn">
                  <Button type="submit" variant="contained" style={{ letterSpacing: 2, fontWeight: "light" }}>
                    Submit
                  </Button>
                </div>
              </CardActions>
            </form>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};
