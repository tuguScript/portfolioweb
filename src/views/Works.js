import React, { Component } from "react";
import Footer from "../components/Footer/Footer";
import Card from "../components/Card/Card";
import posts from '../utils/data'

export default class Works extends Component {
  render() {
    var Cards = posts.map((post, i) => {
      return (
        <Card
          key={post.id}
          post={post}
        />
      );
    });
    return (
      <div>
        <h1>Works</h1>
        {Cards}
        <Footer />
      </div>
    );
  }
}
