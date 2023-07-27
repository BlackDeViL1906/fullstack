import React, { useState, useEffect } from "react";
import axios from "axios";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import "../css/OngoingCourses.css";

const CourseCard = ({ course }) => {
  const { id, title, courseimg } = course;
  const handleListenToClass = () => {
    localStorage.setItem("title", title);
  };

  return (
    <MDBCol md="4" className="mb-4">
      <div className="ong-course-card">
        <img
          src={courseimg}
          alt={title}
          style={{ height: "250px", width: "400px" }}
          className="mb-4"
        />
        <h4>{title}</h4>

        <Link to={`/listenclass`}>
          <MDBBtn
            className="mb-4"
            style={{ width: "320px", marginLeft: "20px", marginTop: "10px" }}
            onClick={handleListenToClass}
          >
            Listen to Class
          </MDBBtn>
        </Link>
        <br></br>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfhPNKsWqNx0QNUgi3nGFnvbK9wH9F0gpfjLv5ejMefueN_Xw/viewform?usp=sf_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MDBBtn
            className="mb-4"
            style={{ width: "320px", marginLeft: "20px" }}
          >
            Take Assessment
          </MDBBtn>
        </a>
      </div>
    </MDBCol>
  );
};

const StudentOngoingCourses = () => {
  const [ongoingCourses, setOngoingCourses] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/courses/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const coursesData = response.data
        .filter((course) => course.applied_for_course === "true")
        .map((course) => ({
          id: course.course_id,
          title: course.course_title,
          courseimg: course.video_url,
        }));

      setOngoingCourses(coursesData);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  return (
    <div>
      <h1 style={{ marginLeft: "40%", marginTop: "3%" }}>Ongoing Courses</h1>
      <MDBContainer className="py-5">
        <MDBRow>
          {ongoingCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default StudentOngoingCourses;
