import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBCardImage,
  MDBIcon,
} from "mdb-react-ui-kit";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import webdev from "../images/webdev.jpg";
import "../css/IncompleteAssign.css";

const CourseCard = ({ course }) => {
  const { title, professor, assessmentUrl, courseimg } = course;

  const handleReTakeAssessment = () => {
    console.log(`Reaking assessment for: ${title}`);
  };

  return (
    <MDBCol md="4" className="mb-4">
      <MDBCard className="ong-course-card">
        <MDBCardBody>
          <div className="position-relative">
            <MDBCardImage
              src={courseimg}
              alt={courseimg}
              style={{ height: "250px", width: "400px" }}
              fluid
              className="mb-4"
            />
            <div className="position-absolute top-0 end-0">
              <WarningAmberIcon
                className="incomplete-assign-icon"
                sx={{ fontSize: "35px" }}
              ></WarningAmberIcon>
            </div>
          </div>
          <MDBCardTitle>{title}</MDBCardTitle>
          <MDBCardText>Professor: {professor}</MDBCardText>
          <a href={assessmentUrl}>
            <MDBBtn
              onClick={handleReTakeAssessment}
              className="mb-4"
              style={{ marginLeft: "10%", width: "70%" }}
            >
              Retake Assessment
            </MDBBtn>
          </a>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

const CourseList = ({ courses }) => {
  return (
    <MDBContainer className="py-5">
      <div className="d-flex flex-wrap justify-content-center">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </MDBContainer>
  );
};

const IncompleteAssessments = () => {
  const ongoingCourses = [
    {
      id: 1,
      title: "DevOps with Anseh",
      professor: "Dr. Anseh",
      classUrl: "https://example.com/math-class",
      assessmentUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSfhPNKsWqNx0QNUgi3nGFnvbK9wH9F0gpfjLv5ejMefueN_Xw/viewform?usp=sf_link",
      courseimg:
        "https://img.freepik.com/free-vector/gradient-devops-illustration_23-2149373211.jpg?w=1060&t=st=1690304804~exp=1690305404~hmac=80dbe86618d6f704b31c4c1ea73abca9134f2639fc7c938922daccf14a299fd8",
    },
  ];

  return (
    <div>
      <h1 style={{ marginLeft: "36%", marginTop: "3%" }}>
        Incomplete Assesments
      </h1>
      <CourseList courses={ongoingCourses} />
    </div>
  );
};

export default IncompleteAssessments;
