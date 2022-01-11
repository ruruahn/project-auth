import React from "react";

// MUI components import
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

export const Private = () => {
  return (
    <div className="grid ">
      <Box className="card" sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <CardContent>
            <div className="container">
              <p className="success">Congrats, you are logged into your private cart!</p>
            </div>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};
