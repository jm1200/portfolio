import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <h1>Let's chat...</h1>
        <h3>Find me @ these places.</h3>
        <a href="#" target="_blank" id="profile-link">
          <i class="fa fa-free-code-camp" />
        </a>
        <a href="#">
          <i class="fa fa-github" />
        </a>
        <a href="#">
          <i class="fa fa-facebook" />
        </a>
        <a href="#">
          <i class="fa fa-twitter" />
        </a>

        <a href="#">
          <i class="fa fa-envelope" />
        </a>
      </div>
    );
  }
}

export default Contact;
