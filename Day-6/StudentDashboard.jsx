import React, { useState } from "react";
import "../css/StudentDash.css";
import courselog from "../images/course.png";
import BookmarkAddedSharpIcon from "@mui/icons-material/BookmarkAddedSharp";
import { useSelector } from "react-redux";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { PiCertificateFill } from "react-icons/pi";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "./NavBar";

const StudentDash = () => {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="nav-cont">
      <Navbar></Navbar>
      <div className="dash-head">
        <h1>Hello {username} ,</h1>
        <p>Have a good study! 😊</p>
      </div>
      <div className="content">
        <Link to="/stucourses">
          <div className="ongoing-courses">
            <img src={courselog} height={80} width={80}></img>
            <h3 id="cont-count">2</h3>
            <p id="cont-para-1">Ongoing courses</p>
          </div>
        </Link>

        <Link to="/coursescompl">
          <div className="ongoing-courses-2">
            {/* <img src={crscomp} height={85} width={85}></img> */}
            <BookmarkAddedSharpIcon
              sx={{ fontSize: "70px" }}
              className="coursecomp-icon"
            ></BookmarkAddedSharpIcon>
            <h3 id="cont-count-2">2</h3>
            <p id="cont-para-1">
              &nbsp; Courses <br></br>Completed
            </p>
          </div>
        </Link>
        <Link to="/incompl">
          <div className="ongoing-courses-3">
            <AssignmentLateIcon
              sx={{ fontSize: "70px" }}
              className="incomp-icon"
            ></AssignmentLateIcon>
            <h3 id="cont-count-3">2</h3>
            <p id="cont-para-1">
              Incomplete <br></br>Assessments
            </p>
          </div>
        </Link>
      </div>

      <div className="content-1">
        <Link to="/stuachiev" className="ongoing-courses-4">
          <div>
            <EmojiEventsIcon
              sx={{ fontSize: "73px" }}
              className="achiev-icon"
            ></EmojiEventsIcon>
            <h3 id="cont-count-4">2</h3>
            <p id="cont-para-2">Achievements</p>
          </div>
        </Link>

        <Link to="/stucertif" className="ongoing-courses-5">
          <div>
            <PiCertificateFill
              sx={{ fontSize: "75px" }}
              className="certif-icon"
            ></PiCertificateFill>
            <h3 id="cont-count-5">2</h3>
            <p id="cont-para-2">
              Certifications <br></br>&nbsp;&nbsp;Completed
            </p>
          </div>
        </Link>
      </div>
      <div className="footer-line"></div>
      <footer class="footer">
        <div class="container-1">
          <div class="footer-columns">
            <div class="footer-column">
              <h4>About Us</h4>
              <p>
                ABH Academy is a leading learning management system that
                empowers learners and educators to achieve their goals.
              </p>
            </div>
            <div class="footer-column">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Courses</a>
                </li>
                <li>
                  <a href="#">Instructors</a>
                </li>

                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div class="footer-bottom ">
              <p>&copy; 2023 ABH Academy. All rights reserved.</p>
            </div>
          </div>
          <div class="footer-column">
            <h4>
              Connect with Us<br></br>
              <br></br>
            </h4>
            <ul class="social-icons">
              <li>
                <a href="#">
                  <i class="fab fa-facebook larger-icon"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-twitter larger-icon"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-instagram larger-icon"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StudentDash;
