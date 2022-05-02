import React, {useState, useEffect} from 'react';
import './App.css';
// import searchIcon from './magnifying-glass.png';
import Header from './components/Header';
import SearchInput from './SearchInput';
import Country from './Country';
// import Search from './components/Search';
// import Countries from './components/Countries';   

    function App() {
        const [error, setError] = useState(null);
        const [isLoaded, setIsLoaded] = useState(false);
        const [countries, setCountries] = useState([]);
        const url = "https://restcountries.com/v3.1/all";
    const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };




const getData = () => {
  fetch(url)
    .then(res => res.json())
    .then(
    (results) => {
      setIsLoaded(true);
      setCountries(results);
      console.log(results);
      setSearchTerm(searchTerm);    
    },
      (error) => {
          setIsLoaded(true);
          setError(error);
        }
  )};



        useEffect(() => {
  getData();
}, []);

        if (error) {
            return <>{error.message}</>;
        } else if (!isLoaded) {
            return <>loading...</>;
        } else {
            return (
                
                <div className="app">
                  <Header />
               

                       <div className='search-area'>
                            <SearchInput handleSearchChange={handleSearchChange} />
       
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
          
        </div>
                         
                    <div className="cards">
  
                        {countries
                           .filter((country) => { 
                  if(country.name.common.toLowerCase().includes(searchTerm.toLowerCase())) {
                      return true;
                    }else{
                      return false;
                    }
                })                  
                        .map((country) => (
                          <Country country={country}/>
                        ))}
                    </div>
                </div>
            );
        }
    }

export default App;

