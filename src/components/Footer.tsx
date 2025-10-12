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

function Footer() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <footer id="contact" className="bg-gray-900 text-white py-6  px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            } animation-delay-1600`}
          >
            <h3 className="text-2xl  md:text-xl xl:text-2xl font-bold mb-6 text-white">
              Eintransport Pvt Ltd
            </h3>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              Your trusted partner for sustainable and efficient transportation
              services. Moving forward together towards a better future.
            </p>
          </div>

          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            } animation-delay-1800`}
          >
            <h4 className="font-bold text-xl mb-6 text-[#0086FF]">Services</h4>
            <ul className="space-y-3 text-gray-400">
              {[
                { name: "Packers & Movers", href: "/packers-and-movers" },
                { name: "Trucks Service", href: "/trucks-service" },
                { name: "Local Moving", href: "/packers-and-movers" },
                {
                  name: "Long Distance Moving",
                  href: "/packers-and-movers",
                },
                { name: "Commercial Moving", href: "/packers-and-movers" },
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            } animation-delay-2000`}
          >
            <h4 className="font-bold text-xl mb-6 text-[#0086FF]">Branch</h4>
            <ul className="space-y-3 text-gray-400">
              {[
                "Bangalore",
                "Chennai",
                "Coimbatore",
                "Kochi",
                "Thiruvananthapuram",
              ].map((city, index) => (
                <li
                  key={index}
                  className="hover:text-white hover:translate-x-2 transition-all duration-300"
                >
                  {city}
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`transition-all lg:-ml-20  duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            } animation-delay-2200`}
          >
            <h4 className="font-bold text-xl mb-6 text-[#0086FF]">
              Contact Info
            </h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex gap-3 items-center text-center group">
                <span className="bg-[#1E2939] rounded-xl p-3 text-white group-hover:bg-[#0086FF] transition-colors duration-300">
                  <Phone width={18} height={18} />
                </span>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-3">
                    <Link
                      className="hover:text-white transition-colors duration-300"
                      href="tel:+919489847336"
                    >
                      +91 9489847336
                    </Link>
                  </div>
                  <Link
                    className="hover:text-white transition-colors duration-300"
                    href="tel:+919043384332"
                  >
                    +91 9043384332
                  </Link>
                </div>
              </div>

              <div className="flex gap-3 items-center group">
                <span className="bg-[#1E2939] rounded-xl p-3 text-white group-hover:bg-[#0086FF] transition-colors duration-300">
                  <Mail width={18} height={18} />
                </span>
                <Link
                  className="hover:text-white transition-colors duration-300 break-all"
                  href="mailto:eintransport.booking@gmail.com"
                >
                  eintransport.booking@gmail.com
                </Link>
              </div>

              <h4 className="font-bold text-[#0086FF] mt-6 mb-4">
                Registered office
              </h4>
              <div className="flex gap-3 items-start group">
                <span className="bg-[#1E2939] rounded-xl p-3 text-white shrink-0 mt-1 group-hover:bg-[#0086FF] transition-colors duration-300">
                  <MapPin width={18} height={18} />
                </span>
                <p className="text-gray-400 leading-relaxed">
                  No. 1, 3rd Floor, Joseph K Building Huskur, Electronics City,
                  Bangalore South, Bangalore – 560100
                  <br />
                  Karnataka, India
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 Eintransport. All rights reserved.
          </p>
          {/* <div className=" border-gray-800 mt-4 pt-8 text-left hover:underline hover:text-gray-400"> */}
          {/* <p className="text-gray-400">Check for Privacy policy</p> */}
          <Link
            href="https://docs.google.com/document/d/1ZjkzdEuBJaLggLBb6QeJlw_hluWLuRpqUZKTMfFxxO4/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-gray-400">Check for Privacy policy</p>
          </Link>
          {/* </div> */}

          <div className="flex space-x-4">
            {[
              {
                href: "https://www.facebook.com/share/1CMLVRUx1y/",
                icon: Facebook,
              },
              {
                href: "https://youtube.com/@eintransport",
                icon: Youtube,
              },
              {
                href: "https://www.instagram.com/eintransport_pvt_ltd",
                icon: Instagram,
              },
              {
                href: "https://www.linkedin.com/company/eintransport/",
                icon: Linkedin,
              },
            ].map((link, index) => (
              <Link
                target="_blank"
                href={link.href}
                key={index}
                className="p-3 rounded-2xl bg-[#1E2939] hover:bg-[#0086FF] transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <link.icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
