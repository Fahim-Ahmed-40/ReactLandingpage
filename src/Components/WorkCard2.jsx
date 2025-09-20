import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import img1 from "../../public/rev/img2.jpg";
const WorkCard2 = () => {
  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="bg-[#F1F68E] p-4 lg:p-8 rounded-lg">
        <div className="bg-white flex justify-between items-center gap-2 bottom-6 rounded-lg p-2">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={img1} />
            </div>
          </div>
          <div className="">
            <h1 className="text-xl font-bold">Maria Costa</h1>
            <p className="text-base">marias@gmail.com</p>
          </div>
          <div>
            <h1 className="font-bold text-xl text-center">$10k</h1>
          </div>
        </div>

        <div className="bg-white p-2 rounded-lg mt-2">
          <div className="flex justify-between">
            <div className="space-y-4">
              <h1>Total balance</h1>
              <h1 className="text-2xl font-bold">$12000.00</h1>
            </div>
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">10%</h1>
              <p>Discount rate</p>
            </div>
          </div>
          <h1 className="p-2 bg-[#DAFFC2] rounded-l-full rounded-r-full">See details</h1>
        </div>
      </div>

      <div className="space-y-2">
        <h1 className="text-lg font-semibold">
          Transactions for Early Payment
        </h1>
        <p>
          Every morning, your previous day’s credit card transactions are
          automatically submitted for funding.
        </p>
        <div>
          <h1 className="flex items-center gap-2">
            <FaArrowAltCircleRight className="text-green-500" />
            <span> No waiting for 30-60 day settlements</span>
          </h1>
          <h1 className="flex items-center gap-2">
            <FaArrowAltCircleRight className="text-green-500" />
            <span>Transparent discount rates</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default WorkCard2;
