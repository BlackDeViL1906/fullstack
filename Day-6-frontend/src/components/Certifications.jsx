import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import "../css/Certifications.css";

const StudentCertifications = () => {
  const certifications = [
    {
      id: 1,
      title: "React Fundamentals",
      issuer: "ABC University",
      completionDate: "July 2022",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at blandit nunc, sed consequat justo.",
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      issuer: "XYZ Institute",
      completionDate: "October 2022",
      description:
        "Nullam tempus, nisl id laoreet venenatis, tellus lacus consectetur turpis, sit amet vestibulum ligula velit eget dolor.",
    },
    // Add more certifications as needed
  ];

  return (
    <MDBContainer>
      <h1 className="mb-6 certif-head">Certifications Completed</h1>
      <MDBRow>
        {certifications.map((certification) => (
          <MDBCol md="6" className="mb-4" key={certification.id}>
            <MDBCard className="certif-card">
              <MDBCardBody>
                <MDBCardTitle>{certification.title}</MDBCardTitle>
                <MDBCardText>
                  <strong>Issuer:</strong> {certification.issuer}
                  <br />
                  <strong>Completion Date:</strong>{" "}
                  {certification.completionDate}
                  <br />
                  <strong>Description:</strong> {certification.description}
                </MDBCardText>
                <a
                  href="https://dotnettrickscloud.blob.core.windows.net/images/how-it-works-certificate.webp"
                  download="certificate_image.webp"
                >
                  <MDBBtn
                    style={{ width: "40%", height: "10%", marginLeft: "55%" }}
                  >
                    <MDBIcon fas icon="arrow-down" className="download-icon" />
                    {"    "}
                    Download Certificate
                  </MDBBtn>
                </a>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
};

export default StudentCertifications;
