"use client";

import { FC } from "react";
import { FaCheck } from "react-icons/fa"; // Import the tick icon
import Image from "next/image"; // Import Image component for the image on the right

const WindowGlassCleaningPage: FC = () => {
  // Available services array
  const availableServices = [
    "Inside & Outside Windows",
    "Tracks & Frames",
    "Flyscreens",
    "High/Hard-to-Reach (Pole)",
    "Glass Balustrades",
    "Mirror Polishing"
  ];

  return (
    <main className="px-6 bg-white dark:bg-[#0b0f12] lg:px-12 py-10 md:mt-20 mt-20 lg:mt-68 xl:mt-64">
      <div className="flex w-full flex-col lg:flex-row gap-8">
        {/* Left Side Content */}
        <div className="flex-1 lg:w-2/3">
          <h1 className="text-3xl font-semibold text-[#243056] dark:text-gray-100 font-poppins mb-6">Window and Glass Cleaning</h1>
          <p className="xl:text-lg font-nunito text-[#243056] dark:text-gray-100 mb-2 xl:mb-4">
            Our Window and Glass Cleaning service ensures that your windows and glass surfaces are sparkling clean and free of streaks.
          </p>
          <p className="xl:text-lg font-nunito mb-4 text-[#243056] dark:text-gray-100">
            We use safe and effective techniques to clean both interior and exterior windows, including high and hard-to-reach areas.
          </p>
          <h3 className="text-xl font-semibold font-poppins text-[#243056] dark:text-gray-100 mb-4">Services Available:</h3>
          <ul className="list-disc pl-6 space-y-2">
            {availableServices.map((service, index) => (
              <li key={index} className="flex items-center gap-2">
                <FaCheck className="text-[#00ffbb]" /> {/* Tick icon */}
                <span className="text-[#243056] dark:text-gray-100 font-nunito">{service}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 lg:w-1/3">
          <Image
            src="/images/window3.jpg" // Replace with actual image path
            alt="Window and Glass Cleaning"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </main>
  );
};

export default WindowGlassCleaningPage;
