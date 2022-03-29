  // - `HighScoreTable` - a table with a country name and a list of player-scores for that country.
import AllCountryScores from './AllCountryScores.js';

function HighScoreTable() {
  const DisplayData = AllCountryScores.map(info => {
    return (
      <tr>
        <td>{info.name}</td>       
      </tr>
    );
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Country</th>               
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}

export default HighScoreTable;