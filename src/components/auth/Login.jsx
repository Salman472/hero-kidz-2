"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", form);

    // 👉 এখানে API call দিবে
  };

  // ✅ Google login handler
  const handleGoogleLogin = () => {
    console.log("Google login clicked");

    // 👉 NextAuth হলে:
    // signIn("google")

    // 👉 Firebase হলে:
    // Google auth logic এখানে দিবে
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md rounded-2xl shadow-2xl p-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-2">Hero Kidz</h1>
        <p className="text-gray-500 text-center mb-6">
          Login to your account
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-primary hover:bg-primary text-white font-semibold rounded-lg transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-sm text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* ✅ Google Login Button */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 border py-3 rounded-lg hover:bg-primary transition"
        >
          <Image
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            width={20}
            height={20}
          />
          Continue with Google
        </button>

        {/* Extra */}
        <p className="text-sm text-center text-gray-500 mt-6">
          Do not have an account?{" "}
          <Link href="/register" className="text-primary cursor-pointer">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}