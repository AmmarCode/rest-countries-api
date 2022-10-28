import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import Header from "./components/Header";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";

const App = () => {
  const [theme, setTheme] = useLocalStorage("theme", null);

  const [countriesList, setCountriesList] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  const [searchedCountriesList, setSearchedCountriesList] = useState([]);

  const [countryDetails, setCountryDetails] = useLocalStorage(
    "countryDetails:",
    {}
  );

  const [regionFilter, setRegionFilter] = useLocalStorage(
    "regionFilter",
    "All"
  );
  const [regionCountriesList, setRegionCountriesList] = useLocalStorage(
    "regionCountriesList",
    []
  );

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
    if (regionFilter === "All") {
      setSearchedCountriesList(
        countriesList.filter((country) => {
          return country.name.common
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        })
      );
    } else {
      setSearchedCountriesList(
        regionCountriesList.filter((country) => {
          return country.name.common
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        })
      );
    }
  };
  const handleGetCountry = (passedCountry) => {
    setCountryDetails(passedCountry);
  };

  const handleRegionFilter = (region) => {
    setRegionFilter(region);
    if (region.toLowerCase() !== "all") {
      setRegionCountriesList(
        countriesList.filter((countr) => {
          return countr.region === region;
        })
      );
    } else {
      setRegionCountriesList(countriesList);
    }
  };

  useEffect(() => {
    if (
      theme === "dark" ||
      (theme === null &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, [theme, setTheme]);

  useEffect(() => {
    const fetchCountries = async () => {
      const url = "https://restcountries.com/v3.1/all";
      const response = await fetch(url);
      const data = await response.json();
      setCountriesList(data);
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    if (searchQuery === "" && searchedCountriesList.length !== 0) {
      setSearchedCountriesList([]);
    }
  }, [searchQuery, searchedCountriesList]);

  return (
    <div
      className="bg-lightBg dark:bg-darkBg transition duration-300 ease-in-out
     min-h-screen max-h-full"
    >
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <CountriesList
                countriesList={countriesList}
                numberWithCommas={numberWithCommas}
                searchQuery={searchQuery}
                handleSearchQuery={handleSearchQuery}
                handleGetCountry={handleGetCountry}
                countryDetails={countryDetails}
                searchedCountriesList={searchedCountriesList}
                regionFilter={regionFilter}
                regionCountriesList={regionCountriesList}
                handleRegionFilter={handleRegionFilter}
              />
            }
          />
          <Route
            path=":country"
            element={
              <CountryDetails
                country={countryDetails}
                numberWithCommas={numberWithCommas}
                countriesList={countriesList}
                handleGetCountry={handleGetCountry}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
