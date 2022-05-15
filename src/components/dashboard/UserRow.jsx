import React from "react";

const UserRow = (props) => {
  const { img, name, createtAt, currency, balance, reserved } = props.user;
  return (
    <>
      <div className="flex flex-row mt-4 hover:bg-gray-200 p-2">
        <div className="basis-1/2 mx-auto lg:mx-0  flex flex-col lg:flex-row">
          <img className="w-12 h-12 rounded-full m-auto" src={img} alt="" />
          <div className="flex flex-col ml-4">
            <p className="text-xs lg:text-sm">{name}</p>
            <p className="text-gray-400 text-xs lg:text-sm">{createtAt}</p>
          </div>
        </div>
        <div className="mr-1 text-xs lg:text-lg my-auto basis-1/4">{currency}</div>
        <div className="mr-1 text-xs lg:text-lg my-auto basis-1/2">{balance} {currency}</div>
        <div className="mr-1 text-xs lg:text-lg my-auto basis-1/2">{reserved} {currency}</div>
        <div className="basis-1/4 flex flex-col">
          <div className="flex flex-row my-auto">
              <button className="w-1/2 text-white bg-red-500">+</button>
              <button className="w-1/2 text-black bg-gray-200">-</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserRow;
