import ToggleSlider from "../../components/toggle-slider/ToggleSlider";
import { FaTrafficLight } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { MdFileUpload } from "react-icons/md";

const list = [
  { icon: <FaTrafficLight />, title: "Bot is" },
  { icon: <IoMdDownload />, title: "Buying is" },
  { icon: <MdFileUpload />, title: "Selling is" },
];

const SwitchBoxSideBar = () => {
  return (
    <div className="text-left w-full my-5 mx-auto bg-white rounded-lg">
      {list.map((item, index) => (
        <div>
          <div className="py-2 px-4">
            <div key={index}>
              <div className="flex justify-around items-center my-5">
                <span className="text-6xl text-alphaGreen">{item.icon}</span>
                <div className="flex flex-col items-center">
                  <span className="text-lg mb-1 text-alphaGreen uppercase">
                    {item.title} <span className="font-bold">Enabled</span>
                  </span>
                  <ToggleSlider id={getRandId()} />
                </div>
              </div>
            </div>
          </div>
          <hr class="border-alphaGray " />
        </div>
      ))}
    </div>
  );
};

const getRandId = () => {
  return Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(2, 10);
};

export default SwitchBoxSideBar;
