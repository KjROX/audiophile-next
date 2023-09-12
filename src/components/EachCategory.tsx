import React from "react";

interface EachCategoryProps {
  imageurl: string;
  name: string;
}

const EachCategory: React.FC<EachCategoryProps> = ({ imageurl, name }) => {
  return (
    <div className="w-[30%] flex flex-col items-center bg-[#F1F1F1] pb-8 pt-28   relative rounded-lg">
      <img
        src={imageurl}
        alt="xx-99-mark-one"
        className="absolute -top-8 w-40"
      />
      <div className="flex flex-col gap-2 items-center mt-4">
        <h1 className="text-xl font-medium">{name}</h1>
        <button className="flex items-center justify-center gap-2">
          <span className="tracking-widest hover:text-[#D87D4A] text-[#979797] font-normal text-sm">
            SHOP
          </span>
          <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.322 1l5 5-5 5"
              stroke="#D87D4A"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default EachCategory;
