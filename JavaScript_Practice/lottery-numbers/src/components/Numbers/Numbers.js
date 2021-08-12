import React, { Component } from "react";
import Button from "../Button/Button";

export default class Numbers extends Component {
  render() {
    const { numbers, content, deleteNumber } = this.props;
    const generatedNumbers = numbers.map((n, index) => (
      <li key={index}>
        {n} <Button content="X" handleClick={() => deleteNumber(index)} />
      </li>
    ));
    return (
      <div>
        <ul>{generatedNumbers}</ul>
      </div>
    );
  }
}
