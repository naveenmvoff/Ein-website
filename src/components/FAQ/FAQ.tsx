"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FaqPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What regions do you cover?",
      answer:
        "Our transport services cover Karnataka, Kerala, Tamil Nadu. We also offer long-distance and interstate transport depending on the requirements.",
    },
    {
      question: "What services does Eintransport provide?",
      answer:
        "Eintransport provides two types of services: 1. Packers and Movers services 2. Truck Service for any permitted goods.",
    },
    {
      question: "Does Eintransport provide Packers and Movers services?",
      answer:
        "Yes, packing cities include Bangalore, Chennai, Coimbatore, Kochi, and Thiruvananthapuram. Delivery depends on the requirements.",
    },
    {
      question: "What type of vehicles do you use?",
      answer:
        "We offer a wide range of vehicles including TATA 407, open-body trucks, and container trucks. Whether you need a small vehicle or a high-capacity one, we'll provide the right fit for your move.",
    },
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="bg-gradient-to-br from-gray-50 to-blue-50 py-5 md:py-8 px-4 sm:px-6"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2 sm:mb-3">
          Frequently Asked Questions?
        </h2>
        <p className="text-center text-gray-600 text-sm sm:text-base md:text-lg mb-5 sm:mb-5 md:mb-5">
          Need more clarity? Our team is always here to help you out.
        </p>

        <div className="space-y-3 sm:space-y-4 md:space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg sm:hover:shadow-xl"
            >
              <button
                className="w-full p-3 sm:p-4 md:p-6 text-left flex justify-between items-start sm:items-center gap-2 sm:gap-4 hover:bg-gray-50 transition-colors duration-300"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="font-semibold sm:font-bold text-sm sm:text-base md:text-lg text-gray-800 flex-1">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-[#0086FF] transition-transform duration-300 flex-shrink-0 mt-1 sm:mt-0 ${
                    expandedFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  expandedFaq === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-3 sm:px-4 md:px-6 pb-3 sm:pb-4 md:pb-6 pt-0 border-t border-gray-100">
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
