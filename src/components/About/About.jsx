import "./about.scss";
import React from "react";
import avatar from "../../asset/images/avatar.jpg";

function About() {
  return (
    <div className="about">
      <div className="about-content">
        <h1 className="title">About Me</h1>
        <div className="content">
          <div className="avatar">
            <img className="avatar-img" src={avatar} alt="" />
          </div>
          <div className="intro">
            <div className="left">
              <p className="left-content">
                I am Bolby Doe, web developer from London, United Kingdom. I
                have rich experience in web site design and building and
                customization, also I am good at WordPress.
              </p>
              <button className="down-btn">Download CV</button>
            </div>
            <div className="right"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
