import React from "react";
import BabyName from "./BabyName";

const NameContainer = ({ content, handleClick }) => {
  return (
    <ul className="names">
      {content.map((nameObject) => (
        <BabyName nameProp={nameObject} handleClick={handleClick} />
      ))}
    </ul>
  );
};

export default NameContainer;
