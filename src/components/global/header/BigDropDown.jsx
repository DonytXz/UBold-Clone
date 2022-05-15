import React from "react";

const BigDropDown = () => {
  return (
    <>
      <div className="hidden lg:flex flex-row mx-2">
        <span className="text-gray-300 my-auto">Mega Menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="my-auto icon icon-tabler icon-tabler-arrow-bar-down"
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
          <line x1="12" y1="20" x2="12" y2="10" />
          <line x1="12" y1="20" x2="16" y2="16" />
          <line x1="12" y1="20" x2="8" y2="16" />
          <line x1="4" y1="4" x2="20" y2="4" />
        </svg>
      </div>
    </>
  );
};

export default BigDropDown;
