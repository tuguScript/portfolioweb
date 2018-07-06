import React from "react";
import colors from "../../utils/colors";

const Card = ({ post }) => {
  return post.isImage ? (
    <div style={{ maxWidth: "363px", justifySelf: `center` }}>
      img
      {post.title}-<img src={post.imgSource} alt="" style={{ width: "100%" }} />
      <i className="fa fas fa-expand" />
    </div>
  ) : (
    <div
      onClick={() => window.open("http://" + post.link)}
      style={{
        justifySelf: `center`,
        maxWidth: "363px",
        backgroundColor: `${colors.SECONDARY}`,
        border: "1px solid black",
        marginBottom: `24px`
      }}
    >
      <div className="picture">
        <img src={post.imgSource} alt="" style={{ width: "100%" }} />
      </div>
      <div className="head">{post.title}</div>
      <div className="body">{post.category}</div>
      <div className="caption">{post.category}</div>
      <i className="fa fas fa-link" />
    </div>
  );
};

export default Card;
