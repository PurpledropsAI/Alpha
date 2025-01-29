import React from "react";

export default function Page5() {
  return (
    <div className="flex justify-center items-center w-screen h-screen text-center">
      <div className="flex flex-col gap-5 lg:px-[28rem]">
        <span className="text-[40px] leading-10">Ready to Get Strarted?</span>
        <span className="text-[40px] leading-10">Join us right now!</span>
        <p>
          presented complicated trading solutions that are intended to
          streamline your investment experience.{" "}
        </p>
        <div>
          <button className=" p-4 px-8 bg-green-500  text-[18px] rounded-[2rem]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
