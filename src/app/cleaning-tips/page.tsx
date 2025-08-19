// app/cleaning-tips/page.tsx  (or: components/HomeCleaningTipsPage.tsx)
"use client";

import { FC } from "react";
import { PiCheckCircleBold } from "react-icons/pi";
import { FiCalendar } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { GiMagicBroom } from "react-icons/gi";

const primary = {
  navy: "text-[#0A2058]",
  magenta: "bg-[#CF0055]",
  magentaText: "text-[#CF0055]",
};

const checklist = [
  "Declutter surfaces before cleaning",
  "Dust from top to bottom",
  "Clean and disinfect high-touch areas",
  "Use the right products for each surface",
  "Finish with floors for a polished look",
];

const proSteps = [
  {
    title: "Use quality cleaning supplies.",
    body: "First, make sure you have the appropriate cleaning supplies. Using the correct tools can really make a difference in your cleaning process. Learn about the specific tools needed to clean each room of your house in the cleaning tips pages below.",
  },
  {
    title: "Clean often.",
    body: "Be sure to clean frequently, even if it is a quick clean. Follow the tips for each part of the house to learn how often you should clean. By cleaning more frequently, you will avoid having to scrub dirt and grime that can build up over time.",
  },
  {
    title: "Hire a professional.",
    body: "If you find yourself running out of time to get everything as clean as you want it, hire a professional cleaning service to get the job done. Contact your local Cleaning Space  to discuss a cleaning plan that is right for you.",
  },
];

const HomeCleaningTipsPage: FC = () => {
  return (
    <main className="min-h-screen lg:px-6 pt-20 md:pt-16 lg:pt-64  bg-[#FFF6FA] dark:bg-[#0b0f12]">
      {/* Header */}
      <section className="mx-auto w-full lg: xl:max-w-7xl px-6 pt-10 pb-4 sm:pt-14">
        <h1
          className={`font-extrabold text-[#243056] dark:text-gray-100 tracking-tight ${primary.navy} text-[20px] lg:text-4xl xl:text-5xl`}
        >
          Home Cleaning Tips
        </h1>
        <div className="mt-3 h-1 w-20 rounded bg-[#FF6AA3]" />
      </section>

      {/* Framed checklist block */}
      <section className="mx-auto w-full lg: xl:max-w-7xl px-6 pb-10">
        <div className="rounded border border-black/80 dark:border-gray-800 bg-white dark:bg-[#0f1216]">
          <div className="p-6 sm:p-10">
            <h2
              className={` text-[18px] text-[#243056] dark:text-gray-100 md:text-[20px] lg:text-2xl xl:text-3xl font-poppins font-semibold ${primary.navy}`}
            >
              Cleaning Space offers expert cleaning tips for a spotless home.
            </h2>

            <ul className="mt-6 space-y-4 text-lg text-[#1b2b57]">
              {checklist.map((item) => (
                <li
                  key={item}
                  className="flex justify-start text-[#243056] dark:text-gray-100 items-center text-[14px] font-nunito md:text-[16px] gap-3"
                >
                  <span className="mt-0.5 font-poppins rounded-full">
                    <PiCheckCircleBold
                      className="h-6 w-6 text-[#FF5A8D]"
                      aria-hidden
                    />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Copy + steps (screenshots 2) */}
      <section className="mx-auto w-full lg: xl:max-w-7xl px-6 pb-12">
        <h3
          className={`text-[18px] md:text-[20px] text-[#243056] dark:text-gray-100 lg:text-2xl xl:text-3xl font-poppins font-semibold ${primary.navy} dark:text-white`}
        >
          Expert Cleaning Tips from the Home Cleaning Professionals
        </h3>

        <p className="mt-4 text-[15px] text-[#243056] dark:text-gray-100 md:text-[17px] md:leading-7 font-nunito text-justify   ">
          With decades of experience in the residential cleaning business, our
          home cleaning professionals have pretty much seen it all. No stain is
          too stubborn, no streak too enduring. Our maids not only have modern
          cleaning tools and equipment; they have the knowledge and experience
          needed to conquer even the messiest of messes. Rather than keep all of
          that knowledge to ourselves, we’re sharing our tips here to help
          homeowners keep their homes clean and tidy.
        </p>

        <h4
          className={`mt-8 text-[18px] text-[#243056] dark:text-gray-100 md:text-[20px] lg:text-2xl xl:text-3xl font-poppins font-semibold ${primary.navy}`}
        >
          How to Clean a House Professionally
        </h4>
        <p className="mt-3 text-[#243056] dark:text-gray-100 text-[15px] md:text-[17px] md:leading-7 font-nunito text-justify ">
          We know how good it feels to come home to a clean house. We want you
          to experience that feeling every day. We’ve organized our home
          cleaning tips by room (because we’re really into organizing things).
          If you don’t find what you’re looking for here, check out our home
          cleaning blog.
        </p>

        <p className="mt-6 text-[15px]  md:text-[17px] md:leading-7 font-nunito text-[#2b3f7b] dark:text-gray-300">
          To keep your house sparkling, follow these three simple steps:
        </p>

        <ul className="mt-4 space-y-6">
          {proSteps.map(({ title, body }) => (
            <li key={title} className="flex gap-3">
              <PiCheckCircleBold
                className="mt-1 h-6 w-6 text-[#FF5A8D]"
                aria-hidden
              />
              <div>
                <p className="font-semibold text-[#102452] dark:text-white">
                  <span className="font-medium font-poppins">{title}</span>
                </p>
                <p className="mt-1 text-justify text-[15px] md:text-[17px] md:leading-7 font-nunito text-[#2b3f7b] dark:text-gray-300">
                  {body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA Banner (screenshot 3) */}
      <section className="mx-auto w-full  xl:max-w-7xl px-6 pb-12">
        <div
          className={`relative rounded-2xl ${primary.magenta} text-[#243056] dark:text-gray-100 px-6 py-4 md:py-10 sm:px-6 xl:py-14`}
        >
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[28px] md:text-[32px] lg:text-[34px] xl:text-[40px] font-poppins font-semibold tracking-tight">
                Service You Can Trust!
              </p>
              <p className="mt-2 text-[14px] lg:text-lg font-poppins opacity-95">
                Let us know how we can help you today.
              </p>
            </div>

            <Link
              href="quote-section"
              className="inline-flex items-center gap-2 font-poppins rounded-xl md:text-[16px] bg-[#0B1D42] px-5 py-3 text-base font-semibold text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              aria-label="Request a Free Estimate"
            >
              <FiCalendar className="h-5 w-5" />
              Request a Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Logos + Neighborly copy (screenshot 4) */}
      <section className="mx-auto w-full lg: xl:max-w-7xl px-6 pb-16">
        <div className="grid items-center gap-8 sm:grid-cols-[1fr_auto_1fr]">
          <div className="flex justify-center">
            {/* Replace this text block with your logo <Image /> if you have the asset */}
            <div className="text-center">
              <div className="flex justify-center items-center">
              <GiMagicBroom className="xl:w-24 xl:h-24 lg:w-20 lg:h-20 md:w-12 w-10 md:h-12 h-10 text-[#243056] dark:text-gray-100" />
              </div>
              <p className="mt-3 text-2xl font-poppins font-medium text-[#243056] dark:text-gray-100 tracking-wide">
                Cleaning Space
              </p>
              <p className="text-sm font-nunito text-[#ff5a8d]">
                a neighborly company
              </p>
            </div>
          </div>

          <div className="hidden h-16 w-px bg-black/10 sm:block" />

          <div className="flex justify-center">
            <div className="text-center">
            <div className="flex justify-center items-center">
                <Link href="/">
                  <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={100}
                    height={50}
                    className="h-24 w-16 lg:h-36 lg:w-24"
                  />
                </Link>
              </div>
              <p className="mt-3 text-2xl font-poppins font-medium text-[#243056] dark:text-gray-100 tracking-wide">
                neighborly
              </p>
              <p className="text-sm text-[#243056] dark:text-gray-100 font-nunito">
                your hub for home services™
              </p>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-8 font-nunito max-w-4xl text-center text-[17px] leading-7 text-[#243056] dark:text-gray-100">
          Cleaning Space is part of the Neighborly family of home service
          providers. Searching through dozens of home service providers is a
          thing of the past. Rely on Neighborly’s national network of trusted,
          local home service professionals for all your home service needs.
        </p>
      </section>
    </main>
  );
};

export default HomeCleaningTipsPage;
