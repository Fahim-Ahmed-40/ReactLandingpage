import React from 'react';
import { FaCircleArrowRight } from "react-icons/fa6";
import Button from './Button';
const PricingCard = ({pricing}) => {
    return (
        <div className={`rounded-lg p-2 lg:p-4 ${
        pricing.plan == "EnterPrice plan" ? "bg-green-900 text-white" : "bg-gray-300 text-black"
      }`}>
            <h3 className='text-lg font-bold'>{pricing.plan}</h3>
            <h1><span className='text-4xl font-bold'>{pricing.di} </span>Discount rate</h1>
            <Button btnName={'Get Started'}/>
            <p>For businesses processing up to $10,000/month</p>
            <div className={`px-2 py-4 mx-2 my-4 rounded-lg ${
          pricing.plan == "EnterPrice plan" ? "bg-white text-black" : "bg-white text-black"
        }`}>
                <h3 className='font-bold text-xl '>What's Included?</h3>
                <div className='flex gap-2 items-center'>
                    <FaCircleArrowRight className='text-yellow-300 font-bold'/>
                    <p>Instant Fund Transfers</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <FaCircleArrowRight className='text-yellow-300 font-bold'/>
                    <p>Real-time Transaction Monitoring</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <FaCircleArrowRight className='text-yellow-300 font-bold'/>
                    <p>Seamless POS Integration</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <FaCircleArrowRight className='text-yellow-300 font-bold'/>
                    <p>24/7 Customer Support</p>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;