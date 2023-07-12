import React, { useState } from "react";
import "./css/Login.css";
import usr from "./images/icons8-user.gif";
import passg from "./images/icons8-password.gif";
import logo from "./images/logo.jpg";
import penq from "./images/penguin1.mp4";
import { useDispatch } from "react-redux";
import { setUsername } from "./UserSlice";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [passl, setPass] = useState("");
  const [displayPenq, setDisplayPenq] = useState(false);
  const [credentialMessage, setMessage] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handlePassChange = (event) => {
    setPass(event.target.value);
  };

  const onVerifyCredentials = (e) => {
    e.preventDefault();
    if (inputValue === "" && passl === "") {
      console.log(credentialMessage);
      setMessage("Please Fill The Credentials !");
      setDisplayPenq(true);
      setTimeout(() => {
        setDisplayPenq(false);
      }, 5000);
    } else if (passl !== "cse-a") {
      setMessage("Invalid Credentials to Login");
      setDisplayPenq(true);
      setTimeout(() => {
        setDisplayPenq(false);
      }, 5000);
    } else {
      dispatch(setUsername(inputValue));
      nav("/studash");
    }
  };
  return (
    <div className="container">
      <div className="login">
        <form>
          <div>
            <img
              id="logoim"
              src={logo}
              height={125}
              width={150}
              alt="Username"
            />
          </div>
          {displayPenq && (
            <div className="penq">
              <video autoPlay id="pengim" src={penq} height={100} width={100} />
              {/* <img id="pengim" src={penq} height={100} width={100} /> */}
              <p id="instr">{credentialMessage}</p>
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
            <br />
            <br />
            <p id="fpass">Forgot Password?</p>
            <div>
              <Link to="/signup">
                <p id="acc">Don't have an account? Sign up</p>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
