import React from "react";

function BestHouseShifting({ data }: { data: { heading: string; text: string } }) {
  return (
    <div className="text-left">
      <h2 className="text-md sm:text-xl font-bold text-gray-900 mb-3">
        {data.heading}
      </h2>
      <p
        className="text-base text-justify text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: data.text }}
      />
    </div>
  );
}

export default BestHouseShifting;


