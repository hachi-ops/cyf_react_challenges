import React, {useState} from "react";
import Card from "./components/Card";
import Filter from "./components/Filter";
import './App.css';

function App () {
     const [clicked, setClicked] = useState(0);
   function logWhenClicked () {
        console.log("button clicked");
        return null;
    }
  return (
    <div className="App">
      <Filter handleClick={logWhenClicked}/>
      <div>{clicked}</div>
      <Card />    
    </div>
  )
}

export default App;