//rafce
import React from "react";
import EachCategory from "./EachCategory";

const Categories = () => {
  return (
    <div className="w-full py-80">
      <div className="w-4/5 m-auto flex items-center justify-center gap-24">
        <EachCategory imageurl="./images/image-xx99-mark-one.png" />
        <EachCategory imageurl="./images/image-zx9.png" />
        <EachCategory imageurl="./images/image-yx1-earphones.png" />
      </div>
    </div>
  );
};

export default Categories;
