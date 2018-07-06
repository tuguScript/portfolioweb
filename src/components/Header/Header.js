import React, { Component } from "react";
import injectSheet from "react-jss";
import colors from '../../utils/colors'

const styles = {
  header: {
    height: '64px',
    // border: '1px solid white',
    boxShadow: `0 0px 8px 0 rgba(0, 0, 0, 0.4)`,
    width: '100%',
    position: 'fixed',
    backgroundColor: `${colors.COLOR_A_4}`
  }
};

const Header0 = ({ classes }) => <div className={classes.header}>header</div>;

const Header = injectSheet(styles)(Header0);

export default Header;
