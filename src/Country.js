import React from 'react'

function Country(props) {
  return (
    <div>
                <div className="card" >
                <img className='flag' src={props.country.flags.svg} alt={""} style={{width:"300px"}}/>
                <div className="info">
                <p><span>Country: </span>{props.country.name.common}</p>
                <p><span>Population: </span>{props.country.population}</p>
                <p><span>Region: </span>{props.country.region}</p> 
                <p><span>Capital: </span>{props.country.capital}</p> 
                </div>              
            </div> 
    </div>
  )
}

export default Country