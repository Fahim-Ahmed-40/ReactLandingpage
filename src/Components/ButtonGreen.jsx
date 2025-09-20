import React from 'react';

const ButtonGreen = ({btnName}) => {
    return (
        <button>
            <span className="btn rounded-l-full rounded-r-full py-1 bg-green-900 text-white px-4">
             {btnName}
            </span>
          </button>
    );
};

export default ButtonGreen;