import Image from "next/image";
import Link from "next/link";
import React from "react";

function ServiceCities() {
  const cities = [
    { name: "Bangalore", image: "/cities/bang.png", slug: "bangalore" },
    { name: "Chennai", image: "/cities/chennai.png", slug: "chennai" },
    { name: "Coimbatore", image: "/cities/cbe.png", slug: "coimbatore" },
    { name: "Kochi", image: "/cities/kochi.png", slug: "kochi" },
    { name: "Trivandrum", image: "/cities/trivan.png", slug: "thiruvananthapuram" },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white pt-6 pb-6 px-4 sm:px-6">
      <div className="text-center mb-6">
        <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mb-3">
          Our Service Cities
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          We proudly offer our trusted moving services in major cities across
          South India — ensuring safe, fast, and professional relocation
          wherever you are.
        </p>
      </div>

      {/* Mobile: 3 images first row, 2 images second row (centered) | Desktop: 5 in a row */}
      <div className="flex flex-col items-center gap-3 sm:gap-6">
        {/* First 3 cities */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 justify-items-center lg:hidden">
          {cities.slice(0, 3).map((city, index) => (
            <Link
              key={index}
              href={`/packers-and-movers/${city.slug}`}
              className="group text-center"
            >
              <div
                className="
                relative mx-auto 
                overflow-hidden 
                rounded-xl shadow-md 
                hover:shadow-lg 
                transition-all duration-300
              "
              >
                <Image
                  src={city.image}
                  alt={city.name}
                  width={90}
                  height={90}
                  className="
                  w-[90px] h-[90px]
                  sm:w-[120px] sm:h-[120px]
                  md:w-[150px] md:h-[150px]
                  object-cover 
                  transition-transform duration-300 
                  group-hover:scale-110
                "
                  priority
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Last 2 cities - centered */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 justify-items-center lg:hidden">
          {cities.slice(3, 5).map((city, index) => (
            <Link
              key={index + 3}
              href={`/packers-and-movers/${city.slug}`}
              className="group text-center"
            >
              <div
                className="
                relative mx-auto 
                overflow-hidden 
                rounded-xl shadow-md 
                hover:shadow-lg 
                transition-all duration-300
              "
              >
                <Image
                  src={city.image}
                  alt={city.name}
                  width={90}
                  height={90}
                  className="
                  w-[90px] h-[90px]
                  sm:w-[120px] sm:h-[120px]
                  md:w-[150px] md:h-[150px]
                  object-cover 
                  transition-transform duration-300 
                  group-hover:scale-110
                "
                  priority
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Desktop: All 5 in a row */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-6 justify-items-center">
          {cities.map((city, index) => (
            <Link
              key={index}
              href={`/packers-and-movers/${city.slug}`}
              className="group text-center"
            >
              <div
                className="
                relative mx-auto 
                overflow-hidden 
                rounded-xl shadow-md 
                hover:shadow-lg 
                transition-all duration-300
              "
              >
                <Image
                  src={city.image}
                  alt={`Eintransport Packers and Movers ${city.name}`}
                  width={180}
                  height={180}
                  className="
                  w-[180px] h-[180px]
                  object-cover 
                  transition-transform duration-300 
                  group-hover:scale-110
                "
                  priority
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceCities;