import React from "react";
import parse from "html-react-parser";

function WhyChoose({ data }: any) {
  return (
    <div
      id="about"
      className="text-left pt-5 scroll-mt-20"
    >
      <h3 className="text-md sm:text-xl font-bold text-gray-900 mb-3 text-left">
        {data.heading}
      </h3>
      <p className="text-base text-justify text-gray-700 leading-relaxed">
       {parse(data.text)}
      </p>
    </div>
  );
}

export default WhyChoose;