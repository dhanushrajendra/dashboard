import React, { Component } from "react";
import "./side-bar.scss";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayToLoop: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const schInfo = [
      "Learn",
      "Schedule",
      "Achievements",
      "Course Catalog",
      "Add Friend",
    ];
    const schVal = [
      "home-filled",
      "book",
      "fire-filled",
      "gift-filled",
      "heart-filled",
    ];
    const arrayToLoop = [];
    const objToShow = {};
    schInfo.forEach((name, index) => {
      objToShow["name"] = schInfo[index];
      objToShow["value"] = schVal[index];
      arrayToLoop.push(Object.assign({}, objToShow));
      this.setState({ arrayToLoop: arrayToLoop });
    });
  };

  render() {
    return (
      <div className="side-bar">
        <div className="components">
          {this.state.arrayToLoop.map((ele, i) => (
            <div className="single-component shaw-icon" key={i}>
              <i className={"icon-" + ele.value}>{ele.name}</i>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SideBar;
