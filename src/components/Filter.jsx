import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import { v4 as uuid } from "uuid";

const Filter = ({ regionFilter, handleRegionFilter }) => {
  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];
  return (
    <Menu as="div" className="relative inline-block text-left ml-9 xxs:mr-9">
      <div>
        <Menu.Button
          className="inline-flex w-full text-center rounded mt-9 px-5  h-[54px] w-52 bg-white shadow-md rounded
                     text-lightText dark:bg-darkElement dark:text-darkTextLightElement 
                     transition duration-300 ease-in-out focus:outline-none
                     pt-3.5 font-medium shadow-sm focus:outline-none focus:ring-2 ring-black dark:ring-white"
        >
          {regionFilter === "All" ? "Filter By Region" : regionFilter}
          <ChevronDownIcon
            className="h-5 w-5 right-4 bottom-6 absolute"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className="absolute z-10 mt-2 w-52 origin-top-right rounded bg-white text-lightText dark:bg-darkElement 
                     dark:text-darkTextLightElement shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          {regions.map((region) => {
            return (
              <div className="py-1" key={uuid()}>
                <Menu.Item>
                  {({ active }) => (
                    <p
                      className={classNames(
                        active
                          ? "bg-gray-100 text-lightText dark:bg-darkBg dark:text-darkTextLightElement"
                          : "text-lightText dark:text-darkTextLightElement",
                        "block px-4 py-2 text-sm hover:cursor-pointer"
                      )}
                      onClick={() => handleRegionFilter(region)}
                    >
                      {region}
                    </p>
                  )}
                </Menu.Item>
              </div>
            );
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Filter;
