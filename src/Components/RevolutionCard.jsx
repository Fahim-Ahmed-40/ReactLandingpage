import React from "react";

const RevolutionCard = ({ rcardInfo }) => {
  return (
    <div
      className={`p-4 lg:p-8 rounded-lg space-y-2 ${
        rcardInfo.isGreen ? "bg-green-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h2 className="text-3xl font-bold">{rcardInfo.h2Name}</h2>
      <div className="w-[40px]">
        <img
        src={rcardInfo.image}
        alt=""
        className={`w-full rounded-full`}
      />
      </div>
      <p>{rcardInfo.pName}</p>
    </div>
  );
};

export default RevolutionCard;
