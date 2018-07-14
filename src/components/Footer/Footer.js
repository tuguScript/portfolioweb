import React, { Component } from "react";
import injectSheet from "react-jss";
import colors from "../../utils/colors";

const styles = {
  footer: {
    position: `relative`,
    bottom: 0,
    height: 64,
    width: `100%`,
    backgroundColor: `${colors.SECONDARY}`
  },
  icons: {
    width: 320,
    fontSize: 30,
    color: `#1E2B41`,
    margin: `0 auto`,
    display: `flex`,
    justifyContent: `space-evenly`,
    alignItems: `center`,
    height: 64
  }
};

const Footer0 = ({ classes }) => (
  <div className={classes.footer}>
    <div className={classes.icons}>
      <i style={{cursor: `pointer`}}
        className="fa fab fa-facebook-f"
        onClick={() => window.open("https://www.facebook.com/Tuguldur01")}
      />
      <i style={{cursor: `pointer`}}
        className="fa fab fa-twitter"
        onClick={() => window.open("https://" + "twitter.com/tuguldur_01")}
      />
      <i style={{cursor: `pointer`}}
        className="fa fab fa-linkedin"
        onClick={() => window.open("https://www.linkedin.com/in/tuguldurtech/")}
      />
      <i style={{cursor: `pointer`}}
        className="fa fab fa-github"
        onClick={() => window.open("https://github.com/tuguScript")}
      />
      <i style={{cursor: `pointer`}}
        className="fa fas fa-envelope"
        onClick={() => window.open("mailto:tuguscript@gmail.com")}
      />
    </div>
  </div>
);

const Footer = injectSheet(styles)(Footer0);

export default Footer;
