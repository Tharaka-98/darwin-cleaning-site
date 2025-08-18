import { FC } from "react";
import type { Metadata } from "next";
import { companyInfo } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Commercial Cleaning",
  description:
    "Office, retail, government and industrial cleaning services across Darwin and NT.",
  alternates: { canonical: "/services/commercial" },
  openGraph: {
    title: `Commercial Cleaning | ${companyInfo.name}`,
    description: "Reliable commercial cleaning for offices, retail and more.",
    url: "/services/commercial",
  },
};
import { FaCheck } from "react-icons/fa"; // Import the tick icon
import Image from "next/image"; // Import Image component for the image on the right

const CommercialCleaningPage: FC = () => {
  // Available services array
  const availableServices = [
    "Corporate and Office Cleaning",
    "Water damage restoration Cleaning",
    "General Cleaning",
    "Government Department Cleaning",
    "Retail incl. Supermarkets & Shopping Centres",
    "Banks & Financial Institutions",
    "Education Institutions",
    "Warehouse Cleaning",
    "Shipping Ports & Airports",
  ];

  return (
    <main className="px-6 lg:px-12 py-10 md:mt-20 mt-20 lg:mt-68 xl:mt-64">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side Content */}
        <div className="flex-1">
          <h1 className="text-3xl font-semibold text-[#0A2058] font-poppins mb-6">
            Commercial Cleaning
          </h1>
          <p className="xl:text-lg font-nunito text-gray-800 mb-2 xl:mb-4">
            Our Commercial Cleaning service provides thorough cleaning for a
            variety of commercial spaces, including offices, warehouses, and
            government buildings.
          </p>
          <p className="xl:text-lg font-nunito mb-4 text-gray-800">
            We use specialized equipment and eco-friendly cleaning solutions to
            ensure your commercial property stays spotless and hygienic.
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
            src="/images/airbnb.jpeg" // Replace with actual image path
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

export default CommercialCleaningPage;
