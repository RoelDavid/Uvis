import React from "react";
import './nav.css';
import navLogo from '../Assets/Uvis-logo.png';

export default function Nav() {
  return (
    <div className="container">
      <div className="row">
        <nav id="nav">
          <div className="nav-logo">
            <img src={navLogo} alt="Logo" />
          </div>
          <div className="nav-links">
            <a href="#">Services</a>
            <a href="#">About Me</a>
            <a href="#">Contact</a>
          </div>
        </nav>
      </div>
    </div>
  );
}
