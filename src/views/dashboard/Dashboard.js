import React from "react";
import DashboardHeader from "./DashboardHeader";
import ActivitySideBar from "./ActivitySideBar";
import StatsSideBar from "./StatsSideBar";
import SwitchBoxSideBar from "./SwitchBoxSideBar";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "../../components/tabs/Tabs";
import OpenPositionsTab from "./OpenPositionsTab";

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

const Dashboard = () => {
  return (
    <div className="gradient-bg mx-auto h-full text-black font-aclonica">
      <DashboardHeader />

      <div className="mx-6">
        <div className="flex flex-col md:flex-row">
          {/* side tabs section */}
          <div className=" w-full md:w-1/4 bg-transparent p-4">
            <ActivitySideBar />
            <StatsSideBar />
            <SwitchBoxSideBar />
            {/* {sideTabs.map((tab, index) => createTab(tab, index))} */}
          </div>

          {/* main tabs section */}
          <div className="order-last md:order-first w-full md:w-4/5 bg-transparent p-4">
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
      </div>
    </div>
  );
};

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

export default Dashboard;
