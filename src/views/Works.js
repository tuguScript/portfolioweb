import React, { Component } from "react";
import Footer from "../components/Footer/Footer";
import Card from "../components/Card/Card";

export default class Works extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "json-server1",
        description: "typicode",
        isImage: false,
        category: "ruby:string",
        imgSource: "somethingURL"
      },
      {
        id: 2,
        title: "json-server2",
        description: "typicode",
        isImage: false,
        category: "ruby:string",
        imgSource: "somethingURL"
      },
      {
        id: 3,
        title: "json-server3",
        description: "typicode",
        isImage: true,
        category: "ruby:string",
        imgSource: "somethingURL"
      }
    ]
  };
  render() {
    var Cards = this.state.posts.map((post, i) => {
      return (
        <Card
          title={post.title}
          key={post.id}
          description="desc"
          category={post.category}
          isImage={post.isImage}
          imgSource={post.imgSource}
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
