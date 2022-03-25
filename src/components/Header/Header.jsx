import "./header.scss";
import React from "react";

function Header() {
  return (
    <div className="wrap-header">
      <div className="navbar">
        <a href="/#">
          <h3 className="logo">
            Tuan<span style={{color:'red'}}>.</span>
          </h3>
        </a>
        <div className="menu">
          <ul className="menu-links">
            <li>
              <a className="menu-link active" href="/#">
                Home
              </a>
            </li>
            <li>
              <a className="menu-link" href="/#">
                About
              </a>
            </li>
            <li>
              <a className="menu-link" href="/#">
                Portfolio
              </a>
            </li>
            <li>
              <a className="menu-link" href="/#">
                Project
              </a>
            </li>
            <li>
              <a className="menu-link" href="/#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <h3 className="head-footer">
            Make by heart
        </h3>
      </div>
    </div>
  );
}

export default Header;
