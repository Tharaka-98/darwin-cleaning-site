"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Dot } from "lucide-react";
import Image from "next/image";
import { IoCall } from "react-icons/io5";
import React from "react";

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

type SubItem = { label: string; href: string };
type MainItem = { id: string; label: string; href?: string; sub: SubItem[] };

const MAIN_MENU: MainItem[] = [
  {
    id: "carpet-upholstery",
    label: "Carpet and Upholstery Cleaning",
    href: "/services/carpet-upholstery",
    sub: [
      {
        label: "Stain & Odour Neutraliser",
        href: "/services/carpet-upholstery",
      },
      {
        label: "Deep Steam Carpet Clean",
        href: "/services/carpet-upholstery",
      },
    ],
  },
  {
    id: "tile-grout",
    label: "Tile & Grout Cleaning",
    href: "/services/tile-grout",
    sub: [],
  },
  { id: "airbnb", label: "Airbnb Cleaning", href: "/services/airbnb", sub: [] },
  {
    id: "end-of-lease",
    label: "End of Lease Cleaning",
    href: "/services/end-of-lease",
    sub: [
      {
        label: "Full Vacate Clean",
        href: "/services/end-of-lease",
      },
      {
        label: "Walls, Skirting & Details",
        href: "/services/end-of-lease",
      },
      {
        label: "Oven & Rangehood Detail",
        href: "/services/end-of-lease",
      },
      {
        label: "Windows (Inside & Out)",
        href: "/services/end-of-lease",
      },
      {
        label: "Carpet Steam (Optional)",
        href: "/services/end-of-lease",
      },
      {
        label: "Bond Checklist Compliance",
        href: "/services/end-of-lease",
      },
    ],
  },
  {
    id: "window-glass",
    label: "Window and Glass Cleaning",
    href: "/services/window-glass",
    sub: [
      {
        label: "Inside & Outside Windows",
        href: "/services/window-glass",
      },
      {
        label: "Tracks & Frames",
        href: "/services/window-glass",
      },
      { label: "Flyscreens", href: "/services/window-glass" },
      {
        label: "High/Hard-to-Reach (Pole)",
        href: "/services/window-glass",
      },
      {
        label: "Glass Balustrades",
        href: "/services/window-glass",
      },
      { label: "Mirror Polishing", href: "/services/window-glass" },
    ],
  },
  {
    id: "commercial",
    label: "Commercial Cleaning",
    href: "/services/commercial",
    sub: [
      {
        label: "Corporate and Office Cleaning",
        href: "/services/commercial",
      },
      {
        label: "Water damage restoration Cleaning",
        href: "/services/commercial",
      },
      {
        label: "General Cleaning",
        href: "/services/commercial",
      },
      {
        label: "Government Department Cleaning",
        href: "/services/commercial",
      },
      {
        label: "Retail incl. Supermarkets & Shopping Centres",
        href: "/services/commercial",
      },
      {
        label: "Banks & Financial Institutions",
        href: "/services/commercial",
      },
      {
        label: "Education Institutions",
        href: "/services/commercial",
      },
      { label: "Warehouse Cleaning", href: "/services/commercial" },
      {
        label: "Shipping Ports & Airports",
        href: "/services/commercial",
      },
    ],
  },
  {
    id: "pressure-wash",
    label: "Pressure Wash Cleaning",
    href: "/services/pressure-wash",
    sub: [],
  },
  {
    id: "strip-sealing",
    label: "Strip & Sealing",
    href: "/services/strip-sealing",
    sub: [],
  },
];

function cx(...xs: Array<string | false | undefined>) {
  return xs.filter(Boolean).join(" ");
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // which main item’s dropdown is open (desktop)
  const [openMainId, setOpenMainId] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleDesktopServices = () => setDesktopServicesOpen((prev) => !prev);
  const toggleMobileServices = () => setMobileServicesOpen((prev) => !prev);

  const handleMobileLinkClick = () => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
  };

  // Close "Services" dropdown if clicking outside
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

  // ESC closes any open main dropdown
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) =>
      e.key === "Escape" && setOpenMainId(null);
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  return (
    <nav className="absolute top-0 left-0 right-0 z-[300] mx-auto w-full bg-white dark:bg-[#0f0f10] shadow-md">
      {/* Top bar */}
      <div className="mx-auto flex items-center justify-between px-4 xl:px-16 font-poppins">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={100}
            height={50}
            className="h-24 w-16 lg:h-36 lg:w-24"
          />
        </Link>
        <div className="md:hidden flex lg:flex gap-2 md:flex-col lg:flex-row">
          <a
            href="tel:+61470454571"
            className="text-pink-700 hover:bg-pink-700 hover:text-white text-[10px] lg:text-[16px] font-semibold border flex items-center justify-center gap-2 p-2 md:p-1 lg:p-3 rounded-xl"
          >
            <IoCall /> +61 470 454 571
          </a>

          <div className="text-pink-700 hover:bg-pink-700 hover:text-white  text-[10px] lg:text-[16px]  cursor-pointer font-semibold border flex items-center justify-center gap-2 p-2 lg:p-3 rounded-xl">
            <Link href="quote-section" className="">
              Click here for a quote
            </Link>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden items-center text-black dark:text-gray-100 space-x-6 xl:space-x-12 pr-6 md:flex">
          <Link
            href="/"
            className="md:text-[14px] hover:underline rounded-xl  xl:text-[20px] font-medium hover:text-[#3da7a4]"
          >
            Home
          </Link>

          {/* Classic Services Dropdown (your original) */}
          <div className="relative lg:hidden" ref={dropdownRef}>
            <button
              className="flex items-center text-black dark:text-gray-100 hover:underline space-x-1 hover:text-[#3da7a4] md:text-[14px] lg:text-[20px] font-medium"
              onClick={toggleDesktopServices}
              type="button"
              aria-haspopup="true"
              aria-expanded={desktopServicesOpen}
            >
              <span>Services</span>
              <ChevronDown size={16} />
            </button>
            {desktopServicesOpen && (
              <div className="absolute left-0 top-full  text-black dark:text-gray-100 mt-2 min-w-[280px] rounded bg-white dark:bg-[#0f0f10] backdrop-blur-lg shadow-lg border border-gray-100 dark:border-gray-800">
                {services.map((srv, index) => (
                  <div key={srv.label}>
                    <Link
                      href={srv.href}
                      className="flex h-[42px] items-center justify-start px-3 py-2 text-[15px] text-black hover:bg-[#003678] hover:text-white"
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
            href="/#team"
            className="md:text-[14px] text-black dark:text-gray-100 hover:underline xl:text-[20px] font-medium hover:text-[#3da7a4]"
          >
            About Us
          </Link>
          <Link
            href="/#choose-us"
            className="md:text-[14px] text-black dark:text-gray-100 xl:text-[20px] hover:underline font-medium hover:text-[#3da7a4]"
          >
            Why Choose US ?
          </Link>
          <Link
            href="/cleaning-tips"
            className="md:text-[14px] text-black dark:text-gray-100 xl:text-[20px] hover:underline font-medium hover:text-[#3da7a4]"
          >
            Cleaning Tips
          </Link>
          <Link
            href="/services"
            className="md:text-[14px] text-black dark:text-gray-100 xl:text-[20px] hover:underline font-medium hover:text-[#3da7a4]"
          >
            Services
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu" type="button">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* ToDo:- make a text rotation ribon here using below text */}
      {/* Test:- Explore our main cleaning services tailored to your needs. Hover over a card to learn more. */}
      <div className="hidden lg:flex items-center overflow-hidden">
        {/* Marquee-style Scrolling Text */}
        <div className="scrolling-text-container bg-gradient-to-r from-[#e8f9f7] via-[#eaf3e2] to-[#e8f9f7] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 w-full">
          <div className="scrolling-text whitespace-nowrap py-1 text-[20px] font-nunito font-semibold text-[#67a038] dark:text-green-300 animate-marquee">
            <div className="inline-block mr-4">
              Explore our main cleaning services tailored to your needs. Hover
              below a card to learn more. |
            </div>
            <div className="inline-block mr-4 flex-row justify-center items-center">
              📞 +61 470 454 571 |
            </div>
            <div className="inline-block">
              <Link
                href="/quote-section"
                className="text-pink-700 dark:text-pink-400 underline"
              >
                Get A Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ===== MAIN SERVICES LINE (Desktop) – with per-item dropdowns ===== */}
      <div className="relative hidden  justify-start items-center px-4 lg:flex border-t border-gray-200 bg-[]">
        <div className=" " onMouseLeave={() => setOpenMainId(null)}>
          <ul className="flex gap-4 px-4 py-2 text-[15px] font-medium z-[300]">
            {MAIN_MENU.map((m, index) => {
              const open = openMainId === m.id;
              const hasSub = m.sub && m.sub.length > 0;
              return (
                <React.Fragment key={m.id}>
                  <li
                    className="relative"
                    onMouseEnter={() => setOpenMainId(m.id)}
                  >
                    <Link
                      href={m.href ?? "#"}
                      onFocus={() => setOpenMainId(m.id)}
                      aria-haspopup={hasSub ? "true" : undefined}
                      aria-expanded={hasSub ? open : undefined}
                      className={cx(
                        "inline-flex z-[300] font-poppins items-center gap-1 py-2 transition",
                        open
                          ? "text-pink-700"
                          : "text-gray-800 dark:text-gray-100 hover:text-pink-700"
                      )}
                    >
                      {m.label}
                      {hasSub && (
                        <ChevronDown
                          className={cx(
                            "h-4 w-4 transition",
                            open && "rotate-180"
                          )}
                        />
                      )}
                    </Link>

                    {/* Item dropdown */}
                    {hasSub && open && (
                      <div className="absolute left-0 top-full  z-[300] mt-2 min-w-[280px] rounded border bg-white dark:bg-[#0f0f10] shadow-xl border-gray-100 dark:border-gray-800">
                        <ul className="py-2">
                          {m.sub.map((s, i) => (
                            <li key={`${m.id}-${i}`}>
                              <Link
                                href={s.href}
                                className="group flex items-center gap-2 px-2 py-2 hover:bg-pink-50 dark:hover:bg-gray-800"
                              >
                                <Dot className="h-5 w-5 text-pink-600" />
                                <span className="text-[15px] leading-6 font-poppins font-normal text-gray-900 dark:text-gray-100 group-hover:text-pink-700">
                                  {s.label}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                  {index < MAIN_MENU.length - 1 && (
                    <li className="text-gray-400 dark:text-gray-600 h-10 w-px bg-gray-400 dark:bg-gray-700 self-center"></li>
                  )}
                </React.Fragment>
              );
            })}
          </ul>
        </div>
      </div>

      {/* ===== Mobile Menu ===== */}
      {menuOpen && (
        <div className="space-y-2 font-poppins px-4 pb-4 md:hidden">
          <Link href="/" className="block py-2" onClick={handleMobileLinkClick}>
            Home
          </Link>

          {/* Classic Services list on mobile */}
          <div className="relative py-2">
            <button
              className="flex w-full items-center justify-between space-x-1 "
              onClick={toggleMobileServices}
              type="button"
              aria-haspopup="true"
              aria-expanded={mobileServicesOpen}
            >
              <span>Services</span>
              <ChevronDown size={16} />
            </button>
            {mobileServicesOpen && (
              <div className="space-y-1 pl-4">
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
            href="/#team"
            className="block py-2"
            onClick={handleMobileLinkClick}
          >
            About Us
          </Link>
          <Link
            href="/#choose-us"
            className="block py-2"
            onClick={handleMobileLinkClick}
          >
            Why Choose US ?
          </Link>
          <Link
            href="/cleaning-tips"
            className="block py-2"
            onClick={handleMobileLinkClick}
          >
            Cleaning Tips
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
