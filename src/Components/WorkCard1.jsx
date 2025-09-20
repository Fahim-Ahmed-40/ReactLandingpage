import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
const WorkCard1 = () => {
  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="bg-[#DAFFC2] p-4 lg:p-8 rounded-lg">
        <h1 className="text-2xl font-bold my-4">Sign Up</h1>
        <div className="space-y-2">
          <input
            type="text"
            name=""
            id=""
            placeholder="Name"
            className="w-full p-2 bg-gray-200 rounded-l-full rounded-r-full "
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Company Name"
            className="w-full p-2 bg-gray-200 rounded-l-full rounded-r-full "
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Password"
            className="w-full p-2 bg-gray-200 rounded-l-full rounded-r-full "
          />
        </div>
      </div>

      <div className="space-y-2">
        <h1 className="text-lg font-semibold">Connect your business</h1>
        <p>
          Sign up and link your credit card processor or POS system with CASA.
          We support all major payment providers.
        </p>
        <div>
          <h1 className="flex items-center gap-2">
            <FaArrowAltCircleRight className="text-green-500" />
            <span>Fast approval & easy integration</span>
          </h1>
          <h1 className="flex items-center gap-2">
            <FaArrowAltCircleRight className="text-green-500" />
            <span>No impact on your credit score</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default WorkCard1;
