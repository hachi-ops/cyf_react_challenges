import React, {useState, useEffect} from 'react';
import './App.css';
import searchIcon from './magnifying-glass.png';
import moon from './moon.png';
// import Header from './Header';
// import Search from './Search';
// import FilterInput from './FilterInput';
// import SearchResults from './SearchResults';
// import countriesAll from './countriesAll.json';

// function countryPage () {
//   return (
//     <div>
//       return <p>countryPage</p>
//     </div>
//   )
// }

function App() {

const [items, setItems] = useState([]);

useEffect(() => {
  getData();
}, [])

const getData = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(
    (results) => {
      // setIsClicked(true);
      setItems(results);
      console.log(results)
    }
  )}

    return(
        <div>
          <header className="App-header">
            <h1>Where in the World?</h1>
            <img src={moon} alt={"moon"}/>
            <h2>Dark Mode</h2>
          </header>
        <div className='search-area'>
          <img src={searchIcon} alt={"search icon"} />
           <input type="text" placeholder='Search for a country...'></input> 
              <div className='region'>
                <label HTMLfor="region">Filter by Region</label>
                  <select id="region" name="region">
                    <option value="Africa" selected>Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                  </select>
              </div>
        </div>
              
       <div className='cards'> 
                 {items.map((country) => {
                return (
                  <div className="card" >
              <img className='flag' src={country.flags.svg} alt={""} style={{width:"300px"}}/>
                <p><span>Country: </span>{country.name.common}</p>
                <p><span>Population: </span>{country.population}</p>
                <p><span>Region: </span>{country.region}</p> 
                <p><span>Capital: </span>{country.capital}</p>               
            </div>              
            )
        })}
       </div>            
        </div>     
    )
}

export default App;

