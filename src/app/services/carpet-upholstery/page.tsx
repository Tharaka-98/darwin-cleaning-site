import type { Metadata } from "next";
import { companyInfo } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Carpet & Upholstery Cleaning",
  description:
    "Deep steam carpet cleaning, stain and odour removal, upholstery cleaning across Victoria, Northern Territory, Tasmania, and Queensland.",
  alternates: { canonical: "/services/carpet-upholstery" },
  openGraph: {
    title: `Carpet & Upholstery Cleaning | ${companyInfo.name}`,
    description: "Professional carpet steam cleaning and upholstery care.",
    url: "/services/carpet-upholstery",
  },
};
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

const CarpetUpholsteryPage = () => {
  const availableServices = [
    "Upholstery Cleaning",
    "Stain & Odour Neutraliser",
    "Deep Steam Carpet Clean",
    "Carpet Steam Cleaning",
    "Dry Carpet Cleaning",
    "Pet Stain & Odour Removal",
    "Mattress Cleaning",
    "Deep Steam Carpet Clean",
    "Fabric Protection",
  ];
  return (
    <main className="px-6 bg-white dark:bg-[#0b0f12] lg:px-12 py-10 md:mt-20 mt-20 lg:mt-68 xl:mt-64">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side Content */}
        <div className="flex-1">
          <h1 className="text-3xl font-semibold text-[#243056] dark:text-gray-100 font-poppins mb-6">
            Carpet and Upholstery Cleaning
          </h1>
          <p className="xl:text-lg font-nunito text-[#243056] dark:text-gray-100 mb-2 xl:mb-4">
            Our Carpet and Upholstery Cleaning service provides a thorough and
            professional clean to keep your carpets fresh and free of stains.
          </p>
          <p className="xl:text-lg font-nunito text-[#243056] dark:text-gray-100 mb-2 xl:mb-4">
            We use safe and effective cleaning methods to remove dirt, dust, and
            allergens, ensuring your home or office environment is healthier and
            cleaner.
          </p>
          <p className="xl:text-lg font-nunito mb-4 text-[#243056] dark:text-gray-100">
            Professional carpet cleaning also benefits everyone by reducing
            indoor air pollution, eliminates dust mites, prevents mould and
            extends the carpets life. Southern Cross Cleaning will remove stains
            and deodorise your carpets to freshen up and restore them, without
            disrupting your daily routine.
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
            src="/images/carpet3.jpg" // Replace with actual image path
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

export default CarpetUpholsteryPage;
