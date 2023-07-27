import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";
import { LinearProgress } from "@mui/material";
import "../css/StudentAchievement.css";

const StudentAchievements = () => {
  const achievements = [
    {
      title: "Course Completion",
      description:
        "You have successfully completed the React Fundamentals course.",
      status: 100,
    },
    {
      title: "Certification",
      description:
        "Congratulations! You have earned the Advanced JavaScript Certification.",
      status: 10,
    },
    {
      title: "Top Performer",
      description:
        "You have achieved the highest score in the Python Programming contest.",
      status: 80,
    },
    {
      title: "Best Coder",
      description:
        "You have achieved the one of the best coding skills in the Python Programming contest.",
      status: 90,
    },
    {
      title: "Top Performer",
      description:
        "You have achieved the highest score in the Python Programming contest.",
      status: 80,
    },
  ];
  const progressBarStyle = {
    borderRadius: "10px",
  };

  return (
    <MDBContainer className="py-5">
      <h1 className="mb-6 achieve-head">Student Achievements</h1>
      <MDBRow>
        {achievements.map((achievement, index) => (
          <MDBCol md="4" className="mb-4" key={index}>
            <MDBCard className="achiev-card">
              <MDBCardBody>
                <MDBCardTitle>{achievement.title}</MDBCardTitle>
                <LinearProgress
                  variant="determinate"
                  value={achievement.status}
                  style={progressBarStyle}
                  className="achiev-progress-bar"
                  // sx={{
                  //   bgcolor: "red",
                  //   "& .MuiLinearProgress-bar": {
                  //     bgcolor: "blue",
                  //   },
                  // }}
                />
                <MDBCardText>{achievement.description}</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
};

export default StudentAchievements;
