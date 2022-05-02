import React, {useState, useEffect} from 'react';
import './App.css';
// import searchIcon from './magnifying-glass.png';
import Header from './components/Header';
import Countries from './components/Countries';


// function handleSearch () {
//  return (e) => setSearchTerm(e.target.value)
// }

function App() {

  const [countries, setCountries] = useState([]);

  const url = "https://restcountries.com/v3.1/all";

  const getData = () => {
  fetch(url)
    .then(res => res.json())
    .then(
    (results) => {
      // setIsClicked(true);
      setCountries(results);
      console.log(results)
    }
  )}

  useEffect(() => {
  getData();
}, [])

// const [searchTerm, setSearchTerm] = useState("");

    return(
        <div className='app'>
        <Header/>
        {/* <div className='search-area'>
          <div class-className='search-input'>
            <div><img src={searchIcon} alt={"search icon"} /></div>
           <input 
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
              
        </div> */}
        <Countries countries={countries} />
              
       
        </div>     
    )
}

export default App;

