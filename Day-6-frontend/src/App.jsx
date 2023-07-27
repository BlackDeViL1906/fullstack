import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login.jsx";
import StudentDash from "./components/StudentDashboard.jsx";
import "./App.css";
import Registration from "./Registration";
import StudentOngoingCourses from "./components/OngoingCourses.jsx";
import StuCompletedCourses from "./components/StuCompletedCourses.jsx";
import IncompleteAssessments from "./components/IncompleteAssess.jsx";
import StudentAchievements from "./components/StudentAchievements.jsx";
import StudentCertifications from "./components/Certifications.jsx";
import CoursesAvail from "./components/StuCoursesAvaila.jsx";
import StudentAssignments from "./components/StudentAssignments.jsx";
import StudentGrades from "./components/StudentGrades.jsx";
import StudentProfile from "./components/StudentProfile.jsx";
import Sample from "./Sample.jsx";
import StudentSettings from "./components/StudentSettings.jsx";
import ManageCourses from "./admin_components/Manage_Courses.jsx";
import Help from "./components/Help.jsx";
import CourseDetails from "./components/CourseDetails.jsx";
import AdminDash from "./admin_components/AdminDashboard.jsx";
import UserManagementPage from "./admin_components/ManageUsers.jsx";
import InstructorManagementPage from "./admin_components/ManageInstructors.jsx";
import AdminAssessmentAssignPage from "./admin_components/AdminAssessment.jsx";
import AddCourseForm from "./admin_components/AdminAddCourse.jsx";
import InstructorDash from "./instructor_components/InstructorDashBoard.jsx";
import MessagePage from "./instructor_components/AdminMessages.jsx";
import InstrAssignCourse from "./instructor_components/InstrAssignCourse.jsx";
import InstrCourseForm from "./instructor_components/AssignCourseDetails.jsx";
import AssignAssignments from "./instructor_components/AssignAssess.jsx";
import ListeningClass from "./components/StuClassListening.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/studash" element={<StudentDash />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/stucourses" element={<StudentOngoingCourses />} />
        <Route path="/coursescompl" element={<StuCompletedCourses />} />
        <Route path="/incompl" element={<IncompleteAssessments />} />
        <Route path="/stuachiev" element={<StudentAchievements />} />
        <Route path="/stucertif" element={<StudentCertifications />} />
        <Route path="/coursesavail" element={<CoursesAvail />} />
        <Route path="/stuassignments" element={<StudentAssignments />} />
        <Route path="/stugrades" element={<StudentGrades />} />
        <Route path="/stuprof" element={<StudentProfile />} />
        <Route path="/stusettings" element={<StudentSettings />} />
        <Route path="/help" element={<Help />} />
        <Route path="/admindash" element={<AdminDash />} />
        <Route path="/managecourses" element={<ManageCourses />} />
        <Route path="/coursedetails/:id" element={<CourseDetails />} />
        <Route path="/manageusers" element={<UserManagementPage />} />
        <Route
          path="/manageinstructors"
          element={<InstructorManagementPage />}
        />
        <Route path="/adminassesment" element={<AdminAssessmentAssignPage />} />
        <Route path="/addcourse" element={<AddCourseForm />} />
        <Route path="/instrdash" element={<InstructorDash />} />
        <Route path="/adminmess" element={<MessagePage />} />
        <Route path="/instrassigncourse" element={<InstrAssignCourse />} />
        <Route path="/instrcoursedet" element={<InstrCourseForm />} />
        <Route path="/assignassignments" element={<AssignAssignments />} />
        <Route path="/listenclass" element={<ListeningClass />} />
      </Routes>
    </Router>
  );
};
// function App() {
//   return (
//     // <Login></Login>
//     <Registration></Registration>
//     // <Router>
//     //   <Route path="/" component={Login} />
//     //   <Route path="/studash" component={StudentDash} />
//     // </Router>
//   );
// }

export default App;
