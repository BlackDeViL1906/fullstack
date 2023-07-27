import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";
import "../instructor_css/AdminMessages.css";

const MessagePage = () => {
  const [message, setMessage] = useState("");
  const [notifications, setNotifications] = useState([]);

  const handleSendMessage = () => {
    if (message) {
      const newNotification = {
        id: new Date().getTime(),
        message,
      };
      setNotifications([...notifications, newNotification]);
      setMessage("");
    }
  };

  return (
    <MDBContainer>
      <MDBRow className="justify-content-center">
        <MDBCol md="6">
          <MDBCard className="message-card">
            <MDBCardBody>
              <h2 className="text-center mb-">Message Page</h2>
              <div className="message-form"></div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      <MDBRow className="justify-content-center mt-4">
        <MDBCol md="6">
          <MDBCard className="notification-card">
            <MDBCardBody>
              <h2 className="text-center mb-4">Notifications</h2>
              {notifications.length === 0 ? (
                <p className="text-center">No notifications</p>
              ) : (
                <ul className="notification-list">
                  {notifications.map((notification) => (
                    <li key={notification.id}>{notification.message}</li>
                  ))}
                </ul>
              )}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default MessagePage;
