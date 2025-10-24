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
      className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 sm:py-10 px-4 sm:px-6"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl text-gray-900 sm:text-4xl md:text-5xl font-bold text-center mb-6">
          Frequently Asked Questions?
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12">
          Need more clarity? Our team is always here to help you out.
        </p>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-800 hover:shadow-xl"
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-300"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="font-bold text-lg text-gray-800 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`h-6 w-6 text-[#0086FF] transition-transform duration-300 flex-shrink-0 ${
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
                <div className="p-6 pt-0 border-t border-gray-100">
                  <p className="text-gray-600 text-base leading-relaxed">
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

// "use client"

// import { ChevronDown } from "lucide-react";
// import { useState } from "react";

// export default function FaqPage() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

//   const faqs = [
//     {
//       question: "What regions do you cover?",
//       answer:
//         "Our transport services cover Karnataka, Kerala, Tamil Nadu. We also offer long-distance and interstate transport depending on the requirements.",
//     },
//     {
//       question: "What services does Eintransport provide?",
//       answer:
//         "Eintransport provides two types of services: 1. Packers and Movers services 2. Truck Service for any permitted goods.",
//     },
//     {
//       question: "Does Eintransport provide Packers and Movers services?",
//       answer:
//         "Yes, packing cities include Bangalore, Chennai, Coimbatore, Kochi, and Thiruvananthapuram. Delivery depends on the requirements.",
//     },
//     {
//       question: "What type of vehicles do you use?",
//       answer:
//         "We offer a wide range of vehicles including TATA 407, open-body trucks, and container trucks. Whether you need a small vehicle or a high-capacity one, we'll provide the right fit for your move.",
//     },
//   ];

//   return (
//     <section
//       id="faq"
//       className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 sm:py-24 px-4 sm:px-6"
//     >
//       <div className="container mx-auto max-w-4xl">
//         <h2
//           className={`text-3xl text-gray-900 sm:text-4xl md:text-5xl font-bold text-center mb-6 transition-all duration-1000 ${
//             isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//           } animation-delay-1000`}
//         >
//           Frequently Asked Questions?
//         </h2>
//         <p className="text-center text-gray-600 text-lg mb-12">
//           Need more clarity? Our team is always here to help you out.
//         </p>

//         <div className="space-y-6">
//           {faqs.map((faq, index) => (
//             <div
//               key={index}
//               className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-xl ${
//                 isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//               }`}
//               style={{ animationDelay: `${1200 + index * 200}ms` }}
//             >
//               <button
//                 className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-300"
//                 onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
//               >
//                 <h3 className="font-bold text-lg text-gray-800 pr-4">
//                   {faq.question}
//                 </h3>
//                 <ChevronDown
//                   className={`h-6 w-6 text-[#0086FF] transition-transform duration-300 flex-shrink-0 ${
//                     expandedFaq === index ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               <div
//                 className={`overflow-hidden transition-all duration-500 ${
//                   expandedFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//                 }`}
//               >
//                 <div className="p-6 pt-0 border-t border-gray-100">
//                   <p className="text-gray-600 text-base leading-relaxed">
//                     {faq.answer}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
