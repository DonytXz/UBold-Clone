import React, { useState } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState({ dashboards: true });
  const handleenu = (item) => {
    console.log(isOpen, item);
    switch (item) {
      case "dashboards":
        setIsOpen({ dashboards: !isOpen[item] });
        break;
      case "ecommerce":
        setIsOpen({ ecommerce: !isOpen[item] });
        break;
      case "crm":
        setIsOpen({ crm: !isOpen[item] });
        break;
      case "email":
        setIsOpen({ email: !isOpen[item] });
        break;
      case "proyects":
        setIsOpen({ proyects: !isOpen[item] });
        break;
      case "tasks":
        setIsOpen({ tasks: !isOpen[item] });
        break;
      case "contacts":
        setIsOpen({ contacts: !isOpen[item] });
        break;
      case "tickets":
        setIsOpen({ tickets: !isOpen[item] });
        break;
        case "layouts":
          setIsOpen({ layouts: !isOpen[item] });
          break;
      default:
        break;
    }

    console.log(isOpen, item);
  };
  return (
    <>
      <div className="flex flex-col">
        <div className="mb-4">NAVIGATION</div>
        <div
          className="flex flex-row mb-2"
          onClick={() => handleenu("dashboards")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#00acc1"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-airplay"
          >
            <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
            <polygon points="12 15 17 21 7 21 12 15"></polygon>
          </svg>
          <div className="text-blue-400 ml-2 hover:text-blue-400">
            Dashboards
          </div>
          <div className="ml-6 rounded-full bg-green-300 px-2  text-white flex m-auto">
            <span className="m-auto mb-1">4</span>
          </div>
        </div>
        {isOpen.dashboards ? (
          <div className="ml-6">
            <div className="mb-2 hover:text-blue-400 text-blue-400">
              Dashboard 1
            </div>
            <div className="mb-2 hover:text-blue-400">Dashboard 2</div>
            <div className="mb-2 hover:text-blue-400">Dashboard 3</div>
            <div className="mb-2 hover:text-blue-400">Dashboard 4</div>
          </div>
        ) : null}
        <div className="mb-4">APPS</div>
        <div className="flex flex-row mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-calendar hover"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <div className="text-gray-400 ml-2 hover:text-blue-400">Calendar</div>
        </div>
        <div className="flex flex-row mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-message-square hover"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <div className="text-gray-400 ml-2 hover:text-blue-400">Chat</div>
        </div>
        <div
          className="flex flex-row mb-4"
          onClick={() => handleenu("ecommerce")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-shopping-cart hover"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <div
            className={` ${
              isOpen.ecommerce ? "text-blue-400" : "text-gray-400"
            } hover:text-blue-400 ml-2 `}
          >
            Ecomerce
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-arrow-down ml-auto"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#9e9e9e"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="18" y1="13" x2="12" y2="19" />
            <line x1="6" y1="13" x2="12" y2="19" />
          </svg>
        </div>
        {isOpen.ecommerce ? (
          <div className="ml-6">
            <div className="mb-2 text-gray-400 hover:text-blue-400">
              Dashboard
            </div>
            <div className="mb-2 text-gray-400 hover:text-blue-400">
              Proyects
            </div>
            <div className="mb-2 text-gray-400 hover:text-blue-400">
              Product details
            </div>
          </div>
        ) : null}
        <div className="flex flex-row mb-4" onClick={() => handleenu("crm")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-users hover"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <div
            className={` ${
              isOpen.crm ? "text-blue-400" : "text-gray-400"
            } hover:text-blue-400 ml-2 `}
          >
            CRM
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-arrow-down ml-auto"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#9e9e9e"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="18" y1="13" x2="12" y2="19" />
            <line x1="6" y1="13" x2="12" y2="19" />
          </svg>
        </div>
        {isOpen.crm ? (
          <div className="ml-6">
            <div className="mb-2 text-gray-400 hover:text-blue-400">
              Dashboard
            </div>
            <div className="mb-2 text-gray-400 hover:text-blue-400">
              Proyects
            </div>
            <div className="mb-2 text-gray-400 hover:text-blue-400">
              Product details
            </div>
          </div>
        ) : null}
        <div className="flex flex-row mb-4" onClick={() => handleenu("email")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-mail hover"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          <div
            className={` ${
              isOpen.email ? "text-blue-400" : "text-gray-400"
            } hover:text-blue-400 ml-2 `}
          >
            Emsil
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-arrow-down ml-auto"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#9e9e9e"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="18" y1="13" x2="12" y2="19" />
            <line x1="6" y1="13" x2="12" y2="19" />
          </svg>
        </div>
        {isOpen.email ? (
          <div className="ml-6">
            <div className="mb-2 text-gray-400 hover:text-blue-400">
              Dashboard
            </div>
            <div className="mb-2 text-gray-400 hover:text-blue-400">
              Proyects
            </div>
            <div className="mb-2 text-gray-400 hover:text-blue-400">
              Product details
            </div>
          </div>
        ) : null}
        <div className="flex flex-row mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-rss hover"
          >
            <path d="M4 11a9 9 0 0 1 9 9"></path>
            <path d="M4 4a16 16 0 0 1 16 16"></path>
            <circle cx="5" cy="19" r="1"></circle>
          </svg>
          <div className="text-blue-400 ml-2 hover:text-blue-400">
            Social Feed
          </div>
          <div className="ml-auto rounded-full bg-red-500 px-2  text-white flex m-auto">
            <span className="m-auto mb-1">Hot</span>
          </div>
        </div>
        <div className="flex flex-row mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-activity"
          >
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
          <div className="text-gray-400 ml-2 hover:text-blue-400">
            Companies
          </div>
        </div>
        <div
          className="flex flex-row mb-4"
          onClick={() => handleenu("proyects")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-briefcase hover"
          >
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
          <div
            className={` ${
              isOpen.proyects ? "text-blue-400" : "text-gray-400"
            } hover:text-blue-400 ml-2 `}
          >
            Proyects
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-arrow-down ml-auto"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#9e9e9e"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="18" y1="13" x2="12" y2="19" />
            <line x1="6" y1="13" x2="12" y2="19" />
          </svg>
        </div>
        {isOpen.proyects ? (
          <div className="ml-6">
            <div className="mb-2 text-gray-400 hover:text-blue-400">
              Dashboard
            </div>
            <div className="mb-2 text-gray-400 hover:text-blue-400">
              Proyects
            </div>
            <div className="mb-2 text-gray-400 hover:text-blue-400">
              Product details
            </div>
          </div>
        ) : null}
        <div className="flex flex-row mb-4" onClick={() => handleenu("tasks")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-clipboard hover"
          >
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
          </svg>
          <div
            className={` ${
              isOpen.tasks ? "text-blue-400" : "text-gray-400"
            } hover:text-blue-400 ml-2 `}
          >
            Tasks
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-arrow-down ml-auto"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#9e9e9e"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="18" y1="13" x2="12" y2="19" />
            <line x1="6" y1="13" x2="12" y2="19" />
          </svg>
        </div>
        {isOpen.tasks ? (
          <div className="ml-6">
            <div className="mb-2 text-gray-400 hover:text-blue-400">
              Dashboard
            </div>
            <div className="mb-2 text-gray-400 hover:text-blue-400">
              Proyects
            </div>
            <div className="mb-2 text-gray-400 hover:text-blue-400">
              Product details
            </div>
          </div>
        ) : null}
        <div
          className="flex flex-row mb-4"
          onClick={() => handleenu("contacts")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-book hover"
          >
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          </svg>
          <div
            className={` ${
              isOpen.contacts ? "text-blue-400" : "text-gray-400"
            } hover:text-blue-400 ml-2 `}
          >
            Contacts
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-arrow-down ml-auto"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#9e9e9e"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="18" y1="13" x2="12" y2="19" />
            <line x1="6" y1="13" x2="12" y2="19" />
          </svg>
        </div>
        {isOpen.contacts ? (
          <div className="ml-6">
            <div className="mb-2 text-gray-400 hover:text-blue-400">
              Dashboard
            </div>
            <div className="mb-2 text-gray-400 hover:text-blue-400">
              Proyects
            </div>
            <div className="mb-2 text-gray-400 hover:text-blue-400">
              Product details
            </div>
          </div>
        ) : null}
        <div
          className="flex flex-row mb-4"
          onClick={() => handleenu("tickets")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-aperture hover"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
            <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
            <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
            <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
            <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
            <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
          </svg>
          <div
            className={` ${
              isOpen.tickets ? "text-blue-400" : "text-gray-400"
            } hover:text-blue-400 ml-2 `}
          >
            Tickets
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-arrow-down ml-auto"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#9e9e9e"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="18" y1="13" x2="12" y2="19" />
            <line x1="6" y1="13" x2="12" y2="19" />
          </svg>
        </div>
        {isOpen.tickets ? (
          <div className="ml-6">
            <div className="mb-2 text-gray-400 hover:text-blue-400">
              Dashboard
            </div>
            <div className="mb-2 text-gray-400 hover:text-blue-400">
              Proyects
            </div>
            <div className="mb-2 text-gray-400 hover:text-blue-400">
              Product details
            </div>
          </div>
        ) : null}
        <div className="flex flex-row mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-folder-plus"
          >
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            <line x1="12" y1="11" x2="12" y2="17"></line>
            <line x1="9" y1="14" x2="15" y2="14"></line>
          </svg>
          <div className="text-gray-400 ml-2 hover:text-blue-400">
            File Manager
          </div>
        </div>
        <div className="mb-4">CUSTOM</div>
        <div className="flex flex-row mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-file-text"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          <div className="text-blue-400 ml-2 hover:text-blue-400">
            Auth Pages
          </div>
          <div className="ml-auto rounded-full bg-blue-500 px-2  text-white flex m-auto">
            <span className="m-auto mb-1">New</span>
          </div>
        </div>
        <div className="flex flex-row mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-package"
          >
            <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
          <div className="text-gray-400 ml-2 hover:text-blue-400">
            Exta Pages
          </div>
        </div>
        <div
          className="flex flex-row mb-4"
          onClick={() => handleenu("layouts")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-layout hover"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="3" y1="9" x2="21" y2="9"></line>
            <line x1="9" y1="21" x2="9" y2="9"></line>
          </svg>
          <div
            className={` ${
              isOpen.layouts ? "text-blue-400" : "text-gray-400"
            } hover:text-blue-400 ml-2 `}
          >
            Layouts
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-arrow-down ml-auto"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#9e9e9e"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="18" y1="13" x2="12" y2="19" />
            <line x1="6" y1="13" x2="12" y2="19" />
          </svg>
        </div>
        {isOpen.layouts ? (
          <div className="ml-6">
            <div className="mb-2 text-gray-400 hover:text-blue-400">
              Dashboard
            </div>
            <div className="mb-2 text-gray-400 hover:text-blue-400">
              Proyects
            </div>
            <div className="mb-2 text-gray-400 hover:text-blue-400">
              Product details
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Menu;
