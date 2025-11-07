// src/components/orderplaced/OrderPlacedModal.tsx
"use client";

import React, { useEffect, useState } from "react";
import { CheckCircle, X } from "lucide-react";
import Link from "next/link";

export default function OrderPlacedModal() {
  const [returnUrl, setReturnUrl] = useState("/");

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem("returnUrl");
      if (stored) {
        setReturnUrl(stored);
        // Clear it after reading
        sessionStorage.removeItem("returnUrl");
      }
    } catch {
      // Ignore sessionStorage access errors
    }
  }, []);

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="relative max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center animate-fadeIn">
        {/* Close Icon */}
        <Link
          href={returnUrl}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-6 w-6" />
        </Link>

        <div className="flex justify-center mb-6">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Thank you for trusting Packers & Movers!
        </h1>

        <p className="text-gray-600 mb-8">
          We've received your request and will get in touch with you soon to
          confirm the details.
        </p>

        <Link
          href={returnUrl}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200"
        >
          Close
        </Link>
      </div>
    </div>
  );
}