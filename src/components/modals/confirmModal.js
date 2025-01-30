import React from "react";
import checkImg from "..//assets/check.png";

export default function ConfirmModal() {
  return (
    <div
      className="w-screen h-screen fixed top-0 left-0 flex text-black font-aclonica justify-center items-center backdrop-blur-xl z-[100]"
      data-aos="fade-in"
    >
      <div
        className="fixed flex flex-col gap-5  items-center bg-white rounded-3xl shadow-lg p-10 w-[30rem] text-center max-w-4xl"
        data-aos="zoom-in"
      >
        <span className="text-green-500 text-[32px]">Connect Confirmation</span>
        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </span>
        <img src={checkImg} alt="checkImg" className="w-44" />
      </div>
    </div>
  );
}
