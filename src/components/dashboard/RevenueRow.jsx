import React from "react";

const RevenueRow = (props) => {
  const { title, date, payouts, status } = props.user;
  return (
    <>
      <div className="flex flex-row mt-4 hover:bg-gray-200 p-2 my-4 py-4">
        <div className="basis-1/2 mr-1 flex flex-row">
          <p className="text-xs lg:text-lg">{title}</p>
        </div>
        <div className="mr-1 text-xs lg:text-lg basis-1/2">{date}</div>
        <div className="mr-1 text-xs lg:text-lg basis-1/4">{payouts}</div>
        <div
          className={`flex mr-1 text-xs lg:text-lg basis-1/4  rounded-full mx-2 ${
            status == "Upcoming" ? "bg-orange-200" : ""
          } ${status == "Paid" ? "bg-green-200" : ""}${
            status == "Overdue" ? "bg-red-200" : ""
          }`}
        >
          <p
            className={` ${status == "Upcoming" ? "text-orange-400" : ""} ${
              status == "Paid" ? "text-green-400" : ""
            }${status == "Overdue" ? "text-red-400" : ""}

             basis-1/4 m-auto text-xs lg:text-lg`}
          >
            {status}
          </p>
        </div>
        <div className="basis-1/4 flex flex-col">
          <div className="flex flex-row my-auto bg-gray-200 rounded-full w-1/2 m-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-pencil m-auto"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#597e8d"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
              <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default RevenueRow;
