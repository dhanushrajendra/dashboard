import React, { Component } from "react";
import "./dashboard.scss";
import Header from "../header/header";
import Footer from "../footer/footer";
import MainContent from "./main-content/main-content";
import SideBar from "./side-bar/side-bar";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKey: "Learn",
    };
  }

  setSelectedValue = (name) => {
    this.setState({ selectedKey: name });
  };

  render() {
    return (
      <div className="main-dashboard">
        <Header />
        <div className="main-content">
          <SideBar triggerParentUpdate={this.setSelectedValue}></SideBar>
          <MainContent selectedKey={this.state.selectedKey}></MainContent>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
