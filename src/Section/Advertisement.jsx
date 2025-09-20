import React from 'react';
import { SiMsibusiness } from "react-icons/si";
import { BiSolidBusiness } from "react-icons/bi";
import { LuBriefcaseBusiness } from "react-icons/lu";

const Advertisement = () => {
    return (
        <div className='flex justify-evenly bg-green-900 p-4 text-white'>
            <h1>Trusted <br /> by Companies</h1>
            <h1 className='text-2xl font-bold'><SiMsibusiness className='text-yellow-400 text-2xl font-bold'/>Cubyn</h1>
            <h1 className='text-2xl font-bold'><BiSolidBusiness className='text-yellow-400 text-2xl font-bold'/>bastion</h1>
            <h1 className='text-2xl font-bold'><LuBriefcaseBusiness className='text-yellow-400 text-2xl font-bold'/>Digits</h1>
            <h1 className='text-2xl font-bold'><SiMsibusiness className='text-yellow-400 text-2xl font-bold'/>Pipe</h1>
            <h1 className='text-2xl font-bold'><LuBriefcaseBusiness className='text-yellow-400 text-2xl font-bold'/>ramp</h1>
        </div>
    );
};

export default Advertisement;