import React, { Component } from "react";

export default class Button extends Component {
  render() {
    const { content, handleClick, disabled } = this.props;
    return (
      <button onClick={handleClick} disabled={disabled}>
        {content}
      </button>
    );
  }
}
