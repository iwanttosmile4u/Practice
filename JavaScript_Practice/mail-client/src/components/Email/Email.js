import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon";

const Email = ({ email }) => {
  return (
    <li>
      {email.topic}
      <Icon type="star" color="green" />
      <Icon type="star" />
      <Icon type="star" filled />
      <Icon type="globe" />
    </li>
  );
};

Email.propTypes = {
  email: PropTypes.object.isRequired,
};

export default Email;
