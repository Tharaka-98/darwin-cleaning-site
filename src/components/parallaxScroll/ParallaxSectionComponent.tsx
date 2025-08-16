"use client";

import React from "react";

const ParallaxSection: React.FC = () => {
  return (
    <section
      className="relative h-[60vh] mb-12 md:mb-0 md:h-screen overflow-hidden bg-center bg-cover bg-fixed "
      style={{ backgroundImage: "url('/images/parallax.jpg')" }}
    >
      {/* Wave divider (fills with the next section’s background color) */}
      <svg
        className="absolute top-0 z-10 left-0 w-full  h-[90px] md:h-[80px] text-[#eff8fa] pointer-events-none"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Use currentColor so Tailwind text-* controls the fill */}
        <path
          fill="currentColor"
          d="M0,60 C180,120 360,0 540,60 C720,120 900,0 1080,60 C1260,120 1440,0 1440,0 L0,0 Z"
        />
      </svg>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full pt-28 md:items-center justify-center px-8 md:px-4">
        <h1 className="text-[#e6f7fa] font-nws leading-snug text-[24px] md:text-3xl lg:text-[48px] xl:text-6xl font-normal text-center">
          Darwin’s Trusted Residential & Commercial Cleaning Experts
        </h1>
      </div>

      {/* Wave divider (fills with the next section’s background color) */}
      <svg
        className="absolute hidden md:block bottom-[-3px] left-0 w-full rotate-180 h-[90px] md:h-[90px] text-white pointer-events-none"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Use currentColor so Tailwind text-* controls the fill */}
        <path
          fill="currentColor"
          d="M0,64L48,80C96,96,192,120,288,120C384,120,480,96,576,74.7C672,53,768,43,864,53.3C960,64,1056,96,1152,101.3C1248,107,1344,85,1392,74.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </svg>
    </section>
  );
};

export default ParallaxSection;
