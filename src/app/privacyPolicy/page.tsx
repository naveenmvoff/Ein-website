import StaticUI from "@/components/StaticUI/StaticUI";
import React from "react";
import { Metadata } from "next";
import HeaderNavbar from "@/components/landingPage/header";
import Footer from "@/components/Footer";
import Link from "next/link";


export async function generateMetadata({}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  return {
    title: "Privacy Policy | Eintransport Packers and Movers",
    description:
      "Learn how Eintransport Packers & Movers collects, uses, and protects your personal data with secure and transparent privacy practices.",
    alternates: {
      canonical: `https://eintransport.in/privacyPolicy`,
    },
  };
}

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen mt-10 bg-gray-50">
      <HeaderNavbar />

    <section className="bg-gray-50 min-h-screen py-10 md:py-12 sm:py-16 px-6 sm:px-12">
        <div className="text-center ">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
            Privacy Policy - Eintransport Private Limited
          </h1>
          <div className="w-12 sm:w-16 h-0.5 mb-2 bg-[#0086ff] mx-auto rounded-full"></div>
          <p className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-3 mb-6">
          Last Updated: December 2025
        </p>
        </div>
     
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 sm:p-12">

        <p className="text-gray-700 mb-6">
          Welcome to <span className="text-[#0086ff]"><Link href="/">eintransport.in. </Link></span>
          We value your trust and are committed to protecting your personal
          information. This Privacy Policy explains how we collect, use, store,
          and safeguard your data when you use our website and services. 
        </p>

        <p className="text-gray-700 mb-8">
        By accessing or using our website, you agree to the practices described
          in this Privacy Policy.
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              1. Information We Collect
            </h2>
            <p className="text-gray-700 mb-2">
            We collect only the necessary information required to provide Packers and Movers services, including:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Pickup and Delivery Addresses</li>
              <li>Any service-related details you provide while contacting us</li>
            </ul>
            <p className="text-gray-700 mt-2">
            We do not collect unnecessary or sensitive personal information.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-2">
            Your information is used strictly for operational purposes, such as:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Contacting you regarding enquiries or bookings</li>
              <li>Providing quotations and scheduling your services</li>
              <li>Coordinating logistics for your relocation</li>
              <li>Responding to support requests</li>
              <li>Improving our website and service quality</li>
            </ul>

            <p className="text-gray-700 mt-2">
            We use your data only to deliver and improve our services.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              3. Data Security
            </h2>
            <p className="text-gray-700">
            We take reasonable technical and administrative measures to safeguard your personal data from:
            </p>

            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Unauthorised access</li>
              <li>Loss or theft</li>
              <li>Misuse or alteration</li>
              <li>Unlawful disclosure</li>
            </ul>

            <p className="text-gray-700 mt-2">
            We follow industry-standard security practices to keep your information secure.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              4. Data Retention
            </h2>
            <p className="text-gray-700">
            We retain your data only for as long as necessary for:
            </p>

            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Service operation</li>
              <li>Legal compliance</li>
              <li>Internal record keeping</li>
            </ul>

            <p className="text-gray-700 mt-2">
            Once your information is no longer required, it will be securely deleted or anonymised.
            </p>

          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              5. Sharing of Information
            </h2>
            <p className="text-gray-700 mb-2">
            We do not sell, rent, or trade your personal information.
            </p>
            <p className="text-gray-700 mb-2">
            Your data may be shared only:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>
              With our internal team or trusted partners involved in your moving service
              </li>
              <li>To comply with legal obligations or government requests</li>
              <li>With your explicit consent
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              6. Cookies & Tracking Technologies
            </h2>
            <p className="text-gray-700">
            We may use cookies and similar tracking technologies to improve your browsing experience, analyse website traffic, enhance overall website performance, and support marketing and analytics activities. Cookies help us understand how users interact with our website and allow certain features to function smoothly. You may choose to disable cookies through your browser settings; however, doing so may affect the proper functioning of some parts of the website.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              7. Third-Party Services
            </h2>
            <p className="text-gray-700">
            Our website may also use trusted third-party services such as Google Analytics, Google Ads Conversion Tracking, Facebook Pixel, WhatsApp chat tools, and form submission applications. These services may collect non-personal and device-related usage data to help us monitor performance, measure marketing effectiveness, and improve user experience. Each of these third-party tools operates under its own privacy policy, and we encourage you to review those policies for a clear understanding of how your data may be processed.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              8. Social Media Links
            </h2>
            <p className="text-gray-700">
            Our website may contain links to our official social media profiles (e.g., Facebook, Instagram, LinkedIn and YouTube). Interactions on these platforms are governed by their respective privacy policies.
            </p>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              9. Your Rights
            </h2>
            <p className="text-gray-700">
            You may request to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>
              Access your personal information
              </li>
              <li>Correct or update your data</li>
              <li>Request deletion of your data (when legally permissible)</li>
              <li>Withdraw consent for data usage
              </li>
            </ul>

            <p className="text-gray-700 mt-2">
            To exercise these rights, please contact us at the email address provided below.
            </p>
          </div>

          {/* Section 10 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              10. Consent
            </h2>
            <p className="text-gray-700">
            By using our website and submitting your personal information through any form or communication method, you consent to the collection, storage, processing, and use of your data as outlined in this Privacy Policy. Your continued use of our website signifies your acceptance of these terms.
            </p>
          </div>

            {/* Section 11 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                11. Changes to This Policy
              </h2>
              <p className="text-gray-700">
              We may update or modify this Privacy Policy as required. Any changes will be posted on this page with an updated “Last Updated” date.
              </p>
              <p className="text-gray-700 mt-2">
              Continued use of our website, after changes, indicates acceptance of the updated Privacy Policy.
              </p>
            </div>


          {/* Section 12 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              12. Contact Us
            </h2>
            <p className="text-gray-700">
            If you have any questions or concerns regarding this Privacy Policy, contact:
            </p>
            
          <p className="text-gray-700 mt-2">
            Email:{" "}
            <a href="mailto:support@eintransport.in" className="text-[#0086ff] hover:underline">
              support@eintransport.in
            </a>
            </p>
            <p className="text-gray-700 mt-2">
            Website:{" "}
            <a href="https://eintransport.in" className="text-[#0086ff] hover:underline">
              https://eintransport.in
            </a>
            </p>
          </div>

         

        </div>
      </div>
      <StaticUI />
    </section>
    <Footer />
    </div>
  );
}

export default PrivacyPolicyPage;
