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
import "../admin_css/ManageUsers.css";

const UserManagementPage = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Abi", role: "Student", email: "abi@example.com" },
    { id: 2, name: "Hari", role: "Student", email: "nithu@example.com" },
    { id: 3, name: "Gs", role: "Student", email: "gs@example.com" },
    { id: 4, name: "Harshid", role: "Student", email: "harshid@example.com" },
    { id: 5, name: "Arun", role: "Student", email: "arun@example.com" },
    {
      id: 6,
      name: "Ameen",
      role: "Student",
      email: "ameen@example.com",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <MDBContainer>
      <h2 className="text-center mb-5" style={{ marginTop: "5%" }}>
        User Management
      </h2>
      <MDBCard>
        <MDBCardBody className="user-card">
          <div className="usr-manage-head">
            <h3 className="mb-4">Users List</h3>
            <p className="usr-search-text">Search : </p>
            <div className="usr-search-bar">
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
              {filteredUsers.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <td>{user.email}</td>
                  <td>
                    <MDBBtn
                      color="danger"
                      size="sm"
                      onClick={() => deleteUser(user.id)}
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

export default UserManagementPage;
