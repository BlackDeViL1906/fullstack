import React, { useState } from "react";
import "../css/navbar.css";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = (val) => {
    setIsSidebarOpen(false);
    // if (val === "courses") {
    // <Link to="/coursesavail"></Link>;
    // }
  };
  return (
    <div className="oc">
      <nav className="navbar">
        <div className="menu-icon" onClick={toggleSidebar}>
          <i className={isSidebarOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <div className="logo">Learning Management System</div>
        <ul className={isSidebarOpen ? "nav-links open" : "nav-links"}>
          <li
            className="nav-item"
            // onClick={(e) => {
            //   closeSidebar(e.target.value);
            // }}
            // value="courses"
          >
            <Link to="/coursesavail" className="route-link">
              Courses
            </Link>
          </li>

          <li className="nav-item" onClick={closeSidebar}>
            <Link to="/stuassignments" className="route-link">
              Assignments
            </Link>
          </li>
          <li className="nav-item" onClick={closeSidebar}>
            <Link to="/stugrades" className="route-link">
              Grades
            </Link>
          </li>

          <li className="nav-item" onClick={closeSidebar}>
            <Link to="/" className="route-link">
              Logout
            </Link>
          </li>
        </ul>
      </nav>
      <div className={isSidebarOpen ? "sidebar open" : "sidebar"}>
        <ul className="sidebar-menu">
          <Link to="/stuprof">
            <li className="sidebar-item">
              <AccountCircleIcon className="sbar-sett-1"></AccountCircleIcon>
              {"        "}
              Profile
            </li>
          </Link>
          <Link to="/stusettings">
            <li className="sidebar-item">
              <SettingsIcon className="sbar-sett"></SettingsIcon>
              {"                   "}Settings
            </li>
          </Link>
          <Link to="/help">
            <li className="sidebar-item">
              <HelpOutlineOutlinedIcon className="sbar-sett-1"></HelpOutlineOutlinedIcon>
              {"                   "}Help
            </li>
          </Link>
          <Link to="/">
            <li className="sidebar-item">
              <LogoutOutlinedIcon className="sbar-sett-1"></LogoutOutlinedIcon>
              Logout
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
