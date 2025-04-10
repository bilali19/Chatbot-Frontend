'use client';

import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

export default function SignupPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-[#2c3236]">
      <form className="w-[300px]">
        {/* Username Field */}
        <div className="flex items-center my-2">
          <div className="mr-4 mt-2 text-[#60656a]">
            <FaUser />
          </div>
          <input
            type="text"
            placeholder="Username"
            className="flex-grow p-2 bg-[#394149] text-white border-none outline-none placeholder-white"
          />
        </div>

        {/* Email Field */}
        <div className="flex items-center my-2">
          <div className="mr-4 mt-2 text-[#60656a]">
            <FaEnvelope />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="flex-grow p-2 bg-[#394149] text-white border-none outline-none placeholder-white"
          />
        </div>

        {/* Password Field */}
        <div className="flex items-center my-2">
          <div className="mr-4 mt-2 text-[#60656a]">
            <FaLock />
          </div>
          <input
            type="password"
            placeholder="Password"
            className="flex-grow p-2 bg-[#394149] text-white border-none outline-none placeholder-white"
          />
        </div>

        {/* Confirm Password Field */}
        <div className="flex items-center my-2">
          <div className="mr-4 mt-2 text-[#60656a]">
            <FaLock />
          </div>
          <input
            type="password"
            placeholder="Confirm Password"
            className="flex-grow p-2 bg-[#394149] text-white border-none outline-none placeholder-white"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white h-10 text-lg uppercase mt-2 rounded"
        >
          Sign Up
        </button>

        <div className="flex justify-center mt-3 text-sm">
          <span className="text-[#565b61] mr-1">Already a Member?</span>
          <Link href="/login" className="text-white underline">
            Log in
          </Link>
        </div>
      </form>
    </div>
  );
}