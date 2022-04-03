import React from "react";
import Ticker from "react-ticker";
import { MusicNote } from "@mui/icons-material";
import "../css/video-footer.css";

const VideoFooter = () => {
  return (
    <div className="video-footer">
      <div className="video-footer__text">
        <h3>@username</h3>

        <p>this is a description</p>

        <div className="video-footer__ticker">
          <MusicNote className="video-footer__icon" />

          <Ticker className="ticker" mode="smooth">
            {({ index }) => <p>Yoooo what's up guys</p>}
          </Ticker>
        </div>
      </div>

      <img
        src="https://static.thenounproject.com/png/934821-200.png"
        alt="record"
        className="video-footer__record"
      />
    </div>
  );
};

export default VideoFooter;
