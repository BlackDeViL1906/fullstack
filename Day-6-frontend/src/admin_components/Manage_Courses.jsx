import React, { useState, useEffect } from "react";
import axios from "axios";
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
import webdev from "../images/webdev.jpg";

const CourseCard = ({ coverimg, title, description }) => {
  const handleEnroll = () => {
    onEnroll(title);
  };

  const handleDelete = () => {
    onDelete(courseId);
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
            <Link to="/coursedetails">
              <MDBBtn
                color="primary"
                style={{ marginLeft: "0%", width: "80%" }}
              >
                See Details
              </MDBBtn>
            </Link>
            <span>
              <button
                className="fas fa-trash-alt del-button"
                onClick={handleDelete}
                style={{ width: "40px", height: "40px", marginLeft: "30px" }}
              >
                <i className=""></i>
              </button>
            </span>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

const ManageCourses = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchCourses();
  }, [searchQuery]);

  const fetchCourses = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/courses/?search=${searchQuery}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleEnroll = (courseTitle) => {
    alert(`Enrolled in course: ${courseTitle}`);
  };

  const handleDelete = async (courseId) => {
    try {
      console.log(courseId);
      await axios.delete(`http://localhost:8080/api/v1/courses/${courseId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCourses((prevCourses) =>
        prevCourses.filter((course) => course.id !== courseId)
      );
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  return (
    <MDBContainer className="py-5">
      <MDBCol md="10" className="text-center mb-7" style={{ marginLeft: "6%" }}>
        <h1 className="d-flex align-items-center justify-content-between">
          Manage Courses
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
        {courses
          .filter((course) =>
            course.course_title.toLowerCase().includes(searchQuery)
          )
          .map((course) => (
            <SplideSlide key={course.id}>
              <CourseCard
                coverimg={course.video_url}
                title={course.course_title}
                description={course.mini_desc}
                onEnroll={handleEnroll}
                onDelete={handleDelete}
                courseId={course.course_id}
              />
            </SplideSlide>
          ))}
      </Splide>
      <Link to="/addcourse">
        <Button
          variant="secondary"
          className="add-course-admin"
          style={{
            backgroundColor: "rgb(39, 123, 241)",
            color: "white",
            borderBlockWidth: "30px",
            marginLeft: "80%",
          }}
        >
          <AddIcon></AddIcon> Add Course
        </Button>
      </Link>
    </MDBContainer>
  );
};

export default ManageCourses;
