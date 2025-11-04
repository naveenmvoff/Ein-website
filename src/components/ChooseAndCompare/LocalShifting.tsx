import React from "react";
import parse from "html-react-parser";

type LocationData = {
  heading: string;
  text: string;
};

function LocalShifting({ data }: { data: LocationData }) {
  return (
    // <div className="">
    //   <h1 className="text-lg font-semibold">{data.heading}</h1>
    //   <h1>{data.text}</h1>
    // </div>
    <section className="bg-gradient-to-b from-blue-0 to-white">
      <div className="pt-1 pb-1 px-4 sm:px-6 max-w-7xl mx-auto text-left">
        <h3 className="text-md sm:text-2xl font-bold text-gray-900 mb-3 text-left">
          {data.heading}
        </h3>
        {/* 
        <p
          className="text-sm  text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: data.text,
          }}
        /> */}
        {parse(data.text)}
      </div>
    </section>
  );
}

export default LocalShifting;
