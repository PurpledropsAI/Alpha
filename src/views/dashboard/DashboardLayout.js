import React, { useEffect, useState } from "react";
import DashboardHeader from "./components/DashboardHeader";
import { CiServer } from "react-icons/ci";
import { IoFolderOpenOutline } from "react-icons/io5";
import { GrMoney } from "react-icons/gr";
import { ImStatsBars2 } from "react-icons/im";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Portfolio from "./pages/portfolio";
import Profits from "./pages/profits";
import TradeHistory from "./pages/tradeHistory";
import Support from "./pages/support";
import Subscriptions from "./pages/subscriptions";
import { BASE_URL } from "../../api/api";
import axios from "axios";

const menuItems = [
  {
    icon: <CiServer />,
    title: "Dashboard",
    route: "",
  },
  {
    icon: <IoFolderOpenOutline />,
    title: "Portfolio",
    route: "portfolio",
  },
  {
    icon: <GrMoney />,
    title: "Profits",
    route: "profits",
  },
  {
    icon: <ImStatsBars2 />,
    title: "Trade History",
    route: "tradeHistory",
  },
  {
    icon: <MdOutlineBookmarkAdd />,
    title: "Subscriptions",
    route: "subscriptions",
  },
  {
    icon: <BiSupport />,
    title: "Support",
    route: "support",
  },
];

const DashboardLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentRoute =
    location.pathname.split("/").filter(Boolean).at(-1) || "";

  const matchedOption =
    menuItems.find((item) => item.route === currentRoute)?.title || "Dashboard";

  const [sideBarIsOpen, setSideBarIsOpen] = useState(true);
  const [activeOption, setActiveOption] = useState(matchedOption);

  useEffect(() => {
    // console.log(location?.pathname.split("/").at(-1));
    // console.log("activeOption:", activeOption);

    setActiveOption(matchedOption);
  }, [location]);

  const handleSideOptionsClick = (option) => {
    navigate(`${option.route}`);
  };

  
  
  return (
    <div className="gradient-bg mx-auto h-full text-black font-aclonica transition-all overflow-hidden">
      <DashboardHeader sideBarIsOpen={() => setSideBarIsOpen(!sideBarIsOpen)} />

      <div className="flex transition-all ease-in-out duration-200 font-zona">
        {/* <div> */}
        {sideBarIsOpen && (
          <nav
            className={` h-screen transition-all ease-in-out duration-200 ${
              sideBarIsOpen ? "translate-x-0 w-72" : "-translate-x-full w-0"
            }`}
          >
            <div className="p-4 bg-white h-full">
              <ul className="text-left flex flex-col gap-5">
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    index={index}
                    className={`flex gap-2 py-2 mx-3 cursor-pointer ${
                      activeOption == item.title
                        ? "text-green-500 "
                        : "text-black"
                    }`}
                  >
                    {activeOption == item.title && (
                      <div className="w-[2px] h-[20px] bg-green-500" />
                    )}
                    <span className="inline-block ">{item.icon}</span>
                    <span
                      className=""
                      onClick={() => handleSideOptionsClick(item)}
                    >
                      {item.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        )}
        {/* </div> */}
        <Routes>
          <Route path="" element={<Dashboard />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="profits" element={<Profits />} />
          <Route path="tradehistory" element={<TradeHistory />} />
          <Route path="subscriptions" element={<Subscriptions />} />
          <Route path="support" element={<Support />} />
        </Routes>
      </div>
    </div>
  );
};

export default DashboardLayout;
