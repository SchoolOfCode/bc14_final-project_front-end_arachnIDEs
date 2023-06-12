import React from "react";
import {useState} from "react";
import "./burgerMenu.css";
import { Link } from "react-router-dom";

export default function BurgerMenu() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return  <nav className="burgerMenu">
    <a href="/" className="link">
    </a>
    <button
      className="hamburger"
      onClick={() => {
        setIsNavExpanded(!isNavExpanded);
      }}>
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
      <div className={
        isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
        <ul>
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/give">Give Help</Link>
          </li>
          <li>
          <Link to="/find">Find Help</Link>
          </li>
        </ul>
      </div>
    </nav>
}