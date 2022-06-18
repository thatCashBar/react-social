import React from "react";
import "./post.css";
import { MoreVert } from "@mui/icons-material";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="/assets/person/profilePic_3.png"
              alt=""
            />
            <span className="postUsername">John Smith</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Check out this cool Train Station!</span>
          <img className="postImg" src="assets/post/post_1.jpg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/thumbs_up.png" alt="" />
            <img className="heartIcon" src="assets/heart.png" alt="" />
            <span className="postLikeCounter">32 Interactions</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
