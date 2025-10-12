"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronUp, MessageCircle } from "lucide-react";

export default function ChatButton() {
  const [showButton, setShowButton] = useState(false);
  const [OneTime, setOneTime] = useState(false);

  //   console.log("window.scrollY", window.scrollY);
  useEffect(() => {
    const handleScroll = () => {
      // Show when user scrolls down 200px
      if (window.scrollY > 1100) {
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

    // ✅ Cleanup function (in case component unmounts early)
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className={`fixed bottom-20 right-6 z-50 transition-all duration-300 ${
          showButton
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5 pointer-events-none"
        }`}
      >
        <Link
          href="#"
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition"
        >
          <ChevronUp className="w-10 h-10" />{" "}
        </Link>
      </div>
      {OneTime && (
        <div
          className={`fixed bottom-8 right-6 z-50 transition-all ease-in-out duration-300 `}
        >
          <Link
            href="#"
            className="opacity-100 translate-y-5 scale-90 bg-red-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition"
          >
            <MessageCircle className="w-10 h-10" />
          </Link>
        </div>
      )}
    </>
  );
}
