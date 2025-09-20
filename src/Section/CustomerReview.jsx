import React from "react";
import Heading from "../Components/Heading";
import CustomerReviewCard from "../Components/CustomerReviewCard";
import rev1 from "../../public/rev/img1.jpg";
import rev2 from "../../public/rev/img2.jpg";

const CustomerReview = () => {
  const headingInfo = {
    h1Name: "Hear What Customers Say About CASA!",
    pName:
      "Trusted by Thousands of Business Owners See what our satisfied customers have to say about CASA.",
    btn: "Reviews",
  };
  const review1 = {
    companyName: "Adeyn",
    h1Name: "Game-Changer for My Business!",
    pName:
      "CASA has completely transformed my cash flow. As a restaurant owner, waiting for credit card payments used to be a struggle. Now, I get my funds within 24 hours, allowing me to pay suppliers and staff on time. The process is seamless, and the transparency in pricing is a huge plus.!",
    image: rev1,
    owner: "Michael R",
    designation: "Restaurent Owner",
  };
  const review2 = {
    companyName: "Axway",
    h1Name: "Fast, Reliable, and Stress-Free!",
    pName:
      "CASA has completely transformed my cash flow. As a restaurant owner, waiting for credit card payments used to be a struggle. Now, I get my funds within 24 hours, allowing me to pay suppliers and staff on time. The process is seamless, and the transparency in pricing is a huge plus.!",
    image: rev2,
    owner: " Sarah M.",
    designation: "Cafe Owner",
  };
  return (
    <div>
      <Heading heading={headingInfo} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1  lg:gap-5 mt-4 lg:mt-8">
        <CustomerReviewCard review={review1} />
        <CustomerReviewCard review={review2} />
      </div>
      <div className="flex justify-center gap-5">
        <button className=" text-gray-400 text-6xl font-bold">.</button>
        <button className=" text-green-900 text-6xl font-bold">.</button>
        <button className=" text-gray-400 text-6xl font-bold">.</button>
      </div>
    </div>
  );
};

export default CustomerReview;
