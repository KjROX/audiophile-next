import React from "react";

const YX1Earphones = () => {
  return (
    <div className="w-4/5 m-auto flex gap-32">
      <div className="w-1/2 rounded-2xl overflow-hidden">
        <img
          className="w-full"
          src="./images/yx1Earphones-product.jpeg"
          alt="yx1 Earphones"
        />
      </div>
      <div className="w-1/2 bg-[#F1F1F1] flex justify-center items-center flex-col gap-8 rounded-2xl">
        <h1 className="text-5xl font-bold leading-[4rem] text-center">
          YX1 WIRELESS <br /> EARPHONES
        </h1>
        <button className="bg-transparent font-bold w-64 py-6 border-black border-solid border-2 hover:bg-black hover:text-white">
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
};

export default YX1Earphones;
