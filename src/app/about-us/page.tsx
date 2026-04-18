import CountUp from "@/components/ui/CountUp";
import {
  MapPin,
  CheckCircle2,
  Shield,
  Heart,
  Target,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HeaderNavbar from "@/components/landingPage/header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import StaticUI from "@/components/StaticUI/StaticUI";

export const metadata: Metadata = {
  title: "About Us | Eintransport Packers and Movers",
  description:
    "Learn about Eintransport Packers and Movers, our mission, expertise, and commitment to safe, reliable relocation services trusted across South India.",
  keywords: [
    "About Eintransport Packers and Movers",
    "Eintransport Packers Mission",
    "Eintransport Packers Vision",
    "Eintransport Core Values",
    "Eintransport Service Locations",
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL || "https://eintransport.in"}/about-us`,
  },
  openGraph: {
    title: "About Us | Eintransport Packers and Movers",
    description:
      "Learn about Eintransport Packers and Movers, our mission, expertise, and commitment to safe, reliable relocation services trusted across South India.",
    url: `${process.env.NEXT_PUBLIC_APP_URL || "https://eintransport.in"}/about-us`,
    siteName: "Eintransport Packers and Movers",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Eintransport Packers and Movers",
    description:
      "Learn about Eintransport Packers and Movers, our mission, expertise, and commitment to safe, reliable relocation services.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const counts = [
  { name: "Years of Experience", count: 15 },
  { name: "Homes Moved", count: 8500 },
  { name: "Branch", count: 5 },
  { name: "Trained Manpower", count: 250 },
];

const whyChooseUs = [
  {
    title: "Professional & Trained Staff",
    description:
      "Our experienced moving team handles every item, including fragile goods, with utmost care, ensuring safe packaging, loading, and unloading.",
  },
  {
    title: "High-Quality Packing Materials",
    description:
      "We use premium packing materials, like bubble wrap, foam, stretch film, and customised boxes, to protect your valuables during transit.",
  },
  {
    title: "Safe & On-Time Delivery",
    description:
      "Most of our vehicles are GPS-enabled, helping us maintain better coordination and timely delivery for our customers.",
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden charges. We follow a clear and customer-friendly pricing model based on distance, volume, and required services.",
  },
  {
    title: "End-to-End Service",
    description:
      "From disassembling furniture to installation at your new location, we provide complete door-to-door relocation support.",
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
      <section className="bg-gray-50 pt-10 sm:pt-14 md:pt-16 lg:pt-20">
        <div className="text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl pt-6 font-bold text-gray-900 sm:mb-1 md:mb-2">
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
                <Link
                  href={"/"}
                  className="font-semibold text-[#0086ff] hover:underline"
                >
                  Eintransport Packers and Movers
                </Link>
                , we believe moving should be simple, safe, and stress-free.
                Founded with the vision of delivering reliable and transparent
                relocation services, we have grown into one of South India's
                most trusted names for house shifting, office relocation,
                intercity moves, vehicle transport, and logistics support.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                With a strong presence in Bangalore, Chennai, Coimbatore, Kochi,
                and Trivandrum, we serve thousands of customers every year with
                consistent quality, timely delivery, and complete safety of
                their belongings.
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
          <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
            {whyChooseUs.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-white p-3 sm:p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-1.25rem)] max-w-sm"
                >
                  <h2 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1.5 sm:mb-2">
                    {item.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-6 sm:mb-10 md:mb-12 p-4 sm:p-6 md:p-8">
                 <div className="grid grid-cols-2 sm:grid-cols-4">
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
        </section>

        {/* Mission & Vision Section */}
        <section className="mb-6 sm:mb-10 md:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-md border border-gray-100">
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                Our Mission
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                To provide affordable, efficient, and reliable relocation
                services that reduce customer stress, save time, and ensure 100%
                satisfaction.
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-md border border-gray-100">
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                Our Vision
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                To become South India's most trusted packers and movers brand by
                offering safe, smart, and technology-driven moving solutions.
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
                  <div className="flex items-center justify-center gap-2 sm:gap-2.5 mb-2 sm:mb-3">
                    <div className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 bg-blue-100 rounded-lg">
                      <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#0086ff]" />
                    </div>
                    <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-900">
                      {value.title}
                    </p>
                  </div>
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
          <div className="text-center mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
              Our Customer Promise
            </h2>
            <div className="w-12 sm:w-16 h-0.5 bg-[#0086ff] mx-auto rounded-full"></div>
          </div>
          <div className="space-y-3 w-fit mx-auto">
            {[
              "We treat your belongings as our own.",
              "No last-minute surprises or hidden charges",
              "Proper packing and safe handling",
              "Timely service",
              "Clear communication from start to finish",
            ].map((promise, index) => (
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
                <p className="text-base text-gray-700">{promise}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <StaticUI />
      <Footer />
    </div>
  );
}
