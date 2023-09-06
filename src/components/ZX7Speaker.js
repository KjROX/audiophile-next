import React from "react";

const ZX7Speaker = () => {
  return (
    <div className="w-4/5 m-auto flex rounded-2xl overflow-hidden relative">
      <div className="w-1/3 h-full absolute flex flex-col justify-center items-center gap-8">
        <h1 className="text-5xl font-bold">ZX7 SPEAKER</h1>
        <button className="bg-transparent font-bold w-64 py-6 border-black border-solid border-2 hover:bg-black hover:text-white">
          SEE PRODUCT
        </button>
      </div>
      <img
        className="w-full"
        src="./images/zx7Speaker-product.jpeg"
        alt="zx7 Speaker"
      />
    </div>
  );
};

export default ZX7Speaker;
