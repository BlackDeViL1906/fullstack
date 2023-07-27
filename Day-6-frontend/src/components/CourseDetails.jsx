import React, { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import DescriptionIcon from "@mui/icons-material/Description";
import { useParams } from "react-router-dom";
import axios from "axios";

const CourseDetails = () => {
  const params = useParams();
  const courseId = params.id;
  console.log(courseId);
  const token = localStorage.getItem("token");
  const [courseDetails, setCourseDetails] = useState({});
  const [title, setTitle] = useState("");
  const [minidescription, setMiniDescription] = useState("");
  const [image, setImage] = useState({ name: "" });
  const [videoUrl, setVideoUrl] = useState("");
  const [description, setDescription] = useState("");
  const [keyAspects, setKeyAspects] = useState("");

  useEffect(() => {
    fetchCourseDetails();
  }, [courseId]);

  const fetchCourseDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/courses/${courseId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      setCourseDetails(response.data);
      setTitle(response.data.course_title);
      setMiniDescription(response.data.mini_desc);
      setImage({ name: response.data.course_img_path });
      setVideoUrl(response.data.video_url);
      setDescription(response.data.description);
      setKeyAspects(response.data.key_aspects);
    } catch (error) {
      console.error("Error fetching course details:", error);
    }
  };

  const handleApply = async () => {
    try {
      console.log(
        title,
        minidescription,
        image,
        videoUrl,
        description,
        keyAspects
      );
      const response = await axios.put(
        `http://localhost:8080/api/v1/courses/${courseId}`,
        {
          course_title: title,
          mini_desc: minidescription,
          course_img_path: image.name,
          video_url: videoUrl,
          description: description,
          key_aspects: keyAspects,
          applied_for_course: "true",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      window.alert("Applied for Course Successfully!");
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  return (
    <MDBContainer className="py-5">
      <MDBRow className="justify-content-center">
        <MDBCol md="9">
          <MDBCard>
            <div className="embed-responsive embed-responsive-16by9 justify-content-center course-tutorial">
              <iframe
                style={{ height: "400px", width: "100%" }}
                title="Web Development Course"
                className="embed-responsive-item"
                src={courseDetails.course_img_path}
                allowFullScreen
              ></iframe>
            </div>
            <MDBCardBody>
              <h1>{courseDetails.course_title}</h1>
              <hr />
              <MDBCardText className="course-det-desc" tag="h5">
                Description{" "}
                <DescriptionIcon className="course-icons"></DescriptionIcon>
              </MDBCardText>
              <MDBCardText>{courseDetails.description}</MDBCardText>
            </MDBCardBody>
            <MDBCardBody>
              <MDBCardText tag="h5">
                Key Aspects{" "}
                <TipsAndUpdatesOutlinedIcon className="course-icons"></TipsAndUpdatesOutlinedIcon>
              </MDBCardText>
              <MDBCardText>{courseDetails.key_aspects}</MDBCardText>
              <MDBBtn
                color="primary"
                style={{ width: "20%", marginLeft: "40%" }}
                onClick={handleApply}
              >
                Apply
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default CourseDetails;
