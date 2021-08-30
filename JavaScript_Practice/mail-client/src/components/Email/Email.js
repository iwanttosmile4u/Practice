import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Email extends Component {
  render() {
    const { email } = this.props;
    return <li>{email.topic}</li>;
  }
}

Email.propTypes = {
  email: PropTypes.object.isRequired,
};
