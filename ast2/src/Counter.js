import React, { Component } from "react";
import Button from "./Button";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increaseOnClick = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  decreaseOnClick = () => {
    if (this.state.count > 0) {
      this.setState((prevState) => {
        return {
          count: prevState.count - 1,
        };
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <h2>{this.state.count}</h2>
        <Button onClick={this.increaseOnClick} content="+" />
        <Button onClick={this.decreaseOnClick} content="-" />
      </div>
    );
  }
}
