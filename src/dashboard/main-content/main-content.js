import React, { Component } from "react";
import "./main-content.scss";

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="main-content">{this.props.selectedKey}</div>;
  }
}

export default MainContent;
