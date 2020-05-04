import React, { Component } from "react";
import "./dashboard.scss";
import Header from "../header/header";
import Footer from "../footer/footer";
import MainContent from "./main-content/main-content";
import SideBar from "./side-bar/side-bar";

class Dashboard extends Component {
  render() {
    return (
      <div className="main-dashboard">
        <Header />
        <div className="main-content">
          <SideBar></SideBar>
          <MainContent></MainContent>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
