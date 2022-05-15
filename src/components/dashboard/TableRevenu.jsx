import React from "react";
import RevenueRow from "./RevenueRow";

const TableRevenu = () => {
  const users = [
    {
      title: "Themes Market",
      date: "Oct 15, 2018",
      payouts: "$5848.68",
      status: "Upcoming",
    },
    {
      title: "Freelance",
      date: "Oct 12, 2018",
      payouts: "$1247.25",
      status: "Paid",
    },
    {
      title: "Share Holdingt",
      date: "Oct 10, 2018",
      payouts: "$815.89",
      status: "Paid",
    },
    {
      title: "Envato's Affiliates",
      date: "Oct 03, 2018",
      payouts: "$248.75",
      status: "Overdue",
    },
    {
      title: "Marketing Revenue",
      date: "Sep 21, 2018",
      payouts: "$978.21",
      status: "Upcoming",
    },
    {
      title: "Advertise Revenue",
      date: "Sep 15, 2018",
      payouts: "$358.10",
      status: "Paid",
    },
  ];
  return (
    <>
      <div className="bg-white  w-full lg:w-1/2 mt-4 lg:mt-0 p-6 lg:ml-6">
        <div className="flex flex-row">
          <p className="text-lg font-bold">Revenue History</p>
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
          <div className="font-bold text-xs lg:text-xl basis-1/2">Marketplaces</div>
          <div className="font-bold text-xs lg:text-xl basis-1/2">Date</div>
          <div className="font-bold text-xs lg:text-xl basis-1/4">Payouts</div>
          <div className="font-bold text-xs lg:text-xl basis-1/4">Status</div>
          <div className="font-bold text-xs lg:text-xl basis-1/4">Action</div>
        </div>
        <div className=" w-full">
          {users.map((user) => {
            return <RevenueRow user={user} />;
          })}
        </div>
      </div>
    </>
  );
};

export default TableRevenu;
