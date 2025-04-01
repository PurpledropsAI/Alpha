import React, { useState } from "react";
import { FaDiscord, FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";
import { TbMoonFilled } from "react-icons/tb";

const DashboardHeader = ({ sideBarIsOpen }) => {
  // const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );

  const { logout } = useAuth();

  const navigate = useNavigate();

  // const toggleNavbar = () => {
  //   setIsOpen(!isOpen);
  // };

  const handleLogout = () => {
    navigate("/");
    logout();
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div>
      <div className="border-slate-400 bg-white border-b-[1px] font-aclonica">
        <header className="flex justify-between items-center p-3 sm:p-5 sm:px-10 ">
          <div className="text-xl md:text-2xl inline text-alphaGreen font-semibold">
            <span
              className="cursor-pointer mr-4 text-black"
              onClick={sideBarIsOpen}
            >
              {"☰"}
            </span>
            <h1 className="inline text-green-500 text-[16px] sm:text-[20px]">
              alpha robotics
            </h1>
          </div>
          <div className=" text-black">
            <div className="flex justify-between gap-5 items-center font-semibold">
              {/* <TbMoonFilled className="inline text-3xl cursor-pointer" />
              <FaUserAlt className="inline text-3xl cursor-pointer" />
              <FaDiscord className="inline text-3xl cursor-pointer" /> */}
              <span
                className="hidden md:inline-block cursor-pointer border bg-green-500 rounded-lg p-2 px-4"
                onClick={() => handleLogout()}
              >
                Logout
              </span>
              <div className="flex items-center justify-center gap-2 cursor-pointer rounded-md">
                <img src="avatar.png" alt="avatar" className="w-8 sm:w-12" />

                <span className="text-[12px] sm:text-[14px]">
                  {userData?.username}
                </span>
              </div>
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
    </div>
  );
};

export default DashboardHeader;
