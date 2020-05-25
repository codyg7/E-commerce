import React from "react";

const toggleButton = (props) => {
  return (
    <button>
      <div className='nav--burger'>
        <div className='nav--burger__line1'></div>
        <div className='nav--burger__line2'></div>
        <div className='nav--burger__line3'></div>
      </div>
    </button>
  );
};

export default toggleButton;
