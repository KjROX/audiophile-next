import React from "react";
import ZX7Speaker from "./ZX7Speaker";
import ZX9Speaker from "./ZX9Speaker";
import YX1Earphones from "./YX1Earphones";

const LandingPageProducts = () => {
  return (
    <div className="w-full pb-80 flex flex-col gap-20">
      <ZX9Speaker />
      <ZX7Speaker />
      <YX1Earphones />
    </div>
  );
};

export default LandingPageProducts;
