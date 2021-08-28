import React, { Component } from "react";
import Button from "../Button/Button";

export default class Numbers extends Component {
  render() {
    const { numbers, deleteNumbers } = this.props;
    const numbersList = numbers.map((n, index) => (
      <div key={index}>
        {n}
        <Button content="X" handleClick={() => deleteNumbers(index)} />
      </div>
    ));
    return <div>{numbersList}</div>;
  }
}
