import React, { Component } from "react";

const Footer = () => (
  <div className="footer">
    <i className="fa fab fa-facebook-f" onClick={() => window.open('https://www.facebook.com/Tuguldur01')}/>
    <i className="fa fab fa-twitter" onClick={() => window.open("https://" + "twitter.com/tuguldur_01")}/>
    <i className="fa fab fa-linkedin" onClick={() => window.open("https://www.linkedin.com/in/tuguldurtech/")}/>
    <i className="fa fab fa-github" onClick={() => window.open("https://github.com/tuguScript")}/>
    <i className="fa fas fa-envelope" onClick={() => window.open("mailto:tuguscript@gmail.com")}/>
  </div>
);

export default Footer;
