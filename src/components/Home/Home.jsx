import "./home.scss";
import React from "react";

function Home() {
  return (
    <div className="home">
      <div className="avatar mb-2r"></div>
      <h1 className="name mb-2r">Dang Anh Tuan</h1>
      <p className="job mb-2r">I'm a Front-End developer</p>
      <div className="social mb-2r">
        <a className="social-logo" href="/#">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a className="social-logo" href="/#">
          <i class="fa-brands fa-facebook-f"></i>
        </a>
        <a className="social-logo" href="/#">
          <i class="fa-brands fa-github"></i>
        </a>
        <a className="social-logo" href="/#">
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
      <button className="hire">Hire me</button>
      <div className="scroll">
        <p>Scroll down</p>
        <i class="fa-solid fa-computer-mouse"></i>
      </div>
    </div>
  );
}

export default Home;
