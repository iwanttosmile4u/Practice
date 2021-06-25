import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <ul>
      <li>
        <NavLink
          className={"navbar-link"}
          activeClassName={"navbar-link-active"}
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={"navbar-link"}
          activeClassName={"navbar-link-active"}
          to={"/about"}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={"navbar-link"}
          activeClassName={"navbar-link-active"}
          to={"/emails"}
        >
          Emails
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
