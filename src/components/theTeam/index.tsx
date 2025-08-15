import React from "react";
import Image from "next/image";

export default function TeamSectionComponent() {
  return (
    <section id="team" className="relative w-full h-screen md:h-[600px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/aboutUs.jpeg" // Replace with your actual image path in public folder
        alt="Team Image"
        fill
        className="object-cover md:block hidden"
        priority
      />
      <Image
        src="/images/theTeam1.jpg" // Replace with your actual image path in public folder
        alt="Team Image"
        fill
        className="object-cover block md:hidden"
        priority
      />

      {/* Overlay Split Colors */}
      {/* <div className="absolute inset-0 grid grid-cols-2">
        <div className="bg-blue-900/70"></div>
        <div className="bg-[#1E7C07]/70"></div>
      </div> */}

      {/* Content */}
      <div className="md:absolute inset-0 flex items-end justify-center ">
        <div className=" flex items-center md:flex-row flex-col gap-4 md:gap-12 md:mb-6 text-center rounded-2xl md:text-left px-6 md:px-12 py-6 bg-transparent backdrop-blur-3xl text-white">
          <div className="flex flex-col ">
            <div className="md:text-[30px]  text-[24px] lg:text-6xl font-poppins font-bold  md:text-blue-300">
              THE TEAM
            </div>
            {/* <Link
              href="#about"
              className="bg-black/60 px-6 py-4 text-center rounded-md text-white text-sm hover:bg-white/40 transition"
            >
              Read More
            </Link> */}
          </div>
          <div className="text-sm md:text-[16px] lg:text-[20px]  text-justify font-nunito xl:w-[800px] ">
            Our services comprise of professional cleaners specialized in
            domestic cleaning, industrial cleaning, commercial cleaning such as
            medical centres, aged care centres, child care centres, eateries,
            and automobile vehicle areas like many others. Our team comes with
            police certificates and a professional training experience that is
            evidence of our professionalism.
          </div>
        </div>
      </div>
    </section>
  );
}
