import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";
import axios from "axios";
import "../css/StuClassListening.css";
import { useEffect } from "react";

const ListeningClass = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const crs_title = localStorage.getItem("title");
  const [searchQuery, setSearchQuery] = useState(crs_title);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    console.log(crs_title);

    handleSearch();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search`,
        {
          params: {
            key: "AIzaSyAdExgXsU0z_W0JTtF8h1lmkVtK8IqWdOk",
            q: searchQuery,
            part: "snippet",
            type: "video",
            maxResults: 10,
          },
        }
      );

      setVideos(response.data.items);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  const handleVideoSelect = (videoId) => {
    setVideoUrl(`https://www.youtube.com/embed/${videoId}`);
  };

  return (
    <MDBContainer className="py-5">
      <MDBRow>
        <MDBCol md="6">
          <h2></h2>
          <div className="search-bar-listen">
            <MDBInput
              label="Search for a video"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              size="sm"
            />
            <span>
              <MDBBtn
                color="primary"
                onClick={handleSearch}
                style={{ marginLeft: "30px" }}
              >
                Search
              </MDBBtn>
            </span>
          </div>
          <MDBContainer>
            {videos.map((video) => (
              <div
                key={video.id.videoId}
                onClick={() => handleVideoSelect(video.id.videoId)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                />
                <p>{video.snippet.title}</p>
              </div>
            ))}
          </MDBContainer>
        </MDBCol>
        <MDBCol md="6">
          {videoUrl && (
            <iframe
              width="640"
              height="360"
              src={videoUrl}
              title="YouTube Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          )}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ListeningClass;
