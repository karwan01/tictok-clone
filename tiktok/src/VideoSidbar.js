import React from "react";
import "./VideoSidbar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
import { useState } from "react";
function VideoSidbar({ likes, shares, messages }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="videoSidbar">
      <div className="videoSidbar__button">
        {liked ? (
          <FavoriteIcon onClick={() => setLiked(false)} fontSize="large" />
        ) : (
          <FavoriteBorderIcon onClick={() => setLiked(true)} fontSize="large" />
        )}
        <p>{liked ? Number(likes) + 1 : Number(likes)}</p>
      </div>
      <div className="videoSidbar__button">
        <MessageIcon className="large" />
        <p>{messages}</p>
      </div>
      <div className="videoSidbar__button">
        <ShareIcon className="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidbar;
