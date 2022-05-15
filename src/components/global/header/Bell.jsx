import React from "react";

const Bell = () => {
  return (
    <>
      <div className="relative my-auto mx-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-bell"
          width="33"
          height="33"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#9e9e9e"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
          <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
        </svg>
        <div className="absolute rounded-full bg-red-500 top-0 right-0 px-1">0</div>
      </div>
    </>
  );
};

export default Bell;