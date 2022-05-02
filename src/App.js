import React, {useState, useEffect} from 'react';
import './App.css';
import searchIcon from './magnifying-glass.png';
import Header from './components/Header';


// function countryPage () {
//   return (
//     <div>
//       return <p>countryPage</p>
//     </div>
//   )
// }

function App() {

  function ClickLogger() {
    function logWhenClicked() {
      console.log("Button was clicked");
    }
    console.log("component appeared");
    return <button onClick={logWhenClicked}>Click me!</button>
  }

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

  const [searchTerm, setSearchTerm] = useState("");

    return(
        <div className='app'>
        <Header/>
        <div className='search-area'>
          <div class-className='search-input'>
            <div><img src={searchIcon} alt={"search icon"} /></div>
           <input className='input'
           type="text" 
           placeholder='Search for a country...' 
           onChange={((e) => setSearchTerm(e.target.value))}
           /> 
           </div>
              <div className='select-region'>
                <label htmlFor="select">Filter by Region</label>
                  <select id="select" name="select" className='select'>
                    <option value="Africa" >Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                  </select>
              </div>
              {/* <div><button onClick={ClickLogger}>click</button></div> */}
        </div>
              
       <div className='cards'> 
                 {items
                //  .sort((a, b) => a.name.common.toLocaleCompare(b.name.common))
                .filter((country) => { 
                  if(country.name.common.toLowerCase().includes(searchTerm.toLowerCase())) {
                      return true;
                    }else{
                      return false;
                    }
                })
                 .map((country) => {
                return (
                  <div className="card" >
                <img className='flag' src={country.flags.svg} alt={""} style={{width:"300px"}}/>
                <div className="info">
                <p><span>Country: </span>{country.name.common}</p>
                <p><span>Population: </span>{country.population}</p>
                <p><span>Region: </span>{country.region}</p> 
                <p><span>Capital: </span>{country.capital}</p> 
                </div>              
            </div>              
            )
        })}
       </div>            
        </div>     
    )
}

export default App;

