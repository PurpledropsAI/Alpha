import { MdAccessAlarm } from "react-icons/md";
import { BiTargetLock } from "react-icons/bi";

const ActivitySideBar = ({ status, reason, liveMarketPrice }) => {
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
              <span className="text-slate-400 mb-1">
                Trade Cycle 1 in Progress
              </span>
              <span className="text-xl mb-1 font-normal">
                Bot is {status || "unknown"}
              </span>
              <span className="text-slate-400 mb-1">
                {new Date().toLocaleString()}
              </span>
              {reason && (
                <span className="text-xl mb-1 font-normal">
                  Reason: {reason || "unknown"}
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
              <span className="text-2xl mb-1">{liveMarketPrice || 0.0}</span>
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
