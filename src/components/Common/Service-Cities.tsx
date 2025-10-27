import Image from "next/image";
import React from "react";

function ServiceCities() {
  const cities = [
    { name: "Bangalore", image: "/cities/bang.png" },
    { name: "Chennai", image: "/cities/chennai.png" },
    { name: "Coimbatore", image: "/cities/cbe.png" },
    { name: "Kochi", image: "/cities/kochi.png" },
    { name: "Trivandrum", image: "/cities/trivan.png" },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-6 md:px-12 lg:px-24">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Our Service Cities
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          We proudly offer our trusted moving services in major cities across
          South India — ensuring safe, fast, and professional relocation
          wherever you are.
        </p>
      </div>

      {/* City Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
        {cities.map((city, index) => (
          <div key={index}>
            <div className="relative mx-auto"></div>
            <Image
              src={city.image}
              alt={city.name}
              width={600}
              height={600}
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              priority
            />

            {/* <div className="absolute inset-x-0 bottom-0 h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full"></div> */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceCities;

// import Image from "next/image";
// import React from "react";

// function ServiceCities() {
//   const Images = [
//     {
//       image: "/cities/bang.png",
//     },
//     {
//       image: "/cities/chennai.png",
//     },
//     {
//       image: "/cities/cbe.png",
//     },
//     {
//       image: "/cities/kochi.png",
//     },
//     {
//       image: "/cities/trivan.png",
//     },
//   ];
//   return (
//     <div className="flex w-full flex-col py-6">
//       <h1 className="flex font-semibold text-xl text-center items-center justify-center">
//         Service Cities
//       </h1>
//       <div className="flex justify-center flex-wrap gap-4">
//         {Images.map((i, index) => (
//           <div
//             key={index}
//             className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]"
//           >
//             <Image
//               src={i.image}
//               alt="cities"
//               fill
//               className="object-contain"
//               priority
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ServiceCities;
