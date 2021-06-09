import React, { Component } from "react";
import PropTypes from "prop-types";
import SidebarItem from "./SidebarItem";
import "./Sidebar.css";

export default class Sidebar extends Component {
  render() {
    const { itemsList, setActiveFolder } = this.props;
    const folders = itemsList.map((folderName, index) => (
      <SidebarItem
        key={index}
        text={folderName}
        handleClick={setActiveFolder}
      />
    ));
    return (
      <div className="sidebar">
        <ul>{folders}</ul>
      </div>
    );
  }
}

Sidebar.defaultProps = {
  itemsList: [],
};

Sidebar.propTypes = {
  itemsList: PropTypes.arrayOf(PropTypes.string),
};
