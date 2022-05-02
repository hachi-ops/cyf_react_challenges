import React from 'react';

function Countries(props) {


  return (
    <div className='cards'> 
   
                 {props.countries
                //  .sort((a, b) => a.name.common.toLocaleCompare(b.name.common))
                .filter(country => { 
                    return country.name.common.toLowerCase()
                })
                 .map(country => {
         
                return (
                <div className="card" key={country.numericCode}>
                <img className='flag' src={country.flags.svg} alt={country.name.common} style={{width:"300px"}}/>
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
  )
}

export default Countries