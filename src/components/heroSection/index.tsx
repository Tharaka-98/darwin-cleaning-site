import Image from "next/image";
import GradientOverlay from "../gradient/GradientOverlay";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full">
      {/* Background Image */}
      <Image
        src="/images/heromob.jpg" // ← Make sure to place your image in /public folder with this name
        alt="Commercial Cleaning"
        fill
        className="object-cover hidden object-center"
        priority
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 px-6 pt-20 lg:px-10 xl:px-20  z-50 flex lg:pt-48 xl:pt-44 md:pt-36 flex-col md:flex-row justify-center   md:justify-center  text-[#243056]">
        <div className="w-full md:w-1/2 mb-4">
       
          <div className=" z-50 md:mt-28 space-y-4">
            <div className="text-[40px] mb-0 md:text-[50px] font-poppins lg:text-[40px] xl:text-[72px]  font-semibold leading-tight ">
              Clean Space Facilities
            </div>
            <h2 className="text-[14px] mt-2 md:mt-0 md:text-[20px] lg:text-[20px] xl:text-[24px] font-nunito font-light tracking-wide">
              NOBODY DOES IT BETTER
            </h2>
            <div className="xl:text-[20px]  font-nunito font-light tracking-wide">
              Imagine more time to chase your dreams, without a to-do list
              stealing your spotlight.
            </div>
          </div>

          {/* Call to Action */}
          <div className="md:mt-10 z-100  rounded-2xl mt-6 md:max-w-[400px] lg:max-w-[500px] flex divide-x divide-gray-300 shadow-lg  overflow-hidden text-black text-left text-sm font-medium">
            <div className="bg-white px-6 py-2 md:py-4 w-1/2">
              <div className="text-[14px] lg:text-[16px] text-gray-500 font-nunito mb-1">
                CALL US
              </div>
              <div className="text-[14px] lg:text-[16px] font-nunito font-semibold">
                1300 089 845
              </div>
            </div>
            <div className="bg-[#67a038] px-6 py-2 md:py-4 w-1/2 font-nunito text-white hover:bg-[#2e5d38] transition">
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

  
        </div>

        <div className=" block md:hidden">
          <Image src="/images/glassClean.jpeg" alt="Image" width={400} height={400} className="h-[400px] object-cover" />
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
      <GradientOverlay className="absolute bottom-0 z-10" />
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
