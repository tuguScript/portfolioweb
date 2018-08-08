import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import injectSheet from "react-jss";
import colors from "../../utils/colors";
import { height } from "window-size";
import { List, Icon } from "antd";

const styles = {
  sidebar: {
    width: "256px",
    minHeight: "836px",
    height: '100%',
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
    zIndex: "10",
    width: "256px",
    paddingLeft: "30px"
  },
  header: {
    position: "fixed",
    display: "flex",
    zIndex: "10",
    width: "256px",
    height: "64px",
    alignItems: "center",
    // justifyContent: "center",
    borderBottom: `1px solid ${colors.COLOR_A_3}`
  },
  footer: {
    position: "fixed",
    bottom: "0",
    width: 256,
    height: 80,
    padding: 30
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
          <h3 style={{paddingLeft:40}}>✌️ Tugiii</h3>
        </div>
        <div className={classes.content}>{children}</div>
        <div className={classes.footer}>
          <Icon
            type="info-circle-o"
            style={{ fontSize: 14, marginRight: "20px", color: "white" }}
          />
          <a style={{color: 'white'}}>tuguscript@gmail.com</a>
        </div>
      </div>
    );
  }
}

const StyledSidebar = injectSheet(styles)(Sidebar);

export default StyledSidebar;
