import React from "react";
import logo from "./logo.svg";
import "./Homepage.css";
import { Button, Grid } from "@mui/material";

function Homepage() {
  const [message, setMessage] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [colorMessageButton, setColorMessageButton] = React.useState("primary");
  const [colorPasswordButton, setColorPasswordButton] =
    React.useState("primary");
  const api_url = "http://localhost:3001";

  const messageFunc = async () => {
    const result = await fetch(api_url + "/api", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((err) => {
        setMessage("Backend ist NICHT erreichbar");
        setColorMessageButton("error");
      });
    if (result?.message) {
      setColorMessageButton("success");
      setMessage(result.message);
    }
  };

  const passwordFunc = async () => {
    const result = await fetch(api_url + "/api/password", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((err) => {
        setPassword("Kein Password geliefert o. Backend nicht erreichbar");
        setColorPasswordButton("error");
      });
    if (result?.message) {
      setColorPasswordButton("success");
      setPassword(result.message);
    } else {
      setPassword("Kein Password geliefert");
      setColorPasswordButton("error");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Grid>
            <Button
              variant="contained"
              onClick={messageFunc}
              color={colorMessageButton}
            >
              test backend connection
            </Button>
          </Grid>
          {message ? message : message}
        </div>
        <div>
          <Grid>
            <Button
              variant="contained"
              onClick={passwordFunc}
              color={colorPasswordButton}
            >
              get Password
            </Button>
          </Grid>
          {password ? password : password}
        </div>
      </header>
    </div>
  );
}

export default Homepage;
