/* eslint-disable react/no-unescaped-entities */
import { Check, Send, Leaf } from "lucide-react";

const features = [
  {
    icon: <Check className="w-10 h-10 lg:w-14 lg:h-14 text-[#44a087]" />,
    title: "Reliable & Trustworthy",
    description: (
      <>
        Don't worry about leaving a crucial task such as cleaning in the hands
        of strangers. Our client history is a speaking example of why our
        professional cleaners are trustworthy and reliable in their tasks.
      </>
    ),
  },
  {
    icon: <Send className="w-10 h-10 lg:w-14 lg:h-14 text-[#44a087]" />,
    title: "24 Hour Service",
    description: (
      <>
        If you want an urgent appointment for your commercial or domestic place.
        Our customer support service is available round the clock and make sure
        to clear all your concerns and queries.
      </>
    ),
  },
  {
    icon: <Leaf className="w-10 h-10 lg:w-14 lg:h-14 text-[#44a087]" />,
    title: "Eco-Friendly",
    description: (
      <>
        With the eco-friendly cleaning, we take care that the products and
        chemicals we use are sustainable and harmless for the environment to
        encourage the green movement and prevent pollution.
      </>
    ),
  },
];

export default function WhyChooseUsComponent() {
  return (
    <section
      id="choose-us"
      className="pb-16 px-10 lg:px-20 pt-10 bg-white dark:bg-[#0f0f10] text-center"
    >
      {/* Subheading + Heading */}
      <div className=" text-start mx-auto ">
        <div className="font-nunito text-black dark:text-white font-medium md:text-[24px] lg:text-[30px]">
          Quality Professional
        </div>
        <div className="text-[32px] text-black dark:text-white mb-0 md:text-[40px] lg:text-6xl font-poppins xl:text-[70px] font-semibold leading-snug ">
          Why Choose Us
        </div>
        <p className="text-gray-600 dark:text-gray-300 font-ubuntu text-[14px] mt-2 md:mt-4 xl:mt-6 md:text-[18px] lg:text-[22px] mb-12">
          Taylor Made Cleaning Company is proud to have achieved the Certificate
          of Prequalification in OHS/WHS with Cm3.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="max-w-7xl mx-auto grid gap-4 lg:gap-12 md:grid-cols-3 ">
        {features.map((feature, idx) => (
          <div
            className="space-y-4 flex flex-col  border hover:-translate-y-4 transform bg-[#eef7f6] dark:bg-[#111417] transition-all duration-300 ease-in-out border-[#c5f3e7] dark:border-gray-800  backdrop-blur-lg rounded-2xl p-4 shadow-[0_10px_10px_#dfe4e2] dark:shadow-none hover:shadow-[0_8px_30px_#8e9792]"
            key={idx}
          >
            <div className="h-1/3">
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="text-xl mt-2 lg:mt-4 lg:text-[24px] font-nunito font-bold text-[#44a087]">
                {feature.title}
              </h3>
            </div>
            <p className="text-[#5c886e] dark:text-green-300 text-justify h-2/3 font-ubuntu px-3 text-sm lg:text-[18px] xl:text-[20px] max-w-sm mx-auto">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
