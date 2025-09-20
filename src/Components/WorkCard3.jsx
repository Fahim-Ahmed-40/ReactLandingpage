import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import img1 from "../../public/rev/male1.jpg";
import img2 from "../../public/rev/female1.jpg";
import Button from "./Button";
const WorkCard3 = () => {
  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="bg-[#DAFFC2] p-4 lg:p-8 rounded-lg">
        <div className="bg-white flex items-center gap-2 bottom-6 rounded-lg p-2">
          <div>
            <h1 className="font-bold text-xl text-center">
              <FaLeaf className="text-xl text-green" />
            </h1>
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-bold">Receive Money from card</h1>
            <p className="text-base">Cash Deposited Within 24 Hours</p>
          </div>
        </div>

        <div className=" space-y-4">
          <div className="space-y-2 bg-white p-4 rounded-lg mt-4">
            <div className="flex justify-between">
              <h1 className="text-xl font-bold">Recent Users</h1>
              <p className="text-gray-400">View All</p>
            </div>
            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
              <div className="avatar">
                <div className="w-12">
                  <img src={img1} />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src={img2} />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src={img1} />
                </div>
              </div>
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content w-12">
                  <span>+99</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h1 className="text-lg font-semibold">Receive Funds & Grow</h1>
        <p>
          Every morning, your previous day’s credit card transactions are
          automatically submitted for funding.
        </p>
        <div>
          <h1 className="flex items-center gap-2">
            <FaArrowAltCircleRight className="text-green-500" />
            <span>Same-day or next-day payouts</span>
          </h1>
          <h1 className="flex items-center gap-2">
            <FaArrowAltCircleRight className="text-green-500" />
            <span>Flexible repayment from future sales</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default WorkCard3;
