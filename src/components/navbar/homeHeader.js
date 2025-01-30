import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function HomeHeader() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center  w-screen sm:h-24 p-3 sm:px-10 bg-gradient-to-r from-[#09241A] to-[#121624]">
      <img
        src="/logo.png"
        alt="logo"
        className="w-14 sm:w-20 cursor-pointer"
        onClick={() => navigate("/")}
      ></img>
      <div className="flex items-center justify-center gap-5">
        <img src="avatar.png" alt="avatar" className="w-16"/>
        <span>Mr. John Mathew</span>
      </div>
    </div>
  );
}
