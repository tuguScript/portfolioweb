import React, { Component } from "react";
import injectSheet from "react-jss";

const styles = {
  header: {
    height: '64px'
  }
};

const Header0 = ({ classes }) => <div className={classes.header}>header</div>;

const Header = injectSheet(styles)(Header0);

export default Header;
