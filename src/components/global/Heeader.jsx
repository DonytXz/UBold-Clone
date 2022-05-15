import React from "react";
import {
  HamburgerMenu,
  SmallDropDown,
  BigDropDown,
  SearchBar,
  ToggleFullScrean,
  Integrations,
  LanguajeSwitch,
  Bell,
  Profile,
  Setings,
} from "./header";

const Heeader = (props) => {
  const { isOpen, setIsOpen } = props;
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("isOpen", isOpen);
  };

  return (
    <>
      <div className="w-full bg-gray-700 flex flex-row py-4">
        {isOpen ? (
          <>
            <div className="w-2/12 hidden lg:flex flex-row">
              <img
                className="w-32 h-6 m-auto"
                src="https://coderthemes.com/ubold/layouts/assets/images/logo-light.png"
                alt=""
              />
            </div>
            <div className="flex ml-8 mr-4 lg:hidden">
              <img
                className="w-8 h-6 m-auto"
                src="https://coderthemes.com/ubold/layouts/assets/images/logo-sm.png"
                alt=""
              />
            </div>
          </>
        ) : (
          <div className="flex ml-8 mr-4">
            <img
              className="w-8 h-6 m-auto"
              src="https://coderthemes.com/ubold/layouts/assets/images/logo-sm.png"
              alt=""
            />
          </div>
        )}
        <div className="flex" onClick={toggleMenu}>
          <HamburgerMenu />
        </div>
        <div className="flex flex-row w-2/12 justify-center">
          <SmallDropDown />
          <BigDropDown />
        </div>
        <div className="flex flex-row ml-auto mr-4">
          <SearchBar />
          <ToggleFullScrean />
          <Integrations />
          <LanguajeSwitch />
          <Bell />
          <Profile />
          <Setings />
        </div>
      </div>
    </>
  );
};

export default Heeader;
