import React, { Component } from "react";
import Card from "../components/Card/Card";
import posts from "../utils/data";
import injectSheet from "react-jss";

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: `1fr 1fr 1fr`,
    columnGap: "24px",
    margin: "0px 24px"
  }
};

class Works0 extends Component {
  render() {
    var Cards = posts.map((post, i) => {
      return <Card key={post.id} post={post} />;
    });
    return (
      <div>
        <h1 style={{ width: "130px" }}>Works</h1>
        <div className={this.props.classes.container}>{Cards}</div>
      </div>
    );
  }
}

const Works = injectSheet(styles)(Works0);

export default Works;
