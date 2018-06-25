import React from "react";

const Card = ({ post }) => {
  return post.isImage ? (
    <div>
      img
      {post.title}-<img src={post.imgSource} alt="" />
      <i className="fa fas fa-expand" />
    </div>
  ) : (
    <div onClick={() => window.open("http://" + post.link)}>
      <div className="picture">
        <img src={post.imgSource} alt="" />
      </div>
      <div className="head">{post.title}</div>
      <div className="body">{post.category}</div>
      <div className="caption">{post.category}</div>
      <i className="fa fas fa-link" />
    </div>
  );
};

export default Card;
