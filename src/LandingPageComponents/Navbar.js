import React, { memo } from "react";
import logo from "../assets/logo.png";

const navLinks = ["Home", "SQLEditor", "About", "Contact Us"];

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-items-container">
        <ul className="nav-items">
          {navLinks.map((link, idx) => (
            <li key={link + idx} className="nav-item">
              {link}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default memo(Navbar);
