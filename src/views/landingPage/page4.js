import React from "react";
import img1 from "./asses/img1.png";
import img2 from "./asses/img2.png";
import img3 from "./asses/img3.png";

export default function Page4() {
  const cardItems = [
    {
      title: "Automation Bot",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text.",
      redirectTo: "",
      logo: img1,
    },
    {
      title: "Automation Bot",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text.",
      redirectTo: "",
      logo: img2,
    },
    {
      title: "Automation Bot",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text.",
      redirectTo: "",
      logo: img3,
    },
  ];
  return (
    <div className="flex flex-col gap-5 items-center p-3 sm:p-10">
      <div className="flex flex-col gap-3 lg:px-[22rem] text-center">
        <span className="text-[32px] sm:text-[60px] leading-10 sm:leading-[4.5rem]">Power your Crypto Trading Bot</span>
        <p className="text-[12px] sm:text-[16px]">
          presented complicated trading solutions that are intended to
          streamline your investment experience.{" "}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row p-3 sm:p-10 gap-5 justify-between rounded-3xl border border-slate-600 backdrop-blur-sm bg-white bg-opacity-5">
        {cardItems?.map((item, index) => (
          <div className="flex flex-col sm:flex-row">
            {index !== 0 && (
              <div className="w-full sm:w-[0.5px] h-[0.5px] sm:h-full bg-slate-300 max-sm:my-5 sm:mx-10"></div>
            )}
            <div className="flex flex-col gap-3">
              <img
                src={item.logo}
                alt={item.logo}
                className="w-10 sm:w-20 p-2 bg-white bg-opacity-10 rounded-full"
              ></img>
              <span className="text-[20px]">{item.title}</span>
              <p className="text-[14px] font-extralight"> {item.description}</p>
              <div>
                <button className=" text-green-500">Get Started</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
