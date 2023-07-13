import React from "react";
import webdev from "../images/webdev.jpg";
import devops from "../images/devops.jpg";
import blockchain from "../images/blockchain.jpg";
import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import Navbar from "./NavBar";

const CourseCard = ({ coverimg, title, description, onEnroll }) => {
  const handleEnroll = () => {
    onEnroll(title);
  };

  return (
    <MDBCol md="4" className="mb-4">
      <MDBCard style={{ width: "400px" }}>
        <MDBCardImage
          src={coverimg}
          alt={coverimg}
          style={{ height: "300px", width: "500px" }}
          fluid
        />
        <MDBCardBody>
          <MDBCardTitle>{title}</MDBCardTitle>
          <MDBCardText>{description}</MDBCardText>
          <Link to="/coursedetails">
            <MDBBtn color="primary" style={{ marginLeft: "0%" }}>
              Enroll
            </MDBBtn>
          </Link>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

const CoursesAvail = () => {
  const courses = [
    {
      id: 1,
      title: "Introduction to Web Development",
      description:
        "Learn the basics of web development using HTML, CSS, and JavaScript.",
      image: webdev,
    },
    {
      id: 2,
      title: "BlockChain Technology",
      description: "Master the fundamentals of BlockChain Technology.",
      image: blockchain,
    },
    {
      id: 3,
      title: "DevOps with Ashizuki",
      description:
        "Explore the world of DevOps and analysis using Docker and other exciting concepts.",
      image: devops,
    },
    {
      id: 4,
      title: "DevOps with Gowtham",
      description:
        "Explore the world of DevOps and analysis using Docker and other exciting concepts.",
      image: devops,
    },
    {
      id: 4,
      title: "DevOps with Gowtham",
      description:
        "Explore the world of DevOps and analysis using Docker and other exciting concepts.",
      image: devops,
    },
  ];

  const handleEnroll = (courseTitle) => {
    alert(`Enrolled in course: ${courseTitle}`);
  };

  return (
    <MDBContainer className="py-5">
      <MDBCol md="10" className="text-center mb-7" style={{ marginLeft: "6%" }}>
        <h1>Available Courses</h1>
      </MDBCol>
      <Splide options={{ perPage: 3, gap: "1rem" }}>
        {courses.map((course) => (
          <SplideSlide key={course.id}>
            <CourseCard
              coverimg={course.image}
              title={course.title}
              description={course.description}
              onEnroll={handleEnroll}
            />
          </SplideSlide>
        ))}
      </Splide>
    </MDBContainer>
  );
};

export default CoursesAvail;
