import React from 'react';
import Button from '../Components/Button';


const Unlock = () => {
   
    return (
        <div className='pt-20'>
            <div className="flex flex-col justify-center items-center space-y-2 bg-green-900 rounded-lg m-8 p-6">
      <div className="flex flex-col justify-center items-center lg:w-2/3 w-full space-y-2">
        <h1 className="font-bold text-4xl text-center text-white lg:w-2/3">
          Unlock Instant Cash Flow for Your Business!
        </h1>
        <p className="text-center text-base text-white">Running a business shouldn’t mean waiting weeks for credit card payments to clear. With CASA, you can convert your daily transactions into instant cash,</p>
        <Button btnName="Let's get started" btnColor='yellow' />
      </div>
    </div>
        </div>
    );
};

export default Unlock;