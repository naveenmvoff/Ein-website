import CountUp from "@/components/ui/CountUp";
import { MapPin, Users, Package, Clock, DollarSign, CheckCircle2, Shield, Heart, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeaderNavbar from "@/components/landingPage/header";
import Footer from "@/components/Footer";

const counts = [
  { name: "Years of Experience", count: 15 },
  { name: "Homes Moved", count: 8500 },
  { name: "Branch", count: 5 },
  { name: "Trained Manpower", count: 250 },
];

const whyChooseUs = [
  {
    icon: Users,
    title: "Professional & Trained Staff",
    description: "Our experienced moving team handles every item, including fragile goods, with utmost care, ensuring safe packaging, loading, and unloading.",
  },
  {
    icon: Package,
    title: "High-Quality Packing Materials",
    description: "We use premium packing materials, like bubble wrap, foam, stretch film, and customised boxes, to protect your valuables during transit.",
  },
  {
    icon: Clock,
    title: "Safe & On-Time Delivery",
    description: "Most of our vehicles are GPS-enabled, helping us maintain better coordination and timely delivery for our customers.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden charges. We follow a clear and customer-friendly pricing model based on distance, volume, and required services.",
  },
  {
    icon: CheckCircle2,
    title: "End-to-End Service",
    description: "From disassembling furniture to installation at your new location, we provide complete door-to-door relocation support.",
  },
];

const coreValues = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Your belongings are handled as our own.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Honest communication, transparent pricing.",
  },
  {
    icon: Target,
    title: "Commitment",
    description: "We deliver what we promise.",
  },
  {
    icon: CheckCircle2,
    title: "Customer Satisfaction",
    description: "We work to make every move smooth and worry-free.",
  },
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
    <div className="min-h-screen bg-gray-50">
      <HeaderNavbar />
      
      {/* Hero Section */}
      <section className="bg-gray-50 pt-8 sm:pt-12 md:pt-14 lg:pt-16 pb-4 sm:pb-6 md:pb-8">
        <div className="text-center mb-4 sm:mb-6 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl pt-10 font-bold text-gray-900 mb-2 sm:mb-3">
            About Us – Eintransport Packers and Movers
          </h1>
          <div className="w-12 sm:w-16 h-0.5 bg-[#0086ff] mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Main Content */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-4 sm:pt-6 md:pt-8 pb-6 sm:pb-10 md:pb-12">
        
        {/* Introduction Section */}
        <section className="mb-6 sm:mb-10 md:mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 items-center">
            <div className="space-y-2 sm:space-y-3">
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                At{" "}
                <Link href={"/"} className="font-semibold text-[#0086ff] hover:underline">
                  Eintransport Packers and Movers
                </Link>
                , we believe moving should be simple, safe, and stress-free. Founded
                with the vision of delivering reliable and transparent relocation
                services, we have grown into one of South India's most trusted names for
                house shifting, office relocation, intercity moves, vehicle transport,
                and logistics support.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                With a strong presence in Bangalore, Chennai, Coimbatore, Kochi, and
                Trivandrum, we serve thousands of customers every year with consistent
                quality, timely delivery, and complete safety of their belongings.
              </p>
            </div>
            <div className="relative w-full h-40 sm:h-64 md:h-72 lg:h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={"/assets/about-us.jpeg"}
                alt="Happy family unpacking boxes in their new home after relocation – Eintransport Packers and Movers"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                priority
              />
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-6 sm:mb-10 md:mb-12">
          <div className="text-center mb-4 sm:mb-6 md:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
              Why Choose Eintransport?
            </h2>
            <div className="w-12 sm:w-16 h-0.5 bg-[#0086ff] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-3 sm:p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg mb-2 sm:mb-3">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#0086ff]" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1.5 sm:mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-6 sm:mb-10 md:mb-12 bg-gradient-to-br from-[#0086ff] to-blue-600 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 md:gap-8">
            {counts.map((item) => (
              <div key={item.name} className="text-center">
                <div className="mb-1.5 sm:mb-2">
                  <CountUp
                    from={0}
                    to={item.count}
                    separator=","
                    direction="up"
                    duration={3}
                    className="text-lg sm:text-2xl md:text-3xl font-bold text-white"
                  />
                  <span className="text-lg sm:text-2xl md:text-3xl font-bold text-white">
                    +
                  </span>
                </div>
                <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-blue-100">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="mb-6 sm:mb-10 md:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-md border border-gray-100">
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                Our Mission
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                To provide affordable, efficient, and reliable relocation services that
                reduce customer stress, save time, and ensure 100% satisfaction.
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-md border border-gray-100">
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                Our Vision
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                To become South India's most trusted packers and movers brand by offering
                safe, smart, and technology-driven moving solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="mb-6 sm:mb-10 md:mb-12">
          <div className="text-center mb-4 sm:mb-6 md:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
              Our Core Values
            </h2>
            <div className="w-12 sm:w-16 h-0.5 bg-[#0086ff] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-3 sm:p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 text-center"
                >
                  <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg mb-2 sm:mb-3 mx-auto">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#0086ff]" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1.5 sm:mb-2">
                    {value.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Service Locations Section */}
        <section className="mb-6 sm:mb-10 md:mb-12">
          <div className="text-center mb-4 sm:mb-6 md:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
              Our Service Locations
            </h2>
            <div className="w-12 sm:w-16 h-0.5 bg-[#0086ff] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {locations.map((location, i) => {
              return (
                <Link
                  href={location.href}
                  key={i}
                  className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-2 border-blue-200 hover:border-blue-500 hover:bg-blue-50 group cursor-pointer active:scale-[0.98]"
                >
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors flex-1">
                    {location.name}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Customer Promise Section */}
        <section className="mb-6 sm:mb-10 md:mb-12">
          <div className="bg-white p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg shadow-md border border-gray-100">
            <div className="text-center mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                Our Customer Promise
              </h2>
              <div className="w-12 sm:w-16 h-0.5 bg-[#0086ff] mx-auto rounded-full"></div>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4 max-w-5xl mx-auto">
              {[
                "We treat your belongings as our own.",
                "No last-minute surprises or hidden charges",
                "Proper packing and safe handling",
                "Timely service",
                "Clear communication from start to finish",
              ].map((promise, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 p-2 sm:p-3 bg-blue-50 rounded-lg border border-blue-100"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#0086ff] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-gray-700">{promise}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}