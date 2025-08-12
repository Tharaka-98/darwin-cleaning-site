'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function OurServicesSectionComponent() {
  const majorServices = [
    {
      title: 'Carpet and Upholstery Cleaning',
      image: '/images/carpet2.jpg',
      description: 'Deep cleaning for carpets and furniture to remove dirt and stains.',
    },
    {
      title: 'Tile & Grout Cleaning',
      image: '/images/tail1.jpg',
      description: 'Restore the shine of your tiles and clean stubborn grout lines.',
    },
    {
      title: 'Airbnb Cleaning',
      image: '/images/airbnb.jpeg',
      description: 'Quick and thorough cleaning for your short-term rental guests.',
    },
    {
      title: 'End of Lease Cleaning',
      image: '/images/eol.jpg',
      description: 'Ensure you get your bond back with our complete move-out cleaning.',
    },
    {
      title: 'Pressure Wash Cleaning',
      image: '/images/pressure1.jpg',
      description: 'Blast away dirt, mold, and grime from outdoor surfaces.',
    },
    {
      title: 'Strip & Sealing',
      image: '/images/strip3.jpeg',
      description: 'Protect and enhance your floors with our strip & seal service.',
    },
    {
      title: 'Window and Glass Cleaning',
      image: '/images/glass1.jpeg',
      description: 'Crystal-clear results for all your windows and glass surfaces.',
    },
    {
      title: 'Commercial Cleaning',
      image: '/images/comm1.jpeg',
      description: 'Professional cleaning solutions for your business premises.',
    },
  ];

  return (
    <section id="services" className="py-16 px-10 lg:px-20 bg-[#c5c2c233]">
      <div className="max-w-7xl mx-auto ">
        <div className="mb-12 text-start">
          <div className="text-[32px] mb-0 md:text-[40px] lg:text-6xl font-poppins xl:text-[70px] font-semibold">Our Services</div>
          <p className="font-ubuntu text-[14px] mt-2 md:mt-4 xl:mt-6 md:text-[18px] lg:text-[22px] mb-12 text-gray-600">
            Explore our main cleaning services tailored to your needs. Hover over a card to learn more.
          </p>
        </div>

        {/* Grid of major services with images */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {majorServices.map((service, index) => (
            <Link
              key={index}
              href="/services"
              className="group [perspective:1000px] h-64 block"
            >
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0 rounded-xl overflow-hidden shadow-md [backface-visibility:hidden]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h3 className="text-lg md:text-xl font-semibold text-white font-poppins text-center px-4">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Back */}
                <div className="absolute inset-0 rounded-xl bg-[#9ea0a1] bg-gradient-to-b from-[#003678] to-transparent backdrop-blur-lg text-white p-4 flex items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <p className="text-sm font-nunito md:text-base">{service.description}</p>
                </div>
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
