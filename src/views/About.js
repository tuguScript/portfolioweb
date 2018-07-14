import React from "react";
import Profile from "../assets/image.png";
import injectSheet from "react-jss";
import Works from "../views/Works";

const styles = {
  body: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    flexGrow: 2,
    padding: "30px"
  },
  profilePic: {
    flexGrow: 1,
    padding: "30px"
  }
};

const About0 = ({ classes }) => {
  return (
    <div>
      <h1 style={{ width: "210px", marginBottom: "0px" }}>About Me</h1>
      <div className={classes.body}>
        <div className={classes.text}>
          <p className="display">
            Hi, I'm Tugi. I'm a software engineer based in San Francisco Bay
            Area.<br />
            <br />I've always pursued opportunities and challenges that have
            intrigued me. As a web developer, I use my obsessive attention to
            detail to create fast, beautiful, and intuitive websites.<br />
            <br />
            Building useful and beautiful software products is what gets me out
            of bed in the morning — aside from morning workouts and cashew
            butter.
          </p>
        </div>
        <div className={classes.profilePic}>
          <img src={Profile} alt="" />
        </div>
        {/* <Footer /> */}
      </div>
      <Works />
    </div>
  );
};

const About = injectSheet(styles)(About0);

export default About;
