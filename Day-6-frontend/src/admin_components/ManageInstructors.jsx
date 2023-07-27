import React, { useState } from "react";
import {
  MDBContainer,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBIcon,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import SearchIcon from "@mui/icons-material/Search";
import "../admin_css/ManageInstructors.css";

const InstructorManagementPage = () => {
  const [instructors, setInstructors] = useState([
    { id: 1, name: "Abi", role: "Instructor", email: "abi@example.com" },
    { id: 2, name: "Hari", role: "Instructor", email: "nithu@example.com" },
    { id: 3, name: "Gs", role: "Instructor", email: "gs@example.com" },
    {
      id: 4,
      name: "Harshid",
      role: "Instructor",
      email: "harshid@example.com",
    },
    { id: 5, name: "Arun", role: "Instructor", email: "arun@example.com" },
    {
      id: 6,
      name: "Ameen",
      role: "Instructor",
      email: "ameen@example.com",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const deleteUser = (instructorId) => {
    setInstructors(
      instructors.filter((instructor) => instructor.id !== instructorId)
    );
  };

  const filteredInstructors = instructors.filter((instructor) =>
    instructor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <MDBContainer>
      <h2 className="text-center mb-5" style={{ marginTop: "5%" }}>
        Instructor Management
      </h2>
      <MDBCard>
        <MDBCardBody className="user-card">
          <div className="instr-manage-head">
            <h3 className="mb-4">Users List</h3>
            <p className="instr-search-text">Search : </p>
            <div className="instr-search-bar">
              <MDBInput
                className="search-bar-input"
                onChange={handleSearch}
                value={searchQuery}
                label={<SearchIcon className="search-bar-icon" />}
                size="sm"
                style={{ height: "35px" }}
              />
            </div>
          </div>
          <MDBTable responsive className="usr-list-table">
            <MDBTableHead color="primary-color" textWhite>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Role</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {filteredInstructors.map((instructor, index) => (
                <tr key={instructor.id}>
                  <td>{index + 1}</td>
                  <td>{instructor.name}</td>
                  <td>{instructor.role}</td>
                  <td>{instructor.email}</td>
                  <td>
                    <MDBBtn
                      color="danger"
                      size="sm"
                      onClick={() => deleteUser(instructor.id)}
                      className="usr-del-button"
                    >
                      <MDBIcon icon="trash" />
                    </MDBBtn>
                  </td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default InstructorManagementPage;
