import React from 'react';

function LanguagesAndTools (props) {
  return (      
        <ul className='languages-and-tools'>
              <li>{props.item.role}</li>
              <li>{props.item.level}</li>
              <li>{props.item.languages}</li>
              <li>{props.item.tools}</li>
        </ul>        
 
  )
}

export default LanguagesAndTools;