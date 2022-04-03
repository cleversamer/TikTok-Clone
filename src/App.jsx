import React from "react";
import Video from "./components/Video";
import "./css/app.css";

const App = () => {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          videoUrl="https://v16-webapp.tiktok.com/ac079543c46b56b5c9cddaf526b8dd94/6249e664/video/tos/alisg/tos-alisg-pve-0037c001/00055a3ea82447339db2de9ee600d943/?a=1988&br=1752&bt=876&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3A7nz7ThCYGqDXq&l=2022040312242501024524720324AC8CD5&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajc8NTo6ZmlwOzMzODczNEApZDo5PGc4aWRnNzdkaWg0ZGcxZXNvcjRvY3NgLS1kMS1zc2AtXy0xY2BfMGEwNjNhNl46Yw%3D%3D&vl=&vr="
          channel="uzmarahil724"
          description="How to draw side face #fyp #foryou"
          song="JOVYNN Suave sound edit - jovynn"
          likes="937.1K"
          comments="2399"
          shares="6926"
        />
      </div>
    </div>
  );
};

export default App;
