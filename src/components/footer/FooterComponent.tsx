import { Facebook, Instagram, Linkedin, X } from "lucide-react";
import Link from "next/link";
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

export default function Footer() {
  return (
    <footer className="bg-[#1e1e1e] text-white text-sm">
      <div className="mx-auto px-6 lg:px-12 py-10 border-t border-white flex flex-col md:flex-row justify-between items-start gap-16">
        {/* Left:- Logo + Description + Socials */}
        <div className="md:space-y-4  md:w-1/3 ">
          <Link href="/" className="flex justify-center flex-col items-center md:items-start">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={100}
              height={50}
              className="h-32 w-20 lg:h-36 lg:w-24"
            />
          </Link>
          <div className="text-gray-400 text-[12px] md:text-[16px] text-center md:text-left font-poppins">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className="flex justify-center md:justify-start space-x-4 pt-2">
            <Link href="#" className="hover:text-blue-500">
              <Facebook size={18} />
            </Link>
            <Link href="#" className="hover:text-pink-400">
              <Instagram size={18} />
            </Link>
            <Link href="#" className="hover:text-white">
              <X size={18} />
            </Link>
            <Link href="#" className="hover:text-blue-400">
              <Linkedin size={18} />
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-col md:flex-row gap-6 flex lg:gap-12 md:w-2/3 justify-between">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-[16px] font-poppins">
              Quick Links
            </h3>
            <ul className="md:space-y-2  text-gray-400 font-poppins">
              <li className="text-[14px] ">
                <Link href="/about">About</Link>
              </li>
              <li className="text-[14px] ">
                <Link href="/quote-section">Contact</Link>
              </li>
              <li className="text-[14px] ">
                <Link href="/news">News</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-[16px] font-poppins">
              Services
            </h3>
            <ul className="md:space-y-2 space-y-1 text-gray-400 font-poppins">
              {services.map((service, index) => (
                <li key={index}>
                  <Link href={service.href} className="text-[14px] ">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div className="">
            <h3 className="font-semibold mb-4 text-[16px] font-poppins">
              Contacts
            </h3>
            <ul className="md:space-y-2 text-gray-400 flex flex-col gap-2 font-poppins">
              <li className="text-[14px] ">📞 (08) 8297 5210</li>
              <li className="text-[14px] ">
                📧 admin@southernxcleaning.com.au
              </li>
              <li className="text-[14px] ">
                📍 14-18 Rosslyn Street, Mile End South SA 5031
              </li>
            </ul>
            {/* <div>
              Proudly Powered By tit98Solutions
            </div> */}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 font-poppins text-center text-gray-500 py-4 text-xs">
        © 2025 Clean Space. All rights reserved.
      </div>
    </footer>
  );
}
