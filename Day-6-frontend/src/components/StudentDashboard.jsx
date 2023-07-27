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
import { MDBFooter, MDBContainer, MDBIcon } from "mdb-react-ui-kit";

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
      <div className="mb-4 footer-line"></div>
      <MDBFooter className=" studash-footer">
        <MDBContainer fluid>
          <div className="footer-text d-flex ">
            <div>
              <p>
                &copy; {new Date().getFullYear()} ABH Academy. All rights
                reserved.
              </p>
            </div>
            <div className="studash-terms">
              <p>Terms of Service | Privacy Policy</p>
            </div>
            <div className="connect-section">
              <p>Connect with Us</p>
            </div>
            <div className="connect-icons">
              <div className="social-icons d-flex">
                <a href="https://www.facebook.com/abhacademy">
                  <MDBIcon
                    fab
                    icon="facebook-f"
                    size="lg"
                    className="social-icons"
                  />
                </a>
                <a href="https://twitter.com/abhacademy">
                  <MDBIcon
                    fab
                    icon="twitter"
                    size="lg"
                    className="social-icons"
                  />
                </a>
                <a href="https://www.instagram.com/abhacademy">
                  <MDBIcon
                    fab
                    icon="instagram"
                    size="lg"
                    className="social-icons"
                  />
                </a>
                <a href="https://www.linkedin.com/company/abh-academy">
                  <MDBIcon
                    fab
                    icon="linkedin-in"
                    size="lg"
                    className="social-icons"
                  />
                </a>
              </div>
            </div>
          </div>
        </MDBContainer>
      </MDBFooter>
    </div>
  );
};

export default StudentDash;
