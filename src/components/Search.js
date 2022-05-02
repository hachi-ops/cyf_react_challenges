import React from 'react';
import searchIcon from '../magnifying-glass.png';

function Search() {
  return (

             <div className='search-area'>
          <div class-className='search-input'>
            <div><img src={searchIcon} alt={"search icon"} /></div>
           <input 
           type="text" 
           placeholder='Search for a country...' 
           onChange={handleSearch}
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
              
        </div>
  
  )
}

export default Search