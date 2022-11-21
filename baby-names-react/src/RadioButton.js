import React from "react";

const RadioButton = ({ name, sexFilter, setSexFilter }) => {
  return (
    <button
      className="sex-button"
      style={{ backgroundColor: sexFilter === name ? "#6eda53" : "#fff0ad" }}
      onClick={() => setSexFilter(name)}
    >
      {name.toUpperCase()}
    </button>
  );
};

export default RadioButton;
