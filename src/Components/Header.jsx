import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import garuman from "../assets/garuman.jpg";

export default function Header() {
  return (
    <div>
      <div className="header-component">
        <div>
          <img src={garuman} alt="" className="logo-img" />
        </div>
        <div>
          <ul className="header-unordered-list">
            <li>
              <Link to="/home" className="link-header">
                Home
              </Link>
            </li>
            <li>
              <Link to="/service" className="link-header">
                Product
              </Link>
            </li>
            <li>
              <Link to="/about" className="link-header">
                About
              </Link>
            </li>

            <li>
              <Link to="/contact" className="link-header">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
