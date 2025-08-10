'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function OurServicesSectionComponent() {
  const majorServices = [
    {
      title: 'Carpet and Upholstery Cleaning',
      image: '/images/carpet2.jpg',
    },
    {
      title: 'Tile & Grout Cleaning',
      image: '/images/tail1.jpg',
    },
    {
      title: 'Airbnb Cleaning',
      image: '/images/airbnb.jpeg',
    },
    {
      title: 'End of Lease Cleaning',
      image: '/images/eol.jpg',
    },
    {
      title: 'Pressure Wash Cleaning',
      image: '/images/pressure1.jpg',
    },
    {
      title: 'Strip & Sealing',
      image: '/images/strip3.jpeg',
    },
    {
      title: 'Window and Glass Cleaning',
      image: '/images/glass1.jpeg',
    },
    {
      title: 'Commercial Cleaning',
      image: '/images/comm1.jpeg',
    },
  ];

  return (
    <section id="services" className="py-16 px-10 lg:px-20 bg-[#c5c2c233]">
      <div className="max-w-7xl mx-auto ">
        <div className="mb-12 text-start">
          <div className="text-[32px] mb-0 md:text-[40px] lg:text-6xl font-poppins xl:text-[70px] font-semibold">Our Services</div>
          <p className="font-ubuntu text-[14px] mt-2 md:mt-4 xl:mt-6 md:text-[18px] lg:text-[22px] mb-12 text-gray-600">
            Explore our main cleaning services tailored to your needs. Click below to see all services.
          </p>
        </div>

        {/* Grid of major services with images */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {majorServices.map((service, index) => (
            <Link
              key={index}
              href="/services"
              className="group relative block h-48 rounded-xl overflow-hidden shadow-md hover:shadow-[0_8px_30px_#003678] hover:-translate-y-2 transform transition-all duration-300 ease-in-out"
            >
              {/* Background image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay for readability */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>

              {/* Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-lg md:text-xl font-semibold text-white text-center px-4">
                  {service.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Services button */}
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="px-6 py-3 bg-[#003678] text-white font-semibold rounded-lg shadow hover:bg-[#002655] transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
