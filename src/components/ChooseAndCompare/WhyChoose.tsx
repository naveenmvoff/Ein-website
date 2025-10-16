import Image from "next/image";
import React from "react";

function WhyChoose({ data }) {
  return (
    <div className="flex flex-col">
      <h3 className="flex justify-center text-xl font-semibold">
        {data.heading}
      </h3>
      <p>{data.text}</p>
      <div className="flex justify-center">
        <Image src={data.image} alt="whychoose" width={600} height={600} />
      </div>
    </div>
  );
}

export default WhyChoose;
