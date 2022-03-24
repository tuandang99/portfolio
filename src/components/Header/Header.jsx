import "./header.scss";
import React from "react";

function Header() {
  return (
    <div className="wrap-header">
      <div className="navbar">
        <a href="/#">
          <h3 className="logo">Tuan</h3>
        </a>
        <div className="menu">
          <ul className="menu-links">
            <li className="menu-link">
              <a className="menu-link" href="/#">Home</a>
            </li>
            <li>
              <a className="menu-link" href="/#">About</a>
            </li>
            <li>
              <a className="menu-link" href="/#">Portfolia</a>
            </li>
            <li>
              <a className="menu-link" href="/#">Project</a>
            </li>
            <li>
              <a className="menu-link" href="/#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="social">
          <a href="/#">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="/#">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="/#">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="/#">
            <i class="fa-brands fa-instagram"></i>
          </a>
          
        </div>
      </div>
    </div>
  );
}

export default Header;
