import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressCard = () => {
  const percentage = 68;
  return (
    <>
      <div className="bg-white w-full lg:w-1/3 p-6 flex-row ml-2">
        <div className="flex flex-row">
          <p className="text-lg font-bold">Total Revenue</p>
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
        <div className="w-1/2 mx-auto">
          <CircularProgressbar
            value={percentage}
            text={`Revenue ${percentage}%`}
            styles={buildStyles({
              // Rotation of path and trail, in number of turns (0-1)
              rotation: 0.25,

              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "butt",

              // Text size
              textSize: "8px",

              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 0.5,

              // Can specify path transition in more detail, or remove it entirely
              // pathTransition: 'none',

              // Colors
              pathColor: `#FF0000`,
              textColor: "#808080",
              trailColor: "#d6d6d6",
              backgroundColor: "#3e98c7",
            })}
          />
        </div>
        <div className="w-2/3 mx-auto text-center mt-2 text-gray-500">
          <p>Total sales made today</p>
          <p className="text-3xl font-bold my-1">$178</p>
          <p className="text-gray-500">
            Traditional heading elements are designed to work best in the meat
            of
          </p>
        </div>
        <div className="flex flex-row w-full mt-2">
          <div className="flex flex-col w-1/3 text-center">
            <p className="">Target</p>
            <div className="flex flex-row mx-auto mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-arrow-down"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ff2825"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="18" y1="13" x2="12" y2="19" />
                <line x1="6" y1="13" x2="12" y2="19" />
              </svg>
              <p>$7.8k</p>
            </div>
          </div>

          <div className="flex flex-col w-1/3 text-center">
            <p className="">Last week</p>
            <div className="flex flex-row mx-auto mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-arrow-narrow-up"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#00b341"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="16" y1="9" x2="12" y2="5" />
                <line x1="8" y1="9" x2="12" y2="5" />
              </svg>
              <p>$1.4k</p>
            </div>
          </div>

          <div className="flex flex-col w-1/3 text-center">
            <p className="">Last Month</p>
            <div className="flex flex-row mx-auto mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-arrow-down"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ff2825"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="18" y1="13" x2="12" y2="19" />
                <line x1="6" y1="13" x2="12" y2="19" />
              </svg>
              <p>$15k</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressCard;
