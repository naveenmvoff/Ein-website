import Image from "next/image";
import React from "react";

function WhyChoose({ data }: any) {
  return (
    <section className="bg-blue-50/50">
      <div
        id="about"
        className="pt-1 pb-2 px-4 sm:px-6 max-w-4xl mx-auto scroll-mt-20"
      >
        <h3 className="text-md sm:text-3xl font-bold text-gray-900 mb-3 text-center">
          {data.heading}
        </h3>
        <p className="text-base text-justify text-gray-700 leading-relaxed mb-4">
          {data.text}
        </p>
        <div className="flex justify-center">
          <Image
            src={data.image}
            alt="why choose"
            width={600}
            height={600}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;