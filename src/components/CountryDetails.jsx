import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

const CountryDetails = ({
  country,
  numberWithCommas,
  countriesList,
  handleGetCountry,
}) => {
  try {
    return (
      <div>
        {country ? (
          <div className="max-w-[1400px] ml-auto mr-auto">
            <Link to="/">
              <button
                className="w-36 h-10 my-14 ml-14 bg-white dark:bg-darkElement 
                             dark:text-darkTextLightElement rounded-md shadow-md
                             transition ease-in-out duration-300 focus:ring-0  
                             focus:outline-none hover:opacity-70"
              >
                Back
              </button>
            </Link>
            <section className="grid md:grid-cols-1 lg:grid-cols-2">
              <div>
                <img
                  src={country.flags.png ? country.flags.png : ""}
                  alt="country's flag"
                  className="ml-auto mr-auto w-auto sm:w-2/3 h-auto"
                />
              </div>

              <div
                className="text-lightText grid grid-cols-1 ml-auto mr-auto
                          dark:text-darkTextLightElement transition ease-in-out 
                          duration-300 w-auto mt-10"
              >
                <h1 className="text-2xl font-bold mb-5">
                  {country.name.common}
                </h1>
                <div className="grid grid-cols-1 sm:flex sm:flex-col sm:flex-wrap h-32">
                  <p className="text-lightInput dark:text-darkInput">
                    <span className="text-lightText dark:text-darkTextLightElement">
                      Native Name:
                    </span>
                    {country.name.nativeName
                      ? Object.values(Object.values(country.name)[2])[0].common
                      : country.name.common}
                  </p>
                  <p className="text-lightInput dark:text-darkInput">
                    <span className="text-lightText dark:text-darkTextLightElement">
                      Population:{" "}
                    </span>
                    {numberWithCommas(country.population)}
                  </p>
                  <p className="text-lightInput dark:text-darkInput">
                    <span className="text-lightText dark:text-darkTextLightElement">
                      Region:{" "}
                    </span>
                    {country.region}
                  </p>
                  <p className="text-lightInput dark:text-darkInput">
                    <span className="text-lightText dark:text-darkTextLightElement">
                      Sub Region:{" "}
                    </span>
                    {country.subregion}
                  </p>
                  <p className="text-lightInput dark:text-darkInput">
                    <span className="text-lightText dark:text-darkTextLightElement">
                      Capital:{" "}
                    </span>
                    {country.capital}
                  </p>
                  <p className="text-lightInput dark:text-darkInput">
                    <span className="text-lightText dark:text-darkTextLightElement">
                      Top Level Domin:{" "}
                    </span>
                    {country.tld ? country.tld[0] : null}
                  </p>
                  <p className="text-lightInput dark:text-darkInput">
                    <span className="text-lightText dark:text-darkTextLightElement">
                      Currencies:{" "}
                    </span>
                    {country.currencies
                      ? Object.values(country.currencies)[0].name
                      : null}
                  </p>
                  <p className="text-lightInput dark:text-darkInput">
                    <span className="text-lightText dark:text-darkTextLightElement">
                      Langugaes:{" "}
                    </span>

                    {country.languages
                      ? Object.values(country.languages).join(", ")
                      : null}
                  </p>
                </div>
                <div className="grid grid-cols-2 mt-24 sm:grid-cols-3 sm:mt-7">
                  <span>Border Countries: </span>
                  {country.borders
                    ? country.borders.map((border) => {
                        const bordersList = countriesList.filter((count) => {
                          return count.cca3 === border;
                        });
                        return (
                          <Link
                            className="bg-white dark:bg-darkElement 
                    text-lightInput dark:text-darkInput shadow-md mx-3 px-1 py-1.5 mb-6
                    hover:cursor-pointer text-center text-xs hover:text-lightText 
                    dark:hover:text-darkTextLightElement"
                            key={uuid()}
                            onClick={() => handleGetCountry(bordersList[0])}
                            replace
                            to={`/${bordersList[0].name.common}`}
                          >
                            {bordersList[0].name.common}
                          </Link>
                        );
                      })
                    : null}
                </div>
              </div>
            </section>
          </div>
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
        <Link to="/">
          <button
            className="w-36 h-10 my-14 ml-14 bg-white dark:bg-darkElement 
                             dark:text-darkTextLightElement rounded-md shadow-md
                             transition ease-in-out duration-300 focus:ring-0  
                             focus:outline-none hover:opacity-70"
          >
            Back
          </button>
        </Link>
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

export default CountryDetails;
