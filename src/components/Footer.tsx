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
  const [isVisible] = useState(true);

  return (
    <footer
      id="contact"
      className="bg-gray-900 text-white py-6 sm:py-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-7xl">
        {/* 2 columns on mobile, 2 on sm, 4 on lg */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {/* Service Areas */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h4 className="font-bold text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 text-[#0086FF]">
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
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h4 className="font-bold text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 text-[#0086FF]">
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
                <p
                  key={index}
                  className="block hover:text-white transition-all duration-300"
                >
                  {service}
                </p>
              ))}
            </div>
          </div>

          {/* Contact Info Container - wraps Contact Info and Secure Storage */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-1 flex flex-col">
            {/* Contact Info */}
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h4 className="font-bold text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 text-[#0086FF]">
                Contact Info
              </h4>
              <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-400">
                {/* Phone */}
                <div className="flex gap-2 sm:gap-3 items-start group">
                  <span className="bg-[#1E2939] rounded-lg sm:rounded-xl p-1.5 sm:p-2 text-white group-hover:bg-[#0086FF] transition-colors duration-300 flex-shrink-0">
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </span>
                  <div className="space-y-0.5 flex-1">
                    <Link
                      href="tel:+919489847336"
                      className="block hover:text-white transition-colors duration-300 break-words"
                    >
                      +91 94898 47336
                    </Link>
                    <Link
                      href="tel:+919043384332"
                      className="block hover:text-white transition-colors duration-300 break-words"
                    >
                      +91 90433 84332
                    </Link>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-2 sm:gap-3 group">
                  <span className="bg-[#1E2939] rounded-lg sm:rounded-xl p-1.5 sm:p-2 text-white group-hover:bg-[#0086FF] transition-colors duration-300 flex-shrink-0">
                    <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </span>
                  <Link
                    href="mailto:eintransport.booking@gmail.com"
                    className="hover:text-white transition-colors duration-300 break-all flex-1"
                  >
                    eintransport.booking@gmail.com
                  </Link>
                </div>
              </div>
            </div>

            {/* Secure storage - appears below Contact Info on desktop */}
            <div
              className={`transition-all duration-1000 mt-6 lg:mt-8 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h4 className="font-bold text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 text-[#0086FF]">
                Secure storage
              </h4>
              <div className="space-y-1.5 text-xs sm:text-sm text-gray-400">
                <p className="block hover:text-white transition-all duration-300">
                  Home storage
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links and Company Details Container */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-1 flex flex-col">
            {/* Quick Links */}
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h4 className="font-bold text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 text-[#0086FF]">
                Quick Links
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-gray-400">
                {[
                  { name: "Blog", href: "/blog" },
                  { name: "FAQ's", href: "/faq" },
                  { name: "About us", href: "/about" },
                  { name: "Contact us", href: "/contact" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="block hover:text-white hover:translate-x-1 transition-all duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Details */}
            <div className="mt-6 lg:mt-8">
              <h4 className="font-bold text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 text-[#0086FF]">
                Company Details
              </h4>
              <div className="space-y-2 sm:space-y-2.5 w-full">
                {/* Address */}
                <div className="flex gap-2 sm:gap-3 items-start group text-xs sm:text-sm mb-4">
                <span className="font-mono text-[10px] sm:text-[8px] lg:text-[12px] text-gray-300">
                Address:
                  </span>
                  <p className="text-gray-400 leading-snug sm:leading-tight flex-1">
                    NO. 25, GPR LAYOUT, SFS WARD 1, BLOCK 92, Sri Muneshwara Swamy Temple, Hebbagodi, Bengaluru urban, Karnataka, 560100
                  </p>
                </div>
                {companyDetails.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-row gap-1 text-base sm:gap-2 items-start sm:items-center px-2 sm:px-3 py-2"
                  >
                    <span className="font-mono text-[10px] sm:text-[8px] lg:text-[12px] text-gray-300">
                      {item.name}:
                    </span>
                    <span className="font-mono text-gray-400 text-[8px] sm:text-[10px] lg:text-[12px] break-all">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-4 sm:pt-5 text-center">
          <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3">
            © 2025 Eintransport. All rights reserved.
          </p>

          <Link
            href="/privacyPolicy"
            className="text-xs sm:text-sm text-gray-400 hover:underline hover:text-white transition-colors inline-block mb-3 sm:mb-4"
          >
            Privacy Policy
          </Link>

          <div className="flex justify-center gap-2 sm:gap-3 flex-wrap">
            {[
              {
                href: "https://www.facebook.com/share/1CMLVRUx1y/",
                icon: Facebook,
                label: "Facebook",
              },
              {
                href: "https://youtube.com/@eintransport",
                icon: Youtube,
                label: "YouTube",
              },
              {
                href: "https://www.instagram.com/eintransport_pvt_ltd",
                icon: Instagram,
                label: "Instagram",
              },
              {
                href: "https://www.linkedin.com/company/eintransport/",
                icon: Linkedin,
                label: "LinkedIn",
              },
            ].map((link, index) => {
              const IconComponent = link.icon;
              return (
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link.href}
                  key={index}
                  className="p-2.5 sm:p-3 rounded-full bg-white hover:bg-[#0086FF] transition-all duration-300 transform hover:scale-110 hover:shadow-lg active:scale-95"
                  aria-label={`Visit us on ${link.label}`}
                >
                  <IconComponent className="h-4 w-4 sm:h-4 sm:w-4 text-[#1E2939] hover:text-white transition-colors" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
