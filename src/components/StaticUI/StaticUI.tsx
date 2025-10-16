"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronUp, MessageCircle, Phone } from "lucide-react";
import { usePathname } from "next/navigation";

export default function StaticUI() {
  const path = usePathname();
  const [showButton, setShowButton] = useState(false);
  const [OneTime, setOneTime] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOneTime(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {path != "/privacyPolicy" ? (
        <div
          className={`fixed bottom-35 right-6 z-50 transition-all duration-300 ${
            showButton
              ? "opacity-100 translate-y-0"
              : "opacity-0  pointer-events-none"
          }`}
        >
          <Link
            href="#"
            className="bg-red-400 hover:bg-red-700 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition"
          >
            <ChevronUp className="w-8 h-8" />
          </Link>
        </div>
      ) : (
        <div
          className={`fixed bottom-35 right-6 z-50 transition-all duration-300
          `}
        >
          <Link
            href="/"
            className="bg-red-400 hover:bg-red-700 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition"
          >
            <ChevronLeft className="w-8 h-8" />{" "}
          </Link>
        </div>
      )}
      {OneTime && (
        <>
          <div
            className={`fixed bottom-18 right-6 z-50 transition-all duration-300
             `}
          >
            <Link
              href="tel:+918765432109"
              className="opacity-100  scale-90 bg-blue-400 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition"
            >
              <Phone className="w-8 h-8" />{" "}
            </Link>
          </div>
          <div
            className={`fixed bottom-8 right-6 z-50 transition-all ease-in-out duration-300 `}
          >
            <Link
              target="blank"
              href="https://wa.me/9876543210"
              className="opacity-100 translate-y-5 scale-90 bg-green-400 hover:bg-green-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition"
            >
              <MessageCircle className="w-8 h-8" />
            </Link>
          </div>
        </>
      )}
    </>
  );
}
