import React from "react";
import HighScoreTable from "./HighScoreTable";
import scores from "./scores";
import "./App.css";

function App() {
  return (
    <div className="container">    
      <h1>High Scores per Country</h1>     
      {scores
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((country, index) => {
          return (
            <HighScoreTable
              key={index}
              countryName={country.name}
              countryScores={country.scores}           
            />
          );
        })}
    </div>
  );
}

export default App;