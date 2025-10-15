"use client"
import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Home, ArrowRight } from 'lucide-react';

type FormState = {
  name: string;
  email: string;
  phone: string;
  from: string;
  to: string;
};

function HeroForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    from: "",
    to: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  function handleChange<K extends keyof FormState>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.from || !form.to) {
      alert("Please fill in all fields.");
      return;
    }
    console.log("[v0] Submitted hero form:", form);
    alert("Thanks! We received your details.");
  }

  const inputClasses = (fieldName: string) => `
    block w-full h-9 rounded-md border-2 text-sm
    ${focusedField === fieldName 
      ? 'border-blue-500 bg-blue-50/30 shadow-md' 
      : 'border-gray-200 bg-white'
    }
    text-gray-900 placeholder:text-gray-400 pl-9 pr-3
    transition-all duration-200 ease-out
    focus:outline-none focus:border-blue-500 focus:bg-blue-50/30 focus:shadow-md
    hover:border-gray-300
  `;

  return (
    <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-4 max-w-sm">
      <h2 className="text-base font-bold">Plan Your Move</h2>
      <p className="mt-0.5 text-[11px] text-gray-600">Get a free quote in minutes.</p>

      <div className="mt-3 grid grid-cols-1 gap-2.5">
        {/* Name */}
        <div className="grid gap-1.5">
          <label htmlFor="name" className="text-xs font-medium">
            Name
          </label>
          <div className="relative">
            <User className={`pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 transition-colors ${
              focusedField === 'name' ? 'text-blue-500' : 'text-gray-400'
            }`} />
            <input
              id="name"
              name="name"
              required
              placeholder="Your full name"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              autoComplete="name"
              className={inputClasses('name')}
            />
          </div>
        </div>

        {/* Email */}
        <div className="grid gap-1.5">
          <label htmlFor="email" className="text-xs font-medium">
            Email
          </label>
          <div className="relative">
            <Mail className={`pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 transition-colors ${
              focusedField === 'email' ? 'text-blue-500' : 'text-gray-400'
            }`} />
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              autoComplete="email"
              className={inputClasses('email')}
            />
          </div>
        </div>

        {/* Phone */}
        <div className="grid gap-1.5">
          <label htmlFor="phone" className="text-xs font-medium">
            Phone number
          </label>
          <div className="relative">
            <Phone className={`pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 transition-colors ${
              focusedField === 'phone' ? 'text-blue-500' : 'text-gray-400'
            }`} />
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              required
              placeholder="+91 90000 00000"
              value={form.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              onFocus={() => setFocusedField('phone')}
              onBlur={() => setFocusedField(null)}
              autoComplete="tel"
              className={inputClasses('phone')}
            />
          </div>
        </div>

        {/* From */}
        <div className="grid gap-1.5">
          <label htmlFor="from" className="text-xs font-medium">
            From
          </label>
          <div className="relative">
            <MapPin className={`pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 transition-colors ${
              focusedField === 'from' ? 'text-blue-500' : 'text-gray-400'
            }`} />
            <input
              id="from"
              name="from"
              required
              placeholder="Pickup address"
              value={form.from}
              onChange={(e) => handleChange("from", e.target.value)}
              onFocus={() => setFocusedField('from')}
              onBlur={() => setFocusedField(null)}
              autoComplete="address-line1"
              className={inputClasses('from')}
            />
          </div>
        </div>

        {/* To */}
        <div className="grid gap-1.5">
          <label htmlFor="to" className="text-xs font-medium">
            To
          </label>
          <div className="relative">
            <Home className={`pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 transition-colors ${
              focusedField === 'to' ? 'text-blue-500' : 'text-gray-400'
            }`} />
            <input
              id="to"
              name="to"
              required
              placeholder="Drop-off address"
              value={form.to}
              onChange={(e) => handleChange("to", e.target.value)}
              onFocus={() => setFocusedField('to')}
              onBlur={() => setFocusedField(null)}
              autoComplete="address-line1"
              className={inputClasses('to')}
            />
          </div>
        </div>

        <button
          type="submit"
          onClick={(e) => handleSubmit(e as any)}
          className="mt-1 group inline-flex items-center justify-center h-9 text-sm rounded-lg bg-[#0086FF] px-4 py-2 text-white font-medium 
                     hover:bg-[#0077ee] hover:shadow-lg
                     focus:outline-none focus:ring-2 focus:ring-[#0086FF] focus:ring-offset-2 
                     active:scale-[0.98]
                     disabled:opacity-50 disabled:cursor-not-allowed
                     transition-all duration-200"
        >
          Get Free Quote
          <ArrowRight className="ml-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-200" />
        </button>

        <p className="text-[10px] text-gray-500">
          By submitting, you agree to be contacted about your move. We respect your privacy.
        </p>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 py-4 flex items-center sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Subtle pattern background */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-[url('/path-to-your-subtle-pattern.svg')] bg-repeat"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Column */}
          <div className="text-center md:text-left">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="block">Where's it going?</span>
                <span className="block">We'll take it there.</span>
              </h1>

              {/* Animated Phone Number */}
              <div className="mx-auto mt-4 inline-flex items-center gap-2 bg-[#0086FF] text-white text-3xl sm:text-5xl font-bold px-6 py-2 sm:px-8 sm:py-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-[#0077ee] transition-all duration-300 group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-7 h-7 sm:w-9 sm:h-9 text-white animate-bounce"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372a1.1 1.1 0 0 0-.852-1.091l-4.423-1.106a1.1 1.1 0 0 0-1.173.417l-.97 1.293a1.2 1.2 0 0 1-1.21.38 12.035 12.035 0 0 1-7.143-7.143 1.2 1.2 0 0 1 .38-1.21l1.293-.97a1.1 1.1 0 0 0 .417-1.173L6.963 3.102a1.1 1.1 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                <a href="tel:+919043384332" className="hover:underline group-hover:scale-105 transition-transform duration-200">
                  +91&nbsp;90433&nbsp;84332
                </a>
              </div>
            </div>

            {/* Subtitle */}
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-lg mx-auto md:mx-0">
              Get fast and secure moving solutions from professionals. Request your free quote
              today — and let us handle the rest.
            </p>

            {/* Mobile-only call button */}
            <a
              href="tel:+919043384332"
              className="flex sm:hidden items-center gap-2 mt-6 text-base font-semibold text-white bg-[#0086FF] px-4 py-2 rounded-md w-fit mx-auto animate-bounce hover:bg-[#0077ee] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372a1.1 1.1 0 0 0-.852-1.091l-4.423-1.106a1.1 1.1 0 0 0-1.173.417l-.97 1.293a1.2 1.2 0 0 1-1.21.38 12.035 12.035 0 0 1-7.143-7.143 1.2 1.2 0 0 1 .38-1.21l1.293-.97a1.1 1.1 0 0 0 .417-1.173L6.963 3.102a1.1 1.1 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              90433&nbsp;84332
            </a>
          </div>

          {/* Right Column: HeroForm */}
          <div>
            <HeroForm />
          </div>
        </div>
      </div>
    </section>
  );
}