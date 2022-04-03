import React from "react";
import VideoSidebar from "./VideoSidebar";
import VideoFooter from "./VideoFooter";
import "../css/video.css";

const Video = () => {
  return (
    <div className="video">
      <VideoFooter />
      <VideoSidebar />
    </div>
  );
};

export default Video;
