import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCard,
} from "mdb-react-ui-kit";
import axios from "axios";

const Registration = () => {
  const [fName, setFirstName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [passwd, setPassword] = useState("");
  const [confpasswd, setConfPassword] = useState("");
  const [gender, setGender] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [role, setRole] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [registrationError, setRegistrationError] = useState("");

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!passwordRegex.test(passwd)) {
      setPasswordError(
        "Password should contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }

    if (passwd !== confpasswd) {
      setPasswordError("Passwords do not match.");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/register",
        {
          name: userName,
          username: fName,
          password: passwd,
          gender: gender,
          state: state,
          city: city,
          phone: phoneNumber,
          school: schoolName,
          userRole: role,
        }
      );

      console.log("Registration successful");

      setFirstName("");
      setUserName("");
      setEmail("");
      setPassword("");
      setConfPassword("");
      setGender("");
      setState("");
      setCity("");
      setPhoneNumber("");
      setSchoolName("");
      setRole("");
      setPasswordError("");
      setRegistrationError("");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.log("Sorry, the username is already taken.");
        setRegistrationError("Sorry, the username is already taken.");
      } else {
        console.error("Registration failed");
        console.error(error);
        setRegistrationError("Registration failed. Please try again.");
      }
    }
  };

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
  };

  return (
    <MDBContainer>
      <h1 style={{ marginLeft: "45%", marginTop: "3%" }} className="mb-4">
        Sign Up
      </h1>
      <MDBCard>
        <MDBRow className="justify-content-center">
          <MDBCol md="6">
            <form onSubmit={handleSubmit}>
              <MDBInput
                label="Name"
                value={fName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                style={{ marginBottom: "20px" }}
              />
              <MDBInput
                label="User Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
                style={{ marginBottom: "20px" }}
              />
              <MDBInput
                type="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ marginBottom: "20px" }}
              />
              <MDBInput
                type="password"
                label="Password"
                value={passwd}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  boxShadow: "none",
                  border: "1px solid #ced4da",
                  borderRight: "none",
                  marginBottom: "20px",
                  width: "450px",
                  height: "40px",
                }}
              />
              {passwordError && (
                <div style={{ color: "red", marginBottom: "10px" }}>
                  {passwordError}
                </div>
              )}
              <MDBInput
                type="password"
                label="Confirm Password"
                value={confpasswd}
                onChange={(e) => setConfPassword(e.target.value)}
                required
                style={{
                  boxShadow: "none",
                  border: "1px solid #ced4da",
                  borderRight: "none",
                  marginBottom: "20px",
                  width: "450px",
                  height: "40px",
                }}
              />
              <MDBDropdown style={{ marginBottom: "20px" }}>
                <MDBDropdownToggle caret color="secondary">
                  {gender ? gender : "Select Gender"}
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem onClick={() => setGender("male")}>
                    Male
                  </MDBDropdownItem>
                  <MDBDropdownItem onClick={() => setGender("female")}>
                    Female
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
              <MDBInput
                label="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
                style={{ marginBottom: "20px" }}
              />
              <MDBInput
                label="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                style={{ marginBottom: "20px" }}
              />
              <MDBInput
                label="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                style={{ marginBottom: "20px" }}
              />
              <MDBInput
                label="School Name"
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
                required
                style={{ marginBottom: "20px" }}
              />
              <MDBDropdown style={{ marginBottom: "20px" }}>
                <MDBDropdownToggle caret color="secondary">
                  {role ? role : "Select Role"}
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem
                    onClick={() => handleRoleSelect("instructor")}
                  >
                    Instructor
                  </MDBDropdownItem>
                  <MDBDropdownItem onClick={() => handleRoleSelect("student")}>
                    Student
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
              <MDBBtn
                type="submit"
                color="primary"
                style={{ marginBottom: "20px", marginLeft: "40%" }}
              >
                Register
              </MDBBtn>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
};

export default Registration;
