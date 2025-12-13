"use client";

import { motion } from "framer-motion";
import { HeroForm } from "./heroForm";
import { PhoneNumberAnimation } from "./phone-number-animation";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  title?: string;
}

export default function HeroSection({ title }: HeroSectionProps) {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden flex items-center px-4 sm:px-8 py-16 sm:py-24">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-200 rounded-full blur-3xl opacity-20"></div>

      <div className="absolute inset-0 bg-[url('/patterns/subtle-grid.svg')] opacity-20 mix-blend-overlay"></div>

      <div className="container relative z-10 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10 lg:gap-16 items-center">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, x: -40 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-4 shadow-sm">
            #1 Trusted Packers & Movers
          </div>

          <h1 className="text-xl  sm:text-xl md:text-xl lg:text-xl font-bold leading-tight text-gray-900 tracking-tight">
            {title}
          </h1>
          <h2 className="hidden md:block text-lg sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 tracking-tight">
            Where’s it going?
            <span className="block sm:text-lg md:text-2xl lg:text-2xl">
              Our Packers & Movers will take it there - safely & on time.
            </span>
          </h2>

          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-6 sm:mt-8 flex flex-col items-center gap-3 bg-[#0086FF] text-white text-xl sm:text-2xl md:text-3xl font-semibold px-5 sm:px-7 py-3 sm:py-4 rounded-2xl shadow-lg hover:shadow-xl hover:bg-[#0077ee] transition-all duration-300"
          >
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 sm:w-8 sm:h-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 
                  2.25 0 0 0 2.25-2.25v-1.372a1.1 1.1 0 0 
                  0-.852-1.091l-4.423-1.106a1.1 1.1 0 0 
                  0-1.173.417l-.97 1.293a1.2 1.2 0 0 
                  1-1.21.38 12.035 12.035 0 0 
                  1-7.143-7.143 1.2 1.2 0 0 
                  1 .38-1.21l1.293-.97a1.1 1.1 0 0 
                  0 .417-1.173L6.963 3.102a1.1 1.1 0 0 
                  0-1.091-.852H4.5A2.25 2.25 0 0 
                  0 2.25 4.5v2.25Z"
                />
              </svg>
              <PhoneNumberAnimation
                phoneNumber="+91 9043384332"
                href="tel:+919043384332"
              />
            </div>
            <div className="w-3/4 h-px bg-white/30"></div>
            <p className="text-white text-[7px] sm:text-sm uppercase tracking-wide">
              Call now for house shifting
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          key={`${pathname}-form`}
          initial={{ opacity: 0, x: 40 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex justify-center items-center mt-7"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-200/40 to-blue-100/20 rounded-3xl blur-3xl"></div>

          <HeroForm />
        </motion.div>
      </div>
    </section>
  );
}
