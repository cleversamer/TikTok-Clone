import React, { useState, useRef } from "react";
import VideoSidebar from "./VideoSidebar";
import VideoFooter from "./VideoFooter";
import "../css/video.css";

const Video = () => {
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
        src="https://v16-webapp.tiktok.com/8d1f3d0c0db193c8a1fe7f7cf0fb1a64/6249ce1f/video/tos/alisg/tos-alisg-pve-0037c001/8efe41b764ec4069a54bdbe64e220c68/?a=1988&br=2006&bt=1003&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3A7nz7ThwGPqDXq&l=20220403104055010251004185199F605B&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3hvZWU6ZnBuOzMzODczNEApZjs4ZGRoODs3N2g6NDVnNmdycW9scjRvLmBgLS1kMS1zczBgX18vLTBgNGNgYDRhXjI6Yw%3D%3D&vl=&vr="
        loop
        onClick={onVideoClick}
      />

      <VideoFooter />

      <VideoSidebar />
    </div>
  );
};

export default Video;
