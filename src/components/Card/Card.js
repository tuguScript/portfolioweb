import React from "react";

const Card = ({post}) => {
  return post.isImage ? (
    <div>
      img
      {post.title}-<img src={post.imgSource} alt=""/>
    </div>
  ) : (
    <div>
      card
      {post.title}-
      {post.description}-
      {post.category}-{post.isImage}-<img src={post.imgSource} alt=""/>
    </div>
  );
};

export default Card;
