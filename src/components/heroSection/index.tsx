import Image from "next/image";
import GradientOverlay from "../gradient/GradientOverlay";

export default function HeroSection() {
  return (
    <section className="relative h-screen  w-full">
      {/* Background Image */}
      <Image
        src="/images/tail2.jpg" // ← Make sure to place your image in /public folder with this name
        alt="Commercial Cleaning"
        fill
        className="object-cover hidden md:block object-center z-0"
        priority
      />
      <Image
        src="/images/heromob.jpg" // ← Make sure to place your image in /public folder with this name
        alt="Commercial Cleaning"
        fill
        className="object-cover block md:hidden object-center z-0"
        priority
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 px-6 lg:px-20 bg-black/12  z-50 flex md:pt-32  flex-col justify-center pt-80  md:justify-center  text-white">
        <div className=" z-50 md:mt-54 space-y-4">
          <div className="text-[32px] mb-0 md:text-[50px] font-poppins lg:text-[72px] xl:text-[90px]  font-bold leading-snug ">
            Clean Space Facilities
          </div>
          <h2 className="text-[14px] mt-2 md:mt-0 md:text-[20px] lg:text-[32px] xl:text-[40px] font-nunito font-light tracking-wide">
            NO BODY DOES IT BETTER
          </h2>
        </div>

        {/* Call to Action */}
        <div className="md:mt-10 z-50  rounded-2xl mt-6 md:max-w-[400px] lg:max-w-[500px] flex divide-x divide-gray-300 shadow-lg  overflow-hidden text-black text-left text-sm font-medium">
          <div className="bg-white px-6 py-2 md:py-4 w-1/2">
            <div className="text-[14px] lg:text-[16px] text-gray-500 font-nunito mb-1">CALL US</div>
            <div className="text-[14px] lg:text-[16px] font-nunito font-semibold">1300 089 845</div>
          </div>
          <div className="bg-[#003678] px-6 py-2 md:py-4 w-1/2 font-nunito text-white hover:bg-[#587fab] transition">
            <div className="text-[14px] lg:text-[16px] mb-1">START ONLINE</div>
            <a href="/quote-section" className="underline text-[14px] lg:text-[16px] cursor-pointer font-semibold">
              Get a free quote
            </a>
          </div>
        </div>
        
      </div>
      <GradientOverlay className="absolute bottom-0 z-10"/>
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
