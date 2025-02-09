import React, { useEffect, useState } from "react";
import ActivitySideBar from "../components/ActivitySideBar";
import StatsSideBar from "../components/StatsSideBar";
import SwitchBoxSideBar from "../components/SwitchBoxSideBar";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "../../../components/tabs/Tabs";
import OpenPositionsTab from "../components/OpenPositionsTab";
import SuccessBar from "../components/SuccessBar";
import { PiCurrencyDollarBold } from "react-icons/pi";
import { SiTether } from "react-icons/si";
import { RiBnbFill } from "react-icons/ri";
import axios from "axios";
import { BASE_URL } from "../../../api/api";
import DepositModal from "../../../components/modals/depositModal";
import FailureModal from "../../../components/modals/failureModal";

const tabs = [
  {
    title: "Open Orders",
    dummyLabel: "No current active/open orders placed by Cryptohopper",
    largeText: "",
  },
  {
    title: "Summary Open positions",
    dummyLabel: "",
    largeText: "Total current positions",
  },
  {
    title: "Latest 5 Sells",
    dummyLabel: "No sell trades made yet",
    largeText: "",
  },
];

export default function Dashboard() {
  const [userData, setUserData] = useState(null);
  const [isDepositModal, setIsDepositModal] = useState(false);
  const [bal, setBal] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // /binance/data
  const fetchUserData = async () => {
    // e.preventDefault();
    // if (isLoading) return;
    // setIsLoading(true);

    const token = localStorage.getItem("token");
    console.log("token: ", token);

    if (!token) {
      alert("token not found. Please login again");
      // setIsLoading(false);
      return;
    }

    try {
      const response = await axios.get(`${BASE_URL}/binance/data/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      console.log("response: ", response.data);
      if (response?.status === 200) {
        return response?.data;
      }
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    } finally {
      // setIsLoading(false);  // ✅ Ensures loading state resets
    }
  };

  const fetchBalance = async () => {
    // e.preventDefault();
    // if (isLoading) return;
    // setIsLoading(true);

    const token = localStorage.getItem("token");
    console.log("token: ", token);

    if (!token) {
      alert("token not found. Please login again");
      // setIsLoading(false);
      return;
    }

    try {
      const response = await axios.get(`${BASE_URL}/bot/config/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      console.log("bot/config: ", response.data);
      if (response?.status === 200) {
        return response?.data;
      }
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    } finally {
      // setIsLoading(false);  // ✅ Ensures loading state resets
    }
  };
  const startTrade = async () => {
    // e.preventDefault();
    // if (isLoading) return;
    // setIsLoading(true);

    const token = localStorage.getItem("token");
    console.log("token: ", token);

    if (!token) {
      alert("token not found. Please login again");
      // setIsLoading(false);
      return;
    }

    try {
      const response = await axios.get(`${BASE_URL}/bot/start-trade/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      console.log("bot/config: ", response.data);
      if (response?.status === 200) {
        return response?.data;
      }
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      if (error?.response?.data?.error) {
        setErrorMessage("Bot is disabled. Enable it.");
      }
    } finally {
      // setIsLoading(false);  // ✅ Ensures loading state resets
    }
  };

  // const fetch
  const handleStartBotClick = async () => {
    const response1 = await fetchBalance();
    if (response1?.is_enabled === false) {
      setErrorMessage("Bot is disabled. Enable it.");
      return;
    }
    const response2 = await startTrade();
    console.log("response2: ", response2);
  };

  useEffect(() => {
    async function fetchDta() {
      const data = await fetchBalance();
      setBal(data?.initial_capital);
      if (data?.is_enabled === false) {
        setIsDepositModal(true);
      }

      const data2 = await fetchUserData();
      setUserData(data2);
    }
    fetchDta();
  }, []);

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row w-full transition-all">
        {/* side tabs section */}
        <div className=" w-full md:w-2/5 bg-transparent p-4">
          <ActivitySideBar />
          <StatsSideBar usdtBal={bal || 0} />
          <SwitchBoxSideBar />
          {/* {sideTabs.map((tab, index) => createTab(tab, index))} */}
        </div>

        {/* main tabs section */}
        <div className="order-last md:order-first w-full  bg-transparent p-4">
          <div className="my-5">
            <SuccessBar />
          </div>
          <div className="grid grid-cols-3 gap-10 w-full my-5">
            <div className="flex items-center gap-3 p-5 rounded-lg bg-white">
              <div className="p-2 rounded-full bg-green-600">
                <SiTether color="white" size={40} />
              </div>

              <span className="text-[20px]">
                Total USDT:{" "}
                {Number(userData?.relevantBalances[1]?.free || 0).toFixed(4)}
              </span>
            </div>
            <div className="flex items-center gap-3 p-5 rounded-lg bg-white">
              <div className="p-2 rounded-full bg-yellow-500">
                <RiBnbFill color="white" size={40} />
              </div>

              <span className="text-[20px]">
                Total BNB:{" "}
                {Number(userData?.relevantBalances[0]?.free).toFixed(4)}
              </span>
            </div>
            <div
              className="flex items-center gap-3 p-5  rounded-lg bg-green-600 cursor-pointer hover:bg-green-500"
              onClick={() => handleStartBotClick()}
            >
              <div className="p-2 px-4 rounded-xl bg-white">
                <img src="/hello3.png" alt="logo" className="w-12 h-12" />
              </div>
              <span className="text-white w-full text-[20px]">Start Bot</span>
            </div>
          </div>
          <div>
            <Tabs>
              <TabList>
                <Tab>Open Positions</Tab>
                <Tab>Short Positions</Tab>
                <Tab>Reserved Funds</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <OpenPositionsTab isfirst={true} />
                </TabPanel>
                <TabPanel>
                  <OpenPositionsTab />
                </TabPanel>
                <TabPanel>
                  <OpenPositionsTab />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
          {tabs.map((tab, index) => createTab(tab, index))}
        </div>
      </div>
      {isDepositModal && (
        <DepositModal
          onClose={() => setIsDepositModal(false)}
          onConfirm={() => {
            fetchBalance();
            setIsDepositModal(false);
          }}
        />
      )}
      {errorMessage && (
        <FailureModal
          message1={errorMessage}
          onClose={() => setErrorMessage("")}
        />
      )}
    </div>
  );
}

const createTab = (tab, index) => {
  return (
    <div
      index={index}
      className="text-left w-full my-5 py-2 px-5 mx-auto bg-white rounded-lg"
    >
      <span className="text-lg font-semibold"> {tab.title}</span>
      <div className="my-3 text-right">
        <span className="text-black text-2xl font-semibold ">
          {tab.largeText}
        </span>
      </div>
      <div className="my-3">
        <span className="text-slate-600">{tab.dummyLabel}</span>
      </div>
    </div>
  );
};
