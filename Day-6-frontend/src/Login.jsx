import React, { useState } from "react";
import "./css/Login.css";
import usr from "./images/icons8-user.gif";
import passg from "./images/icons8-password.gif";
import logo from "./images/logo.jpg";
import penq from "./images/penguin1.mp4";
import { useDispatch } from "react-redux";
import { setUsername } from "./UserSlice";
import { useNavigate, Link } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";
import axios from "axios";

const Login = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [passl, setPass] = useState("");
  const [displayPenq, setDisplayPenq] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [registrationError, setRegistrationError] = useState("success");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handlePassChange = (event) => {
    setPass(event.target.value);
  };

  const onVerifyCredentials = async (e) => {
    e.preventDefault();
    try {
      console.log(inputValue);
      console.log(passl);
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/authenticate",
        {
          name: inputValue,
          password: passl,
        }
      );

      console.log("Registration successful");
      console.log(response.data);
      setSnackbarSeverity("success");
      setSnackbarMessage("Successfully logged in!");
      setSnackbarOpen(true);
      setTimeout(() => {
        dispatch(setUsername(inputValue));
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("uname", inputValue);
        console.log(localStorage.getItem("token"));
        nav("/studash");
      }, 1000);

      setInputValue("");

      setPass("");
    } catch (error) {
      console.error("Login failed");
      console.error(error); // Optional: Log the error for debugging purposes
      setSnackbarSeverity("error");
      setSnackbarMessage("Please fill Valid credentials!");
      setSnackbarOpen(true);
      setDisplayPenq(true);
      setTimeout(() => {
        setDisplayPenq(false);
      }, 5000);
      // Display the registration error message
      setRegistrationError("Login failed. Please try again.");
    }
    if (inputValue === "" && passl === "") {
      setSnackbarSeverity("error");
      setSnackbarMessage("Please fill in the credentials!");
      setSnackbarOpen(true);
      setDisplayPenq(true);
      setTimeout(() => {
        setDisplayPenq(false);
      }, 5000);
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <div className="login-container">
      <div className="login">
        <form>
          <div>
            <img
              id="logoim"
              src={logo}
              height={70}
              width={300}
              alt="Username"
            />
          </div>
          {displayPenq && (
            <div className="penq">
              <video autoPlay id="pengim" src={penq} height={100} width={100} />
              <p id="instr">{snackbarMessage}</p>
            </div>
          )}
          <div className="form">
            <div className="username">
              <img id="im" src={usr} height={30} width={30} alt="Usrname" />
              <input
                type="text"
                id="usrnm"
                required
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Username"
              />
            </div>
            <div className="passw">
              <img src={passg} height={30} width={30} alt="password" />
              <input
                type="password"
                placeholder="Password"
                required
                onChange={handlePassChange}
                value={passl}
              />
            </div>
            <button className="logbutton" onClick={onVerifyCredentials}>
              <p className="logtxt">Login</p>
            </button>
            <Snackbar
              open={snackbarOpen}
              autoHideDuration={3000}
              onClose={handleSnackbarClose}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <Alert
                onClose={handleSnackbarClose}
                severity={snackbarSeverity}
                sx={{ width: "100%" }}
              >
                {snackbarMessage}
              </Alert>
            </Snackbar>
            <br />
            <br />
            <p id="fpass">Forgot Password?</p>
            <div>
              <p id="acc">
                Don't have an account? <Link to="/signup">Sign up</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
