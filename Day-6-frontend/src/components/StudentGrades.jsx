import React, { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdb-react-ui-kit";

const StudentGrades = () => {
  const students = [
    { name: "Ameen", score: 95, course: "Mathematics" },
    { name: "Abi", score: 92, course: "Mathematics" },
    { name: "Nithu", score: 88, course: "Mathematics" },
    { name: "Deepika", score: 85, course: "Science" },
    { name: "Anusree", score: 82, course: "Science" },
    { name: "Bhuvanesh", score: 79, course: "Science" },
    { name: "Navaneeth", score: 76, course: "History" },
    { name: "Gs", score: 73, course: "History" },
    { name: "Harshid", score: 70, course: "History" },
    { name: "Dharaneesh", score: 67, course: "English" },
    { name: "ArunKumar", score: 45, course: "English" },
    { name: "Kaushik", score: 56, course: "English" },
  ];

  const [selectedCourse, setSelectedCourse] = useState("All");
  const [rankedStudents, setRankedStudents] = useState([]);

  useEffect(() => {
    const sortedStudents = students.sort((a, b) => b.score - a.score);
    const rankedStudents = sortedStudents.map((student, index) => ({
      ...student,
      rank: index + 1,
    }));
    setRankedStudents(rankedStudents);
  }, []);

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
  };

  const filteredStudents =
    selectedCourse === "All"
      ? rankedStudents
      : rankedStudents.filter((student) => student.course === selectedCourse);

  return (
    <MDBContainer>
      <h2 className="text-center mb-6" style={{ marginTop: "3%" }}>
        Student Grades
      </h2>
      <MDBCard>
        <MDBCardBody>
          <div className="d-flex justify-content-end mb-3">
            <MDBDropdown>
              <MDBDropdownToggle
                color="primary"
                style={{ width: "50%", marginRight: "150px" }}
              >
                Select Course
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem
                  onClick={() => handleCourseSelect("All")}
                  active={selectedCourse === "All"}
                  className="cursor-pointer"
                >
                  All
                </MDBDropdownItem>
                <MDBDropdownItem
                  onClick={() => handleCourseSelect("Mathematics")}
                  active={selectedCourse === "Mathematics"}
                  className="cursor-pointer"
                >
                  Mathematics
                </MDBDropdownItem>
                <MDBDropdownItem
                  onClick={() => handleCourseSelect("Science")}
                  active={selectedCourse === "Science"}
                  className="cursor-pointer"
                >
                  Science
                </MDBDropdownItem>
                <MDBDropdownItem
                  onClick={() => handleCourseSelect("History")}
                  active={selectedCourse === "History"}
                  className="cursor-pointer"
                >
                  History
                </MDBDropdownItem>
                <MDBDropdownItem
                  onClick={() => handleCourseSelect("English")}
                  active={selectedCourse === "English"}
                  className="cursor-pointer"
                >
                  English
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </div>
          <MDBTable responsive>
            <MDBTableHead color="primary-color" textWhite>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Score</th>
                <th>Courses</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {filteredStudents.map((student, index) => (
                <tr key={index}>
                  <td>
                    {index === 0 ? (
                      <MDBIcon
                        icon="trophy"
                        className="rank-icon "
                        style={{ color: "#FFD700" }}
                      />
                    ) : index === 1 ? (
                      <MDBIcon
                        icon="trophy"
                        className="rank-icon silver"
                        style={{ color: "#C0C0C0" }}
                      />
                    ) : index === 2 ? (
                      <MDBIcon
                        icon="trophy"
                        className="rank-icon bronze"
                        style={{ color: "#CD7F32" }}
                      />
                    ) : (
                      student.rank
                    )}
                  </td>
                  <td>{student.name}</td>
                  <td>{student.score}</td>
                  <td>{student.course}</td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default StudentGrades;
