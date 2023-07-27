import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import "../css/Help.css";
import axios from "axios";

const Help = () => {
  
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(email);
      console.log(feedback);
      const response = await axios.post(
        "http://localhost:8082/api/v1/feed/addFeedback",
        {
          email: email,
          feedback: feedback,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Response from server:", response.data);

      setEmail("");
      setFeedback("");
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };
  return (
    <div className="feedback-form-container">
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="6">
            <form onSubmit={handleSubmit}>
              <h2 className="text-center mb-6" style={{ marginTop: "5%" }}>
                Feedback
              </h2>

              <MDBInput
                label="Your Email"
                className="mb-4"
                type="email"
                style={{ height: "45px" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <MDBInput
                label="Your Feedback"
                className="mb-4 help-feedback"
                type="textarea"
                style={{ height: "200px" }}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
              <MDBBtn color="primary" type="submit" className="help-submit">
                <MDBIcon fas icon="paper-plane" className="me-2" />
                Submit
              </MDBBtn>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Help;
