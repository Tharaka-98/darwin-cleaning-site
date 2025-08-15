"use client";

import { FC } from "react";
import { FaCheck } from "react-icons/fa";  // Import the tick icon

const PressureWashCleaningPage: FC = () => {
  // Available services array
  const availableServices = [
    "Driveway Pressure Washing",
    "Patio & Deck Cleaning",
    "Sidewalk Cleaning",
    "Roof & Gutter Washing",
    "Exterior Wall Cleaning"
  ];

  return (
    <main className="px-6 lg:px-12 py-10 md:mt-20 mt-20 lg:mt-68 xl:mt-64">
      <h1 className="text-3xl font-semibold text-[#0A2058] font-poppins mb-6">Pressure Wash Cleaning</h1>
      <p className="xl:text-lg font-nunito text-gray-800 mb-2 xl:mb-4">
        Our pressure washing service provides a powerful clean for outdoor areas like driveways, patios, and decks.
      </p>
      <p className="xl:text-lg font-nunito mb-4 text-gray-800">
        We use state-of-the-art equipment to remove dirt, mold, and grime, leaving your exteriors looking new again.
      </p>
      <h3 className="text-xl font-semibold font-poppins text-[#0A2058] mb-4">Services Available:</h3>
      <ul className="list-disc pl-6 space-y-2">
        {availableServices.map((service, index) => (
          <li key={index} className="flex items-center gap-2">
            <FaCheck className="text-[#00ffbb]" />  {/* Tick icon */}
            <span className="text-gray-800 font-nunito">{service}</span>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default PressureWashCleaningPage;
