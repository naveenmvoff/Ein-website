import React from "react";
import CountUp from "../ui/CountUp";

interface WhyChooseBasedCityProps {
  location: string;
}

export default function WhyChooseBasedCity({
  location,
}: WhyChooseBasedCityProps) {
  const counts = [
    { name: "Years of Experience", count: 15 },
    { name: "Homes Moved", count: 8500 },
    { name: "Branch", count: 5 },
    { name: "Trained Manpower", count: 250 },
  ];

  const benefits = [
    "Professional & Experienced Moving Team",
    "Safe Packing with Premium-Quality Materials",
    "On-Time Pickup and Safe Delivery Guarantee",
    "Local & Intercity Coverage",
    "Optional Bike Relocation with Home Shifting",
    "Affordable, Transparent Pricing (No Hidden Charges)",
    "Free Doorstep Quote & Inspection",
  ];

  return (
    <div className="py-12 px-4 sm:px-6 max-w-4xl mx-auto">
      <h3 className="text-md md:text-2xl font-bold text-gray-900 text-center mb-7">
        Why Choose Eintransport Packers and Movers in {location}?
      </h3>
      <div className="mb-10">
        <div className="space-y-3 w-fit mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-[#0086ff] flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-base text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
        {counts.map((item) => (
          <div key={item.name} className="text-center">
            <div className="mb-2">
              <CountUp
                from={0}
                to={item.count}
                separator=","
                direction="up"
                duration={3}
                className="text-3xl sm:text-4xl font-bold text-[#0086ff]"
              />
              <span className="text-3xl sm:text-4xl font-bold text-[#0086ff]">
                +
              </span>
            </div>
            <p className="text-sm font-semibold text-gray-700">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
