import React, { useState } from "react";
import { FaDiscord, FaUserAlt } from "react-icons/fa";
import { TbMoonFilled } from "react-icons/tb";
import { IoFolderOpenOutline } from "react-icons/io5";
import { CiServer } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";
import { ImStatsBars2 } from "react-icons/im";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { GrMoney } from "react-icons/gr";

const menuItems = [
  {
    icon: <CiServer />,
    title: "Dashboard",
  },
  {
    icon: <IoFolderOpenOutline />,
    title: "Portfolio",
  },
  {
    icon: <GrMoney />,
    title: "Profits",
  },
  {
    icon: <ImStatsBars2 />,
    title: "Trade History",
  },
  {
    icon: <MdOutlineBookmarkAdd />,
    title: "Subscriptions",
  },
  {
    icon: <BiSupport />,
    title: "Support",
  },
];
const DashboardHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="border-slate-400 bg-white border-b-[1px] font-aclonica">
        <header className="flex justify-between items-center mx-6 md:mx-10 p-4 px-2 ">
          <div className="text-xl md:text-2xl inline text-alphaGreen font-semibold">
            <span
              className="cursor-pointer mr-4 text-black"
              onClick={toggleNavbar}
            >
              {"☰"}
            </span>
            <h1 className="inline text-green-500">alpha robotics</h1>
          </div>
          <div className="hidden md:inline-block text-black">
            <div className="flex justify-between gap-5 items-center font-semibold">
              <h2 className="mr-7">Advanced view</h2>
              <TbMoonFilled className="inline text-3xl cursor-pointer" />
              <FaUserAlt className="inline text-3xl cursor-pointer" />
              <FaDiscord className="inline text-3xl cursor-pointer"/>

            </div>
          </div>
        </header>
      </div>

      {/* Sidebar */}
      {/* <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleNavbar}
      ></div> */}

      <nav
        className={`absolute w-full md:w-1/3 lg:w-1/6 h-full transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 bg-white h-full">
          <ul className="text-left">
            {menuItems.map((item, index) => (
              <li index={index} className="py-2 mx-3 cursor-pointer">
                <span className="inline-block ">{item.icon}</span>
                <a href="#" className="ml-4">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default DashboardHeader;
