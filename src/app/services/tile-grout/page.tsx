"use client";

import { FC } from "react";
import type { Metadata } from "next";
import { companyInfo } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Tile & Grout Cleaning",
  description:
    "Tile and grout cleaning, sealing and polishing for homes and businesses in Darwin.",
  alternates: { canonical: "/services/tile-grout" },
  openGraph: {
    title: `Tile & Grout Cleaning | ${companyInfo.name}`,
    description: "Restore shine to tiles with professional grout cleaning.",
    url: "/services/tile-grout",
  },
};
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";

const TileGroutCleaningPage: FC = () => {
  const availableServices = [
    "Tile Cleaning",
    "Grout Cleaning",
    "Sealing Grout",
    "Shower Tile & Grout Cleaning",
    "Polishing Tiles",
    "Bedding displays",
    "Kitchen & Bathroom Tile Cleaning",
    "Stain & Floor Removal",
  ];
  return (
    <main className="px-6 lg:px-12 py-10 md:mt-20 mt-20 lg:mt-68 xl:mt-64">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side Content */}
        <div className="flex-1">
          <h1 className="text-3xl font-semibold text-[#0A2058] font-poppins mb-6">
            Tile & Grout Cleaning
          </h1>
          <p className="xl:text-lg font-nunito text-gray-800 mb-2 xl:mb-4">
            We offer specialized tile and grout cleaning services to restore the
            shine and cleanliness of your tiled surfaces.
          </p>
          <p className="xl:text-lg font-nunito mb-4 text-gray-800">
            Our professionals use high-quality tools and solutions to remove
            stubborn stains and buildup from tile surfaces, leaving them
            spotless.
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
            src="/images/tail1.jpg" // Replace with actual image path
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

export default TileGroutCleaningPage;
