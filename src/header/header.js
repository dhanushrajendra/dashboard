import React, { Component } from "react";
import logo from "../assets/images/logo-new.svg";
import "./header.scss";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="navigation">
          <img src={logo} alt="shaw-logo" />
        </div>
        <div className="course-name">
          Diploma in <br />
          Graphic Design
        </div>
      </div>
    );
  }
}

export default Header;
