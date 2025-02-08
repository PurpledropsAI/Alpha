import { MdAccessAlarm } from "react-icons/md";
import { BiTargetLock } from "react-icons/bi";

const ActivitySideBar = () => {
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
              <span className="text-alphaGray mb-1">No Activity</span>
              <span className="text-xl mb-1">Bot is Active</span>
              <span className="text-slate-400 mb-1">16/10/2024 09:00:00</span>
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
              <span className="text-alphaGray mb-1">Last activity:</span>
              <span className="text-2xl mb-1">Searching targets</span>
              <span className="text-alphaGray mb-1">29/08/2024 09:55:10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ActivitySideBar;
