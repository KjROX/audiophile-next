import React from "react";

const ZX9Speaker = () => {
  return (
    <div className="w-4/5 flex m-auto bg-[#D87D4A]  items-center overflow-hidden pt-40 rounded-2xl">
      <div className="w-1/2 flex justify-center items-end">
        <img
          className="w-[40rem] relative -bottom-4"
          src="./images/zx9Speaker-product.png"
          alt="zx9 Speaker"
        />
      </div>
      <div className="w-1/2 flex flex-col gap-8 pb-60">
        <h1 className="text-8xl font-bold text-white">
          ZX9 <br /> SPEAKER
        </h1>
        <p className="text-2xl text-white leading-10">
          Upgrade to premium speakers that are <br /> phenomenally built to
          deliver truely remarkable <br /> sound.
        </p>
        <button className="text-white bg-black hover:bg-[#4c4c4c] font-bold w-64 py-6">
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
};

export default ZX9Speaker;
