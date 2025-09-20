import React from "react";
import { MdGroups } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";
import Button from "./Button";
import img1 from '../../public/rev/male1.jpg'
import img2 from '../../public/rev/female1.jpg'
const ContactAnother = () => {
  return (
    <div className="flex-1 bg-yellow-200 relative p-4 lg:p-8 rounded-lg ">
      <div className="relative">
        <div className="space-y-4">
          <div className="flex gap-4">
            <MdGroups className="bg-green-300 text-4xl rounded-full p-2"/>
            <h1 className="font-bold text-2xl">Total user</h1>
          </div>
          <div className="flex justify-between">
           <div className="w-[60px]">
             <h1 className="bg-gray-200 rounded-full text-center">
              <span className="font-bold">25k+</span> <br />
              User
            </h1>
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
            </div>
          </div>
          <div className="bg-green-200 p-4 rounded-lg">
            <h1 className="text-xl font-bold">Monthly User</h1>
            <progress className="progress progress-success bg-white w-full" value="50" max="100"></progress>
          </div>
          <div className="absolute bg-white rounded-lg rotate-6 right-4 mt-4 p-8">
            <p>Total Balance</p>
            <h1 className="font-bold text-4xl">250000</h1>
            <h1 className="flex justify-center items-center gap-1"><IoIosAdd className="bg-green-400 rounded-full text-black"/> Add Number</h1>
          </div>
        
        </div>
        
      </div>
      <div className="absolute bg-green-200 rounded-lg -bottom-16 -left-16 mt-4 p-8 flex flex-col text-center">
            <div className="flex justify-center"><IoIosCall className="text-4xl text-center text-black"/></div>
            <p className="text-xl font-bold">Call for consultation</p>
            <p className="text-gray-500">OR</p>
            <Button btnName={"Let's connect"} btnColor="yellow"/>
          </div>
    </div>
  );
};

export default ContactAnother;
