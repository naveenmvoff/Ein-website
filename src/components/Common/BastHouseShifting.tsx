import React from "react";

function BestHouseShifting({ data }) {
  return (
    <section className="bg-blue-50 py-12 px-6 md:px-16 lg:px-28 text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 leading-snug">
          {data.heading}
        </h2>

        <p
          className="text-base md:text-lg leading-relaxed text-gray-700"
          dangerouslySetInnerHTML={{ __html: data.text }}
        />
      </div>
    </section>
  );
}

export default BestHouseShifting;