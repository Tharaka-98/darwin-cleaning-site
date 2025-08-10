import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito, Playwrite_AU_NSW, Poppins, Ubuntu } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/NavbarComponent";
import Footer from "@/components/footer/FooterComponent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const ubuntu = Ubuntu({
  weight:["300","400","500"],
  variable: "--font-ubuntu",
  subsets: ["latin"],
});
const ausiNSW = Playwrite_AU_NSW({
  weight:["100", "200", "300", "400"],
  variable: "--font-paywrite-au",
});
const nunitoSans = Nunito({
  weight: ["200","300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
  preload: true,
});


export const metadata: Metadata = {
  title: "Clean Space",
  description: "Professional services tailored for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="icon" href="/images/logo.png" type="image/png" />
      </head> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ubuntu.variable} ${ausiNSW.variable} ${nunitoSans.variable} ${poppins.variable}  antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
