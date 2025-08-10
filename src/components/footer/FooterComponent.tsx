import { Facebook, Instagram, Linkedin, X } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1e1e1e] text-white text-sm">
      <div className=" mx-auto px-6 px-16 py-10 border-t gap-12 border-white flex flex-row justify-between items-center w-full ">
        {/* Logo + Description + Socials */}
        <div className="space-y-4 w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-white">Clean Space</h2>
          <p className="text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="flex space-x-4 pt-2">
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

        {/* Quick Links */}
        {/* <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#">Top 10 Games</Link></li>
              <li><Link href="#">Slot Games</Link></li>
              <li><Link href="#">Live Casino</Link></li>
            </ul>
          </div> */}

        <div className="flex gap-12 items-center justify-end w-full md:w-1/2">
          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="#">News</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#">Terms</Link>
              </li>
              <li>
                <Link href="#">Privacy</Link>
              </li>
              <li>
                <Link href="#">Cookies</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center text-gray-500 py-4 text-xs">
        © 2025 Clean Space.  All rights reserved.
      </div>
    </footer>
  );
}
