import React from 'react';
import { SiWikibooks } from "react-icons/si";
import { MdElectricBolt } from "react-icons/md";
import SalaryChart from './SalaryChart';
const BannerCard1 = () => {
    return (
        <div className='bg-[#E0F0E5] p-4 lg:p-8 space-y-2 rounded-lg'>
            <div className='flex gap-2 items-center'>
                <SiWikibooks className='text-4xl text-white bg-green-900 rounded-lg p-2'/>
                <h1 className='text-lg font-bold'>Sales overview from Previous Day</h1>
            </div>
            <div className='bg-white p-4 lg:p-8 rounded-lg'>
                <div className='flex gap-2'>
                <MdElectricBolt className='bg-green-600 text-white rounded-full font-bold text-4xl'/>
                <h1 className='text-2xl font-bold'>Total Sales <span className='text-gray-300'>$ 1250</span></h1>
            </div>
            <SalaryChart/>
            </div>
            <div className='flex gap-2 bg-[#BFE5A6] rounded-lg m-2 p-2'>
                <MdElectricBolt className='bg-green-600 text-white rounded-full font-bold text-2xl'/>
                <h1 className='text-base'>Avg. sale: $104.16 / per transection</h1>
            </div>
        </div>
    );
};

export default BannerCard1;