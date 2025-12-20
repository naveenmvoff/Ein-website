"use client";

import { useRouter } from "next/navigation";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface LoginFormData {
  email: string;
  password: string;
}

function AdminLoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAdminLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Enter a valid email address");
      return;
    }

    setError("");
    // console.log("Login Data:", formData);
    // localStorage.setItem("login", JSON.stringify(formData));
    document.cookie = `login=${encodeURIComponent(
      JSON.stringify(formData)
    )}; path=/; max-age=3600; secure; samesite=strict`;

    router.push("/admin/sdkjfhsdkfjhdskjfhkjsdfhkjsdfhdskjfhdskjfh/dhkjfhksjdhfkjsdfhkjsdfhkjdsfh/blog");
    // Add your API call or login logic here
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleAdminLogin}
        className="bg-white shadow-md rounded-2xl p-6 w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Admin Login</h2>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        <div className="flex flex-col mb-4">
          <label className="text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col mb-6">
          <label className="text-gray-700 font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminLoginForm;
