import React, { Component } from "react";
import PropTypes from "prop-types";
import "./EmailsList.css";
import Email from "../Email/Email";

export default class EmailsList extends Component {
  //   static propTypes = {
  //     list: PropTypes.arrayOf(
  //       PropTypes.shape({
  //         from: PropTypes.string,
  //         to: PropTypes.string,
  //         text: PropTypes.string,
  //       })
  //     ),
  //   };

  render() {
    const { list } = this.props;
    const emails = list.map((emailObj, ind) => (
      <Email key={ind} self={emailObj} />
    ));
    return <div className="emails-list">{emails}</div>;
  }
}

EmailsList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      from: PropTypes.string,
      to: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};
