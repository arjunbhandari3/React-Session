import React, { Component } from "react";
import Component2 from "./Component2";

export default class Component1 extends Component {
  constructor(props) {
    super(props);
    console.log("props", this.props);
  }

  render() {
    return (
      <div>
        <Component2 body={this.props.title} />
      </div>
    );
  }
}
