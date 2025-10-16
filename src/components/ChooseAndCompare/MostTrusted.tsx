import React from "react";
import CountUp from "../ui/CountUp";

export default function MostTrusted() {
  const counts = [
    { name: "Experience", count: 15 },
    { name: "Homes Moved", count: 8500 },
    { name: "Branch", count: 5 },
    { name: "Trained Manpower", count: 250 },
  ];
  return (
    <div>
      <h3 className="text-xl font-semibold text-black flex justify-center">
        Why We’re the Most Trusted Packers and Movers
      </h3>
      <p>
        Thousands of families choose Eintransport Packers and Movers for their
        home relocation because we deliver trust, safety, and satisfaction. Our
        mission is simple — to make your moving day comfortable, organized, and
        worry-free. We handle every home as if it’s our own ensuring every box,
        appliance, and memory reaches safely.
      </p>

      <div className="grid grid-cols-2">
        {counts.map((item) => (
          <div key={item.count} className="flex gap-1">
            <b>{item.name}</b>
            <CountUp
              from={0}
              to={item.count}
              separator=","
              direction="up"
              duration={3}
              className="count-up-text text-xl text-red-500 font-semibold"
            />
            <span className="text-xl text-red-500 font-semibold">+</span>
          </div>
        ))}
      </div>
    </div>
  );
}
