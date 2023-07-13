import React from "react";
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

const StuCourseDetails = () => {
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
                src="https://www.youtube.com/embed/qz0aGYrrlhU"
                allowFullScreen
              ></iframe>
            </div>
            <MDBCardBody>
              <h1>Web Development Course</h1>
              <hr />
              <MDBCardText className="course-det-desc" tag="h5">
                Description{" "}
                <DescriptionIcon className="course-icons"></DescriptionIcon>
              </MDBCardText>
              <MDBCardText>
                This course is designed to teach you the basics of web
                development. You will learn HTML, CSS, and JavaScript to build
                interactive and responsive websites. The course covers topics
                such as:
              </MDBCardText>
              <ul>
                <li>HTML structure and tags</li>
                <li>CSS styling and layout</li>
                <li>JavaScript fundamentals</li>
                <li>DOM manipulation</li>
                <li>Responsive design</li>
              </ul>
              <MDBCardText>
                By the end of this course, you will have the skills to create
                your own websites and have a solid foundation in web
                development.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardBody>
              <MDBCardText tag="h5">
                Key Aspects{" "}
                <TipsAndUpdatesOutlinedIcon className="course-icons"></TipsAndUpdatesOutlinedIcon>
              </MDBCardText>

              <MDBCardText>
                <h6>Introduction to Web Development:</h6> The course will likely
                begin with an introduction to the fundamentals of web
                development. You'll learn about the client-server architecture,
                basic web technologies, and the overall structure of a web
                application.
              </MDBCardText>

              <MDBCardText>
                <h6>HTML (Hypertext Markup Language):</h6> HTML is the
                foundation of web development. You'll learn how to create the
                structure and content of web pages using HTML tags, elements,
                and attributes. This includes organizing text, images, links,
                headings, lists, tables, forms, and more.
              </MDBCardText>

              <MDBCardText>
                <h6>CSS (Cascading Style Sheets): </h6> CSS is used to control
                the visual presentation of web pages. You'll learn how to apply
                styles, colors, layouts, and other visual effects to HTML
                elements. This involves understanding selectors, properties,
                values, and the box model.
              </MDBCardText>

              <MDBCardText>
                <h6>JavaScript:</h6> JavaScript is a powerful programming
                language that enables interactivity and dynamic behavior on web
                pages. You'll learn the basics of JavaScript, including
                variables, data types, operators, control structures, functions,
                and events. This knowledge will allow you to add interactivity,
                validate forms, manipulate the DOM (Document Object Model), and
                perform AJAX (Asynchronous JavaScript and XML) requests.
              </MDBCardText>

              <MDBCardText>
                <h6>Front-End Frameworks/Libraries:</h6> Many web development
                courses cover popular front-end frameworks or libraries such as
                React, Angular, or Vue.js. These frameworks provide efficient
                ways to build interactive and responsive user interfaces. You'll
                learn about components, state management, routing, and other
                essential concepts.
              </MDBCardText>
              <MDBCardText>
                <h6>Back-End Development:</h6> To create a dynamic and
                interactive web application, you'll need to learn about back-end
                development. This typically involves learning a server-side
                programming language such as Python, Ruby, or Node.js. You'll
                learn about handling HTTP requests, managing databases, and
                implementing server-side logic.
              </MDBCardText>
              <MDBCardText>
                <h6>APIs (Application Programming Interfaces):</h6> Many web
                applications integrate with external services or APIs to fetch
                data or perform certain actions. You'll learn how to work with
                APIs, make HTTP requests, handle responses, and parse data
                formats such as JSON or XML.
              </MDBCardText>
              <MDBCardText>{""}</MDBCardText>
              <MDBCardText>{""}</MDBCardText>

              <MDBBtn
                color="primary"
                style={{ width: "20%", marginLeft: "40%" }}
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

export default StuCourseDetails;
