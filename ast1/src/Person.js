import React, { Component } from "react";
import Address from "./Address";
import Name from "./Name";

export default class Person extends Component {
  render() {
    return (
      <div>
        <Name name={this.props.name} />
        <Address address={this.props.address} />
      </div>
    );
  }
}
