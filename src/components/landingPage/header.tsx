"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const locations = [
  { name: "Bangalore", slug: "bangalore" },
  { name: "Chennai", slug: "chennai" },
  { name: "Coimbatore", slug: "coimbatore" },
  { name: "Kochi", slug: "kochi" },
  { name: "Thiruvananthapuram", slug: "thiruvananthapuram" },
];

export default function HeaderNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();
  const logoHref = pathname || "/";

  const toggleMenu = () => setIsMenuOpen((v) => !v);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-2 sm:py-3 px-3 sm:px-6 lg:px-10">
        {/* Logo */}
        <Link
          href={logoHref}
          scroll={false}
          className="flex items-center gap-1 sm:gap-2 group flex-shrink-0"
        >
          <Image
            src="/images/logo1.png"
            alt="Eintransport Pvt Ltd"
            width={40}
            height={40}
            className="w-8 h-8 sm:w-12 sm:h-12 transition-transform duration-300 group-hover:scale-105"
          />
          <span className="hidden sm:block text-lg sm:text-xl md:text-2xl font-semibold text-[#0086ff] tracking-wide">
            Eintransport Packers
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center space-x-4 md:space-x-8 text-gray-800 font-semibold text-sm md:text-base">
          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-blue-700 transition-colors duration-300 py-2">
              Service Location <ChevronDown className="h-4 w-4 mt-0.5" />
            </button>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 -translate-x-1/2 mt-3 w-48 sm:w-56 bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden"
                >
                  {locations.map((loc) => (
                    <Link
                      key={loc.slug}
                      href={`/packers-and-movers/${loc.slug}`}
                      className="block px-4 sm:px-5 py-2 sm:py-3 text-sm sm:text-base text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200"
                    >
                      {loc.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="#about"
            className="hover:text-blue-700 transition-colors duration-300 py-2"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-blue-700 transition-colors duration-300 py-2"
          >
            Contact
          </a>
          <a
            href="#faq"
            className="hover:text-blue-700 transition-colors duration-300 py-2"
          >
            FAQ
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-gray-800 focus:outline-none p-1"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="sm:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg overflow-hidden"
          >
            <div className="flex flex-col items-center space-y-1 py-3 text-base sm:text-lg font-medium text-gray-800">
              {/* Services Dropdown in Mobile */}
              <div className="w-full text-center">
                <button
                  className="w-full flex justify-center items-center gap-1 py-2 px-4 hover:text-blue-700 transition-colors"
                  onClick={() => setIsServicesOpen((v) => !v)}
                >
                  Service Location{" "}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col space-y-1 mt-2 "
                    >
                      {locations.map((loc) => (
                        <Link
                          key={loc.slug}
                          href={`/landingpage/packers-and-movers-${loc.slug}`}
                          onClick={closeMenu}
                          className="block py-2 px-4 text-sm text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md mx-2 transition-colors"
                        >
                          {loc.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="#about"
                onClick={closeMenu}
                className="hover:text-blue-700 transition-colors py-2 px-4 w-full text-center"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                className="hover:text-blue-700 transition-colors py-2 px-4 w-full text-center"
              >
                Contact
              </a>
              <a
                href="#faq"
                onClick={closeMenu}
                className="hover:text-blue-700 transition-colors py-2 px-4 w-full text-center"
              >
                FAQ
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
