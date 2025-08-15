"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "./home-image-grid.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const imageItems = [
  { src: "/images/Subtractmobile.png", alt: "Australia Map" },
  { src: "/images/winlads-founders.png", alt: "Winlads-founders" },
  { src: "/images/giveaways2-1.png", alt: "Founder" },
  { src: "/images/giveaways5.png", alt: "Founder" },
  { src: "/images/giveaways3-1.png", alt: "Winlads Team" },
  { src: "/images/giveaways1.png", alt: "Australia Map" },
];

export default function ImageGridComponent() {
  const swiperPrevRef = useRef<HTMLButtonElement | null>(null);
  const swiperNextRef = useRef<HTMLButtonElement | null>(null);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [mounted, setMounted] = useState(false);

  // Handle setting up navigation after component mounts
  useEffect(() => {
    setMounted(true);

    // Update navigation when refs and swiper are available
    if (
      swiper &&
      swiperPrevRef.current &&
      swiperNextRef.current &&
      swiper.params.navigation &&
      typeof swiper.params.navigation === "object"
    ) {
      (swiper.params.navigation as { prevEl?: HTMLElement | null; nextEl?: HTMLElement | null }).prevEl = swiperPrevRef.current;
      (swiper.params.navigation as { prevEl?: HTMLElement | null; nextEl?: HTMLElement | null }).nextEl = swiperNextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  // Handle navigation button clicks directly for additional reliability
  const handlePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <section className="w-full overflow-hidden relative">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        initialSlide={1}
        loop={true}
        watchSlidesProgress={true}
        breakpoints={{
          320: { slidesPerView: 1.5, spaceBetween: 10 },
          480: { slidesPerView: 1.8, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 2.2, spaceBetween: 25 },
          1024: { slidesPerView: 2.5, spaceBetween: 30 },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 30,
          depth: 250,
          modifier: 2,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[EffectCoverflow, Navigation, Autoplay]}
        navigation={{
          prevEl: swiperPrevRef.current,
          nextEl: swiperNextRef.current,
        }}
        onSwiper={(swiperInstance: SwiperType) => setSwiper(swiperInstance)}
        className="swiper-image-grid"
      >
        {[...imageItems, ...imageItems].map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide-image-grid">
            <Image
              fill
              src={item.src}
              alt={item.alt}
              className="object-cover w-full h-full bg-white no-select"
              priority={index < 3}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons with onClick handlers */}
      <div className="flex justify-center space-x-4 mt-4">
        <button
          ref={swiperPrevRef}
          onClick={handlePrev}
          className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button
          ref={swiperNextRef}
          onClick={handleNext}
          className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </section>
  );
}
