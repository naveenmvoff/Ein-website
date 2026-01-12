import { HeroForm } from "@/components/landingPage/heroForm";
import { MapPin, Phone, Mail, MapPinned } from "lucide-react";
import Link from "next/link";
import React from "react";
import HeaderNavbar from "@/components/landingPage/header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import StaticUI from "@/components/StaticUI/StaticUI";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://eintransport.in";

export const metadata: Metadata = {
  title: "Contact Us | Eintransport Packers and Movers",
  description:
    "Contact Eintransport for reliable relocation help. Reach us by email or call your branch for quick guidance and smooth, hassle-free shifting support.",
  keywords: [
    "Eintransport contact details",
    "contact Eintransport Packers",
    "Eintransport relocation support",
    "Eintransport Packers and Movers contact page",
  ],
  alternates: {
    canonical: `${BASE_URL}/contact-us`,
  },
  openGraph: {
    title: "Contact Us | Eintransport Packers and Movers",
    description:
      "Contact Eintransport for reliable relocation help. Reach us by email or call your branch for quick guidance and smooth, hassle-free shifting support.",
    url: `${BASE_URL}/contact-us`,
    siteName: "Eintransport Packers and Movers",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Eintransport Packers and Movers",
    description:
      "Contact Eintransport for reliable relocation help. Reach us by email or call your branch for quick guidance and smooth, hassle-free shifting support.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

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
      <section className="bg-gray-50 mt-10 pt-8 sm:pt-12 md:pt-14 lg:pt-16 pb-3 sm:pb-4 md:pb-6">
        <div className="text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
            Contact Eintransport Packers and Movers
          </h1>
          <div className="w-12 sm:w-16 h-0.5 bg-[#0086ff] mx-auto rounded-full"></div>
          <p className="text-xs sm:text-sm text-gray-600 mt-2 sm:mt-3">
            We're here to help with all your relocation needs
          </p>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 sm:py-6 md:py-8">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 items-start">
          {/* Contact Information - Left Side */}
          <div className="flex-1 lg:max-w-3xl order-2 lg:order-1">
            {/* Single Background Container */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 sm:p-5 md:p-6">
              {/* Introduction */}
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4 sm:mb-5">
                At{" "}
                <Link
                  href={"/"}
                  className="font-semibold hover:underline text-[#0086ff]"
                >
                  Eintransport Packers and Movers
                </Link>{" "}
                (Eintransport Pvt Ltd), we are available 7 days a week to assist
                with home shifting, office shifting, vehicle transport, and
                intercity relocation.
              </p>

              {/* Contact Cards */}
              <div className="space-y-3 sm:space-y-4">
                {/* Call or WhatsApp */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#0086ff]" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-1.5">
                      Call or WhatsApp
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold mb-0.5">
                    <span className="font-extrabold text-[#0086ff]"><a href="tel:+919043384332" className="hover:underline">+91 90433 84332</a></span>
                    </p>
                    <p className="text-xs text-gray-600">
                      (Instant support for bookings & enquiries)
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#0086ff]" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-1.5">
                      Email Us
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-700">
                      Official Email:{" "}
                      <a
                        href="mailto:info@eintransport.in"
                        className="text-[#0086ff] hover:underline font-medium"
                      >
                        info@eintransport.in
                      </a>
                    </p>
                  </div>
                </div>

                

                {/* Office Address */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPinned className="w-4 h-4 sm:w-5 sm:h-5 text-[#0086ff]" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-1.5">
                      Registered Office (Administrative Purpose Only)
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-2">
                      Eintransport Packer and Movers (Entransport Pvt Ltd)
                      <br />
                      No. 25, GPR Layout,
                      <br />
                      Hebbagodi, Bengaluru,
                      <br />
                      Karnataka – 560100
                    </p>
                    <div className="text-xs text-gray-600 space-y-0.5">
                      <p>
                        <span className="font-medium">GSTIN:</span>{" "}
                        29AAICE9652R1ZJ
                      </p>
                      <p className="text-[10px] text-gray-600 italic">
                        Note: Customer visits are not accepted. We provide doorstep pickup and delivery services only.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Locations */}
              <div className="mt-4 sm:mt-5 pt-4 sm:pt-5 border-t border-gray-200">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Service Locations
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {locations.map((location, i) => (
                    <Link
                      href={location.href}
                      key={i}
                      className="flex items-center gap-2 p-2.5 sm:p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-blue-200 hover:border-[#0086ff] hover:bg-blue-50 group"
                    >
                      <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-[#0086ff] transition-colors">
                        <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0086ff] group-hover:text-white transition-colors" />
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-[#0086ff] transition-colors flex-1">
                        {location.name}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side (Fixed/Sticky on Desktop) */}
          <aside className="w-full lg:w-96 order-1 lg:order-2 lg:sticky lg:top-28 lg:self-start z-10">
            <HeroForm />
          </aside>
        </div>
      </div>
      <StaticUI />
      <Footer />
    </div>
  );
}
