import React from "react";
import "./App.css";
import { useParams, useNavigate } from "react-router";

const CountryDetails = ({ darkMode, countries, refetch }) => {
  const params = useParams();
  const navigate = useNavigate();

  let name;
  let flagImg;
  let nativeName;
  let population;
  let region;
  let subregion;
  let capital;
  let topLevelDomain;
  let currencies = [];
  let languages = [];
  let borders = [];

  countries.forEach((country) => {
    if (country.alpha3Code === params.countryCode) {
      name = country.name;
      flagImg = country.flag;
      nativeName = country.nativeName;
      population = country.population;
      region = country.region;
      subregion = country.subregion;
      capital = country.capital;
      topLevelDomain = country.topLevelDomain;

      country.currencies?.forEach((currency) => {
        currencies.push(currency.name);
      });

      country.languages?.forEach((language) => {
        languages.push(language.name);
      });

      country.borders?.forEach((border) => {
        borders.push(border);
      });
    }
  });

  const goBack = () => {
    navigate("/");
  };

  return (
    <div className="country_details">
      <button className={`back ${darkMode ? `darkMode` : ``}`} onClick={goBack}>
        <div>(arrow back)</div>
        <p>Go Back</p>
      </button>
      <div className="country_details_body">
        <div className="img_container">
          <img src={flagImg} alt="" />
        </div>

        <div className="info">
          <h2>{name}</h2>
          <div className="info_container">
            <div className="left_info">
              <p>Native Name: </p>
              <span className={`values ${darkMode ? `darkMode` : ``}`}>
                {nativeName}
              </span>

              <p>Population: </p>
              <span className={`values ${darkMode ? `darkMode` : ``}`}>
                {population}
              </span>

              <p>Region: </p>
              <span className={`values ${darkMode ? `darkMode` : ``}`}>
                {region}
              </span>

              <p>Sub Region: </p>
              <span className={`values ${darkMode ? `darkMode` : ``}`}>
                {subregion}
              </span>
            </div>

            <div className="right_info">
              <p>Capital: </p>
              <span className={`values ${darkMode ? `darkMode` : ``}`}>
                {capital}
              </span>

              <p>Top-level Domain: </p>
              <span className={`values ${darkMode ? `darkMode` : ``}`}>
                {topLevelDomain}
              </span>

              <p>
                Currencies:
                {currencies.map((currency) => {
                  if (currencies.indexOf(currency) !== currencies.length - 1) {
                    return (
                      <span className={`values ${darkMode ? `darkMode` : ``}`}>
                        {" "}
                        {currency},
                      </span>
                    );
                  } else {
                    return (
                      <span className={`values ${darkMode ? `darkMode` : ``}`}>
                        {" "}
                        {currency}
                      </span>
                    );
                  }
                })}
              </p>

              <p>
                Languages:
                {languages.map((language) => {
                  if (languages.indexOf(language) !== languages.length - 1) {
                    return (
                      <span
                        key={language}
                        className={`values ${darkMode ? `darkMode` : ``}`}
                      >
                        {" "}
                        {language},
                      </span>
                    );
                  } else {
                    return (
                      <span
                        key={language}
                        className={`values ${darkMode ? `darkMode` : ``}`}
                      >
                        {" "}
                        {language},
                      </span>
                    );
                  }
                })}
              </p>
            </div>
          </div>
          Border Countries:
          {borders.length ? (
            borders.map((border) => {
              return (
                <div
                  className={`border_country ${darkMode ? `darkMode` : ``}`}
                  onClick={() => {
                    refetch();
                    navigate(`/${border}`);
                  }}
                >
                  {border}
                </div>
              );
            })
          ) : (
            <div className={`values ${darkMode ? `darkMode` : ``}`}>
              <p>No borders...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
