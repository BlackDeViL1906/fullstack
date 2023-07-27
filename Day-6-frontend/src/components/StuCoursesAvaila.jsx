import React, { useState, useEffect } from "react";
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
} from "mdb-react-ui-kit";
import SearchIcon from "@mui/icons-material/Search";
import "../css/StuCoursesAvail.css";
import { useLocation, Link } from "react-router-dom";


import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import axios from "axios";

const CourseCard = ({ courseId, coverimg, title, description }) => {
  return (
    <MDBCol md="4" className="mb-4">
      <MDBCard style={{ width: "400px" }} >
        <MDBCardImage
          src={coverimg}
          alt={coverimg}
          style={{ height: "300px", width: "500px" }}
          fluid
        />
        <MDBCardBody>
          <MDBCardTitle>{title}</MDBCardTitle>
          <MDBCardText>{description}</MDBCardText>
          <Link to={`/coursedetails/${courseId}`}>
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
  const location = useLocation();
  const token = localStorage.getItem("token");
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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
      console.log(response.course_id);
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const handleEnroll = (courseTitle) => {
    alert(`Enrolled in course: ${courseTitle}`);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <MDBContainer className="py-5">
      <MDBCol md="10" className="text-center mb-7" style={{ marginLeft: "6%" }}>
        <h1 className="d-flex align-items-center justify-content-between">
          Available Courses
          <div className="filter-course">
            <MDBInput
              className="search-bar"
              label={<SearchIcon className="search-bar-stucourses" />}
              value={searchQuery}
              onChange={handleSearch}
              size="sm"
            />
          </div>
        </h1>
      </MDBCol>
      <Splide options={{ perPage: 3, gap: "1rem" }}>
        {courses
          .filter((course) =>
            course.course_title
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
          )
          .map((course) => (
            <SplideSlide key={course.course_id}>
              <CourseCard className="course-avail-card"
                courseId={course.course_id}
                coverimg={course.video_url}
                title={course.course_title}
                description={course.mini_desc}
              />
            </SplideSlide>
          ))}
      </Splide>
    </MDBContainer>
  );
};

export default CoursesAvail;
