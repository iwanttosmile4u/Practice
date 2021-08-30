import React from "react";

export class Header extends React.Component {
  render() {
    const { title, user } = this.props;
    return (
      <div>
        <h2>{title}</h2>
        <h3>Some other text</h3>
      </div>
    );
  }
}
