import React, { useState, useRef } from "react";
import VideoSidebar from "./VideoSidebar";
import VideoFooter from "./VideoFooter";
import "../css/video.css";

const Video = ({
  videoUrl,
  channel,
  description,
  song,
  likes,
  comments,
  shares,
}) => {
  const [isPlaying, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoClick = () => {
    if (isPlaying) videoRef.current.pause();
    else videoRef.current.play();
    setPlaying(!isPlaying);
  };

  return (
    <div className="video">
      <video
        ref={videoRef}
        className="video__player"
        src={videoUrl}
        loop
        onClick={onVideoClick}
      />

      <VideoFooter channel={channel} description={description} song={song} />

      <VideoSidebar likes={likes} comments={comments} shares={shares} />
    </div>
  );
};

export default Video;
