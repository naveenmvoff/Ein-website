import Image from "next/image";
import React from "react";

function ServiceCities() {
  const Images = [
    {
      image: "/cities/bang.png",
    },
    {
      image: "/cities/chennai.png",
    },
    {
      image: "/cities/cbe.png",
    },
    {
      image: "/cities/kochi.png",
    },
    {
      image: "/cities/trivan.png",
    },
  ];
  return (
    <div className="flex w-full flex-col">
      <h1 className="flex font-semibold text-xl text-center items-center justify-center">
        Service Cities
      </h1>
      <div className="flex justify-center">
        {Images.map((i, index) => {
          return (
            <div key={index} className="flex flex-row">
              <Image
                src={i.image}
                alt="cities"
                width={200}
                height={200}
              ></Image>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServiceCities;
