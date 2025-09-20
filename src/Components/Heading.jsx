import React from "react";
import Button from "./Button";

const Heading = ({ heading }) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-2">
      <div className="flex flex-col justify-center items-center lg:w-2/3 w-full space-y-2">
        <Button btnName={heading.btn} />
        <h1 className="font-bold text-4xl text-center lg:w-2/3">
          {heading.h1Name}
        </h1>
        <p className="text-center text-base">{heading.pName}</p>
      </div>
    </div>
  );
};

export default Heading;
