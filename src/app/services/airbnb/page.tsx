import { FC } from "react";
import type { Metadata } from "next";
import { companyInfo } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Airbnb Cleaning",
  description:
    "Turnover and deep cleaning for short-stay properties in Darwin. Linen changes, disinfection and more.",
  alternates: { canonical: "/services/airbnb" },
  openGraph: {
    title: `Airbnb Cleaning | ${companyInfo.name}`,
    description: "Reliable Airbnb cleaning and turnovers for hosts.",
    url: "/services/airbnb",
  },
};
import { FaCheck } from "react-icons/fa"; // Import the tick icon
import Image from "next/image";

const AirbnbCleaningPage: FC = () => {
  // Available services array
  const availableServices = [
    "Deep Cleaning of Bedrooms, Bathrooms, and Kitchen",
    "Linen Change (Bed sheets, Towels)",
    "Window Cleaning",
    "Trash Removal",
    "Surface and Floor Disinfection",
  ];

  return (
    <main className="px-6 bg-white dark:bg-[#0b0f12] lg:px-12 py-10 md:mt-20 mt-20 lg:mt-68 xl:mt-64">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side Content */}
        <div className="flex-1">
          <h1 className="text-3xl font-semibold text-[#243056] dark:text-gray-100 font-poppins mb-6">
            Airbnb Cleaning
          </h1>
          <p className="xl:text-lg font-nunito text-[#243056] dark:text-gray-100 mb-2 xl:mb-4">
            Our Airbnb cleaning service ensures your property is ready for
            guests in no time.
          </p>
          <p className="xl:text-lg font-nunito mb-4 text-[#243056] dark:text-gray-100">
            We offer deep cleaning, linen changes, and ensure that everything is
            spotless between guests.
          </p>
          <h3 className="text-xl font-semibold font-poppins text-[#243056] dark:text-gray-100 mb-4">
            Services Available:
          </h3>
          <ul className="list-disc pl-4 md:pl-6 space-y-2">
            {availableServices.map((service, index) => (
              <li key={index} className="flex items-center gap-2">
                <FaCheck className="text-[#00ffbb]" /> {/* Tick icon */}
                <span className="text-[#243056] dark:text-gray-100 font-nunito">{service}</span>
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

export default AirbnbCleaningPage;
