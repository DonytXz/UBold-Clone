import React from "react";

const Profile = () => {
  return (
    <>
      <div className="flex flex-row my-auto mx-1">
        <img
          className="w-8 h-8 rounded-full"
          src="https://coderthemes.com/ubold/layouts/assets/images/users/user-1.jpg"
          alt=""
        />
        <div className="hidden lg:flex flex-row">

        <span className="text-gray-300 mx-1">Geneva</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-arrow-bar-down mx-1"
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
          </div>
    </>
  );
};

export default Profile;
