import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ foldersList }) => {
  const links = foldersList.map((folderName, index) => (
    <NavLink key={index} to={`/emails/${folderName}`}>
      {folderName}
    </NavLink>
  ));
  return <div>{links}</div>;
};

export default Sidebar;

// const Sidebar = ({ foldersList }) => {
//   const links = foldersList.map((folderName, index) => (
//     <NavLink key={index} to={`/emails/${folderName}`}>
//       {folderName}
//     </NavLink>
//   ));
//   return <div>{links}</div>;
// };

// export default Sidebar;
