'use client';

import { FaUser, FaLock } from 'react-icons/fa';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-[#2c3236]">
      <form className="w-[300px]">
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

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white h-10 text-lg uppercase mt-2 rounded"
        >
          Login
        </button>

        <div className="flex justify-center mt-3 text-sm">
          <span className="text-[#565b61] mr-1">Not a Member?</span>
          <Link href="/signup" className="text-white underline">
            Sign up now
          </Link>
        </div>
      </form>
    </div>
  );
}