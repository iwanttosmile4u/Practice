import React from "react";
import PropTypes from "prop-types";

const Header = ({ title = "Default title" }) => {
  return (
    <div>
      <h3>Header</h3>
      <h2>{title}</h2>
    </div>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string,
};

// Header.defaultProps = {
//   title: "Default title",
// };
