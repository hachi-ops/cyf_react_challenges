import React from 'react';

// const CardListItem = props => {
//   return (
//     <li>
//       <div
//         className="card-container>
//         <p>
//           <strong>{props.character.name}</strong>
//         </p>
//         <p>{props.character.alterEgo}</p>
//         <p>{props.character.alignment}</p>
//       </div>
//     </li>
//   );
// };
function LanguagesAndTools (props) {
  return (
    <div className='languages-and-tools'>     
        <ul>
              <li>{props.item.role}</li>
              <li>{props.item.level}</li>
              <li>{props.item.languages}</li>
              <li>{props.item.tools}</li>
        </ul>        
    </div>
  )
}

export default LanguagesAndTools;