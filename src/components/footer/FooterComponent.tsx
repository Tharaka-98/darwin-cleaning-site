import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BsTiktok } from "react-icons/bs";

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

const footerSections: Array<{
  title: string;
  links: Array<{ label: string; href?: string; underline?: boolean }>;
}> = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/#team" },
      { label: "Why Choose Us", href: "/#choose-us" },
      { label: "Cleaning Tips", href: "/cleaning-tips" },
      { label: "Contact", href: "/quote-section" },
      { label: "News", href: "/news" },
    ],
  },
  {
    title: "Services",
    links: services, // reuse services array
  },
  {
    title: "Contacts",
    links: [
      { label: "Get a free quote", href: "/quote-section", underline: true },
      { label: "📞 +61 415 703 231" },
      {
        label: "📧 info@cleanspacesfacilities.com.au",
        href: "mailto:info@cleanspacesfacilities.com.au",
      },
      { label: "📍 Woolner, 0820, NT" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#050505] dark:bg-[#0b0f12] text-white text-sm">
      <div className="mx-auto px-6 lg:px-12 py-10 border-t border-white/60 dark:border-white/10 flex flex-col md:flex-row justify-between items-start gap-16">
        {/* Left:- Logo + Description + Socials */}
        <div className="md:space-y-4 md:w-1/3">
          <Link
            href="/"
            className="flex justify-center flex-col items-center md:items-start"
          >
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={100}
              height={50}
              className="h-32 w-20 lg:h-36 lg:w-24"
            />
          </Link>
          <div className="text-gray-400 text-[12px] md:text-[16px] text-center md:text-left font-poppins">
            Fresh Spaces, Happy Faces – Schedule Your Cleaning Today. <br /> A
            Cleaner Home Starts Here – Book Now.
          </div>
          <div className="flex justify-center md:justify-start space-x-4 pt-2">
            <Link
              href="https://www.facebook.com/profile.php?id=61579877900066"
              target="_blank"
              className="hover:text-blue-500"
            >
              <Facebook size={18} />
            </Link>

            <Link href="#" className="hover:text-pink-400" target="_blank">
              <Instagram size={18} />
            </Link>
            <Link
              href="https://www.tiktok.com/@cleanspacefacilities"
              className="hover:text-blue-400"
              target="_blank"
            >
              <BsTiktok size={18} />
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-col md:flex-row gap-6 flex lg:gap-12 md:w-2/3 justify-between">
          {footerSections.map((section, idx) => (
            <div key={idx}>
              <h3 className="font-semibold mb-4 text-[16px] font-poppins">
                {section.title}
              </h3>
              <ul className="md:space-y-2 space-y-1 text-gray-400 font-poppins">
                {section.links.map((link, i) => (
                  <li key={i} className="text-[14px] hover:text-white ">
                    {link.href ? (
                      <Link
                        href={link.href}
                        className={`${link.underline ? "underline" : ""}`}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      link.label
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t dark:border-gray-700/60 font-poppins text-center text-white dark:text-gray-500 py-6 text-xs md:text-sm">
        <p>
          © {new Date().getFullYear()} Clean Space Facilities. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
