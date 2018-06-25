import React, { Component } from "react";
import AntButton from "antd/lib/button";
import colors from "../../utils/colors";

const Button = ({ children, type }) => {
  if (type == "primary") {
    return (
      <AntButton style={{ backgroundColor: colors.PRIMARY }}>
        <a style={{ color: "white" }}>{children}</a>
      </AntButton>
    );
  }
  if (type == "secondary") {
    return (
      <AntButton style={{ backgroundColor: colors.SECONDARY }}>
        <a style={{ color: "white" }}>{children}</a>
      </AntButton>
    );
  } else {
    return (
      <AntButton style={{ backgroundColor: "black" }}>
        <a style={{ color: "white" }}>{children}</a>
      </AntButton>
    );
  }
};

export default Button;
