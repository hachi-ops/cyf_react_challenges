import React, { useState } from 'react';

function LanguagesAndTools (props) {
      const [caught, setCaught] = useState([]);

      function catchPokemon() {
         const ourPokemon = "Balbasaur";
      //    const newArray = caught.concat(ourPokemon);
      // const newArray = [caught, ourPokemon];
      // const newArray= [...caught];
      // newArray.push(ourPokemon);
      const newArray = caught.slice();
      newArray.push(ourPokemon);

         setCaught(newArray);

      // setCaught((currentCaught) => {
      //       return currentCaught.concat(ourPokemon);
      // })
      }
  return (    
        <div>
              <div>
                    {caught.map((val, index) => {
                          return (
                                <li key={index}>{val}</li>
                          )
                    })}
              </div>
            <ul className='languages-and-tools'>
              <li >{caught.length}<button onClick={catchPokemon}>{props.item.role}</button></li>
              <li><button>{props.item.level}</button></li>
              <li><button>{props.item.languages}</button></li>
              <li><button>{props.item.tools}</button></li>
            </ul>
        </div>  
              
 
  )
}

export default LanguagesAndTools;