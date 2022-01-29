import React, { Component } from "react";
import Button from "./Button";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: parseInt(props.value),
    };
  }

  increaseOnClick = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };

  decreaseOnClick = () => {
    if (this.state.value > 0) {
      this.setState({
        value: this.state.value - 1,
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <h2>{this.state.value}</h2>
        <Button onClick={this.increaseOnClick} content="+" />
        <Button onClick={this.decreaseOnClick} content="-" />
      </div>
    );
  }
}
