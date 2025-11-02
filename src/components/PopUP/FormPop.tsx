"use client";

import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { HeroForm } from "../landingPage/heroForm";

function FormPopUp() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isModalShown = localStorage.getItem("isModalShow");
    if (isModalShown) return;

    const handleScroll = () => {
      if (window.scrollY > 3000) {
        setIsOpen(true);
        localStorage.setItem("isModalShow", "true");
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div
            ref={modalRef}
            className="relative max-w-md w-full bg-white rounded-2xl p-6 animate-fadeIn"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 z-40 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="[&>*]:shadow-none [&>*]:border-none">
              <HeroForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FormPopUp;
