import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Sidebar extends Component {
  render() {
    const children = this.props.children;
    return (
      <div>
        <ul>
          {React.Children.map(children, (child, i) => {
            // Ignore the first child
            if (i < 0) return;
            return <li>{child}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Sidebar;
