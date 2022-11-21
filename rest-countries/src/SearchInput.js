import React from 'react'

function SearchInput(props) {
  return (
  
           <div class-className='search-input'>
            {/* <div><img src={searchIcon} alt={"search icon"} /></div> */}
           <input className='input'
           type="text" 
           placeholder='Search for a country...' 
           value={props.searchTerm} onChange={props.handleSearchChange}
           /> 
           </div>

  )
}

export default SearchInput