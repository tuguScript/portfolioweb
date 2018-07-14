import React from "react";
import colors from "../../utils/colors";
import injectSheet from "react-jss";

const styles = {
  description: {
    padding: 25,
    display: `flex`,
    justifyContent: `space-between`,
    height: 129
  },
  rightDesc: {
    alignSelf: `flex-end`
  },
  leftDesc: {
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `space-between`
  },
  imageCard: {
    cursor: `pointer`,
    maxWidth: "363px",
    justifySelf: `center`,
    height: 383,
    backgroundColor: `#2E3941`
  },
  imageCardDesc: {
    height: 57,
    display: `flex`,
    justifyContent: `space-between`,
    alignItems: `center`,
    padding: `0px 25px`
  }
};

const Card0 = ({ post, classes }) => {
  return post.isImage ? (
    <div className={classes.imageCard}>
      <img
        src={post.imgSource}
        alt=""
        style={{ width: "100%", height: `326px`, objectFit: "cover" }}
      />

      <div className={classes.imageCardDesc}>
        <div className="head">{post.title}</div>
        <i className="fa fas fa-expand" />
      </div>
    </div>
  ) : (
    <div
      onClick={() => window.open("http://" + post.link)}
      style={{
        justifySelf: `center`,
        maxWidth: "363px",
        backgroundColor: `#2E3941`,
        marginBottom: `24px`,
        height: `383px`,
        cursor: `pointer`
      }}
    >
      <div className="picture">
        <img src={post.imgSource} alt="" style={{ width: "100%" }} />
      </div>
      <div className={classes.description}>
        <div className={classes.leftDesc}>
          <div className="head">{post.title}</div>
          <div className="body">{post.category}</div>
          <div className="caption">{post.category}</div>
        </div>
        <div className={classes.rightDesc}>
          <i className="fa fas fa-link" />
        </div>
      </div>
    </div>
  );
};

const Card = injectSheet(styles)(Card0);

export default Card;
