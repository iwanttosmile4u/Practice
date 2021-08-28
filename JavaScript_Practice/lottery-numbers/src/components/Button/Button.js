import React, { Component } from "react";

export default class Button extends Component {
  render() {
    const { content, handleClick } = this.props;
    return <button onClick={handleClick}>{content}</button>;
  }
}
