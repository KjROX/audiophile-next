import React from "react";

const BrandPromotion = () => {
  return (
    <div className="w-4/5 m-auto flex pb-80">
      <div className="w-1/2 flex flex-col gap-16 justify-center pr-40">
        <h1 className="text-6xl font-bold leading-[4rem]">
          BRINGING YOU THE <br /> <span className="text-[#D87D4A]">BEST</span>{" "}
          AUDIO GEAR
        </h1>
        <p className="text-2xl">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="w-1/2 rounded-xl overflow-hidden">
        <img
          src="./images/brand-promotion-image.jpeg"
          alt="Guy with heaphone"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default BrandPromotion;
