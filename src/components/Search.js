import React, {useState} from 'react';
import searchIcon from '../magnifying-glass.png';



function Search() {
    const [searchTerm, setSearchTerm] = useState("");

    
  return (

    
  
  )
}

export default Search




// function Search (props) {
//     const [query, setQuery] = useState("")
//     return (
//         <div>
//             <input type="text" placeholder="filter names..." 
//             value={query}
//             onChange={event => setQuery(event.target.value)}/>
//        {
//   props.names
//   .filter((name) => {
//     if (query === '') {
//       return false;
//     } else if (name.name.toLowerCase().includes(query.toLowerCase())) {
//       return true;
//     }
//   }).map((name) => (
//     <ul>
//       <li className={name.sex}>{name.name}</li>     
//     </ul>
//   ))}
//         </div>
//     )
// }
// export default Search;