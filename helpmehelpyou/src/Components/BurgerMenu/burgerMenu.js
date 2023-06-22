import React, { useState } from "react";
import { Link } from "react-router-dom";
// import logo from "./logo.png";
import horizontalLogo from "./horizontal_logo.jpg"

import "./burgerMenu.css";

export default function BurgerMenu({handleLogout}) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleNavToggle = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  const handleLinkClick = () => {
    setIsNavExpanded(false);
  };

  return (
    <nav className="burgerMenu">
      <div className = "login-register-buttons">

        <Link to = "login"><button className="login-button" onClick={handleLogout}>Login</button></Link>
        {/* <button className="register-button">Register</button> */}
     
      </div>
    <Link to="/"><img src={horizontalLogo} alt="HelpMeHelpYou logo" className="logo"></img></Link>
      <Link to="/" className="link"></Link>
      <button className="hamburger-dropdown-menu" alt="dropdown menu" onClick={handleNavToggle}>
        {/* Hamburger SVG code */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          background="green"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <Link to="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/give" onClick={handleLinkClick}>
              Give Help
            </Link>
          </li>
          <li>
            <Link to="/find" onClick={handleLinkClick}>
              Find Help
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
