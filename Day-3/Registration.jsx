import React, { useState } from "react";
import "../src/css/Registration.css";
import maillogo from "../src/images/email.gif";
import aclogo from "../src/images/regside.jpg";
import aclogo2 from "../src/images/regside2.png";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [passwd, setPassword] = useState("");
  const [confpasswd, setConfPassword] = useState("");
  const [gender, setGender] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [schoolName, setSchoolName] = useState("");

  const checkPass = (e) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(passwd)) {
      window.alert(
        "Password should contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }

    if (passwd !== confpasswd) {
      window.alert("Passwords do not match.");
      return;
    } else {
      window.alert("Registration successfull");
      return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here
    console.log("Registration form submitted!");
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", passwd);
    console.log("Gender:", gender);
    console.log("State:", state);
    console.log("City:", city);
    console.log("Phone Number:", phoneNumber);
    console.log("School Name:", schoolName);
  };

  return (
    <div className="registration-container">
      <div className="registration-form">
        <div className="head-reg">
          <h2>Registration Form</h2>
        </div>
        <div className="main-form">
          <div className="contents-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group-nm/">
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                  required
                />
                <br></br>
              </div>

              {/* </div> */}
              <div className="form-group">
                {/* <img src={maillogo} id="maillogo"></img> */}
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <select
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                >
                  <option value=""> --Select-- </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="schoolName"
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                  placeholder="Enter the name of your school or institution"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="passw"
                  value={passwd}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="New Password"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="passw"
                  value={confpasswd}
                  onChange={(e) => setConfPassword(e.target.value)}
                  placeholder="Confirm New Password"
                  required
                />
              </div>

              <button id="reg-button" type="submit" onClick={checkPass}>
                Register
              </button>
            </form>
          </div>
          <div className="border-reg"></div>
          <div className="logo-reg">
            {/* <img src={aclogo} height={"50%"} width={"100%"}></img>
            <img src={aclogo2} height={"50%"} width={"100%"}></img> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
