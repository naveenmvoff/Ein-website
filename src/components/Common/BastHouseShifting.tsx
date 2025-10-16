import React from "react";

function BastHouseShifting({ data }) {
  return (
    <div className="py-9 bg-blue-50">
      <h3 className="text-xl mb-6 text-black font-semibold justify-center text-center">
        {data.heading}
      </h3>
      <p dangerouslySetInnerHTML={{ __html: data.text }} />{" "}
    </div>
  );
}

export default BastHouseShifting;
