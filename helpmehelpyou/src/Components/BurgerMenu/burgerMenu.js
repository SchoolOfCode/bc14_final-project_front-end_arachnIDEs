import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import logo from "./logo.png";
import horizontalLogo from "./horizontal_logo.jpg";
import "./burgerMenu.css";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_ANON_KEY
);

export default function BurgerMenu({ session, setSession }) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleNavToggle = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  const navigate = useNavigate();

  const handleLinkClick = () => {
    setIsNavExpanded(false);
  };

  const handleLogout = async () => {
    if (session) {
      await supabase.auth.signOut();
      navigate("/");
      setSession(null);
    }
  };

  return (
    <nav className="burgerMenu">
      <div className="nav-menu-container">
        {!session && (
          <div className="login-register-buttons">
            <Link to="/login" className="login-link">
              <button className="login-button">Login / Register</button>{" "}
            </Link>
          </div>
        )}
        {session && (
          <button className="register-button" onClick={handleLogout}>
            LogOut
          </button>
        )}
        <Link to="/" className="logo-anchor">
          <img
            src={horizontalLogo}
            alt="HelpMeHelpYou logo"
            className="logo"
          ></img>
        </Link>
        {/* <Link to="/" className="link"></Link> */}

        <div>
          <button
            className="hamburger-dropdown-menu"
            alt="dropdown menu"
            onClick={handleNavToggle}
          >
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
              {session && (
                <li>
                <Link to="/myprofile" onClick={handleLinkClick}>
                  My Profile
                </Link>
              </li>
        )}
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
        </div>
      </div>
    </nav>
  );
}
