// "use client

import Link from "next/link";
import React from "react";
import HeaderNavbar from "@/components/landingPage/header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import StaticUI from "@/components/StaticUI/StaticUI";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://eintransport.in";

export const metadata: Metadata = {
  title: "Terms & Conditions | Eintransport Packers and Movers",
  description:
    "Read the Terms & Conditions of Eintransport Packers and Movers including service rules, payments, cancellations, damage policy, insurance and liability",
  keywords: [
    "Eintransport Terms and Conditions",
    "Packers and Movers Terms",
    "Moving Policy",
    "Relocation Rules",
    "Eintransport Policies",
  ],
  alternates: {
    canonical: `${BASE_URL}/terms-conditions`,
  },
  openGraph: {
    title: "Terms & Conditions | Eintransport Packers and Movers",
    description:
      "Read the Terms & Conditions of Eintransport Packers and Movers including service rules, payments, cancellations, damage policy, insurance and liability",
    url: `${BASE_URL}/terms-conditions`,
    siteName: "Eintransport Packers and Movers",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Eintransport Packers and Movers",
    description:
      "Read the Terms & Conditions of Eintransport Packers and Movers including service rules, payments, cancellations, damage policy, insurance and liability",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sections = [
  {
    id: 1,
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
    title: "Payments",
    content: {
      text: "Payments must be made as instructed by the Company.",
      list: [
        "10% Advance payment",
        "40% After pickup",
        "Remaining balance before unloading.",
      ],
      footer:
        "Refunds for eligible cancellations will be processed within 3–5 working days.",
    },
  },
  {
    id: 3,
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
    title: "Insurance Disclaimer",
    content: {
      text: "Transit insurance is optional and must be requested by the customer in advance. The Company is not responsible for damages to goods that are uninsured.",
    },
  },
  {
    id: 7,
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
    title: "Third-Party Links",
    content: {
      text: "Our website may contain links to external websites.",
      footer:
        "The Company is not responsible for the accuracy, reliability, safety or content of third-party websites.",
    },
  },
  {
    id: 10,
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
    title: "Force Majeure",
    content: {
      text: "The Company is not liable for delays or service failures due to events beyond our control, including natural disasters, strikes, riots, accidents or government restrictions.",
    },
  },
  {
    id: 12,
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
      <section className="bg-gray-50 mt-10 pt-8 sm:pt-12 md:pt-14 lg:pt-16">
        <div className="text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
            Terms & Conditions - Eintransport Private Limited
          </h1>
          <div className="w-12 sm:w-16 h-0.5 bg-[#0086ff] mx-auto rounded-full"></div>
          <p className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-3">
            Last Updated: December 2025
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 sm:py-6 md:py-8">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6 sm:p-8 md:p-10">
          {/* Introduction */}
          <p className="text-xs sm:text-sm text-gray-700 mb-6 leading-relaxed">
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

          {/* Terms Sections */}
          <div className="space-y-6 sm:space-y-8">
            {sections.map((section) => {
              return (
                <div key={section.id}>
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                    {section.id}. {section.title}
                  </h2>

                  {section.content.text && (
                    <p className="text-xs sm:text-sm text-gray-700 mb-2 leading-relaxed">
                      {section.content.text}
                    </p>
                  )}

                  {section.content.list && (
                    <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-xs sm:text-sm text-gray-700 mb-2">
                      {section.content.list.map((item, index) => (
                        <li key={index} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.content.footer && (
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed italic mt-2">
                      {section.content.footer}
                    </p>
                  )}
                </div>
              );
            })}

            {/* Contact Section */}
            <div className="pt-4 border-t border-gray-200">
              <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
                13. Contact
              </h2>
              <div className="space-y-1.5 text-xs sm:text-sm text-gray-700">
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

      <StaticUI />
      <Footer />
    </div>
  );
}
