import React, { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBBtn,
} from "mdb-react-ui-kit";
import avatarImage from "../images/avatar.png";
import "../admin_css/AdminAssignAssessment.css";

const AdminAssessmentAssignPage = () => {
  const [instructors, setInstructors] = useState([]);
  const [selectedInstructor, setSelectedInstructor] = useState("");
  const [students, setStudents] = useState([]);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [assessment, setAssessment] = useState("");

  useEffect(() => {
    // Fetch instructors and students from API or database
    const fetchInstructors = async () => {
      // Simulated API call
      const response = await fetch("api/instructors");
      const data = await response.json();
      setInstructors(data);
    };

    const fetchStudents = async () => {
      // Simulated API call
      const response = await fetch("api/students");
      const data = await response.json();
      setStudents(data);
    };

    fetchInstructors();
    fetchStudents();
  }, []);

  const handleInstructorSelect = (instructorId) => {
    const instructor = instructors.find(
      (instructor) => instructor.id === instructorId
    );
    setSelectedInstructor(instructor);
  };

  const handleStudentSelect = (studentId) => {
    const selectedStudentIds = [...selectedStudents];
    if (selectedStudentIds.includes(studentId)) {
      const index = selectedStudentIds.indexOf(studentId);
      selectedStudentIds.splice(index, 1);
    } else {
      selectedStudentIds.push(studentId);
    }
    setSelectedStudents(selectedStudentIds);
  };

  const handleAssessmentSelect = (assessment) => {
    setAssessment(assessment);
  };

  const handleAssign = () => {
    const instructorName = selectedInstructor.name;
    const studentNames = selectedStudents.map(
      (studentId) => students.find((student) => student.id === studentId).name
    );
    const assessmentName = assessment.name;

    alert(
      `Assigned ${assessmentName} to students: ${studentNames.join(
        ", "
      )} by instructor ${instructorName}`
    );
  };

  return (
    <MDBContainer className="my-5">
      <MDBCard className="assign-card">
        <MDBCardBody>
          <h2 className="text-center mb-4">Assign Assessment</h2>
          <MDBRow className="mb-3 align-items-center">
            <MDBCol md="4" className="text-end">
              <label className="form-label">Instructor:</label>
            </MDBCol>
            <MDBCol md="8">
              <MDBDropdown>
                <MDBDropdownToggle caret color="primary">
                  {selectedInstructor
                    ? selectedInstructor.name
                    : "Select Instructor"}
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  {instructors.map((instructor) => (
                    <MDBDropdownItem
                      key={instructor.id}
                      onClick={() => handleInstructorSelect(instructor.id)}
                    >
                      {instructor.name}
                    </MDBDropdownItem>
                  ))}
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3 align-items-center">
            <MDBCol md="4" className="text-end">
              <label className="form-label">Students:</label>
            </MDBCol>
            <MDBCol md="8">
              <MDBDropdown>
                <MDBDropdownToggle caret color="primary">
                  {selectedStudents.length > 0
                    ? `${selectedStudents.length} Students Selected`
                    : "Select Students"}
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  {students.map((student) => (
                    <MDBDropdownItem
                      key={student.id}
                      onClick={() => handleStudentSelect(student.id)}
                    >
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={student.id}
                          checked={selectedStudents.includes(student.id)}
                          onChange={() => handleStudentSelect(student.id)}
                        />
                        <label className="form-check-label">
                          {student.name}
                        </label>
                      </div>
                    </MDBDropdownItem>
                  ))}
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3 align-items-center">
            <MDBCol md="4" className="text-end">
              <label className="form-label">Assessment:</label>
            </MDBCol>
            <MDBCol md="8">
              <MDBDropdown>
                <MDBDropdownToggle caret color="primary">
                  {assessment ? assessment.name : "Select Assessment"}
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem
                    onClick={() =>
                      handleAssessmentSelect({ name: "Assessment 1" })
                    }
                  >
                    Assessment 1
                  </MDBDropdownItem>
                  <MDBDropdownItem
                    onClick={() =>
                      handleAssessmentSelect({ name: "Assessment 2" })
                    }
                  >
                    Assessment 2
                  </MDBDropdownItem>
                  <MDBDropdownItem
                    onClick={() =>
                      handleAssessmentSelect({ name: "Assessment 3" })
                    }
                  >
                    Assessment 3
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBCol>
          </MDBRow>
          <div className="text-center">
            <MDBBtn color="primary" onClick={handleAssign}>
              Assign
            </MDBBtn>
          </div>
        </MDBCardBody>
      </MDBCard>
      <div className="image-container">
        <img src={avatarImage} alt="Avatar" className="avatar-image" />
      </div>
    </MDBContainer>
  );
};

export default AdminAssessmentAssignPage;
