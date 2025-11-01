"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Home,
  ArrowRight,
  CheckCircle,
  X,
} from "lucide-react";
import {useRouter, usePathname} from 'next/navigation'

type FormState = {
  name: string;
  email: string;
  phone: string;
  from: string;
  to: string;
};

export function HeroForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    from: "",
    to: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Reset animation state on route change
    setIsVisible(false);
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 150);
    return () => clearTimeout(timer);
  }, [pathname]);

  function handleChange<K extends keyof FormState>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.name || !form.phone || !form.from || !form.to) {
      alert("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    const payload = {
      targetTab: "PackersAndMoversRequests",
      fromLat: "",
      fromLng: "",
      fromAddress: form.from,
      fromDistrict: "",
      toLat: "",
      toLng: "",
      toAddress: form.to,
      toDistrict: "",
      dateTime: new Date().toISOString(),
      description: "",
      fullName: form.name,
      phoneNumber: form.phone,
      email: form.email || "",
      shiftingThings: "Not specified",
    };

    try {
      const sheetPromise = fetch(
        `${process.env.NEXT_PUBLIC_SHEET_SCRIPT_LINK}`,
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      // const sheetPromise2 = fetch(
      //   `${process.env.NEXT_PUBLIC_SHEET_SCRIPT_LINK2}`,
      //   {
      //     method: "POST",
      //     mode: "no-cors",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify(payload),
      //   }
      // );

      const dbPromise = fetch("/api/packers-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // await Promise.all([sheetPromise, sheetPromise2, dbPromise]);
      await Promise.all([sheetPromise, dbPromise]);
      
      // Set a short-lived cookie to allow navigation to the thank-you page.
      // This is used by middleware to prevent manual access.
      try {
        // cookie valid for 30 seconds
        document.cookie = `order_placed=1; path=/; max-age=${30}`;
      } catch {
        // ignore if cookies not available
      }

      // Redirect to success page
      router.push("/thank-you/order-placed");
      
    } catch (error) {
      console.error("Submission error:", error);
      alert("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputClasses = (fieldName: string) => `
    block w-full h-10 sm:h-11 rounded-lg border text-sm
    ${
      focusedField === fieldName
        ? "border-blue-500 bg-blue-50/50 shadow-sm"
        : "border-gray-200 bg-white"
    }
    text-gray-900 placeholder:text-gray-400 pl-9 pr-3
    transition-all duration-200 ease-out
    focus:outline-none focus:border-blue-500 focus:bg-blue-50/40
    hover:border-gray-300
  `;

  return (
    <>
      <motion.div
        key={`${pathname}-form-container`}
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-white to-blue-50/50 rounded-2xl shadow-2xl border border-gray-100 p-5 sm:p-6 max-w-sm w-full mx-auto backdrop-blur-lg"
      >
        <div className="text-center mb-4">
          <h2 className="text-base sm:text-lg font-extrabold text-gray-800">
            Get Free Quote
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Fill in your details & get instant assistance
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3">
          <InputField
            label="Name"
            name="name"
            icon={<User size={16} />}
            value={form.name}
            onChange={handleChange.bind(null, "name")}
            focusedField={focusedField}
            setFocusedField={setFocusedField}
            inputClasses={inputClasses}
          />

          <InputField
            label="Email"
            name="email"
            type="email"
            icon={<Mail size={16} />}
            value={form.email}
            onChange={handleChange.bind(null, "email")}
            focusedField={focusedField}
            setFocusedField={setFocusedField}
            inputClasses={inputClasses}
          />

          <InputField
            label="Phone Number"
            name="phone"
            type="tel"
            icon={<Phone size={16} />}
            value={form.phone}
            onChange={handleChange.bind(null, "phone")}
            focusedField={focusedField}
            setFocusedField={setFocusedField}
            inputClasses={inputClasses}
          />

          <InputField
            label="From Location"
            name="from"
            icon={<MapPin size={16} />}
            value={form.from}
            onChange={handleChange.bind(null, "from")}
            focusedField={focusedField}
            setFocusedField={setFocusedField}
            inputClasses={inputClasses}
          />

          <InputField
            label="To Location"
            name="to"
            icon={<Home size={16} />}
            value={form.to}
            onChange={handleChange.bind(null, "to")}
            focusedField={focusedField}
            setFocusedField={setFocusedField}
            inputClasses={inputClasses}
          />

          <motion.button
            type="submit"
            whileTap={{ scale: 0.97 }}
            disabled={loading}
            className={`mt-2 inline-flex items-center justify-center h-10 sm:h-11 text-sm rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-4 text-white font-semibold 
              shadow-md hover:shadow-lg
              focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-all duration-200 w-full`}
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                Processing...
              </>
            ) : (
              <>
                Submit
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </>
            )}
          </motion.button>
        </form>
      </motion.div>

      {/* ✅ Success Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 text-center max-w-sm w-full"
            >
              <div className="flex justify-end">
                <button
                  onClick={() => {
                    setShowModal(false);
                    if (window.location.pathname === "/thank-you/order-placed") {
                      window.history.replaceState(null, "", "/");
                    }
                  }}
                >
                  <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                </button>
              </div>

              <div className="flex justify-center mb-4 mt-2">
                <CheckCircle className="h-12 w-12 text-green-500" />
              </div>

              <h3 className="text-lg font-bold text-gray-800">
                Thank you for trusting Packers & Movers!
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                We’ll get in touch with you soon to confirm your request.
              </p>

              <button
                onClick={() => {
                  setShowModal(false);
                  if (window.location.pathname === "/thank-you/order-placed") {
                    window.history.replaceState(null, "", "/");
                  }
                }}
                className="mt-5 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg transition-all duration-200"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

type InputFieldProps = {
  label: string;
  name: keyof FormState;
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (v: string) => void;
  icon: React.ReactNode;
  focusedField: string | null;
  setFocusedField: React.Dispatch<React.SetStateAction<string | null>>;
  // eslint-disable-next-line no-unused-vars
  inputClasses: (field: string) => string;
  type?: string;
};

function InputField({
  label,
  name,
  value,
  onChange,
  icon,
  focusedField,
  setFocusedField,
  inputClasses,
  type = "text",
}: InputFieldProps) {
  return (
    <div className="grid gap-1">
      <label
        htmlFor={name}
        className="text-xs font-semibold text-gray-600 tracking-wide"
      >
        {label}
      </label>
      <div className="relative">
        <div
          className={`pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 flex items-center text-gray-400 transition-colors ${
            focusedField === name ? "text-blue-500" : "text-gray-400"
          }`}
        >
          {icon}
        </div>
        <input
          id={name}
          name={name}
          type={type}
          required={name !== "email"}
          placeholder={`Enter ${label.toLowerCase()}`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocusedField(name)}
          onBlur={() => setFocusedField(null)}
          className={inputClasses(name)}
        />
      </div>
    </div>
  );
}
