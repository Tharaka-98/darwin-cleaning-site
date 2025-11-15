"use client";

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Davis R.",
    text: "Your cleaning team arrived promptly and started cleaning immediately. They were very friendly and took great care to ensure they did a good job. I&apos;m very impressed with the company so far!...",
    rating: 5,
  },
  {
    name: "Sam F.",
    text: "Wow! I am so impressed with Team #8 Araceli and Cristina! This is the first time I have had my home professionally cleaned, and I can definitely say I will not hesitate to book with Molly Maid again...",
    rating: 5,
  },
  {
    name: "Karen S.",
    text: "I was extremely pleased with the service that the staff did for me. The office was attentive to my request and was great with communication. They were thorough and were able to tackle...",
    rating: 5,
  },
  {
    name: "Fernando G.",
    text: "The team came to do a deep cleaning at my house this week and they did an amazing job. We were beyond grateful since my husband and I work and study at the same time we have little to no...",
    rating: 5,
  },
  {
    name: "Emily T.",
    text: "Their service exceeded expectations! The team was quick, efficient, and did a wonderful job with the cleaning. Very professional and friendly service.",
    rating: 5,
  },
  {
    name: "John P.",
    text: "Fantastic experience! The staff were on time and very detailed in their cleaning. I&apos;ll definitely use them again and recommend them to friends.",
    rating: 5,
  },
  {
    name: "Chris J.",
    text: "I&apos;m impressed with how thorough the team was. They made sure every corner was spotless. Highly recommend their service!",
    rating: 5,
  },
];

const TestimonialComponent: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 3 + testimonials.length) % testimonials.length
    );
  };

  // Select three testimonials at a time starting from the current index
  const currentTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  const handleNext2 = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length); // Move to the next testimonial
  };

  const handlePrev2 = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    ); // Move to the previous testimonial
  };

  // Select the testimonial based on the current index
  const currentTestimonials2 = testimonials[currentIndex];

  return (
    <div
      id="testimonials"
      className="w-full bg-[#eff8fa] pt-8 dark:bg-[#0b0f12] flex flex-col gap-6 pb-4 lg:py-8 xl:py-16 px-10 lg:px-20"
    >
      {" "}
      <div className="text-[28px] text-[#243056] dark:text-gray-100  mb-0 md:text-[40px] lg:text-6xl font-poppins xl:text-[70px] font-semibold">
        {" "}
        Hear From Our Clients{" "}
        <div className="font-ubuntu text-[16px]  font-normal md:text-[18px] lg:text-[22px] md:mb-12 text-[#1ca79b]">
          Real Reviews, Real Trust
        </div>
      </div>{" "}
      {/* web view */}
      <div className="w-full hidden md:block overflow-hidden">
        {" "}
        <div className="flex justify-center items-center mb-4 gap-2 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
          {" "}
          <button
            onClick={handlePrev}
            className="text-gray-500 hover:text-gray-700"
          >
            {" "}
            <ChevronLeft className="w-8 h-8 text-[#1ca79b] cursor-pointer " />{" "}
          </button>{" "}
          {/* Display 3 testimonials at a time */}{" "}
          <div className="flex space-x-6">
            {" "}
            {currentTestimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#12161a] p-6 border-[#1ca79b] border rounded-3xl shadow-lg dark:shadow-none flex flex-col items-center max-w-xs"
              >
                {" "}
                <div className="flex items-center mb-4">
                  {" "}
                  <div className="rounded-full bg-[#1ca79b] p-2">
                    {" "}
                    <FaStar className="w-6 h-6 text-white" />{" "}
                  </div>{" "}
                  <p className="ml-3 text-lg font-medium font-poppins text-[#243056] dark:text-gray-100 ">
                    {" "}
                    {testimonial.name}{" "}
                  </p>{" "}
                </div>{" "}
                <p className="text-gray-600 dark:text-gray-300 font-nunito text-sm mb-3">
                  {testimonial.text}
                </p>{" "}
                <div className="flex items-center space-x-1">
                  {" "}
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                  ))}{" "}
                </div>{" "}
                <p className="mt-2 text-sm text-gray-500">
                  {testimonial.rating}/5{" "}
                </p>{" "}
              </div>
            ))}{" "}
          </div>{" "}
          <button
            onClick={handleNext}
            className="text-gray-500 hover:text-gray-700"
          >
            {" "}
            <ChevronRight className="w-8 h-8 cursor-pointer text-[#1ca79b]" />{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
      {/* mobile view */}
      <div className="w-full block md:hidden max-w-6xl  rounded-lg overflow-hidden">
        <div className="flex justify-between items-center mb-4 gap-2">
          <button
            onClick={handlePrev2}
            className="text-gray-500 hover:text-gray-700"
          >
            <ChevronLeft className="w-8 h-8 text-[#1ca79b] cursor-pointer" />
          </button>

          {/* Display testimonials based on screen size */}
          <div className="flex space-x-6 ">
            {/* Show 1 testimonial on small screens, 3 testimonials on larger screens */}

            <div
              key={currentIndex}
              className="border-[#1ca79b] border p-6 rounded-lg shadow-lg/30 dark:bg-[#12161a] dark:shadow-none flex flex-col items-center "
            >
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-[#1ca79b] p-2">
                  <FaStar className="w-6 h-6 text-white" />
                </div>
                <p className="ml-3 text-lg font-medium text-gray-800 dark:text-gray-100">
                  {currentTestimonials2.name}
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                {currentTestimonials2.text}
              </p>
              <div className="flex items-center space-x-1">
                {[...Array(currentTestimonials2.rating)].map((_, i) => (
                  <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                ))}
              </div>
              <p className="mt-2 text-sm text-gray-500">
                {currentTestimonials2.rating}/5{" "}
              </p>
            </div>
          </div>

          <button
            onClick={handleNext2}
            className="text-gray-500 hover:text-gray-700"
          >
            <ChevronRight className="w-8 h-8 cursor-pointer text-[#1ca79b]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialComponent;
