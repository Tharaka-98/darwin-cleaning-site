import { FC } from "react";
import type { Metadata } from "next";
import { companyInfo } from "@/lib/seo";

export const metadata: Metadata = {
  title: "End of Lease Cleaning",
  description:
    "Bond-back end of lease cleaning in Darwin. Detailed vacate cleans including ovens, windows, carpets.",
  alternates: { canonical: "/services/end-of-lease" },
  openGraph: {
    title: `End of Lease Cleaning | ${companyInfo.name}`,
    description: "Professional vacate cleaning to help you get your bond back.",
    url: "/services/end-of-lease",
  },
};
import { FaCheck } from "react-icons/fa"; // Import the tick icon
import Image from "next/image"; // Import Image component for the image on the right

const EndOfLeaseCleaningPage: FC = () => {
  // Available services array
  const availableServices = [
    "Full Vacate Clean",
    "Oven & Rangehood Detail",
    "Windows (Inside & Out)",
    "Carpet Steam Cleaning (Optional)",
    "Bond Checklist Compliance",
    "Walls, Skirting & Detail Cleaning",
  ];

  return (
    <main className="px-6 bg-white dark:bg-[#0b0f12] lg:px-12 py-10 md:mt-20 mt-20 lg:mt-68 xl:mt-64">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side Content */}
        <div className="flex-1">
          <h1 className="text-3xl font-semibold text-[#243056] dark:text-gray-100 font-poppins mb-6">
            End of Lease Cleaning
          </h1>
          <p className="xl:text-lg font-nunito text-[#243056] dark:text-gray-100 mb-2 xl:mb-4">
            Our end of lease cleaning service ensures that your property is
            cleaned to perfection, helping you get your bond back.
          </p>
          <p className="xl:text-lg font-nunito mb-4 text-[#243056] dark:text-gray-100">
            We offer a comprehensive list of services that cover every aspect of
            your property to meet bond and inspection requirements.
          </p>
          <h3 className="text-xl font-semibold font-poppins text-[#243056] dark:text-gray-100 mb-4">
            Services Available:
          </h3>
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
        <div className="flex-1">
          <Image
            src="/images/eol.jpg" // Replace with actual image path
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

export default EndOfLeaseCleaningPage;
