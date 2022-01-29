import React, { Component } from "react";

export default class Component1 extends Component {
  componentWillUnmount() {
    console.log("Component will unmount");
  }

  render() {
    return (
      <div>
        <h1>{this.props.text}</h1>
        {this.props.children}
      </div>
    );
  }
}
