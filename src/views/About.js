import React from "react";
import Footer from "../components/Footer/Footer";
import Profile from '../assets/image.png'
const About = () => {
  return (
    <div className="main">
      <h1>About Me</h1>
      <p className="display">
        Hi, I'm Tugi. I'm a software engineer based in San Francisco Bay Area.
        I've always pursued opportunities and challenges that have intrigued me.
        As a web developer, I use my obsessive attention to detail to create
        fast, beautiful, and intuitive websites. Building useful and beautiful
        software products is what gets me out of bed in the morning — aside from
        morning workouts and cashew butter.
      </p>
      <img src={Profile} alt=""/>
      <Footer />
    </div>
  );
};

export default About;
