"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Facebook } from "lucide-react";
import Link from "next/link";
import { BsWhatsapp, BsTiktok } from "react-icons/bs";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls down 300px or more
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Listen to scroll events
    window.addEventListener("scroll", toggleVisibility);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const buttonClass =
    "inline-flex items-center justify-center rounded-full text-white p-3 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2";

  return (
    <div className="fixed bottom-6 right-6 z-[600] flex flex-col gap-3">
      {/* Social Media Buttons - Always Visible */}
      <Link
        href="https://wa.me/61470454571"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className={`${buttonClass} bg-[#25D366] hover:bg-[#20BA5A] focus:ring-[#25D366]`}
      >
        <BsWhatsapp size={24} />
      </Link>

      <Link
        href="https://www.facebook.com/profile.php?id=61579877900066"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className={`${buttonClass} bg-[#1877F2] hover:bg-[#166FE5] focus:ring-[#1877F2]`}
      >
        <Facebook size={24} />
      </Link>

      <Link
        href="https://www.tiktok.com/@cleanspacefacilities"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="TikTok"
        className={`${buttonClass} bg-black hover:bg-gray-800 focus:ring-gray-500`}
      >
        <BsTiktok size={24} />
      </Link>

      {/* Scroll to Top Button - Only visible when scrolled */}
      {isVisible && (
        <button
          type="button"
          aria-label="Scroll to top"
          onClick={scrollToTop}
          className={`${buttonClass} bg-[#1ca79b] dark:bg-[#41716d] hover:bg-[#87f1e8] dark:hover:bg-[#5e908c] focus:ring-[#1ca79b]`}
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}
