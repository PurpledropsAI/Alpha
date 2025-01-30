import React, { useState } from "react";
import img1 from "./assets/img1.png";

import Footer from "../../components/footer/footer";
import ConfirmModal from "../../components/modals/confirmModal";
import { BASE_URL } from "../../api/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import HomeHeader from "../../components/navbar/homeHeader";

export default function HomePage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [inputs, setInputs] = useState({
    name: "",
    api_key: "",
    api_search: "",
    passphrase: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true);

    console.log("inputs: ", inputs);
    try {
      const response = await axios.post(`${BASE_URL}/binance/connect`, inputs);

      console.log("response: ", response);
    if(response?.status == 200){
      setModalIsOpen(true);
      setTimeout(() => {
        setModalIsOpen(false);
        navigate("/dashboard")
      }, 3000);
    }
    } catch (error) {
      console.log(error);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="flex flex-col items-center font-aclonica text-white justify-center h-full bg-gradient-to-br from-[#0D3225] via-[#172631] to-[#545767]  overflow-hidden">
      <HomeHeader />

      <div className="flex flex-col gap-5 p-10 items-center w-full">
        <div className="flex flex-col gap-3 h-full ">
          <span className="text-[40px]">
            Connection Echange Alpha Trading Bot
          </span>
          <span className="w-[30rem] font-light">
            Kindly watch the video tutorial on how to connect your Binance
            account to the Alpha trading bot
          </span>
          <img src={img1} alt="img1" className="rounded-[3rem]"></img>
        </div>
      </div>

      <div className="flex w-full p-10">
        <form className="flex flex-col gap-3 w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name:</label>
            <input
              name="name"
              placeholder="Siva Prakash"
              value={inputs.name}
              onChange={handleInputChange}
              className="p-4 px-4 rounded-xl outline-none text-black w-[30rem]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">API Key:</label>
            <input
              name="api_key"
              placeholder="QKSH2882"
              value={inputs.api_key}
              onChange={handleInputChange}
              className="p-4 px-4 rounded-xl outline-none text-black w-[30rem]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">API Search:</label>
            <input
              name="api_search"
              placeholder="QKSH2882API"
              value={inputs.api_search}
              onChange={handleInputChange}
              className="p-4 px-4 rounded-xl outline-none text-black w-[30rem]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Passphrase:</label>
            <input
              name="passphrase"
              placeholder="2782781891278"
              value={inputs.passphrase}
              onChange={handleInputChange}
              className="p-4 px-4 rounded-xl outline-none text-black w-[30rem]"
            />
          </div>
          <div className="flex justify-center w-full">
            <button
              className="p-4 px-8 rounded-xl bg-green-500 text-white"
              type="submit"
            >
              Connect to Binance
            </button>
          </div>
        </form>
      </div>
      <Footer />

      {modalIsOpen && <ConfirmModal />}
    </div>
  );
}
