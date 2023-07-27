import React, { useState } from "react";
import "../admin_css/AdminDash.css";
import courselog from "../images/course.png";
import { useSelector } from "react-redux";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { PiCertificateFill } from "react-icons/pi";
import { useNavigate, Link } from "react-router-dom";
import { BsBookHalf } from "react-icons/bs";
import AssessmentIcon from "@mui/icons-material/Assessment";
import InstructorNavbar from "./InstructorNavBar";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { MDBFooter, MDBContainer, MDBIcon } from "mdb-react-ui-kit";

const InstructorDash = () => {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="nav-cont">
      <InstructorNavbar></InstructorNavbar>
      <div className="dash-head">
        <h1>Hello {username} ,</h1>
        <p>Have a nice day! 😊</p>
      </div>
      <div className="content">
        <Link to="/instrassigncourse">
          <div className="manage-courses">
            <BsBookHalf
              style={{ fontSize: "70px" }}
              className="managecourse-icon"
            ></BsBookHalf>
            <h3 id="cont-count">2</h3>
            <p id="cont-para-1">Assign Courses</p>
          </div>
        </Link>

        <Link to="/manageusers">
          <div className="manage-users">
            <ManageAccountsIcon
              sx={{ fontSize: "70px" }}
              className="coursecomp-icon"
            ></ManageAccountsIcon>
            <h3 id="cont-count-2">2</h3>
            <p id="cont-para-1">&nbsp; Manage &nbsp;&nbsp;&nbsp;&nbsp;Users</p>
          </div>
        </Link>
        <Link to="/manageinstructors">
          <div className="manage-instructors">
            <MDBIcon
              fas
              icon="chalkboard-teacher"
              style={{ fontSize: "60px" }}
              className="incomp-icon"
            />

            <h3 id="cont-count-3">2</h3>
            <p id="cont-para-3">
              Manage <br></br>Instructors
            </p>
          </div>
        </Link>
      </div>

      <div className="content-1">
        <Link to="/adminassesment" className="ongoing-courses-4">
          <div>
            <AssessmentIcon
              sx={{ fontSize: "73px" }}
              className="achiev-icon"
            ></AssessmentIcon>
            <h3 id="cont-count-4">2</h3>
            <p id="cont-para-2">Assessments</p>
          </div>
        </Link>

        <Link to="/assignassignments" className="ongoing-courses-5">
          <div>
            <PiCertificateFill
              sx={{ fontSize: "75px" }}
              className="certif-icon"
            ></PiCertificateFill>
            <h3 id="cont-count-5">2</h3>
            <p id="cont-para-2">
              Assign <br></br>Assignments
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

export default InstructorDash;
