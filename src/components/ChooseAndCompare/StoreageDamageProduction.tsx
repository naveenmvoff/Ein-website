import React from "react";

interface StorageDamageProps {
  data: {
    heading: string;
    text: string;
  };
}

const StorageDamageProduction: React.FC<StorageDamageProps> = ({ data }) => {
  return (
    <div className="flex flex-col px-10 items-center my-12">
      <h3 className="text-xl font-semibold text-center mb-4">{data.heading}</h3>
      <p className="leading-8 text-gray-600 text-center mb-6">{data.text}</p>
    </div>
  );
};

export default StorageDamageProduction;
