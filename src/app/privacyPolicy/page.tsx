import StaticUI from "@/components/StaticUI/StaticUI";
import React from "react";
import { Metadata } from "next";

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
    <section className="bg-gray-50 min-h-screen py-16 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 sm:p-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Privacy Policy - Eintransport Private Limited
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          <strong>Last Updated:</strong> December 2025
        </p>

        <p className="text-gray-700 mb-6">
          Welcome to <strong>eintransport.in.</strong>
          We value your trust and are committed to protecting your personal
          information. This Privacy Policy explains how we collect, use, store,
          and safeguard your data when you use our website and services. By
          accessing or using our website, you agree to the practices described
          in this Privacy Policy.
        </p>

        <p className="text-gray-700 mb-8">
          By using our services, you agree to the terms outlined below.
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              1. Information We Collect
            </h2>
            <p className="text-gray-700 mb-2">
              We may collect the following information when you contact us or
              fill out a form:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Pickup and Delivery Addresses</li>
            </ul>
            <p className="text-gray-700 mt-2">
              We only collect data that is necessary to provide and manage our
              services.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-2">
              We use the information you provide for purposes such as:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Contacting you about your booking or inquiry</li>
              <li>Providing quotes and scheduling services</li>
              <li>Coordinating logistics for your move</li>
              <li>Responding to support or service-related queries</li>
              <li>Improving the quality and efficiency of our services</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              3. Data Security
            </h2>
            <p className="text-gray-700">
              We are committed to safeguarding your personal information.
              Reasonable technical and administrative measures are taken to
              protect the data you provide from unauthorized access, disclosure,
              or misuse.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              4. Data Retention
            </h2>
            <p className="text-gray-700">
              We retain your information only as long as necessary for
              operational, legal, or regulatory reasons. When your information
              is no longer required, it will be securely deleted or anonymized.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              5. Sharing of Information
            </h2>
            <p className="text-gray-700 mb-2">
              We do not sell or rent your personal data to any third party. Your
              information may be shared only:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>
                With our internal team or trusted partners involved in providing
                your requested service
              </li>
              <li>If required by law or government authorities</li>
              <li>With your explicit consent</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              6. Social Media Links
            </h2>
            <p className="text-gray-700">
              Our website may include links to our official social media pages
              (e.g., Facebook, Instagram, LinkedIn, YouTube). Please note that
              when you interact with these platforms, their respective privacy
              policies apply. We encourage you to review them for more
              information.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              7. Changes to This Policy
            </h2>
            <p className="text-gray-700">
              We may update this Privacy Policy as needed. Any updates will be
              posted on this page with a revised
              <strong> “Effective Date.”</strong> You are encouraged to check
              back periodically to stay informed.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              8. Contact Us
            </h2>
            <p className="text-gray-700">
              If you have any questions or concerns about this Privacy Policy,
              please contact us:
            </p>
            <ul className="list-none mt-3 text-gray-700 space-y-1">
              <li>
                📧 <strong>Email:</strong>{" "}
                <a
                  href="mailto:eintransport.service@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  eintransport.service@gmail.com
                </a>
              </li>
              <li>
                🌐 <strong>Website:</strong>{" "}
                <a
                  href="https://eintransport.in"
                  className="text-blue-600 hover:underline"
                >
                  https://eintransport.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <StaticUI />
    </section>
  );
}

export default PrivacyPolicyPage;
