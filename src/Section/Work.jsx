import React from 'react';
import Heading from '../Components/Heading';
import WorkCard1 from '../Components/WorkCard1';
import WorkCard2 from '../Components/WorkCard2';
import WorkCard3 from '../Components/WorkCard3';

const Work = () => {
    const headingInfo = {
        h1Name : " Simple & Fast Receive Your Payment in 3 Steps!",
        pName : "Empowering businesses with faster cash access, CASA provides a secure, fast, and flexible solution to get early payments for credit card sales.",
        btn: "How it works"
    }
    return (
        <div className='bg-gray-100 py-8 px-4'>
            <Heading heading={headingInfo}/>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 py-4'>
                <WorkCard1/>
                <WorkCard2/>
                <WorkCard3/>
            </div>
        </div>
    );
};

export default Work;