import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidbar from "./VideoSidbar";

function Video({ url, channel, description, song, likes, messages, shares }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <iframe
        onClick={handleVideoPress}
        className="video__player"
        src={url}
        ref={videoRef}
      ></iframe>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidbar likes={likes} shares={shares} messages={messages} />
    </div>
  );
}

export default Video;
