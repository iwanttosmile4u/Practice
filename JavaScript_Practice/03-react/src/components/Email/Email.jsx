import React, { Component } from "react";
import "./Email.css";

class Email extends Component {
  state = {
    isHiddenText: true,
  };
  render() {
    const { self } = this.props;
    const { isHiddenText } = this.state;
    return (
      <div className="email" onClick={(e) => this.toggleText(e)}>
        <p className="email-info1">
          from: <a href={`mailto:${self.form}`}> {self.from}</a>{" "}
        </p>
        <p className="email-info2">
          to: <a href={`mailto:${self.to}`}> {self.to}</a>
        </p>
        {!isHiddenText && <p className="email-text">{self.text}</p>}
      </div>
    );
  }
  toggleText(e) {
    const { isHiddenText } = this.state;
    if (
      !e.target.classList.contains("email-info1") &&
      !e.target.classList.contains("email-info2") &&
      !e.target.classList.contains("email-text")
    ) {
      this.setState({ isHiddenText: !isHiddenText });
    }
  }
}

export default Email;
