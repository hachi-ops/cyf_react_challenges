import React from "react";

const Country = ({
  darkMode,
  name,
  capital,
  population,
  region,
  flag,
  showDetails,
  code,
}) => {
  const showDetailsHandler = () => {
    showDetails(code);
  };
  return (
    <div
      className={`country ${darkMode ? `darkMode` : ``}`}
      onClick={showDetailsHandler}
    >
      <div className="flag-container">
        <img src={flag} alt="" />
      </div>

      <div className="details">
        <h3 className="name">{name}</h3>
        <p>
          Population: <span className="values">{population}</span>
        </p>
        <p>
          Region: <span className="values">{region}</span>
        </p>
        <p>
          Capital: <span className="values">{capital}</span>
        </p>
      </div>
    </div>
  );
};

export default Country;
