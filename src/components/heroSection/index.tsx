import Image from "next/image";
import GradientOverlay from "../gradient/GradientOverlay";
import PinkGradientOverlay from "../gradient/PinkGradientOverlay";
import { companyInfo } from "@/lib/seo";
import { MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] md:h-screen bg-white dark:bg-[#0b0f12] w-full">
      {/* Background Image */}
      <Image
        src="/images/floor2.jpg" // ← Make sure to place your image in /public folder with this name
        alt="Commercial Cleaning"
        fill
        className="object-cover hidden object-center"
        priority
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 px-6 pt-20 lg:px-10 xl:px-20  z-50 flex lg:pt-48 xl:pt-44 md:pt-36 flex-col md:flex-row justify-center   md:justify-center  text-[#243056] dark:text-gray-100">
        <div className="w-full md:w-1/2 mb-4">
          <div className=" z-50 md:mt-28 space-y-0 md:space-y-4  ">
            <div className="text-[40px] mb-0 md:text-[50px] font-poppins lg:text-[40px] xl:text-[72px]  font-semibold leading-tight ">
              Clean Space Facilities
            </div>
            <h2 className="text-[14px] mt-2 md:mt-0 md:text-[20px] lg:text-[20px] xl:text-[24px] font-nunito font-light tracking-wide">
              NOBODY DOES IT BETTER
            </h2>
            <div className="xl:text-[20px] mt-4 md:mt-2 font-nunito font-light tracking-wide">
              Transform your space with our professional cleaning services –
              simple, quick, and reliable.🌿
            </div>
            <div className="xl:text-[20px] md:hidden block font-nunito font-light tracking-wide">
              Our expert cleaning services ensure your home or office is
              spotless, sanitized, and sparkling with every visit. Trusted by
              families and businesses alike.
            </div>
          </div>

          <div className="flex flex-col w-full  md:flex-row md:gap-4">
            {/* Call to Action */}
            <div className="md:mt-10 z-100 dark:border-gray-700 dark:border rounded-2xl mt-6 md:max-w-[400px] lg:max-w-[33.333%] shadow-lg overflow-hidden text-black dark:text-gray-100 text-left text-sm font-medium">
              <div className="bg-[#1ca79b] hover:bg-[#159086] px-6 py-2 md:py-4 w-full font-nunito text-white transition">
                <div className="text-[14px] lg:text-[16px] mb-1">
                  START ONLINE
                </div>
                <a
                  href="/quote-section"
                  className="underline text-[14px] lg:text-[16px] cursor-pointer font-semibold"
                >
                  Get a free quote
                </a>
              </div>
            </div>

            {/* Service Locations */}
            <div className="mt-6 md:mt-10 relative group md:max-w-[66.667%]">
              <div className="relative bg-[#1ca79b] hover:bg-[#159086] rounded-xl px-4 py-3 md:px-6 md:py-4 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white rounded-full opacity-20 animate-pulse"></div>
                    <MapPin
                      className="relative w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0 animate-bounce"
                      style={{ animationDuration: "2s" }}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-[11px] md:text-[12px] font-nunito font-semibold text-white uppercase tracking-wide mb-1">
                      Service Areas
                    </div>
                    <div className="text-[14px] md:text-[16px] lg:text-[18px] font-nunito font-semibold text-white">
                      {companyInfo.areaServed.slice(0, 4).join(", ")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" block md:hidden">
          {/* Left: circular photo with soft ring & shadow */}
          <div className=" w-full mt-1 lg:mb-0">
            <div className="relative rounded-3xl bg-white dark:bg-[#0f1216] p-1 shadow-[0_8px_40px_rgba(0,0,0,0.08)] dark:shadow-none">
              <div className="rounded-3xl border-8 border-[#e7f4f2] dark:border-gray-800 overflow-hidden">
                <Image
                  src="/images/floor2.jpg" // put your image in /public/images/
                  alt="Front exterior of a modern Darwin home"
                  width={1120}
                  height={1120}
                  priority
                  className="w-[400px] h-[200px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative flex justify-end items-end">
          <div className=" w-fit border-6 md:block hidden border-gray-200  rounded-tl-[90px]  ">
            <Image
              src="/images/glassClean.jpeg"
              alt="screen clean 1"
              width={300}
              height={600}
              className="object-cover object-center lg:h-[350px] xl:h-auto rounded-tl-[84px] lg:w-[250px] xl:w-full"
              priority
            />
          </div>
          <div className=" lg:left-40 left-20 xl:left-54  lg:block hidden absolute bottom-0 w-fit border-6 border-white  rounded-tl-[38px]  rounded-br-[32px]">
            <Image
              src="/images/glassClean2.jpeg"
              alt="screen clean 2"
              width={200}
              height={600}
              className="object-cover object-center lg:h-[250px] lg:w-[150px] xl:w-auto xl:h-[250px] rounded-tl-[32px] rounded-br-[32px]  "
              priority
            />
          </div>
          <div className=" xl:left-40 left-20 hidden absolute bottom-[260px] w-fit border-6 border-white  rounded-tl-[38px]  rounded-br-[32px]">
            <Image
              src="/images/glassClean3.jpeg"
              alt="screen clean 3"
              width={800}
              height={600}
              className="object-cover object-center rounded-tl-[32px] rounded-br-[32px]  "
              priority
            />
          </div>
        </div>
      </div>
      <GradientOverlay className="absolute md:block hidden bottom-0 z-10" />
      <PinkGradientOverlay className="absolute block md:hidden bottom-0 z-10" />
    </section>
  );
}

// C:100 M:72 Y:38 K:24 → #003678

// C:72 M:18 Y:5 K:0 → #47D1F2

// C:90 M:44 Y:74 K:50 → #0C4721

// C:40 M:2 Y:50 K:0 → #99F97F

// C:84 M:34 Y:96 K:26 → #1E7C07

// C:0 M:0 Y:0 K:80 → #323232

// C:0 M:0 Y:0 K:100 → #000000
