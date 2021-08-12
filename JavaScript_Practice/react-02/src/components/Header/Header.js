import React from "react";

export class Header extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <div>
        <h2>{title}</h2>
      </div>
    );
  }
}
