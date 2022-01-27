import React, { Component } from "react";
import Name from "./Name";
import Position from "./Position";

export default class Company extends Component {
  render() {
    return (
      <div>
        <Position position={this.props.position} />
        <Name name={this.props.name} />
      </div>
    );
  }
}
