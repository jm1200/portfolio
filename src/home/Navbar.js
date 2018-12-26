import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav id="navbar">
        <ul>
          <li>
            <a href="#welcome-section">About</a>
          </li>
          <li>
            <a href="#projects">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
