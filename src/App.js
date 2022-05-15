import React, { useState } from "react";

import NameContainer from "./NameContainer";
import RadioButton from "./RadioButton";
import babyNamesData from "./data/babyNamesData.json";
import "./css/style.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [sexFilter, setSexFilter] = useState("all");

  const handleAddNameToFavourites = (nameObject) => {
    setFavourites([...favourites, nameObject]);
  };

  const handleRemoveNameFromFavourites = (clickedName) => {
    setFavourites(favourites.filter((fave) => fave.id !== clickedName.id));
    // {
    //   if (fave.id === nameObject.id) {
    //     return false;
    //   } else {
    //     return true;
    //   }
    // }
    // )
  };

  const sortedAndFilteredBabyNames = babyNamesData
    .sort((a, z) => {
      const nameA = a.name;
      const nameZ = z.name;
      if (nameA > nameZ) return 1;
      else if (nameA < nameZ) return -1;
      return 0;

      //         .sort((a, b) => a.name.localeCompare(b.name))
    })
    .filter((nameObject) => {
      const { name, id, sex } = nameObject;
      const searchTermInName = name
        .toLowerCase()
        .includes(searchTerm.toLocaleLowerCase());

      const favouriteIds = favourites.map((name) => name.id);
      const isSelectedAsFavourite = favouriteIds.includes(id);

      const sexMatchesSelectedSex = sexFilter === "all" || sexFilter === sex;

      return (
        searchTermInName && !isSelectedAsFavourite && sexMatchesSelectedSex
      );
    });

  return (
    <div style={{ width: "80vw", height: "80vh", margin: "auto" }}>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <RadioButton
        name="all"
        setSexFilter={setSexFilter}
        sexFilter={sexFilter}
      />
      <RadioButton name="m" setSexFilter={setSexFilter} sexFilter={sexFilter} />
      <RadioButton name="f" setSexFilter={setSexFilter} sexFilter={sexFilter} />
      {/* <button
        style={{ backgroundColor: sexFilter === "all" ? "orange" : "grey" }}
        onClick={() => setSexFilter("all")}
      >
        ALL
      </button>
      <button
        style={{ backgroundColor: sexFilter === "m" ? "orange" : "grey" }}
        onClick={() => setSexFilter("m")}
      >
        M
      </button>
      <button
        style={{ backgroundColor: sexFilter === "f" ? "orange" : "grey" }}
        onClick={() => setSexFilter("f")}
      >
        F
      </button> */}
      {/* <input type="radio" name="sex" value="m" id="m" />
      <label for="m">Boys</label>
      <input type="radio" name="sex" value="f" id="f" />
      <label for="f">Girls</label>
      <input type="radio" name="sex" value="all" id="all" />
      <label for="all">All</label> */}
      <p style={{ fontStyle: "italic" }}>Your list goes here...</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column-reverse",
          justifyContent: "space-around",
        }}
      >
        <NameContainer
          content={sortedAndFilteredBabyNames}
          handleClick={handleAddNameToFavourites}
        />
        <NameContainer
          content={favourites}
          handleClick={handleRemoveNameFromFavourites}
        />
        {/* <div style={{ width: "40%" }}> */}
        {/* {favourites.map((fave) => (
            <BabyName
              nameProp={fave}
              handleClick={handleRemoveNameFromFavourites}
            />
          ))} */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;
