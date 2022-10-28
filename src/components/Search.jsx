import React from "react";

const Search = ({ searchQuery, handleSearchQuery }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5 ml-16 mt-[53px] absolute text-lightText 
        dark:text-darkTextLightElement transition 
        duration-300 ease-in-out"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>

      <input
        type="text"
        value={searchQuery}
        className="mx-9 mt-9 mb-2 px-16 h-[54px] w-[275px] xxs:w-96 bg-white shadow-md rounded
                     text-lightText dark:bg-darkElement dark:text-darkTextLightElement 
                     transition duration-300 ease-in-out focus:outline-none focus:ring-2 ring-black dark:ring-white"
        placeholder="Search for a country..."
        onChange={handleSearchQuery}
      />
    </div>
  );
};

export default Search;
