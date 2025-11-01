import Image from "next/image";
import Link from "next/link";
import React from "react";

function ServiceCities() {
  const cities = [
    { name: "Bangalore", image: "/cities/bang.png", slug: "bangalore" },
    { name: "Chennai", image: "/cities/chennai.png", slug: "chennai" },
    { name: "Coimbatore", image: "/cities/cbe.png", slug: "coimbatore" },
    { name: "Kochi", image: "/cities/kochi.png", slug: "kochi" },
    { name: "Trivandrum", image: "/cities/trivan.png", slug: "trivandrum" },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white pt-8 pb-6 px-4 sm:px-6">
      <div className="text-center mb-12">
        <h2 className="text-lg sm:text-3xl font-bold text-gray-900 mb-3">
          Our Service Cities
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          We proudly offer our trusted moving services in major cities across
          South India — ensuring safe, fast, and professional relocation
          wherever you are.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
        {cities.map((city, index) => (
          <Link
            key={index}
            href={`/packers-and-movers/${city.slug}`}
            className="group text-center"
          >
            <div className="relative mx-auto overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <Image
                src={city.image}
                alt={city.name}
                width={180}
                height={180}
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                priority
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ServiceCities;