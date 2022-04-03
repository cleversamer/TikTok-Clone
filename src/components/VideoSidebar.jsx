import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { Favorite, FavoriteBorder, Message, Share } from "@mui/icons-material";
import "../css/video-sidebar.css";

const VideoSidebar = ({ likes, comments, shares }) => {
  const [isLiked, setLiked] = useState(false);

  return (
    <div className="video-sidebar">
      <IconButton onClick={() => setLiked(!isLiked)}>
        <div className="video-sidebar__button">
          {isLiked ? <Favorite /> : <FavoriteBorder />}
          <p>{likes}</p>
        </div>
      </IconButton>

      <IconButton>
        <div className="video-sidebar__button">
          <Message />
          <p>{comments}</p>
        </div>
      </IconButton>

      <IconButton>
        <div className="video-sidebar__button">
          <Share />
          <p>{shares}</p>
        </div>
      </IconButton>
    </div>
  );
};

export default VideoSidebar;
