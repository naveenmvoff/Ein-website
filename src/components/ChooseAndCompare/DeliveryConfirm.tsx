import React from "react";

interface DeliveryConfirmProps {
  data: {
    heading: string;
    text: string;
  };
}

const DeliveryConfirmFinal: React.FC<DeliveryConfirmProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center my-12">
      <h3 className="text-xl font-semibold text-center mb-4">{data.heading}</h3>
      <p className="text-lg text-gray-600 text-center mb-6">{data.text}</p>
    </div>
  );
};

export default DeliveryConfirmFinal;
