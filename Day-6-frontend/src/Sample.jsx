import React from "react";
import "./Sample.css";

const Sample = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="menu-icon" onClick={toggleSidebar}>
          <i className={isSidebarOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <div className="logo">Learning Management System</div>
        <ul className={isSidebarOpen ? "nav-links open" : "nav-links"}>
          <li className="nav-item" onClick={closeSidebar}>
            Courses
          </li>
          <li className="nav-item" onClick={closeSidebar}>
            Assignments
          </li>
          <li className="nav-item" onClick={closeSidebar}>
            Grades
          </li>
          <li className="nav-item" onClick={closeSidebar}>
            Messages
          </li>
          <li className="nav-item" onClick={closeSidebar}>
            Settings
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sample;
