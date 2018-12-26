import React, { Component } from "react";
import "./Projects.css";
import tribute from "./img/tribute.png";
import tech from "./img/tech.png";
import products from "./img/products.png";
import forms from "./img/forms.png";

class Projects extends Component {
  render() {
    return (
      <div id="projects">
        <p>These are some of my projects...</p>
        <div className="projects-grid">
          <div className="project">
            <img src={tribute} className="project-img" alt="" />
            <div className="project-tile">
              <a href="./tribute-page/index.html">Tribute Page</a>
            </div>
          </div>
          <div className="project">
            <img src={forms} className="project-img" alt="" />
            <div className="project-tile">
              <a href="./survey-form/index.html">Survey Form</a>
            </div>
          </div>
          <div className="project">
            <img src={products} className="project-img" alt="" />
            <div className="project-tile">
              <a href="./product-landing-page/index.html">
                Product Landing Page
              </a>
            </div>
          </div>
          <div className="project">
            <img src={tech} className="project-img" alt="" />
            <div className="project-tile">
              <a href="./technical-documentation-page//index.html">
                Technical Documentation Page
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
