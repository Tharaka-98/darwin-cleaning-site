// app/components/LocallyProudSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function LocallyProudSection() {
  return (
    <section
      id="team"
      className="bg-[#eef7f6] dark:bg-[#0b0f12] flex justify-center px-10 lg:px-20"
    >
      <div className=" max-w-7xl  py-10 md:pt-16 lg:grid lg:grid-cols-12 lg:items-center lg:gap-12">
        {/* Left: circular photo with soft ring & shadow */}
        <div className=" mb-12 w-full max-w-[560px] lg:col-span-5 lg:mb-0">
          <div className="relative rounded-full bg-white dark:bg-[#0f1216] p-4 shadow-[0_8px_40px_rgba(0,0,0,0.08)] dark:shadow-none">
            <div className="rounded-full border-8 border-[#e7f4f2] dark:border-gray-800 overflow-hidden">
              <Image
                src="/images/aboutUs.png" // put your image in /public/images/
                alt="Front exterior of a modern Darwin home"
                width={1120}
                height={1120}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right: text + CTA */}
        <div className="lg:col-span-7">
          <h2 className="mb-6 text-3xl leading-tight text-[#5e5c5c] dark:text-gray-200 sm:text-4xl lg:text-5xl">
            <span
              className="block font-[500] font-poppins italic"
              // style={{ fontFamily: "Playwrite AU NSW, cursive" }} // or your script font class
            >
              Clean Space Facilities: Locally Proud
            </span>
          </h2>

          <div className="space-y-5 text-[17px] text-justify font-nunito leading-7 text-slate-700 dark:text-slate-300">
            <p>
              At Clean Space Facilities, we take great pride in supporting and
              caring for our local community. Our Locally Proud initiative is
              all about building strong connections with homeowners, businesses,
              and community groups by delivering reliable, high-quality cleaning
              services.
            </p>
            <p>
              For us, being Locally Proud is more than just a slogan—it’s a
              commitment to keeping our community spaces clean, healthy, and
              welcoming. We work hard to preserve the comfort and hygiene of
              every home and workplace we serve. Experience the difference with
              us and see how a cleaner environment can enhance the beauty and
              wellbeing of our community.
            </p>

            <p>
              Read more below about how we support communities across Victoria,
              Northern Territory, Tasmania, and Queensland. For more
              information, don't hesitate to get in touch by calling{" "}
              <Link
                href="tel:+61415703231"
                className="font-medium text-[#1ca79b] underline decoration-[#1ca79b]/30 underline-offset-4 hover:decoration-[#1ca79b]"
              >
                +61 415 703 231
              </Link>
              .
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="/quote-section"
              aria-label="Get in touch"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold text-white shadow-md transition
                         bg-[#1ca79b] hover:bg-[#159086] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1ca79b]"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
