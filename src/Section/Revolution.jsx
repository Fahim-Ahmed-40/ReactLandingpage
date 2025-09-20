import React from "react";
import Button from "../Components/Button";
import ButtonGreen from "../Components/ButtonGreen";
import RevolutionCard from "../Components/RevolutionCard";
import r1 from '../../public/icon/r1.png'
import r2 from '../../public/icon/r2.jpg'
import r3 from '../../public/icon/r3.png'

const Revolution = () => {
    const Revolution1 = {
        h2Name : "Secure and Instant Cash Advances",
        pName : "No more waiting weeks—convert daily credit card transactions into cash within 24 hours to keep your business running smoothly.",
        image:r1,
        isGreen: false
    }
    const Revolution2 = {
        h2Name : "Transparent and Fair Pricing Process",
        pName : "No Hidden Fees, No Surprises Enjoy clear, upfront pricing with flexible funding options, so you always know what to expect.",
        image:r2,
        isGreen: false
    }
    const Revolution3 = {
        h2Name : "Flexible and Secure Payout Options",
        pName : "We offer flexible and easy payout options tailored to your needs, ensuring quick access to your funds. Choose from multiple payment methods",
        image:r3,
        isGreen: true
    }
  return (
    <div>
      <div className="lg:flex lg:justify-between lg:items-start gap-2 lg:gap-10 mt-4 lg:mt-20">
        <div className="lg:flex-1 space-y-5">
          <Button btnName={"About case service"} />
          <h1 className="text-4xl font-bold">Revolutionizing Cash Flow for Business Owners!</h1>
        </div>
        <div className="lg:flex-1 space-y-5">
            <p>Empowering businesses with faster cash access, CASA provides a secure, fast, and flexible solution to get early payments for credit card sales.</p>
            <ButtonGreen btnName={'Join Now'}/>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 lg:gap-5 mt-20">
        <RevolutionCard rcardInfo={Revolution1}/>
        <RevolutionCard rcardInfo={Revolution2}/>
        <RevolutionCard rcardInfo={Revolution3}/>
      </div>
    </div>
  );
};

export default Revolution;
