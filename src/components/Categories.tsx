import React from "react";
import EachCategory from "./EachCategory";



export interface audioDevice {
  name: string;
  imageurl: string;
}


const Categories = () => {
  const audioDevices: audioDevice[] = [
    {
      name: "HEADPHONES",
      imageurl: "./images/image-xx99-mark-one.png",
    },
    {
      name: "SPEAKERS",
      imageurl: "./images/image-zx9.png",
    },
    {
      name: "EARPHONES",
      imageurl: "./images/image-yx1-earphones.png",
    },
  ];
  return (
    <div className="w-full py-48">
      <div className="w-4/5 m-auto flex items-center justify-center gap-16">
        {audioDevices.map((audioDevice, index) => (
          <EachCategory
            key={index}
            name={audioDevice.name}
            imageurl={audioDevice.imageurl}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
