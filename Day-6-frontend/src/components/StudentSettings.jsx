import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";

const StudentSettings = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notificationPreferences, setNotificationPreferences] = useState("");

  const handleSaveSettings = () => {
    // Handle saving settings logic
    console.log("Saving settings:", { name, email, notificationPreferences });
  };

  return (
    <MDBContainer>
      <h1>Settings</h1>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>Profile Settings</MDBCardTitle>
              <MDBCardText>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>Notification Preferences</MDBCardTitle>
              <MDBCardText>
                <div className="form-group">
                  <label htmlFor="notificationPreferences">
                    Notification Preferences:
                  </label>
                  <textarea
                    className="form-control"
                    id="notificationPreferences"
                    rows="3"
                    value={notificationPreferences}
                    onChange={(e) => setNotificationPreferences(e.target.value)}
                  ></textarea>
                </div>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          <MDBBtn color="primary" onClick={handleSaveSettings}>
            Save Settings
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default StudentSettings;
