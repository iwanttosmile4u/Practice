import React, { Component } from "react";
import PropTypes from "prop-types";
import "./SidebarItem.css";

export default class SidebarItem extends Component {
  render() {
    const { text, handleClick } = this.props;
    return (
      <div>
        <li className="sidebar-item">
          <button onClick={() => handleClick(text)}>{text}</button>
        </li>
      </div>
    );
  }
}

SidebarItem.defaultProps = {
  text: "Item",
};

SidebarItem.propTypes = {
  text: PropTypes.string,
};
