import React, { useState } from "react";
import logo from "../assets/logo.png";
import "./SideNavbar.scss";
import { exit } from "../assets/svgFile";

const links = [
  { label: "Getting Started", value: "getting-started" },
  { label: "Tables", value: "tables" },
  { label: "Query Editor", value: "query-editor" }
];

const SideNavbar = () => {
  const [activeLink, setActiveLink] = useState("query-editor");
  return (
    <div className="side-navbar">
      <img src={logo} alt="logo" className="app-logo" />
      <hr className="h-line" />
      <div className="nav-links">
        <ul className="link-items">
          {links.map((link) => (
            <li
              onClick={() => {
                setActiveLink(link.value);
              }}
              className={`link-item ${activeLink === link.value && "active"}`}
            >
              {link.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="logout">
        <span className="icon">{exit()}</span>
        <span className="text">Logout</span>
      </div>
    </div>
  );
};

export default SideNavbar;
