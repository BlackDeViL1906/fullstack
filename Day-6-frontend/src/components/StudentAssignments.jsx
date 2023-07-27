import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";

const StudentAssignments = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [assignments, setAssignments] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/assignments/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAssignments(response.data);
    } catch (error) {
      console.error("Error fetching assignments:", error);
    }
  };

  const handleFileUpload = async (event, assignmentId) => {
    const file = event.target.files[0];
    console.log(`Uploading file for assignment ID ${assignmentId}:`, file);

    try {
      console.log(file.name);

      const formData = new FormData();

      const response = await axios.put(
        `http://localhost:8080/api/v1/assignments/${assignmentId}`,
        {
          assign_title: assignments.assign_title,
          assign_description: assignments.assign_description,
          assign_file: file.name,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("File upload response:", response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setAssignments([]);
    setSelectedFile("");
  };

  return (
    <MDBContainer>
      <h1 style={{ marginLeft: "39%", marginTop: "5%" }} className="mb-6">
        Assignments
      </h1>
      <MDBRow>
        {Array.isArray(assignments) && assignments.length > 0 ? (
          assignments.map((assignment) => (
            <MDBCol key={assignment.id} md="6">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBCardTitle>{assignment.assign_title}</MDBCardTitle>
                  <MDBCardText>{assignment.assign_description}</MDBCardText>
                  <form>
                    <div className="form-group">
                      <input
                        type="file"
                        className="form-control-file"
                        onChange={(event) =>
                          handleFileUpload(event, assignment.id)
                        }
                      />
                    </div>
                    <MDBBtn
                      type="submit"
                      color="primary"
                      style={{ marginTop: "10px" }}
                      onClick={handleSubmit}
                    >
                      Submit
                    </MDBBtn>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))
        ) : (
          <MDBCol md="12">
            <p>No assignments found.</p>
          </MDBCol>
        )}
      </MDBRow>
    </MDBContainer>
  );
};

export default StudentAssignments;
