import { FC } from "react";
import type { Metadata } from "next";
import { companyInfo } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Pressure Wash Cleaning",
  description:
    "High-pressure cleaning for driveways, patios, roofs and exteriors in Darwin.",
  alternates: { canonical: "/services/pressure-wash" },
  openGraph: {
    title: `Pressure Wash Cleaning | ${companyInfo.name}`,
    description: "Powerful exterior cleaning for homes and businesses.",
    url: "/services/pressure-wash",
  },
};
import { FaCheck } from "react-icons/fa"; // Import the tick icon
import Image from "next/image";

const PressureWashCleaningPage: FC = () => {
  // Available services array
  const availableServices = [
    "Driveway Pressure Washing",
    "Patio & Deck Cleaning",
    "Sidewalk Cleaning",
    "Roof & Gutter Washing",
    "Exterior Wall Cleaning",
  ];

  return (
    <main className="px-6 bg-white dark:bg-[#0b0f12] lg:px-12 py-10 md:mt-20 mt-20 lg:mt-68 xl:mt-64">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side Content */}
        <div className="flex-1">
          <h1 className="text-3xl font-semibold text-[#243056] dark:text-gray-100 font-poppins mb-6">
            Pressure Wash Cleaning
          </h1>
          <p className="xl:text-lg font-nunito text-[#243056] dark:text-gray-100 mb-2 xl:mb-4">
            Our pressure washing service provides a powerful clean for outdoor
            areas like driveways, patios, and decks.
          </p>
          <p className="xl:text-lg font-nunito mb-4 text-[#243056] dark:text-gray-100">
            We use state-of-the-art equipment to remove dirt, mold, and grime,
            leaving your exteriors looking new again.
          </p>
          <h3 className="text-xl font-semibold font-poppins text-[#243056] dark:text-gray-100 mb-4">
            Services Available:
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            {availableServices.map((service, index) => (
              <li key={index} className="flex items-center gap-2">
                <FaCheck className="text-[#00ffbb]" /> {/* Tick icon */}
                <span className="text-[#243056] dark:text-gray-100 font-nunito">
                  {service}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side Image */}
        <div className="flex-1">
          <Image
            src="/images/pressure1.jpg" // Replace with actual image path
            alt="Commercial Cleaning"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </main>
  );
};

export default PressureWashCleaningPage;
