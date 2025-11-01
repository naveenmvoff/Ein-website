import React from "react";

function WhyChoose({ data }: any) {
  return (
    <div
      id="about"
      className="text-left scroll-mt-20"
    >
      <h3 className="text-md sm:text-3xl font-bold text-gray-900 mb-3 text-left">
        {data.heading}
      </h3>
      <p className="text-base text-justify text-gray-700 leading-relaxed">
        {data.text}
      </p>
    </div>
  );
}

export default WhyChoose;