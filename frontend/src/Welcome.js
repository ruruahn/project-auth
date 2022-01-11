import React from "react";

// MUI components import
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

export const Welcome = () => {
  //   const onButtonClick = (e) => {
  //     e.preventDefault();
  //     if (newThought === "") {
  //       setAlertShown("Oops , you forgot to fill your credentials.");
  //     } else if (newThought.length <= 5) {
  //       setAlertShown("Your credentials should be between 5 and 10 characters long.");
  //     } else {
  //       onFormSubmit();
  //     }
  //   };

  return (
    <div className="grid">
      <Box className="card" sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <CardContent>
            <form className="welcome-container">
              <label className="new-label" htmlFor="newThought">
                Please&nbsp;
                <span className="highlight" aria-label="decoration">
                  log in
                </span>
                &nbsp;or&nbsp;
                <span className="highlight" aria-label="decoration">
                  sign up
                </span>
                .
              </label>
              <CardActions>
                <div className="move-btn">
                  <Button type="submit" variant="contained" style={{ letterSpacing: 2, fontWeight: "light", marginRight: 10 }}>
                    log in
                  </Button>
                  <Button type="submit" variant="contained" style={{ letterSpacing: 2, fontWeight: "light" }}>
                    Sign up
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
