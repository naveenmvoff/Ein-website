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
    <div className="flex w-full flex-col py-6">
      <h1 className="flex font-semibold text-xl text-center items-center justify-center">
        Service Cities
      </h1>
      <div className="flex justify-center flex-wrap gap-4">
        {Images.map((i, index) => (
          <div
            key={index}
            className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]"
          >
            <Image
              src={i.image}
              alt="cities"
              fill
              className="object-contain"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceCities;
