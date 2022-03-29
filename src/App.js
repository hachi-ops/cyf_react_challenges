import React from 'react';
// import HighScoreTable from './HighScoreTable.js';
import './App.css';
import PlayerScore from './PlayerScore.js';

function App() {
  return (
    <div className="App">
          {/* <HighScoreTable /> */}
          <PlayerScore player = "Lorenzo" score = "999"/>
    {/* <ul>
      {AllCountryScores.map((el) => (
        <li>{el.name}</li>
      ))}
    </ul> */}
      </div>
  );
}


export default App;
