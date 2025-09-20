import React from "react";

import { MdElectricBolt } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import img1 from "../../public/rev/male1.jpg";
import img2 from "../../public/rev/female1.jpg";
import Button from "./Button";

const BannerCard3 = () => {
  return (
    <div className="bg-[#F1F68E] p-4 lg:p-8 rounded-lg flex flex-col space-y-4 relative">
      <div className="flex gap-2 items-center ">
        <MdElectricBolt className="text-4xl text-white bg-green-900 rounded-lg p-2" />
        <h1 className="text-lg font-bold">Factoring Possible Amount.</h1>
      </div>

      <div className=" space-y-4">
        <div className="space-y-2 bg-white p-4 rounded-lg -rotate-6">
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

        <div className="stat bg-white rounded-lg w-2/3 absolute right-2">
          <div className="text-base">Total balance</div>
          <div className="stat-value">23,576.00</div>
          <h1 className="flex items-center gap-1">
            <IoIosAdd className="bg-green-400 rounded-full text-black" /> Add
            Number
          </h1>
        </div>

        <div className="bg-white flex justify-between items-center gap-2 absolute bottom-6 rotate-12 rounded-lg p-2">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={img1}
              />
            </div>
          </div>
          <div className="">
            <h1 className="text-xl font-bold">Online</h1>
            <p className="text-base">Tony Restaurent</p>
          </div>
          <div>
            <h1 className="font-bold text-xl text-center">$10k</h1>
            <Button btnName={'Confirm'}/>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BannerCard3;
