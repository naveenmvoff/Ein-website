"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronUp, Phone } from "lucide-react";
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
          className={`fixed bottom-35 right-6 z-50 transition-all duration-300 ${showButton
              ? "opacity-100 translate-y-0"
              : "opacity-0  pointer-events-none"
            }`}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-gray-500 hover:bg-gray-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-8 h-8" />
          </button>
        </div>
      ) : (
        <div
          className={`fixed bottom-35 right-6 z-50 transition-all duration-300
          `}
        >
          <Link
            href="/"
            className="bg-gray-500 hover:bg-gray-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition"
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
              href="tel:+919043384332"
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
              href="https://wa.me/9043384332"
              className="opacity-100 translate-y-5 scale-90 bg-green-400 hover:bg-green-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#ffffff"><path fill="#ffffff" d="M16.6 14c-.2-.1-1.5-.7-1.7-.8c-.2-.1-.4-.1-.6.1c-.2.2-.6.8-.8 1c-.1.2-.3.2-.5.1c-.7-.3-1.4-.7-2-1.2c-.5-.5-1-1.1-1.4-1.7c-.1-.2 0-.4.1-.5c.1-.1.2-.3.4-.4c.1-.1.2-.3.2-.4c.1-.1.1-.3 0-.4c-.1-.1-.6-1.3-.8-1.8c-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3c-.6.6-.9 1.3-.9 2.1c.1.9.4 1.8 1 2.6c1.1 1.6 2.5 2.9 4.2 3.7c.5.2.9.4 1.4.5c.5.2 1 .2 1.6.1c.7-.1 1.3-.6 1.7-1.2c.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2c5.5 0 9.9-4.4 9.9-9.9c.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3c-1.5 0-2.9-.4-4.2-1.1l-.3-.2l-3.1.8l.8-3l-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4" /></svg>
            </Link>
          </div>
        </>
      )}
    </>
  );
}
