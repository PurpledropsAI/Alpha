import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Card = ({
  title,
  primaryPrice,
  secondaryPrice,
  descriptionList,
  isPrimary,
  planType,
  clickEvent,
}) => (
  <div className="bg-alphaWhite hover:shadow-xl rounded-2xl p-6 w-72 m-3 cursor">
    <h1 className="text-xl font-semibold mb-2">{title}</h1>
    <div className="font-bold">
      <span className="text-3xl text-alphaGreen">{primaryPrice}/</span>
      <span className="text-lg text-alphaLightGray">{secondaryPrice}</span>
      <hr className="border-dotted border-alphaLightGray my-5 px-3" />
      <div className="font-normal text-left">
        {descriptionList.map((description, index) => (
          <p className="my-3" index={index}>
            <FaArrowRight className="text-alphaGreen inline mr-2" />
            {description}
          </p>
        ))}
      </div>
    </div>
    {isPrimary ? (
      <div className="text-alphaWhite mt-9">
        <button
          className="w-full rounded-xl bg-alphaGreen border-alphaGreen"
          onClick={clickEvent}
          data-planType={planType}
        >
          Buy Now <FaArrowRight className="inline m-2" />
        </button>
      </div>
    ) : (
      <div className="text-black mt-9">
        <button
          onClick={clickEvent}
          data-planType={planType}
          className="w-full rounded-xl bg-alphaWhite border-black"
        >
          Buy Now <FaArrowRight className="inline m-2" />
        </button>
      </div>
    )}
  </div>
);

export default Card;
