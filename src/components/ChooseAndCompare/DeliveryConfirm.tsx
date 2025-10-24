import React from "react";

interface DeliveryConfirmProps {
  data: {
    heading: string;
    text: string;
  };
}

const DeliveryConfirmFinal: React.FC<DeliveryConfirmProps> = ({ data }) => {
  return (
    <div className="flex flex-col px-10 items-center ">
      <h3 className="text-xl font-semibold text-center mb-4">{data.heading}</h3>
      <p className="text-gray-600 text-center mb-6">{data.text}</p>
    </div>
  );
};

export default DeliveryConfirmFinal;
