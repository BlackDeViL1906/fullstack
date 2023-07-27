import React, { useState } from "react";
import axios from "axios";
import {
  MDBContainer,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import { AddCircle } from "@mui/icons-material";

const AssignAssignments = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [assignments, setAssignments] = useState([]);
  const token = localStorage.getItem("token");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDetailsChange = (event) => {
    setDetails(event.target.value);
  };

  const handleAssign = async () => {
    try {
      console.log(title);
      console.log(details);
      ("");
      const response = await axios.post(
        "http://localhost:8080/api/v1/assignments/",
        {
          assign_title: title,
          assign_description: details,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAssignments([...assignments, response.data]);
      setTitle("");
      setDetails("");
    } catch (error) {
      console.error("Error assigning assignment:", error);
    }
  };

  return (
    <MDBContainer className="py-5">
      <MDBCol md="8" className="mx-auto">
        <h2 className="text-center mb-4">Assignments</h2>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>Assign an Assignment</MDBCardTitle>
            <MDBInput
              label="Assignment Title"
              value={title}
              onChange={handleTitleChange}
              style={{ marginBottom: "3%" }}
            />
            <MDBInput
              label="Assignment Details"
              type="textarea"
              value={details}
              onChange={handleDetailsChange}
              className="text-start"
              style={{ marginBottom: "3%", height: "150px" }}
            />
            <MDBBtn color="primary" onClick={handleAssign}>
              Assign
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        {assignments.map((assignment, index) => (
          <MDBCard key={index} className="mt-4">
            <MDBCardBody>
              <MDBCardTitle>{assignment.title}</MDBCardTitle>
              <MDBCardText>{assignment.details}</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        ))}
      </MDBCol>
    </MDBContainer>
  );
};

export default AssignAssignments;
