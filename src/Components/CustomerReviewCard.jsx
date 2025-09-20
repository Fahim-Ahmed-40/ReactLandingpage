import React from 'react';
import { FaRegStar } from "react-icons/fa";

const CustomerReviewCard = ({review}) => {
    return (
        <div className='space-y-2 bg-gray-100 rounded-lg px-4 py-8'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-1'>
                    <FaRegStar className='text-yellow-600'/>
                    <FaRegStar className='text-yellow-600'/>
                    <FaRegStar className='text-yellow-600'/>
                    <FaRegStar className='text-yellow-600'/>
                    <FaRegStar className='text-yellow-600'/>
                </div>
                <h1 className='font-bold text-xl uppercase text-green-500'>{review.companyName}</h1>
            </div>
            <h1 className='text-2xl font-bold'>{review.h1Name}</h1>
            <p className='text-base'>{review.pName}</p>
            <div className='flex gap-2 items-center'>
                <div className='w-[40px] h-[40px]'>
                    <img src={review.image} alt="" className='w-full h-full rounded-full' />
                </div>
                <div>
                    <h1 className='text-lg font-bold'>{review.owner}</h1>
                    <h3 className='text-gray-300'>{review.designation}</h3>
                </div>
            </div>
        </div>
    );
};

export default CustomerReviewCard;