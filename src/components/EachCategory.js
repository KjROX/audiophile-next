import React from "react";

const EachCategory = ({ imageurl }) => {
  return (
    <div className="w-[30%] flex flex-col items-center bg-[#F1F1F1] pb-8 pt-48 gap-10 relative rounded-lg">
      <img
        src={imageurl}
        alt="xx-99-mark-one"
        className="absolute top-[-6rem] w-80"
      />
      <h1 className="text-3xl font-bold">HEADPHONES</h1>
      <button className="flex items-center">
        <span className="tracking-widest hover:text-[#D87D4A] text-[#979797] font-bold">
          SHOP
        </span>
        <span className="text-[#D87D4A] translate-x-6 -translate-y-1 text-5xl"></span>
      </button>
    </div>
  );
};

export default EachCategory;
