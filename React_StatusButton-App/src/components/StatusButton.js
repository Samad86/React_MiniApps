import React, { Component } from "react";
import "./App.css";

export default class StatusButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Button pressed",
    };
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.updateData(this.state.name);
          }}
          className="App-btn"
        >
          Press button
        </button>
      </div>
    );
  }
}
