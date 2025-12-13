"use client";

import Link from "next/link";
import React from "react";
import HeaderNavbar from "@/components/landingPage/header";
import Footer from "@/components/Footer";
import {
  FileText,
  AlertCircle,
  Shield,
  Ban,
  ExternalLink,
  Gavel,
  Mail,
  Globe,
} from "lucide-react";

const sections = [
  {
    id: 1,
    icon: FileText,
    title: "Service Usage",
    content: {
      text: "Eintransport provides packing, moving, loading, unloading, and transportation services. Service confirmation is subject to:",
      list: [
        "Availability.",
        "Accurate information provided by the customer",
        "Advance payment.",
      ],
    },
  },
  {
    id: 2,
    icon: FileText,
    title: "Payments",
    content: {
      text: "Payments must be made as instructed by the Company.",
      list: [
        "Advance payment",
        "After pickup",
        "Remaining balance before unloading.",
      ],
      footer:
        "Refunds for eligible cancellations will be processed within 3–5 working days.",
    },
  },
  {
    id: 3,
    icon: AlertCircle,
    title: "Booking Cancellation",
    content: {
      list: [
        "Cancellations made within 24 hours of the scheduled service time may not be eligible for a refund.",
        "Vehicle/manpower allocation charges may apply.",
      ],
    },
  },
  {
    id: 4,
    icon: FileText,
    title: "Customer Responsibilities",
    content: {
      text: "Customers must:",
      list: [
        "Provide accurate inventory details.",
        "Ensure parking and lift availability.",
        "Keep valuables (cash, jewellery and important documents) separately.",
        "Be present during the shifting process.",
      ],
      footer:
        "The Company is not responsible for losses caused by incorrect information or unsafe packing done by the customer",
    },
  },
  {
    id: 5,
    icon: Shield,
    title: "Damage Policy",
    content: {
      list: [
        "Damages must be reported before the team leaves or within 24 hours of delivery.",
        "Items such as glass, electronics, artwork, statues, fish tanks, fragile goods, and antiques are not fully covered under standard liability.",
        "Company liability is limited and applies only if transit insurance is purchased.",
      ],
    },
  },
  {
    id: 6,
    icon: Shield,
    title: "Insurance Disclaimer",
    content: {
      text: "Transit insurance is optional and must be requested by the customer in advance. The Company is not responsible for damages to goods that are uninsured.",
    },
  },
  {
    id: 7,
    icon: Ban,
    title: "Prohibited Goods",
    content: {
      text: "We do not transport:",
      list: [
        "Cash, jewellery, valuable items and illegal goods",
        "Hazardous, flammable, or perishable goods,",
        "Alcohol or any government-restricted items.",
      ],
    },
  },
  {
    id: 8,
    icon: Globe,
    title: "Website Usage",
    content: {
      text: "You agree not to use the website for:",
      list: [
        "Illegal activities,",
        "Fraud, spamming, or hacking,",
        "Uploading harmful, abusive, offensive or illegal content.",
      ],
      footer:
        "All website content is owned by Eintransport Private Limited and protected under applicable Indian copyright laws.",
    },
  },
  {
    id: 9,
    icon: ExternalLink,
    title: "Third-Party Links",
    content: {
      text: "Our website may contain links to external websites.",
      footer:
        "The Company is not responsible for the accuracy, reliability, safety or content of third-party websites.",
    },
  },
  {
    id: 10,
    icon: AlertCircle,
    title: "Limitation of Liability",
    content: {
      text: "Eintransport is not liable for:",
      list: [
        "Direct or indirect damages,",
        "Loss of profits or data,",
        "Delays due to traffic, weather, or external conditions,",
        "Incorrect information provided by the customer.",
        "Damages arising from road accidents or incidents beyond our control.",
      ],
      footer: "Use of our website and services is strictly at your own risk.",
    },
  },
  {
    id: 11,
    icon: AlertCircle,
    title: "Force Majeure",
    content: {
      text: "The Company is not liable for delays or service failures due to events beyond our control, including natural disasters, strikes, riots, accidents or government restrictions.",
    },
  },
  {
    id: 12,
    icon: Gavel,
    title: "Jurisdiction",
    content: {
      text: "All disputes are subject to the exclusive jurisdiction of the Courts of Bengaluru, Karnataka, India and governed by the laws of India.",
    },
  },
];

export default function page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderNavbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white pt-10 sm:pt-18 md:pt-20 lg:pt-20 pb-4 sm:pb-6">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
              Terms & Conditions
            </h1>
            <div className="w-12 sm:w-16 h-0.5 bg-[#0086ff] mx-auto rounded-full mb-3"></div>
            <p className="text-xs sm:text-sm text-gray-600 mb-2">
              Eintransport Private Limited
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              Last Updated: December 2025
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-3 sm:px-6 lg:px-8 max-w-5xl py-6 sm:py-8 md:py-10">
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 sm:p-5 md:p-6 mb-6">
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            By using{" "}
            <Link href={"/"} className="font-semibold text-[#0086ff]">
              Eintransport Packers and Movers
            </Link>{" "}
            ("Company", "We", "Us") and our website{" "}
            <Link href={"/"} className="text-[#0086ff] underline font-medium">
              eintransport.in
            </Link>
            , you agree to the following Terms & Conditions:
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-5">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.id}
                className="bg-white rounded-lg shadow-md border border-gray-200 p-4 sm:p-5 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#0086ff]" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-3">
                      {section.id}. {section.title}
                    </h2>

                    {section.content.text && (
                      <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                        {section.content.text}
                      </p>
                    )}

                    {section.content.list && (
                      <ul className="space-y-2 mb-3">
                        {section.content.list.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-xs sm:text-sm md:text-base text-gray-700"
                          >
                            <span className="text-[#0086ff] mt-1.5 flex-shrink-0">
                              •
                            </span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.content.footer && (
                      <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed italic">
                        {section.content.footer}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="mt-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200 p-4 sm:p-5 md:p-6">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#0086ff]" />
            </div>
            <div className="flex-1">
              <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-3">
                13. Contact
              </h2>
              <div className="space-y-1.5 text-xs sm:text-sm md:text-base text-gray-700">
                <p className="font-semibold">Eintransport Private Limited</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:support@eintransport.in"
                    className="text-[#0086ff] hover:underline font-medium"
                  >
                    support@eintransport.in
                  </a>
                </p>
                <p>
                  Website:{" "}
                  <a
                    href="https://eintransport.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0086ff] hover:underline font-medium"
                  >
                    https://eintransport.in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
