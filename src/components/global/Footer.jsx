import React from "react";

const Footer = () => {
  return (
    <>
      {" "}
      <div className="w-full flex flex-row p-4 mt-6 bg-gray-300">
        <div className="text-gray-500">2022 © UBold theme clone by Donato Alavarez</div>
        <div className="flex flex-row ml-auto">
          <div className="text-gray-500 hover:text-gray-800 mx-4">About Us</div>
          <div className="text-gray-500 hover:text-gray-800 mx-4">Help</div>
          <div className="text-gray-500 hover:text-gray-800 mx-4">Contact Us</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
