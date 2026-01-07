"use client";

import Link from "next/link";
import React from "react";
import { IoCall } from "react-icons/io5";

const ComingSoon: React.FC = () => {
  return (
    <div className="w-full md:mt-12 mt-8 lg:mt-32 h-screen flex flex-col items-center justify-center bg-gray-100 text-center py-16">
      <div className="max-w-2xl px-6">
        <h1 className="text-4xl font-bold text-pink-600 mb-4 font-poppins">
          Coming Soon!
        </h1>
        <p className="text-xl font-nunito text-gray-600 mb-6">
          We are working hard behind the scenes to bring you the latest updates
          and news about our cleaning services. Stay tuned for exciting
          announcements and improvements!
        </p>
        <p className="text-lg font-nws text-gray-500 mb-6">
          In the meantime, check out our{" "}
          <Link href="/services" className="text-pink-600">
            Services
          </Link>{" "}
          and
          <Link href="/#testimonials" className="text-pink-600">
            {" "}
            Testimonials
          </Link>{" "}
          to learn more about what we offer!
        </p>
        <button
          className="px-6 py-3 font-poppins text-white bg-pink-600 rounded-lg hover:bg-pink-700 transition-colors duration-300"
          onClick={() => (window.location.href = "/")}
        >
          Return to Home
        </button>
        <div className="flex justify-center items-center mt-8 jus gap-2  lg:flex-row">
          <div className="text-pink-700 text-[10px] lg:text-[16px] font-semibold border flex items-center justify-center gap-2 p-2 md:p-1 lg:p-3 rounded-xl">
            <IoCall /> +61 470 454 571
          </div>
          <div className="text-pink-700 text-[10px] lg:text-[16px] hover:bg-pink-700 hover:text-white cursor-pointer font-semibold border flex items-center justify-center gap-2 p-2 lg:p-3 rounded-xl">
            <Link href="quote-section">Click here for a quote</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
