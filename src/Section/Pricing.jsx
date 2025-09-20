import React from 'react';
import Heading from '../Components/Heading';
import PricingCard from '../Components/PricingCard';



const Pricing = () => {
    const headingInfo = {
        h1Name : "Simple, Transparent Pricing  No Hidden Fees!",
        pName : "Trusted by Thousands of Business Owners See what our satisfied customers have to say about CASA.",
        btn: "Pricing"
    }
    const pricingInfo1 = {
        plan : "Basic plan",
        discount: "2%"
    }
    const pricingInfo2 = {
        plan : "EnterPrice plan",
        discount: "Custom Rate"
    }
    const pricingInfo3 = {
        plan : "Growth plan",
        discount: "1.5%"
    }
    return (
        <div>
            <Heading heading={headingInfo}/>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-4 lg:mt-8'>
                <PricingCard pricing= {pricingInfo1}/>
                <PricingCard pricing= {pricingInfo2}/>
                <PricingCard pricing= {pricingInfo3}/>
            </div>
        </div>
    );
};

export default Pricing;