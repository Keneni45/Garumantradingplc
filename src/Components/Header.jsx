import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Home from "../Pages/Home";

export default function Header() {
  return (
    <div>
      <div className="header-component">
        <ul className="header-unordered-list">
          <Link to={Home}>
            <li>Home</li>
          </Link>
          <li>About</li>
          <li>Service</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}
