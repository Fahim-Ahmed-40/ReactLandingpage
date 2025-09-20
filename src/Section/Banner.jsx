import React from "react";
import Button from "../Components/Button";
import ButtonGreen from "../Components/ButtonGreen";
import Heading from "../Components/Heading";
import BannerCard1 from "../Components/BannerCard1";
import BannerCard2 from "../Components/BannerCard2";
import BannerCard3 from "../Components/BannerCard3";

const Banner = () => {
    const headingInfo = {
        h1Name : "Get Paid Faster Instant Cash  for Businesses!",
        pName : "Stop waiting months for credit card payments. CASA helps business owners access cash instantly by converting card transactions into immediate funds.",
        btn : "Fast, secure, hastle-free"

    }
  return (
    <div>
      <div className="flex flex-col justify-center items-center space-y-2 mt-4 lg:mt-8">
        <Heading heading={headingInfo}/>
        <ButtonGreen btnName={'Get Started'}/>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-6 lg:mt-16">
        <BannerCard1/>
        <BannerCard2/>
        <BannerCard3/>
      </div>
    </div>
  );
};

export default Banner;
