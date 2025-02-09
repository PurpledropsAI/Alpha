import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React from "react";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Page3() {
  const accordianData = [
    {
      id: "01",

      title: "Block Chain Solutions",
      description:
        "Revolutionize your business with blockchain-powered decentralized ecosystems, leveraging smart contracts for unmatched transparency efficiency, and trust.",
      tags: [
        "Crypto games",
        "Smart Contract Development",
        "ICO (Solaba and Ethereum",
        "oken Development",
        "Centralized & decentralized exchanges",
      ],
    },
    {
      id: "02",
      title: "Artificial Intelligence",
      description:
        "Revolutionize your business with blockchain-powered decentralized ecosystems, leveraging smart contracts for unmatched transparency efficiency, and trust.",
      tags: [
        "Crypto games",
        "Smart Contract Development",
        "ICO (Solaba and Ethereum",
        "oken Development",
        "Centralized & decentralized exchanges",
      ],
    },
    {
      id: "03",
      title: "Financial Solution",
      description:
        "Revolutionize your business with blockchain-powered decentralized ecosystems, leveraging smart contracts for unmatched transparency efficiency, and trust.",
      tags: [
        "Crypto games",
        "Smart Contract Development",
        "ICO (Solaba and Ethereum",
        "oken Development",
        "Centralized & decentralized exchanges",
      ],
    },
    {
      id: "04",
      title: "Design and Development",
      description:
        "Revolutionize your business with blockchain-powered decentralized ecosystems, leveraging smart contracts for unmatched transparency efficiency, and trust.",
      tags: [
        "Crypto games",
        "Smart Contract Development",
        "ICO (Solaba and Ethereum",
        "oken Development",
        "Centralized & decentralized exchanges",
      ],
    },
    {
      id: "05",
      title: "Other services",
      description:
        "Revolutionize your business with blockchain-powered decentralized ecosystems, leveraging smart contracts for unmatched transparency efficiency, and trust.",
      tags: [
        "Crypto games",
        "Smart Contract Development",
        "ICO (Solaba and Ethereum",
        "oken Development",
        "Centralized & decentralized exchanges",
      ],
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row w-screen rounded-[3rem] sm:rounded-[5rem] p-3 sm:p-10 my-20 bg-[#293140]">
      <div className="flex flex-col p-2 sm:p-5 md:p-0 gap-5 lg:w-5/12">
        <span className="text-[12px] sm:text-[16px] text-slate-300 ">
          Our Services
        </span>
        <span className="text-[20px] sm:text-[60px] pr-10">
          Simplify The Process To Shorten The Timeline.
        </span>
      </div>
      <div className="lg:w-7/12">
        {accordianData?.map((item, index) => (
          <div>
            <Accordion
              className="py-5"
              defaultExpanded={index === 0}
              style={{
                backgroundColor: "transparent",
                color: "white",
                boxShadow: "none",
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon style={{ color: "white", fontSize: 30 }} />
                }
              >
                <div className="flex items-center text-[20px] gap-3">
                  <span className="text-[14px] sm:text-[16px]">{item.id}</span>
                  <span className="text-[20px] sm:text-[32px]">{item.title}</span>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="flex flex-col gap-3 font-extralight">
                  <span className="text-[14px] sm:text-[16px] font-extralight">{item.description}</span>
                  <div className="flex gap-3 flex-wrap">
                    {item.tags?.map((tag, index) => (
                      <div className="flex items-center ">
                        <MdKeyboardDoubleArrowRight />
                        <span className="text-[12px] sm:text-[16px]">{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
            <div className="h-[0.5px] bg-slate-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
