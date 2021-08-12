import React from "react";

export class Email extends React.Component {
  render() {
    const { email } = this.props;

    return <div>{email.title}</div>;
  }
}
