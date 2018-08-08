import React, { Component } from "react";
import AntButton from "antd/lib/button";
import colors from "../../utils/colors";

const Button = (props, { children, type, onClick }) => {
  if (props.type == "primary") {
    return (
      <AntButton
        style={{ backgroundColor: colors.PRIMARY }}
        onClick={() => props.onClick()}
      >
        <a style={{ color: "white" }}>{props.children}</a>
      </AntButton>
    );
  }
  if (props.type == "secondary") {
    return (
      <AntButton
        style={{ backgroundColor: colors.SECONDARY }}
        onClick={() => props.onClick()}
      >
        <a style={{ color: "white" }}>{props.children}</a>
      </AntButton>
    );
  } else {
    return (
      <AntButton
        style={{ backgroundColor: "black" }}
        onClick={() => props.onClick()}
      >
        <a style={{ color: "white" }}>{props.children}</a>
      </AntButton>
    );
  }
};

export default Button;
