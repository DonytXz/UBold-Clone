import React from "react";
import UserRow from "./UserRow";

const TableUsers = () => {
  const users = [
    {
      img: "https://coderthemes.com/ubold/layouts/assets/images/users/user-2.jpg",
      name: "Tomaslau",
      createtAt: "Member Since 2017",
      currency: "BTC",
      balance: "0.00816117 ",
      reserved: "0.00097036 ",
    },
    {
      img: "https://coderthemes.com/ubold/layouts/assets/images/users/user-3.jpg",
      name: "Erwin E. Brown",
      createtAt: "Member Since 2017",
      currency: "ETH",
      balance: "3.16117008  ",
      reserved: "1.70360009  ",
    },
    {
      img: "https://coderthemes.com/ubold/layouts/assets/images/users/user-4.jpg",
      name: "Margeret V. Ligon",
      createtAt: "Member Since 2017",
      currency: "EUR",
      balance: "25.08  ",
      reserved: "12.58  ",
    },
    {
      img: "https://coderthemes.com/ubold/layouts/assets/images/users/user-5.jpg",
      name: "Tomaslau",
      createtAt: "Member Since 2017",
      currency: "CNY",
      balance: "82.00  ",
      reserved: "30.83  ",
    },
    {
      img: "https://coderthemes.com/ubold/layouts/assets/images/users/user-6.jpg",
      name: "Tomaslau",
      createtAt: "Member Since 2017",
      currency: "BTC",
      balance: "2.00816117  ",
      reserved: "1.00097036  ",
    },
  ];
  return (
    <>
      <div className="bg-white w-full lg:w-1/2 mt-4 lg:mt-0 p-6 lg:ml-6 overscroll-x-auto">
        <div className="flex flex-row">
          <p className="text-lg font-bold">Top 5 Users Balances</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-dots-vertical ml-auto"
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
            <circle cx="12" cy="12" r="1" />
            <circle cx="12" cy="19" r="1" />
            <circle cx="12" cy="5" r="1" />
          </svg>
        </div>
        <div className="flex flex-row mt-4 bg-gray-100 p-2">
          <div className="font-bold text-xs lg:text-xl basis-1/2">Profile</div>
          <div className="font-bold text-xs lg:text-xl basis-1/4">Currency</div>
          <div className="font-bold text-xs lg:text-xl basis-1/2">Balance</div>
          <div className="font-bold text-xs lg:text-xl basis-1/2">Reserved in orders</div>
          <div className="font-bold text-xs lg:text-xl basis-1/4">Action</div>
        </div>
        {users.map((user) => {
          return <UserRow user={user} />;
        })}
      </div>
    </>
  );
};

export default TableUsers;
