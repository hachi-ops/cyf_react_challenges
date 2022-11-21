import React, {useState} from "react";
import HighScoreTable from "./HighScoreTable";
import scores from "./scores";
import "./App.css";

function App() {

    const [isOrdered, setIsOrdered] = useState(true);

  const orderedScores = [...scores].sort((a, b) => {
    return a.name -b.name;
  });

 orderedScores.map((country) => {
    return country.scores.sort((a,z) => {
      return isOrdered
        ? a.s > z.s
            ? -1
          : 1
        : a.s < z.s
        ? -1
        : 1;
    });
  });

  const handleClick = () => {
    setIsOrdered(!isOrdered);
  };

  return (
    <div className="container">    
      <h1>High Scores per Country</h1>   
         <button className="button" onClick={handleClick}>Toggle</button>  
      {scores
      // .sort((a, b) => a.scores.s - b.scores.s) //not working
       .sort((a, b) => a.name.localeCompare(b.name))      
      .map((country, index) => {
          return (
            <HighScoreTable
              key={index}
              countryName={country.name}
              countryScores={country.scores}   
              scores={orderedScores} 
            />
          );
        })}
    </div>
  );
}

export default App;