
import React from "react";

const PlayerScore = (props) => {
  return (
      <tr className="table-row">
        <td className="name">{props.name}</td>
        <td><span className="score">{props.score}</span></td>
      </tr>      
  );
};

export default PlayerScore;