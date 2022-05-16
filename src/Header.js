import React from "react";

export const Header = ({ onClick, darkMode }) => {
  return (
    <div className={`header ${darkMode ? `darkMode` : ``}`}>
      <div className="header_container">
        <h2 className="logo">Where in the World?</h2>
        <div className="switch_mode" onClick={onClick}>
          <div>(icon)</div>
          <h3>Dark Mode</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
