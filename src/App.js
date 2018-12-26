import React, { Component } from "react";

import "./App.css";
import Navbar from "./home/Navbar";
import Welcome from "./home/Welcome";
import Projects from "./home/Projects";
import Contact from "./home/Contact";
import Footer from "./home/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Welcome />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
