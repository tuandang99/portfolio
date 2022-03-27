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
                I am Tuan, web developer from Ho Chi Minh, Viet Nam. I have rich
                experience in web site design and building and customization,
                also I am good at WordPress.
              </p>
              <button className="down-btn">Download CV</button>
            </div>
            <div className="right">
              <div className="right-item">
                <div className="right-item-title">
                  <p>Development</p>
                  <span>85%</span>
                </div>
                <div className="range">
                  <div className="percent"></div>
                </div>
              </div>
              <div className="right-item">
                <div className="right-item-title">
                  <p>Creative</p>
                  <span>85%</span>
                </div>
                <div className="range">
                  <div className="percent"></div>
                </div>
              </div>
              <div className="right-item">
                <div className="right-item-title">
                  <p>Hardworking</p>
                  <span>85%</span>
                </div>
                <div className="range">
                  <div className="percent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
