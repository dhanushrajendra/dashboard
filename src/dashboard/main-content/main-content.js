import React, { Component } from "react";
import "./main-content.scss";
import OverView from "./overview/overview";

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 1,
      arrayToLoop: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const schInfo = ["Overview", "Content", "Toolkit", "Forum", "Scores"];
    const schVal = [1, 2, 3, 4, 5];
    const arrayToLoop = [];
    const objToShow = {};
    schInfo.forEach((name, index) => {
      objToShow["name"] = schInfo[index];
      objToShow["value"] = schVal[index];
      arrayToLoop.push(Object.assign({}, objToShow));
      this.setState({ arrayToLoop: arrayToLoop });
    });
  };

  setTab = (num) => {
    return this.setState({ tab: num });
  };

  istabSelected = (num) => {
    return this.state.tab === num;
  };

  render() {
    // {this.props.selectedKey} key fron side bar selected
    return (
      <div className="student-content">
        <div className="nav">
          {this.state.arrayToLoop.map((ele, i) => (
            <div
              className={
                "nav-items " +
                (this.istabSelected(ele.value) ? "active" : "inactive")
              }
              key={i}
              onClick={() => this.setTab(ele.value)}
            >
              {ele.name}
            </div>
          ))}
        </div>
        <div className="nav-content">
          <div
            className={
              "nav-content-items " +
              (this.istabSelected(1) ? "active" : "inactive")
            }
          >
            <OverView />
          </div>
          <div
            className={
              "nav-content-items " +
              (this.istabSelected(2) ? "active" : "inactive")
            }
          >
            Content
          </div>
          <div
            className={
              "nav-content-items " +
              (this.istabSelected(3) ? "active" : "inactive")
            }
          >
            Toolkit
          </div>
          <div
            className={
              "nav-content-items " +
              (this.istabSelected(4) ? "active" : "inactive")
            }
          >
            Forum
          </div>
          <div
            className={
              "nav-content-items " +
              (this.istabSelected(5) ? "active" : "inactive")
            }
          >
            Scores
          </div>
        </div>
      </div>
    );
  }
}

export default MainContent;
