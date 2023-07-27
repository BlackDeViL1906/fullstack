import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdb-react-ui-kit";

const InstrCourseForm = () => {
  const [detailedDescription, setDetailedDescription] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [instructor, setInstructor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setDetailedDescription("");
    setVideoLink("");
    setInstructor("");
  };

  const handleInstructorSelect = (selectedInstructor) => {
    setInstructor(selectedInstructor);
  };

  return (
    <MDBContainer>
      <MDBRow className="justify-content-center">
        <MDBCol md="6">
          <MDBCard style={{ marginTop: "10%" }}>
            <MDBCardBody>
              <form onSubmit={handleSubmit}>
                <h2 className="text-center mb-4">Assign Course</h2>
                <div className="mb-3">
                  <MDBInput
                    type="textarea"
                    label="Detailed Description"
                    style={{ height: "250px", width: "650px" }}
                    value={detailedDescription}
                    onChange={(e) => setDetailedDescription(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <MDBInput
                    type="textarea"
                    label="Video Link"
                    value={videoLink}
                    onChange={(e) => setVideoLink(e.target.value)}
                    required
                  />
                </div>

                <div className="text-center">
                  <MDBBtn color="primary" type="submit">
                    Add
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default InstrCourseForm;
