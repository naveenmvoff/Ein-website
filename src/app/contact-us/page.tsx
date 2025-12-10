import { HeroForm } from "@/components/landingPage/heroForm";
import { MapPin, Phone, Mail, Clock, MapPinned } from "lucide-react";
import Link from "next/link";
import React from "react";
import HeaderNavbar from "@/components/landingPage/header";
import Footer from "@/components/Footer";

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
      <section className="bg-gradient-to-br from-blue-50 to-white pt-8 sm:pt-12 md:pt-14 lg:pt-16 pb-4 sm:pb-6">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
              Contact Eintransport Packers and Movers
            </h1>
            <div className="w-12 sm:w-16 h-0.5 bg-[#0086ff] mx-auto rounded-full"></div>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-2 sm:mt-3">
              We're here to help with all your relocation needs
            </p>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <div className="container mx-auto px-3 sm:px-6 lg:px-8 max-w-7xl py-6 sm:py-8 md:py-10">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          
          {/* Contact Information - Left Side */}
          <div className="flex-1 lg:max-w-3xl">
            
            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 sm:p-5 md:p-6 mb-5">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                At <span className="font-semibold text-[#0086ff]">Eintransport Packers and Movers</span> (Eintransport Pvt Ltd), we are
                available 7 days a week to assist with home shifting, office shifting,
                vehicle transport, and intercity relocation.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4 sm:space-y-5">
              
              {/* Call or WhatsApp */}
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 sm:p-5">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2">
                       Call or WhatsApp
                    </h2>
                    <p className="text-sm sm:text-base font-semibold text-[#0086ff] mb-1">
                      Phone / WhatsApp: +91 90433 84332
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      (Instant support for bookings & enquiries)
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 sm:p-5">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2">
                       Email Us
                    </h2>
                    <p className="text-sm sm:text-base text-gray-700">
                      Official Email: <a href="mailto:info@eintransport.in" className="text-[#0086ff] hover:underline font-medium">info@eintransport.in</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 sm:p-5">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2">
                       Working Hours
                    </h2>
                    <p className="text-sm sm:text-base text-gray-700">
                      Monday to Sunday — 7:00 AM to 10:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Address */}
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 sm:p-5">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <MapPinned className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2">
                       Office Address
                    </h2>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                      Eintransport Packer and Movers (Entransport Pvt Ltd)<br />
                      No. 22, 4th Cross Rd, Muneshwara Layout,<br />
                      Phase II, Electronic City,<br />
                      Bengaluru, Karnataka – 560100
                    </p>
                    <div className="text-xs sm:text-sm text-gray-600 space-y-1">
                      <p><span className="font-medium">GSTIN:</span> 29AAICE9652R1ZJ</p>
                      <p><span className="font-medium">PAN:</span> AAICE9652R</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Locations */}
            <div className="mt-6 sm:mt-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Service Locations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {locations.map((location, i) => (
                  <Link
                    href={location.href}
                    key={i}
                    className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-green-200 hover:border-green-400 group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-green-600 transition-colors flex-1">
                      {location.name}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side (Fixed/Sticky on Desktop) */}
          <aside className="lg:w-96 lg:sticky lg:top-24 lg:self-start">
            <HeroForm />
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}