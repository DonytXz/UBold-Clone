import React, { useState } from "react";
import { Heeader, SideNenu, SideMenuCompact, Footer } from "../components/global";
import { SmallCard, ProgressCard, Histogram, TableUsers, TableRevenu } from "../components/dashboard";
import Bars from "../assets/img/bars.png";
import Cart from "../assets/img/cart.png";
import Eye from "../assets/img/eye.png";
import Heart from "../assets/img/heart.png";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const cards = [
    {
      title: "Total Revenue",
      img: Heart,
      number: "$58,947",
    },
    {
      title: "Total Sales",
      img: Cart,
      number: "127",
    },
    {
      title: "Conversion",
      img: Bars,
      number: "0.58%",
    },
    {
      title: "Today's Visits",
      img: Eye,
      number: "78.41k",
    },
  ];
  return (
    <>
      <div className="font-serif">
        <Heeader setIsOpen={setIsOpen} isOpen={isOpen} />
        <div className="flex flex-row h-full">
          {isOpen ? <SideNenu /> : <SideMenuCompact />}
          <div className="bg-gray-200 w-full p-4">
            <div className="flex flex-row p-4">
              <p className="text-2xl font-bold">Dashboard</p>
              <div className="hidden ml-auto lg:flex flex-row  ">
                <div className="w-48 bg-white"></div>
                <div className="bg-blue-600 flex p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-calendar-event m-auto"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ffffff"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <rect x="4" y="5" width="16" height="16" rx="2" />
                    <line x1="16" y1="3" x2="16" y2="7" />
                    <line x1="8" y1="3" x2="8" y2="7" />
                    <line x1="4" y1="11" x2="20" y2="11" />
                    <rect x="8" y="15" width="2" height="2" />
                  </svg>
                </div>
                <div className="bg-blue-600 flex p-2 mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-refresh m-auto"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ffffff"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                    <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                  </svg>
                </div>
                <div className="bg-blue-600 flex p-2 mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-menu-2 m-auto"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ffffff"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row">
              {cards.map((card) => {
                return (
                  <>
                    <SmallCard
                      title={card.title}
                      img={card.img}
                      number={card.number}
                    />
                  </>
                );
              })}
            </div>
            <div className="flex flex-col lg:flex-row mt-6">
              <ProgressCard />
              <Histogram />
            </div>
            <div className="flex flex-col lg:flex-row mt-6">
              <TableUsers/>
              <TableRevenu/>
            </div>
     <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
