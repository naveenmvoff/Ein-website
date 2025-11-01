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
    <section className="bg-gradient-to-b from-blue-50 to-white">
      <div className="pt-8 pb-6 px-4 sm:px-6 max-w-4xl mx-auto">
        <h3 className="text-md sm:text-3xl font-bold text-gray-900 mb-3 text-left">
          Why We're the Most Trusted Packers and Movers
        </h3>
        <p className="text-base text-justify text-gray-700 leading-relaxed mb-8">
          Thousands of families choose Eintransport Packers and Movers for their
          home relocation because we deliver trust, safety, and satisfaction.
          Our mission is simple — to make your moving day comfortable,
          organized, and worry-free. We handle every home as if it's our own
          ensuring every box, appliance, and memory reaches safely.
        </p>

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
    </section>
  );
}

// import React from "react";
// import CountUp from "../ui/CountUp";

// export default function MostTrusted() {
//   const counts = [
//     { name: "Experience", count: 15 },
//     { name: "Homes Moved", count: 8500 },
//     { name: "Branch", count: 5 },
//     { name: "Trained Manpower", count: 250 },
//   ];
//   return (
//     <div className="px-10 ">
//       <h3 className="text-xl p-4 font-semibold text-black flex justify-center">
//         Why We’re the Most Trusted Packers and Movers
//       </h3>
//       <p className="leading-8">
//         Thousands of families choose Eintransport Packers and Movers for their
//         home relocation because we deliver trust, safety, and satisfaction. Our
//         mission is simple — to make your moving day comfortable, organized, and
//         worry-free. We handle every home as if it’s our own ensuring every box,
//         appliance, and memory reaches safely.
//       </p>

//       <div className="grid grid-cols-2  mt-5 text-center items-center">
//         {counts.map((item) => (
//           <div key={item.count} className="flex flex-col mt-3">
//             <div >
//               <CountUp
//                 from={0}
//                 to={item.count}
//                 separator=","
//                 direction="up"
//                 duration={3}
//                 className="count-up-text text-xl text-red-500 font-semibold"
//               />
//               <span className="text-xl text-red-500 font-semibold">+</span>
//             </div>
//             <b>{item.name}</b>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
