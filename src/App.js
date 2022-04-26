import React, {useState} from 'react';
import babyNamesData from './data/babyNamesData.json';
import './css/style.css';

function App () {

  const [searchTerm, setSearchTerm] = useState("");
   
 return (
    <div>
      <header>
        <form>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </form>
      </header>
            <ul>
                {babyNamesData
                .sort((a, b) => a.name.localeCompare(b.name))
                .filter((babyName) => {
                  const {name} = babyName;
                  if(name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return true;
                  }else{
                    return false; 
                  }
                                 
                })
                .map((babyName) => (
                  <li className={babyName.sex} key={babyName.id}> {babyName.name}</li>
                ))}
            </ul>
      </div>
  )
}

export default App;