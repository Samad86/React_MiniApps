import React, { Component } from "react";
import "./App.css";
import StatusButton from "./StatusButton";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Button not pressed",
    };

    this.updateData = this.updateData.bind(this);
  }

  updateData = (value) => {
    this.setState({
      name: value,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-status">
          <p className="App-text">State: {this.state.name}</p>

          <StatusButton updateData={this.updateData} />
        </header>
      </div>
    );
  }
}
