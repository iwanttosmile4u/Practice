import React, { Component } from "react";

export default class Email extends Component {
  render() {
    const { email } = this.props;
    return <li>{email.topic}</li>;
  }
}
