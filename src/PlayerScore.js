import React from "react";
import "./PlayerScore.css";

const PlayerScore = (props) => {
  return (
      <tr className="tableRow">
        <td>{props.name}</td>
        <td>{props.score}</td>
      </tr>
      
  );
};

export default PlayerScore;