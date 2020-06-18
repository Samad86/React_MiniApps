import React, { Component } from "react";
import "./App.css";
import Input from "./Input.js";
import RenderInput from "./RenderInput.js";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-render">
          <Input
            input={this.state.inputValue}
            handleChange={this.handleChange}
          />

          <RenderInput input={this.state.inputValue} />
        </header>
      </div>
    );
  }
}
