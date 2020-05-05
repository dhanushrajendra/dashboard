import React, { Component } from "react";
import "./overview.scss";

class OverView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="overview-content">
        <div className="items-overview">
          <div className="lesson-progress">
            <div className="lesson">
              <h1>Lesson 3</h1>
              <h2>
                Starts in <span>20 mins</span>
              </h2>
              <div className="cta">
                <button className="join-class">Join Class</button>
                <button className="reschedule">Reschedule</button>
              </div>
            </div>
          </div>
          <div className="course-progress">course</div>
        </div>
      </div>
    );
  }
}

export default OverView;
