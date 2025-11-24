"use client";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
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
      className="bg-gray-900 text-white py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          <div
            className={`transition-all duration-1000 ${isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
              }`}
          >
            <h4 className="font-bold text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 text-[#0086FF]">
              Service Areas
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
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
                    className="block hover:text-white hover:translate-x-1 transition-all duration-300 leading-relaxed"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`transition-all duration-1000 ${isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
              }`}
          >
            <h4 className="font-bold text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 text-[#0086FF]">
              Service Types
            </h4>

            <div className="space-y-2 text-xs sm:text-sm text-gray-400">
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
                  onClick={() => {
                    const hero = document.getElementById("hero-section");
                    if (hero) {
                      hero.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "nearest",
                      });
                      hero.classList.add(
                        "ring-2",
                        "ring-blue-400",
                        "transition"
                      );
                      setTimeout(() => {
                        hero.classList.remove(
                          "ring-2",
                          "ring-blue-400",
                          "transition"
                        );
                      }, 1500);
                    } else {
                      window.location.href = "/";
                      setTimeout(() => {
                        const heroLater =
                          document.getElementById("hero-section");
                        if (heroLater) {
                          heroLater.scrollIntoView({ behavior: "smooth" });
                        }
                      }, 800);
                    }
                  }}
                  className="block hover:text-white transition-all duration-300 cursor-pointer"
                >
                  {service}
                </p>
              ))}
            </div>

            <div className="mt-6 sm:mt-8">
              <h4 className="font-bold text-sm sm:text-base lg:text-lg mb-1 text-[#0086FF]">
                Secure Storage
              </h4>
              <div className="space-y-2 text-xs sm:text-sm text-gray-400">
                <a
                  href="tel:+919043384332"
                  className="block hover:text-white transition-all duration-300 cursor-pointer"
                >
                  Home storage
                </a>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 ${isVisible
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
                <div className="space-y-1 text-[11px] sm:text-base flex-1 min-w-0">
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

              <div className="flex items-center gap-2 sm:gap-3 group">
                <span className="bg-[#1E2939] rounded-lg sm:rounded-xl p-1.5 sm:p-2 text-white group-hover:bg-[#0086FF] transition-colors duration-300 flex-shrink-0">
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </span>
                <Link
                  href="mailto:eintransport.booking@gmail.com"
                  className="hover:text-white transition-colors duration-300 break-words flex-1 min-w-0"
                >
                  eintransport.booking@gmail.com
                </Link>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 ${isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
              }`}
          >
            {/* Quick Links */}
            <div className="mb-6 sm:mb-8">
              <h4 className="font-bold text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 text-[#0086FF]">
                Quick Links
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                {[
                  { name: "FAQ's", href: "/#faq" },
                  { name: "About us", href: "/#about" },
                  { name: "Contact us", href: "/#contact" },
                  { name: "Blog", href: "/blog" },
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

            <div>
              <h4 className="font-bold text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 text-[#0086FF]">
                Company Details
              </h4>
              <div className="space-y-2 sm:space-y-3 w-full">
                {/* Address */}
                <div className="flex flex-col gap-2 items-start text-xs sm:text-sm mb-3 sm:mb-4">
                  <span className="font-medium text-[10px] sm:text-base text-gray-300 whitespace-nowrap">
                    Address:
                  </span>
                  {/* <p className="text-gray-400 text-[10px] sm:text-base leading-relaxed flex-1 min-w-0">
                    NO. 25, GPR LAYOUT, SFS WARD 1, BLOCK 92, Sri Muneshwara
                    Swamy Temple, Hebbagodi, Bengaluru urban, Karnataka, 560100
                  </p> */}
                  <p className="text-gray-400 text-[10px] sm:text-base leading-relaxed flex-1 min-w-0">
                    22, 4th Cross Rd, Muneshwara Layout, Phase II, 
                    Electronic City, Bengaluru, Karnataka - 560100
                  </p>
                </div>

                {companyDetails.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-2 items-start text-xs sm:text-sm"
                  >
                    <span className="font-medium text-[10px] sm:text-xs text-gray-300 whitespace-nowrap">
                      {item.name}:
                    </span>
                    <span className="font-mono text-gray-400 text-[10px] sm:text-xs break-all flex-1">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-10 pt-5 sm:pt-6">
          {/* Copyright & Privacy */}
          <div className="text-center mb-4 sm:mb-5">
            <p className="text-xs sm:text-sm text-gray-400 mb-2">
              © 2025 Eintransport. All rights reserved.
            </p>
            <Link
              href="/privacyPolicy"
              className="text-xs sm:text-sm text-gray-400 hover:underline hover:text-white transition-colors inline-block"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
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
                href: "https://www.linkedin.com/company/eintransport/?viewAsMember=true",
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
                  <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 text-[#1E2939]" />
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
