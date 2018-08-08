import React, { Component } from "react";
import injectSheet from "react-jss";
import colors from "../../utils/colors";
import { Button, Menu, Dropdown, Icon } from "antd";

const styles = {
  header: {
    height: "64px",
    // border: '1px solid white',
    boxShadow: `0 0px 8px 0 rgba(0, 0, 0, 0.4)`,
    width: `calc(100% - 256px)`,
    position: "fixed",
    backgroundColor: `${colors.COLOR_A_4}`,
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center"
  },
  button: {
    paddingRight: 20
  }
};

let handleMenuClick = () => {
  alert("hi");
};

const menu = (
  <Menu
    onClick={handleMenuClick}
    style={{ backgroundColor: `${colors.COLOR_A_4}` }}
  >
    <Menu.Item key="1" style={{ color: "white" }}>
      1st item
    </Menu.Item>
    <Menu.Item key="2" style={{ color: "white" }}>
      2nd item
    </Menu.Item>
    <Menu.Item key="3" style={{ color: "white" }}>
      3rd item
    </Menu.Item>
  </Menu>
);

const Header0 = ({ classes }) => (
  <div className={classes.header}>
    <div className={classes.button}>
      <Dropdown overlay={menu}>
        <Button style={{ backgroundColor: `${colors.COLOR_A_4}` }}>
          <span style={{ color: "white" }}>Change Background</span>
          <Icon type="down" style={{ color: "white" }} />
        </Button>
      </Dropdown>
    </div>
  </div>
);

const Header = injectSheet(styles)(Header0);

export default Header;
