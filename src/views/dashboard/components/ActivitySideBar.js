import { MdAccessAlarm } from "react-icons/md";
import { BiTargetLock } from "react-icons/bi";
import { RiBnbFill } from "react-icons/ri";
import { SiBinance } from "react-icons/si";

const ActivitySideBar = ({ status, reason, liveMarketPrice, tradeCycleNo }) => {
  return (
    <div className="text-left w-full my-5 mx-auto bg-white rounded-lg">
      <div className="py-2 px-4">
        <span className="text-lg font-semibold"> Activity</span>

        <div className="my-2 flex flex-col">
          <div className="my-2 flex flex-row justify-start items-center px-1">
            <div className="mr-8">
              <span className="">
                <MdAccessAlarm className="text-6xl text-alphaGray font-bold" />
              </span>
            </div>
            <div className=" flex flex-col items-start">
              {tradeCycleNo ? (
                <span className="text-slate-400 mb-1">
                  Trade Cycle {tradeCycleNo} in Progress
                </span>
              ) : (
                <span className="text-slate-400">
                  Trade Cycle waiting for signal...
                </span>
              )}
              <span className="text-xl mb-1 font-normal">
                Bot status: {status || "waiting for signal..."}
              </span>
              <span className="text-slate-400 mb-1">
                {new Date().toLocaleString()}
              </span>
              {reason && (
                <span className="text-xl mb-1 font-normal">
                  Reason: {reason}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <hr class="border-alphaGray " />
      <div className="py-2 px-4">
        <div className="my-2 flex flex-col">
          <div className="my-2 flex flex-row justify-start items-center px-1">
            <div className="mr-8">
              <span className="">
                <BiTargetLock className="text-6xl text-green-500 font-bold" />
              </span>
            </div>
            <div className=" flex flex-col items-start">
              <span className="text-slate-400 mb-1">Live Market Price:</span>
              <div className="flex items-center gap-2">
                <span className="text-2xl">{liveMarketPrice || 0.0}</span>
                <SiBinance color="orange" size={25} />
              </div>
              <span className="text-slate-400 mb-1">
                {new Date().toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ActivitySideBar;
