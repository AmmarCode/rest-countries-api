import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Search from "./Search";
import Filter from "./Filter";
import "../index.css";

const CountriesList = ({
  countriesList,
  numberWithCommas,
  searchQuery,
  handleSearchQuery,
  searchedCountriesList,
  handleGetCountry,
  regionFilter,
  regionCountriesList,
  handleRegionFilter,
}) => {
  try {
    let sortedCountriesList = null;
    if (countriesList.length > 0) {
      sortedCountriesList = countriesList.sort((a, b) => {
        const nameA = a.name.common.toLowerCase();
        const nameB = b.name.common.toLowerCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    }

    if (regionFilter !== "All") {
      sortedCountriesList = regionCountriesList;
    }

    if (searchQuery.length > 0) {
      sortedCountriesList = searchedCountriesList;
    }

    return (
      <div>
        <section className="flex justify-between flex-wrap">
          <Search
            searchQuery={searchQuery}
            handleSearchQuery={handleSearchQuery}
          />
          <Filter
            regionFilter={regionFilter}
            regionCountriesList={regionCountriesList}
            handleRegionFilter={handleRegionFilter}
          />
        </section>
        {sortedCountriesList ? (
          <section
            className="grid grid-flow-row grid-cols-1 xs:grid-cols-2 md:grid-cols-3 
                     lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7"
          >
            {sortedCountriesList.map((country) => (
              <Link
                key={uuid()}
                className="bg-darkTextLightElement text-lightText dark:bg-darkElement 
                         dark:text-darkTextLightElement mx-9 my-9 w-[275px] xxs:w-[275px] xs:w-60 h-[20.5rem]
                         justify-self-center rounded shadow transition duration-300 
                         ease-in-out hover:cursor-pointer hover:scale-105"
                onClick={() => handleGetCountry(country)}
                to={country.name.common}
              >
                <img
                  src={country.flags.png}
                  alt="Country's flag"
                  className="rounded-tl rounded-tr w-full h-1/2"
                />
                <h1 className="font-bold my-4 mx-3 text-md">
                  {country.name.common}
                </h1>
                <p className="mx-3 font-thin text-sm text-lightInput dark:text-darkInput">
                  <strong className="text-lightText dark:text-darkTextLightElement">
                    Population:{" "}
                  </strong>
                  {numberWithCommas(country.population)}
                </p>
                <p className="mx-3 font-thin text-sm text-lightInput dark:text-darkInput">
                  <strong className="text-lightText dark:text-darkTextLightElement">
                    Region:{" "}
                  </strong>
                  {country.region}
                </p>
                <p className="mx-3 font-thin text-sm pb-14 text-lightInput dark:text-darkInput">
                  <strong className="text-lightText dark:text-darkTextLightElement">
                    Capital:{" "}
                  </strong>
                  {country.capital}
                </p>
              </Link>
            ))}
          </section>
        ) : (
          <div className="flex justify-center text-lightText dark:text-darkTextLightElement font-bold text-2xl mt-24 ml-auto mr-auto">
            <div className="lds-default">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        )}
      </div>
    );
  } catch {
    return (
      <div>
        <div className="flex justify-center mt-52">
          <h1
            className="bg-lightBg dark:bg-darkBg text-lightText text-2xl                            
                    dark:text-darkTextLightElement font-bold "
          >
            404 page not found!
          </h1>
        </div>
      </div>
    );
  }
};

export default CountriesList;
