import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div className="header-component">
        <ul className="header-unordered-list">
          <li>
            <Link to="/home">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/service">Service</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
