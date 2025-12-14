"use client";
import { HeroForm } from "@/components/landingPage/heroForm";
import React, { useState } from "react";
import HeaderNavbar from "@/components/landingPage/header";
import Footer from "@/components/Footer";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How does Eintransport calculate the shifting charges?",
    answer:
      "Eintransport calculates charges based on distance, volume of goods, labour required, packing material, vehicle type, and floor level, whether a lift is available or not.",
  },
  {
    question: "How do I confirm a booking with Eintransport?",
    answer:
      "You can confirm your booking through our website form, WhatsApp, or direct call. Once confirmed, we share the vehicle and schedule details.",
  },
  {
    question: "Does Eintransport provide interstate and long-distance moves?",
    answer:
      "Yes, we offer interstate services across Karnataka, Kerala, and Tamil Nadu, depending on customer requirements.",
  },
  {
    question: "Can Eintransport dismantle and assemble furniture?",
    answer:
      "Yes, our team can dismantle and reassemble beds, wardrobes, tables, and other furniture safely.",
  },
  {
    question: "Does Eintransport provide packing materials?",
    answer:
      "Yes, Eintransport provides high-quality packing materials such as bubble wrap, cartons, blankets, and stretch films.",
  },
  {
    question: "How early should I book Eintransport for shifting?",
    answer:
      "We recommend booking 24–48 hours in advance, especially during weekends and month-end peak times.",
  },
  {
    question: "Are there any hidden charges with Eintransport?",
    answer:
      "No, Eintransport maintains complete transparency. Any additional cost (extra labour, waiting time, added items) will be communicated before billing.",
  },
  {
    question: "What items does Eintransport not transport?",
    answer:
      "We do not transport fuel, flammable items, chemicals, illegal goods, perishable food, or restricted goods.",
  },
  {
    question:
      "Does Eintransport provide labour-only services without a vehicle?",
    answer:
      "Yes, labour-only loading and unloading services are available when needed.",
  },
  {
    question: "Does Eintransport offer insurance for goods?",
    answer:
      "Yes, Eintransport provides optional transit insurance for added safety, especially for long-distance moves.",
  },
  {
    question: "How long does shifting take with Eintransport?",
    answer:
      "Local shifting generally takes 4–6 hours depending on goods volume and distance.",
  },
  {
    question: "Can I reschedule my booking with Eintransport?",
    answer:
      "Yes, bookings can be rescheduled at no extra cost if informed in advance.",
  },
  {
    question: "What types of vehicles does Eintransport use?",
    answer:
      "Eintransport uses a wide range of vehicles, such as mini trucks, open trucks, and container trucks, and other commercial vehicles. Based on the customer's requirements, we choose the right vehicle size according to the volume of goods and the type of service needed.",
  },
  {
    question: "How can I track my goods transported by Eintransport?",
    answer:
      "We provide driver contact details and real-time status updates for long-distance and intercity moves.",
  },
  {
    question: "What services does Eintransport provide?",
    answer:
      "Eintransport offers complete packers & movers services and truck services for all permitted goods.",
  },
];

function FAQItem({ faq }: { faq: (typeof faqs)[0] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-3 p-4 sm:p-5 hover:bg-gray-50 transition-colors duration-200 text-left"
      >
        <div className="flex items-center justify-start gap-3 flex-1">
          <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
            <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0086ff]" />
          </div>
          <p className="text-left text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-900 flex-1">
            {faq.question}
          </p>
        </div>
        <div className="flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-[#0086ff]" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </div>
      </button>

      {isOpen && (
        <div className="px-4 sm:px-5 pb-4 sm:pb-5 pl-12 sm:pl-16">
          <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderNavbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white pt-10 sm:pt-18 md:pt-20 lg:pt-20 pb-4 sm:pb-6">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
              Frequently Asked Questions
            </h1>
            <div className="w-12 sm:w-16 h-0.5 bg-[#0086ff] mx-auto rounded-full"></div>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-2 sm:mt-3">
              Find answers to common questions about our services
            </p>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <div className="container mx-auto px-3 sm:px-6 lg:px-8 max-w-7xl py-6 sm:py-8 md:py-10">
        <div className="flex flex-col-reverse lg:flex-row gap-6 lg:gap-8">
          {/* FAQ Content - Left Side */}
          <div className="flex-1 lg:max-w-3xl">
            <div className="space-y-4 sm:space-y-5">
              {faqs.map((faq, index) => (
                <FAQItem key={index} faq={faq} />
              ))}
            </div>
          </div>

          {/* Contact Form - Right Side (Fixed/Sticky on Desktop) */}
          <aside className="lg:w-96 sticky lg:top-28 lg:self-start">
              <HeroForm />
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}
