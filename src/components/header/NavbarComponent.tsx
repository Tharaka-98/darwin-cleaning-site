"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";

const services = [
  {
    label: "Carpet and Upholstery Cleaning",
    href: "/services/carpet-upholstery",
  },
  { label: "Tile & Grout Cleaning", href: "/services/tile-grout" },
  { label: "Airbnb Cleaning", href: "/services/airbnb" },
  { label: "End of Lease Cleaning", href: "/services/end-of-lease" },
  { label: "Pressure Wash Cleaning", href: "/services/pressure-wash" },
  { label: "Strip & Sealing", href: "/services/strip-sealing" },
  { label: "Window and Glass Cleaning", href: "/services/window-glass" },
  { label: "Commercial Cleaning", href: "/services/commercial" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleDesktopServices = () => setDesktopServicesOpen((prev) => !prev);
  const toggleMobileServices = () => setMobileServicesOpen((prev) => !prev);

  const handleMobileLinkClick = () => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
  };

  // Close dropdown if clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDesktopServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="absolute mx-auto w-full h-fit backdrop-blur-lg bg-gradient-to-b from-white to-transparent shadow-md top-0 left-0 right-0 z-90">
      <div className="max-w-7xl font-poppins mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={100}
            height={50}
            className="h-24 w-16 lg:h-36 lg:w-24"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12 pr-6">
          <Link
            href="/"
            className="hover:text-blue-600 lg:text-[20px] font-medium md:text-[14px]"
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center space-x-1 lg:text-[20px] font-medium md:text-[14px]"
              onClick={toggleDesktopServices}
              type="button"
              aria-haspopup="true"
              aria-expanded={desktopServicesOpen}
            >
              <span>Services</span>
              <ChevronDown size={16} />
            </button>
            {desktopServicesOpen && (
              <div className="absolute top-full left-0 mt-2 backdrop-blur-lg bg-white rounded shadow-lg min-w-[280px] z-50">
                {services.map((srv, index) => (
                  <div key={srv.label}>
                    <Link
                      href={srv.href}
                      className="flex px-3 py-2 h-[42px] justify-start items-center text-[15px] text-black hover:text-white hover:bg-[#003678]"
                      onClick={() => setDesktopServicesOpen(false)}
                    >
                      {srv.label}
                    </Link>
                    {index < services.length - 1 && <hr />}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/about"
            className="hover:text-blue-600 lg:text-[20px] font-medium md:text-[14px]"
          >
            About
          </Link>
          <Link
            href="/quote-section"
            className="hover:text-blue-600 lg:text-[20px] font-medium md:text-[14px]"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu" type="button">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link href="/" className="block py-2" onClick={handleMobileLinkClick}>
            Home
          </Link>
          <div className="relative py-2">
            <button
              className="flex justify-between items-center w-full space-x-1 lg:text-[20px] font-medium md:text-[14px]"
              onClick={toggleMobileServices}
              type="button"
              aria-haspopup="true"
              aria-expanded={mobileServicesOpen}
            >
              <span>Services</span>
              <ChevronDown size={16} />
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 space-y-1">
                {services.map((srv) => (
                  <Link
                    key={srv.label}
                    href={srv.href}
                    className="block py-2 hover:bg-gray-100"
                    onClick={handleMobileLinkClick}
                  >
                    {srv.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            href="/about"
            className="block py-2"
            onClick={handleMobileLinkClick}
          >
            About
          </Link>
          <Link
            href="/quote-section"
            className="block py-2"
            onClick={handleMobileLinkClick}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
