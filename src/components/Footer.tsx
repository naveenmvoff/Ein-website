"use client";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

type CompanyInfo = {
  name: string;
  value: string;
};

const companyDetails: CompanyInfo[] = [
  { name: "GSTIN", value: "29AAICE9652R1ZJ" },
  { name: "PAN", value: "AAICE9652R" },
];

function Footer() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <footer id="contact" className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* 2 columns on mobile, 2 on sm, 4 on lg */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
          {/* Service Areas */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h4 className="font-bold text-base sm:text-lg mb-4 text-[#0086FF]">
              Service Areas
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-gray-400">
              {[
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
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="block hover:text-white hover:translate-x-1 transition-all duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Types */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h4 className="font-bold text-base sm:text-lg mb-4 text-[#0086FF]">
              Service Types
            </h4>
            <div className="space-y-1.5 text-xs sm:text-sm text-gray-400">
              {[
                "Domestic moving",
                "Packers and Movers",
                "House Shifting",
                "Interstate moving",
                "Local Shifting",
                "Intercity Moving",
              ].map((service, index) => (
                <Link
                  href="/"
                  key={index}
                  className="block hover:text-white hover:translate-x-1 transition-all duration-300"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div
            className={`transition-all duration-1000 col-span-1 sm:col-span-1 lg:col-span-1 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h4 className="font-bold text-base sm:text-lg mb-4 text-[#0086FF]">
              Contact Info
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-gray-400">
              <div className="flex gap-2 items-start group">
                <span className="bg-[#1E2939] rounded-xl p-2 text-white group-hover:bg-[#0086FF] transition-colors duration-300 flex-shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </span>
                <div className="space-y-0.5">
                  <Link
                    href="tel:+919489847336"
                    className="block hover:text-white transition-colors duration-300"
                  >
                    +91 94898 47336
                  </Link>
                  <Link
                    href="tel:+919043384332"
                    className="block hover:text-white transition-colors duration-300"
                  >
                    +91 90433 84332
                  </Link>
                </div>
              </div>

              <div className="flex gap-2 items-start group">
                <span className="bg-[#1E2939] rounded-xl p-2 text-white group-hover:bg-[#0086FF] transition-colors duration-300 flex-shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </span>
                <Link
                  href="mailto:eintransport.booking@gmail.com"
                  className="hover:text-white transition-colors duration-300 break-all"
                >
                  eintransport.booking@gmail.com
                </Link>
              </div>
            </div>
          </div>

          {/* Address + Company Details */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-1">
            {/* Company Details (GSTIN & PAN) */}
            <div className="mb-5">
              <h4 className="font-bold text-[#0086FF] text-base sm:text-lg mb-3">
                Company Details
              </h4>
              <div className="space-y-2 text-xs sm:text-sm text-gray-400">
                {companyDetails.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-2 items-center  px-3 py-2 "
                  >
                    <span className="font-medium">{item.name}:</span>
                    <span className="font-mono text-[#00C8FF]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Address */}
            <div>
              <h4 className="font-bold text-[#0086FF] text-base sm:text-lg mb-3">
                Address
              </h4>
              <div className="flex gap-2 items-start group text-xs sm:text-sm">
                <span className="bg-[#1E2939] rounded-xl p-2 text-white shrink-0 mt-0.5 group-hover:bg-[#0086FF] transition-colors duration-300">
                  <MapPin className="w-3.5 h-3.5" />
                </span>
                <p className="text-gray-400 leading-tight">
                  No. 1, 3rd Floor, Joseph K Building Huskur,
                  <br />
                  Electronics City, Bangalore South,
                  <br />
                  Bangalore – 560100
                  <br />
                  Karnataka, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-5 text-center">
          <p className="text-xs text-gray-400 mb-2">
            © 2025 Eintransport. All rights reserved.
          </p>

          <Link
            href="/privacyPolicy"
            className="text-xs text-gray-400 hover:underline hover:text-white transition-colors inline-block mb-3"
          >
            Privacy Policy
          </Link>

          <div className="flex justify-center space-x-2">
            {[
              { href: "https://www.facebook.com/share/1CMLVRUx1y/", icon: Facebook },
              { href: "https://youtube.com/@eintransport", icon: Youtube },
              { href: "https://www.instagram.com/eintransport_pvt_ltd", icon: Instagram },
              { href: "https://www.linkedin.com/company/eintransport/", icon: Linkedin },
            ].map((link, index) => (
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={link.href}
                key={index}
                className="p-2 rounded-full bg-white hover:bg-[#0086FF] transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label={`Visit us on ${link.icon.name}`}
              >
                <link.icon className="h-3.5 w-3.5 text-[#1E2939] group-hover:text-white" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;