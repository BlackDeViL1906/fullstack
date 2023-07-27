import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import { Button } from "@mui/material";
import axios from "axios";

const AddCourseForm = () => {
  const [title, setTitle] = useState("");
  const [minidescription, setMiniDescription] = useState("");
  const [description, setDescription] = useState("");
  const [keyAspects, setKeyAspects] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [image, setImage] = useState("");
  const [instructor, setInstructor] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const token = localStorage.getItem("token");

  const handleInstructorSelect = (selectedInstructor) => {
    setInstructor(selectedInstructor);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("title", title);
      console.log("mindesc", minidescription);
      console.log("desc", description);
      console.log("img", image.name);
      console.log("inst", instructor);
      console.log("keyas", keyAspects);
      console.log("vid", videoUrl);

      const response = await axios.post(
        "http://localhost:8080/api/v1/courses/",
        {
          course_title: title,
          mini_desc: minidescription,
          course_img_path: imageUrl,
          video_url: videoUrl,
          description: description,
          key_aspects: keyAspects,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTitle("");
      setDescription("");
      setImage("");
      setInstructor("");
      setMiniDescription("");
      setImage("");
      setVideoUrl("");
    } catch (error) {
      console.error("Login failed");
      console.error(error);
    }

    const handleInstructorSelect = (selectedInstructor) => {
      setInstructor(selectedInstructor);
    };
  };

  return (
    <MDBContainer>
      <MDBRow className="justify-content-center">
        <MDBCol md="6">
          <MDBCard style={{ marginTop: "10%" }}>
            <MDBCardBody>
              <form onSubmit={handleSubmit}>
                <h2 className="text-center mb-4">Add Course</h2>
                <div className="mb-3">
                  <MDBInput
                    type="textarea"
                    label="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <MDBInput
                    type="textarea"
                    label="Mini Description"
                    value={minidescription}
                    onChange={(e) => setMiniDescription(e.target.value)}
                    rows={5}
                    required
                    className="textarea-wrap"
                    style={{
                      maxWidth: "100%",
                      height: "40px",
                      wordWrap: "break-word",
                    }}
                  />
                </div>

                <div className="mb-3">
                  <MDBInput
                    type="textarea"
                    label="Detailed Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={2}
                    required
                    style={{
                      maxWidth: "100%",
                      height: "100px",
                      wordWrap: "break-word",
                    }}
                  />
                </div>
                <div className="mb-3">
                  <MDBInput
                    type="textarea"
                    label="Key Aspects"
                    value={keyAspects}
                    onChange={(e) => setKeyAspects(e.target.value)}
                    rows={2}
                    required
                    style={{
                      maxWidth: "100%",
                      height: "100px",
                      wordWrap: "break-word",
                    }}
                  />
                </div>
                <div className="mb-3">
                  <div className="mb-3">
                    <MDBInput
                      type="textarea"
                      label="Image URL"
                      value={videoUrl}
                      onChange={(e) => setVideoUrl(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  {/* <div className="input-group">
                    <input
                      type="file"
                      className="form-control"
                      id="inputGroupFile01"
                      aria-describedby="inputGroupFileAddon01"
                      aria-label="Choose file"
                      onChange={(e) => setImage(e.target.files[0])}
                      required
                    />
                  </div> */}
                  <div className="mb-3">
                    <MDBInput
                      type="textarea"
                      label="Video URL"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      required
                    />
                  </div>
                  {image && <span>{image.name}</span>}
                </div>

                <div className="text-center">
                  <MDBBtn color="primary" type="submit">
                    Add
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AddCourseForm;
