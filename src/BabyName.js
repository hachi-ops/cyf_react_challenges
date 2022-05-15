import React from "react";

const BabyName = ({ nameProp, handleClick }) => {
  const { id, name, sex } = nameProp;
  const isBoy = sex === "m";
  return (
    <li
      onClick={() => handleClick(nameProp)}
      style={{
        backgroundColor: isBoy ? "#6eda53" : "#fff0ad",
        color: isBoy ? "#16527a" : "#940050",
      }}
    >
      {name}
    </li>
  );
};

export default BabyName;
