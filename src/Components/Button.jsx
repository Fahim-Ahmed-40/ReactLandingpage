import React from 'react';

const Button = ({btnName,btnColor="green"}) => {
    return (
        <button>
            <span className={`${btnColor == "yellow" ? "bg-yellow-500" : "bg-green-200"} btn rounded-l-full rounded-r-full py-1  px-4`}>
             {btnName}
            </span>
          </button>
    );
};

export default Button;