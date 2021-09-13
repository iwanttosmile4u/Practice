import React from "react";
import * as Icons from "../theme/icons";

const Icon = ({ type, className = "", filled, color }) => {
  const iconJsx = Icons[type];
  if (!iconJsx) {
    return null;
  }
  return (
    <span className={`icon icon--type ${className}`}>
      {iconJsx({ filled, color })}
    </span>
  );
};

export default Icon;
