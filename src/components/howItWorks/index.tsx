"use client";

import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Users,
  Sparkles,
  ChevronRight,
} from "lucide-react";

export default function HowItWorksComponent() {
  const steps = [
    {
      icon: Calendar,
      title: "Book Your Service",
      description:
        "Fill out our quick online form or give us a call to discuss your cleaning needs. Our friendly team will help you choose the perfect service package tailored to your space and requirements.",
      gradient: "from-[#1ca79b] to-[#159086]",
      bgGradient: "from-[#1ca79b]/20 to-[#159086]/10",
      borderColor: "border-[#1ca79b]",
    },
    {
      icon: Users,
      title: "Expert Team Arrives",
      description:
        "Our certified cleaning professionals arrive on time with all the necessary equipment and eco-friendly supplies. We work efficiently to minimize disruption while delivering exceptional results.",
      gradient: "from-[#44a087] to-[#1ca79b]",
      bgGradient: "from-[#44a087]/20 to-[#1ca79b]/10",
      borderColor: "border-[#44a087]",
    },
    {
      icon: Sparkles,
      title: "Experience the Difference",
      description:
        "Sit back and relax as we transform your space. After completion, we conduct a quality check to ensure your satisfaction. Enjoy a spotless, fresh environment that exceeds your expectations.",
      gradient: "from-[#1ca79b] to-[#159086]",
      bgGradient: "from-[#1ca79b]/20 to-[#159086]/10",
      borderColor: "border-[#1ca79b]",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-10 lg:px-20 bg-gradient-to-b from-white to-[#f0f9f8] dark:from-[#0b0f12] dark:to-[#0a1418]">
      <div className="max-w-7xl mx-auto">
        {/* Subheading + Heading */}
        <div className="text-center mb-16 md:mb-20">
          <div className="font-nunito text-black dark:text-white font-medium md:text-[24px] lg:text-[30px] mb-2">
            How it works
          </div>
          <div className="text-[32px] text-black dark:text-white mb-0 md:text-[40px] lg:text-6xl font-poppins xl:text-[70px] font-semibold leading-snug">
            Simple Booking Process
          </div>
        </div>

        {/* Steps with Icons */}
        <div className="relative">
          {/* Connecting Arrow Lines - Desktop */}
          <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5">
            <div className="absolute left-0 right-0 top-0 h-0.5 bg-gradient-to-r from-[#1ca79b] via-[#44a087] to-[#1ca79b] opacity-30" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <ChevronRight className="w-6 h-6 text-[#44a087]" />
            </div>
          </div>

          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:gap-8 lg:gap-12 md:items-stretch">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  className="relative flex flex-col items-center text-center group h-full"
                >
                  {/* Content Card */}
                  <div
                    className={`relative w-full h-full flex flex-col bg-white/80 dark:bg-[#0f1216]/80 backdrop-blur-sm border-2 ${step.borderColor}/30 dark:border-gray-700 rounded-3xl p-8 lg:p-10 transition-all duration-300 group-hover:border-[#1ca79b] dark:group-hover:border-[#44a087] group-hover:shadow-2xl group-hover:-translate-y-2`}
                  >
                    {/* Icon Circle with Gradient */}
                    <div className="relative mb-6 flex justify-center">
                      <div
                        className={`relative bg-gradient-to-br ${step.gradient} w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl`}
                      >
                        <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white" />
                      </div>
                    </div>

                    {/* Step Number */}
                    <div className="mb-4">
                      <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#1ca79b]/10 to-[#44a087]/10 dark:from-[#1ca79b]/20 dark:to-[#44a087]/20 rounded-full text-sm font-poppins font-semibold text-[#1ca79b] dark:text-[#44a087] border border-[#1ca79b]/20 dark:border-[#44a087]/20">
                        STEP {index + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-poppins font-bold text-[#243056] dark:text-gray-100 mb-4 group-hover:text-[#1ca79b] dark:group-hover:text-[#44a087] transition-colors duration-300">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base md:text-lg font-nunito leading-relaxed text-[#5c886e] dark:text-gray-300 mb-6 flex-1">
                      {step.description}
                    </p>

                    {/* Link to quote form for step 1 */}
                    {index === 0 && (
                      <Link
                        href="/quote-section"
                        className="inline-flex items-center justify-between gap-2 px-8 py-4  bg-gradient-to-r from-[#1ca79b] to-[#159086] hover:from-[#159086] hover:to-[#1ca79b] text-white font-poppins font-semibold rounded-xl transition-all duration-300 text-sm md:text-base shadow-lg hover:shadow-xl hover:scale-105 mt-auto"
                      >
                        Get Your Free Quote
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
