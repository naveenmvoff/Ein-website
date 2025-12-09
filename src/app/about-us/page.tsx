import CountUp from "@/components/ui/CountUp";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const counts = [
  { name: "Years of Experience", count: 15 },
  { name: "Homes Moved", count: 8500 },
  { name: "Branch", count: 5 },
  { name: "Trained Manpower", count: 250 },
];

const locations = [
  {
    name: "Eintransport Packers and Movers in Bangalore",
    href: "/packers-and-movers/bangalore",
  },
  {
    name: "Eintransport Packers and Movers in Chennai",
    href: "/packers-and-movers/chennai",
  },
  {
    name: "Eintransport Packers and Movers in Coimbatore",
    href: "/packers-and-movers/coimbatore",
  },
  {
    name: "Eintransport Packers and Movers in Kochi",
    href: "/packers-and-movers/kochi",
  },
  {
    name: "Eintransport Packers and Movers in Trivandrum",
    href: "/packers-and-movers/thiruvananthapuram",
  },
];
export default function page() {
  return (
    <div>
      <h1>About Us – Eintransport Packers and Movers</h1>
      <p>
        At{" "}
        <Link href={"/"} className="font-semibold">
          Eintransport Packers and Movers
        </Link>
        , we believe moving should be simple, safe, and stress-free. Founded
        with the vision of delivering reliable and transparent relocation
        services, we have grown into one of South India’s most trusted names for
        house shifting, office relocation, intercity moves, vehicle transport,
        and logistics support.
      </p>
      <p>
        With a strong presence in Bangalore, Chennai, Coimbatore, Kochi, and
        Trivandrum, we serve thousands of customers every year with consistent
        quality, timely delivery, and complete safety of their belongings.{" "}
      </p>
      <Image
        src={"/assets/about-us.jpeg"}
        alt="Happy family unpacking boxes in their new home after relocation – Eintransport Packers and Movers"
        width={100}
        height={100}
      ></Image>
      <h2>Why Choose Eintransport?</h2>
      <h3>✔ Professional & Trained Staff</h3>
      Our experienced moving team handles every item, including fragile goods,
      with utmost care, ensuring safe packaging, loading, and unloading.
      <h3>✔ High-Quality Packing Materials</h3>
      We use premium packing materials, like bubble wrap, foam, stretch film,
      and customised boxes, to protect your valuables during transit.
      <h3>✔ Safe & On-Time Delivery</h3>
      Most of our vehicles are GPS-enabled, helping us maintain better
      coordination and timely delivery for our customers.
      <h3>✔ Transparent Pricing</h3>
      No hidden charges. We follow a clear and customer-friendly pricing model
      based on distance, volume, and required services.
      <h3>✔ End-to-End Service</h3>
      From disassembling furniture to installation at your new location, we
      provide complete door-to-door relocation support.
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
      <h2>Our Mission</h2>
      To provide affordable, efficient, and reliable relocation services that
      reduce customer stress, save time, and ensure 100% satisfaction.
      <h2>Our Vision</h2>
      To become South India’s most trusted packers and movers brand by offering
      safe, smart, and technology-driven moving solutions.
      <h2>Our Core Values</h2>
      <p className="font-semibold">Safety First </p> Safety First – Your
      belongings are handled as our own. Integrity – Honest communication,
      transparent pricing. Commitment – We deliver what we promise. Customer
      Satisfaction – We work to make every move smooth and worry-free.
      <div>
        <h3>Our Service Locations</h3>
        {locations.map((k, i) => {
          return (
            <Link
              href={k.href}
              key={i}
              className="flex flex-col items-center w-fit rounded-md p-2 bg-green-200 text-green-500 border-[1px] border-green-500"
            >
              <MapPin />
              {k.name}
            </Link>
          );
        })}
      </div>
      <div>
        <h2>Our Customer Promise</h2>
        <ul>
          <li>We treat your belongings as our own.</li>
          <li>No last-minute surprises or hidden charges</li>
          <li>Proper packing and safe handling</li>
          <li>Timely service</li>
          <li>Clear communication from start to finish</li>
        </ul>
      </div>
    </div>
  );
}
