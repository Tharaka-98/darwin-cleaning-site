// app/services/index.tsx (or pages/services.tsx depending on your setup)
"use client";

import { FC } from "react";
import Link from "next/link";

const MAIN_MENU = [
  {
    id: "carpet-upholstery",
    label: "Carpet and Upholstery Cleaning",
    href: "/services/carpet-upholstery",
  },
  {
    id: "tile-grout",
    label: "Tile & Grout Cleaning",
    href: "/services/tile-grout",
  },
  { id: "airbnb", label: "Airbnb Cleaning", href: "/services/airbnb" },
  {
    id: "end-of-lease",
    label: "End of Lease Cleaning",
    href: "/services/end-of-lease",
  },
  {
    id: "pressure-wash",
    label: "Pressure Wash Cleaning",
    href: "/services/pressure-wash",
  },
  {
    id: "strip-sealing",
    label: "Strip & Sealing",
    href: "/services/strip-sealing",
  },
  {
    id: "window-glass",
    label: "Window and Glass Cleaning",
    href: "/services/window-glass",
  },
  {
    id: "commercial",
    label: "Commercial Cleaning",
    href: "/services/commercial",
  },
];

const ServicesPage: FC = () => {
  return (
    <section className="px-6 lg:px-12 bg-white dark:bg-[#0b0f12] py-10 md:mt-20 mt-20 lg:mt-68 xl:mt-64">
      <h1 className="text-3xl font-semibold font-poppins text-[#243056] dark:text-gray-100 mb-6">
        Our Cleaning Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MAIN_MENU.map((service) => (
          <div
            key={service.id}
            className="service-card bg-white dark:bg-[#161a1e] dark:border dark:border-gray-700 shadow-lg dark:shadow-none rounded-lg p-6 hover:bg-[#f6f5f5] dark:hover:bg-[#2a303c] transition duration-300"
          >
            <h2 className="md:text-xl text-[18px] font-semibold font-poppins text-[#243056] dark:text-gray-100">
              {service.label}
            </h2>
            <p className="mt-4 text-sm md:text-[16px] font-nunito text-[#243056] dark:text-gray-100">
              Click below to explore more details about our {service.label}.
            </p>
            <div className="mt-4">
              <Link
                href={service.href}
                className="text-pink-600 font-poppins font-semibold underline"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesPage;
