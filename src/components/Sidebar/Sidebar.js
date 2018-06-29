import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import injectSheet from "react-jss";
import colors from "../../utils/colors";

const styles = {
  sidebar: {
    width: "256px",
    minHeight: "836px",
    margin: "0px 0px 0px 0px",
    position: "fixed",
    padding: "10px 5px",
    fontSize: "20px",
    fontFamily: `'Lora', serif`,
    lineHeight: "1.5",
    overflow: "hidden",
    opacity: "0.65",
    background: "#1E2B41",
    "&:before": {
      content: "",
      margin: "-35px",
      position: "absolute",
      top: "0",
      right: "0",
      bottom: "0",
      left: "0",
      filter: "blur(20px)",
      zIndex: "-1"
    }
  },
  content: {
    top: "64px",
    position: "fixed",
    zIndex: "10"
  },
  header: {
    position: "fixed",
    display: "flex",
    zIndex: "10",
    width: "256px",
    height: "64px",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: `1px solid ${colors.PRIMARY}`
  }
};

export class Sidebar extends Component {
  render() {
    const children = this.props.children;
    const classes = this.props.classes;
    return (
      <div>
        <div className={this.props.classes.sidebar} />
        <div className={classes.header}>
          <h3>Tugi</h3>
        </div>
        <div className={classes.content}>
          <ul>
            {React.Children.map(children, (child, i) => {
              // Ignore the first child
              if (i < 0) return;
              return <li>{child}</li>;
            })}
          </ul>
        </div>
        <div>
          <a>tuguscript@gmail.com</a>
        </div>
      </div>
    );
  }
}

const StyledSidebar = injectSheet(styles)(Sidebar);

export default StyledSidebar;
