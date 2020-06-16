import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }

  decrement() {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  }

  reset() {
    this.setState((state) => ({
      count: 0,
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-counter">
          <h1 className="App-title">Counter</h1>
          <div>
            <button onClick={this.increment} className="App-btn">
              increment
            </button>
            <button onClick={this.decrement} className="App-btn">
              decrement
            </button>
            <button onClick={this.reset} className="App-btn">
              reset
            </button>
          </div>
          <h2>Current: {this.state.count}</h2>
        </header>
      </div>
    );
  }
}
