import React, { useState } from "react";
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
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import "../admin_css/ManageCourses.css";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Button } from "@mui/material";

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
          <div>
            <Link to="/instrcoursedet">
              <MDBBtn
                color="primary"
                style={{ marginLeft: "0%", width: "70%" }}
              >
                Assign Detalis
              </MDBBtn>
            </Link>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

const InstrAssignCourse = () => {
  const courses = [
    {
      id: 1,
      title: "Introduction to Web Development",
      description:
        "Learn the basics of web development using HTML, CSS, and JavaScript.",
      image: webdev,
      category: "webdev",
    },
    {
      id: 2,
      title: "BlockChain Technology",
      description: "Master the fundamentals of BlockChain Technology.",
      image: blockchain,
      category: "blockchain",
    },
    {
      id: 3,
      title: "DevOps with Ashizuki",
      description:
        "Explore the world of DevOps and analysis using Docker and other exciting concepts.",
      image: devops,
      category: "devops",
    },
    {
      id: 4,
      title: "DevOps with Gowtham",
      description:
        "Explore the world of DevOps and analysis using Docker and other exciting concepts.",
      image: devops,
      category: "devops",
    },
    {
      id: 5,
      title: "DevOps with John",
      description:
        "Explore the world of DevOps and analysis using Docker and other exciting concepts.",
      image: devops,
      category: "devops",
    },
  ];

  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleEnroll = (courseTitle) => {
    alert(`Enrolled in course: ${courseTitle}`);
  };

  return (
    <MDBContainer className="py-5">
      <MDBCol md="10" className="text-center mb-7" style={{ marginLeft: "6%" }}>
        <h1 className="d-flex align-items-center justify-content-between">
          Assign Courses
          <div className="filter-course">
            <MDBInput
              className="search-bar "
              onChange={handleSearch}
              value={searchQuery}
              label={
                <SearchIcon className="search-bar-stucourses"></SearchIcon>
              }
              size="sm"
            />
          </div>
        </h1>
      </MDBCol>
      <Splide options={{ perPage: 3, gap: "1rem" }}>
        {filteredCourses
          .filter((course) =>
            course.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((course) => (
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

export default InstrAssignCourse;
