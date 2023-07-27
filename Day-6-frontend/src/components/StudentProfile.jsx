import React, { useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import "../css/StudentProfile.css";

const StudentProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [email, setEmail] = useState("hnethesh@gmail.com");
  const [phone, setPhone] = useState("9360244678");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    const isValid = validateEmail(e.target.value);
    setIsEmailValid(isValid);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <section
      className="vh-100 prof-container"
      style={{ backgroundColor: "#f4f5f7" }}
    >
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: ".5rem" }}>
              <MDBRow className="g-0">
                <MDBCol
                  md="4"
                  className="gradient-custom text-center text-white"
                  style={{
                    borderTopLeftRadius: ".5rem",
                    borderBottomLeftRadius: ".5rem",
                  }}
                >
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="Avatar"
                    className="my-5"
                    style={{ width: "80px" }}
                    fluid
                  />
                  <MDBTypography tag="h5" className="prof-name">
                    Nithu
                  </MDBTypography>
                  <MDBCardText className="prof-role">Web Designer</MDBCardText>
                  <div className="md-8 d-flex justify-content-center">
                    {isEditing ? (
                      <MDBIcon
                        fas
                        icon="cloud"
                        onClick={handleSave}
                        size="1x"
                        className={`prof-edit-icon ${
                          !isEmailValid ? "disabled" : ""
                        }`}
                        disabled={!isEmailValid}
                      />
                    ) : (
                      <MDBIcon
                        fas
                        icon="edit"
                        size="1x"
                        onClick={handleEdit}
                        className="prof-edit-icon"
                      />
                    )}
                  </div>
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <form>
                          {isEditing ? (
                            <>
                              <MDBInput
                                type="email"
                                value={email}
                                required
                                onChange={handleEmailChange}
                                className={`prof-form-control-1 ${
                                  isEmailValid ? "" : "is-invalid"
                                }`}
                              />
                              {!isEmailValid && (
                                <label
                                  className="invalid-feedback error-msg-prof"
                                  style={{ color: "red" }}
                                >
                                  Please enter a valid email address.
                                </label>
                              )}
                            </>
                          ) : (
                            <MDBCardText className="text-muted">
                              {email}
                            </MDBCardText>
                          )}
                        </form>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        {isEditing ? (
                          <MDBInput
                            type="phone"
                            value={phone}
                            onChange={handlePhoneChange}
                            className="prof-form-control-1"
                          />
                        ) : (
                          <MDBCardText className="text-muted">
                            {phone}
                          </MDBCardText>
                        )}
                      </MDBCol>
                    </MDBRow>

                    <MDBTypography tag="h6">Course Status</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="4" className="mb-3">
                        <MDBTypography tag="h6">Completed</MDBTypography>
                        <MDBCardText className="text-muted">
                          <p className="prof-course-count">3</p>
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol size="4" className="mb-3">
                        <MDBTypography tag="h6">Ongoing</MDBTypography>
                        <MDBCardText className="text-muted">
                          <p className="prof-course-count">2</p>
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol size="4" className="mb-3">
                        <MDBTypography tag="h6">Incomplete</MDBTypography>
                        <MDBCardText className="text-muted">
                          <p className="prof-course-count">2</p>
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <div className="md-8 d-flex justify-content-start">
                      <a href="#!">
                        <MDBIcon
                          fab
                          icon="github me-3"
                          size="lg"
                          className="prof-bottom-icons"
                        />
                      </a>
                      <a href="#!">
                        <MDBIcon
                          fab
                          icon="linkedin-in me-3"
                          size="lg"
                          className="prof-bottom-icons"
                        />
                      </a>
                      <a href="#!">
                        <MDBIcon
                          fab
                          icon="twitter me-3"
                          size="lg"
                          className="prof-bottom-icons"
                        />
                      </a>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default StudentProfile;
