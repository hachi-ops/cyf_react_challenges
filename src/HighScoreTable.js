import React from "react";
import PlayerScore from "./PlayerScore";
import "./HighScoreTable.css";

const HighScoreTable = (props) => {
  return (
    <table className="table">
        <thead>
            <tr>
                <th>High Scores: {props.countryName}</th>
            </tr>
        </thead>
        <tbody>           
            {props.countryScores.map((player, index) => {
            return <PlayerScore key={index} name={player.n} score={player.s} />;
          })}
           
        </tbody>
    </table>
  );
};

export default HighScoreTable;