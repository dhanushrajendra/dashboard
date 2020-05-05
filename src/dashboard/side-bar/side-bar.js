import React, { Component } from "react";
import "./side-bar.scss";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayToLoop: [],
      valueSelected: "",
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

  setSelectedValue(name) {
    this.props.triggerParentUpdate(name);
  }

  render() {
    return (
      <div className="side-bar">
        <div className="components">
          {this.state.arrayToLoop.map((ele, i) => (
            <div
              className="single-component shaw-icon"
              key={i}
              onClick={() => this.setSelectedValue(ele.name)}
            >
              <i className={"icon-" + ele.value}></i>
              <p>{ele.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SideBar;
