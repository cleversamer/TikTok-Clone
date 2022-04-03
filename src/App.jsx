import React, { useState, useEffect } from "react";
import db from "./firebase";
import Video from "./components/Video";
import "./css/app.css";

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) => {
      setVideos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({
            id,
            videoUrl,
            channel,
            description,
            song,
            likes,
            comments,
            shares,
          }) => (
            <Video
              key={id}
              videoUrl={videoUrl}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              comments={comments}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
};

export default App;
