import React from "react";

const SearchBar = () => {
  return (
    <>
      <div className="hidden  w-1/3 h-full mx-auto relative p-2 bg-gray-500 lg:flex flex-row items-center shadow_top rounded-3xl shadow">
        <div className="w-10/12 h-full">
          <input
            className="w-full p-2 border-none bg-gray-500"
            type="search"
            placeholder="Search..."
          />
        </div>
        <div className="w-2/12 h-full flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="m-auto icon icon-tabler icon-tabler-search"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#9e9e9e"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="10" cy="10" r="7" />
            <line x1="21" y1="21" x2="15" y2="15" />
          </svg>
        </div>
      </div>
      <div className="flex">
      <svg
            xmlns="http://www.w3.org/2000/svg"
            className="m-auto icon icon-tabler icon-tabler-search"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#9e9e9e"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="10" cy="10" r="7" />
            <line x1="21" y1="21" x2="15" y2="15" />
          </svg>
      </div>
    </>
  );
};

export default SearchBar;
