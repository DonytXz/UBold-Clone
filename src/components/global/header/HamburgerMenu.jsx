import React from "react";

export const HamburgerMenu = () => {
  return (
    <>
      <div className="flex flex-row px-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="m-auto icon icon-tabler icon-tabler-menu-2"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#ffffff"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </div>
    </>
  );
};
