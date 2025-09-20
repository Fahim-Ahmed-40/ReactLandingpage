import React from 'react';
import Heading from '../Components/Heading';
import ContactInfoCard from '../Components/ContactInfoCard';
import ContactAnother from '../Components/ContactAnother';

const Contact = () => {
    const headingInfo = {
        h1Name : "We're Here to Help  Get in Touch with CASA",
        pName : "Trusted by Thousands of Business Owners See what our satisfied customers have to say about CASA.",
        btn: "Contact"
    }
    return (
        <div className='bg-gray-100 py-2'>
            <Heading heading={headingInfo}/>
            <div className='lg:flex lg:gap-5 p-4 lg:p-8'>
                <ContactInfoCard/>
                <ContactAnother/>
            </div>
        </div>
    );
};

export default Contact;