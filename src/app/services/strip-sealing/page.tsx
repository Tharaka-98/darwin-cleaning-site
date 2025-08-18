"use client";

import { FC } from "react";
import type { Metadata } from "next";
import { companyInfo } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Strip & Sealing",
  description:
    "Floor strip and seal, polishing, waxing and restoration services in Darwin.",
  alternates: { canonical: "/services/strip-sealing" },
  openGraph: {
    title: `Strip & Sealing | ${companyInfo.name}`,
    description:
      "Restore and protect floors with professional strip and sealing.",
    url: "/services/strip-sealing",
  },
};
import { FaCheck } from "react-icons/fa"; // Import the tick icon
import Image from "next/image"; // Import Image component for the image on the right

const StripSealingPage: FC = () => {
  // Available services array
  const availableServices = [
    "Floor Strip and Seal",
    "Polishing and Buffing",
    "Waxing and Restoration",
    "Tile and Grout Stripping",
    "Concrete and Epoxy Sealing",
  ];

  return (
    <main className="px-6 lg:px-12 py-10 md:mt-20 mt-20 lg:mt-68 xl:mt-64">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side Content */}
        <div className="flex-1">
          <h1 className="text-3xl font-semibold text-[#0A2058] font-poppins mb-6">
            Strip & Sealing
          </h1>
          <p className="xl:text-lg font-nunito text-gray-800 mb-2 xl:mb-4">
            Our Strip & Sealing service restores the beauty of your floors by
            removing old coatings and applying fresh layers of sealant.
          </p>
          <p className="xl:text-lg font-nunito mb-4 text-gray-800">
            We specialize in floor strip and sealing for various surfaces,
            including wood, tile, and concrete, ensuring long-lasting results.
          </p>
          <h3 className="text-xl font-semibold font-poppins text-[#0A2058] mb-4">
            Services Available:
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            {availableServices.map((service, index) => (
              <li key={index} className="flex items-center gap-2">
                <FaCheck className="text-[#00ffbb]" /> {/* Tick icon */}
                <span className="text-gray-800 font-nunito">{service}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side Image */}
        <div className="flex-1">
          <Image
            src="/images/strip4.jpg" // Replace with actual image path
            alt="Strip & Sealing"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </main>
  );
};

export default StripSealingPage;
