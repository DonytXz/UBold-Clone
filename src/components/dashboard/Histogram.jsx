import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};
const labels = ["January", "February", "March", "April", "May", "June", "July"];
export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "#008000",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "#008000",
    },
  ],
};

const Histogram = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  return (
    <>
      <div className="bg-white w-full lg:w-2/3  p-6 mt-4 lg:mt-0 lg:ml-6 h-full">
        <div className="flex flex-row">
          <p className="text-sm lg:text-lg font-bold">Sales Analytics</p>
          <div className="flex flex-row ml-auto">
            <p className="bg-gray-300 mx-1 my-auto text-xs lg:textlg p-1">Today</p>
            <p className="bg-gray-300 mx-1 my-auto text-xs lg:textlg p-1">Weekly</p>
            <p className="bg-gray-300 mx-1 my-auto text-xs lg:textlg p-1">Montly</p>
          </div>
        </div>
        <Bar options={options} data={data} />
      </div>
    </>
  );
};

export default Histogram;
