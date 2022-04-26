import React, {useState} from 'react';
import babyNamesData from './data/babyNamesData.json';
import './css/style.css';

function FavouriteNames (props) {
  return (
    <ul className="favourite-names" >
      <p className="favourite-names-text">Favourite Names: </p>
      {props.data.map((favouriteName) => (
        <Name
          key={favouriteName.id}
          data={favouriteName}
          ammendFavourites={props.removeFromFavourites}
        />
      ))}
    </ul>
  );
};

function Names (props) {
  return (
    <div className="names">
      {babyNamesData
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((babyName) => {
          return (
            <Name
              key={babyName.id}
              data={babyName}
              ammendFavourites={props.addToFavourites}
            />
          );
        })}
    </div>
  );
};

function Name (props) {
  return (
    <p
     onClick={() => props.ammendFavourites(props.data)}>
      {props.data.name}
    </p>
  );
};

function App () {

  const [searchTerm, setSearchTerm] = useState("");
   const [filteredNames, setFilteredNames] = useState(babyNamesData);
  const [favouriteNames, setFavouriteNames] = useState([]);

   const addFavourite = (babyName) => {
    const favouriteNamesCopy = [...favouriteNames];
    const nameListCopy = [...filteredNames];
    favouriteNamesCopy.push(babyName);
    nameListCopy.splice(filteredNames.indexOf(babyName), 1);
    setFilteredNames(nameListCopy);
    setFavouriteNames(favouriteNamesCopy);
  };

    const removeFavourite = (babyName) => {
    const favouriteNamesCopy = [...favouriteNames];
    const nameListCopy = [...filteredNames];
    favouriteNamesCopy.splice(favouriteNames.indexOf(babyName), 1);
    nameListCopy.push(babyName);
    setFilteredNames(nameListCopy);
    setFavouriteNames(favouriteNamesCopy);
  };
   
 return (
    <div>
      <header>
        <form>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </form>
      </header>
      <div babyNames={filteredNames} addToFavourites={addFavourite}>
              <ul>
                {babyNamesData
                .sort((a, b) => a.name.localeCompare(b.name))
                .filter((babyName) => {
                  const {name} = babyName;
                  if(name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return true;
                  }else{
                    return false; 
                  }                                 
                })

                .map((babyName) => (
                  <li className={babyName.sex} key={babyName.id}> {babyName.name}</li>
                ))}
            </ul>
      </div>
        
             <FavouriteNames
             
        data={favouriteNames}
        removeFromFavourites={removeFavourite}

      />
      <Names babyNames={filteredNames} addToFavourites={addFavourite} />
 
      </div>
  )
}

export default App;