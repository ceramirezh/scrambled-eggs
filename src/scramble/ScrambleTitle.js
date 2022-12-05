import React, { Component } from "react";

import Title from "../components/Title";
import "../App.css";

class ScrambleTitle extends Component {
  state = { dps: 25 };

  start = () => {
    this.state.start();
  };

  pause = () => {
    this.state.pause();
  };
  xj;
  render() {
    return (
      <div className="App">
        <section>
          <Title />
        </section>
      </div>
    );
  }
}

export default ScrambleTitle;
