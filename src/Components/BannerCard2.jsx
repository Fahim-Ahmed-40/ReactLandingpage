import React from "react";

import { MdElectricBolt } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";

const BannerCard2 = () => {
  return (
    <div className="bg-[#DAFFC2] p-4 lg:p-8 rounded-lg flex flex-col space-y-4">
      <div className="flex gap-2 items-center ">
        <MdElectricBolt className="text-4xl text-white bg-green-900 rounded-lg p-2" />
        <h1 className="text-lg font-bold">Factoring Possible Amount.</h1>
      </div>

      <div className="flex flex-col items-center bg-white p-4 m-4 border-2 rounded-lg shadow">
        <div className="text-center">
          <p>Available amount</p>
          <h1 className="text-4xl font-bold">
            $1375 <span className="text-xl">USD</span>
          </h1>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 flex-1">
        <div className="flex gap-2 items-center">
          <MdElectricBolt className="text-4xl text-white bg-green-900 rounded-lg p-2" />
          <h1 className="text-lg font-bold">Factored amount vs. remaining balance </h1>
        </div>

        <div className="bg-[#E0F0E5] p-4 rounded-lg">
            <div className="flex justify-between items-center">
                <p className="text-gray-400 text-lg">factored balance</p>
                <h1 className="text-2xl font-bold flex gap-2 items-center"><FaDollarSign/>11,531.25</h1>
            </div>
            <progress className="progress progress-success w-full" value="75" max="100"></progress>
        </div>
      </div>
    </div>
  );
};

export default BannerCard2;
