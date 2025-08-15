import type { Metadata } from "next"; 
import { Geist, Geist_Mono, Nunito, Playwrite_AU_NSW, Poppins, Ubuntu } from "next/font/google"; 
import "./globals.css"; 
import Header from "@/components/header/NavbarComponent"; 
import Footer from "@/components/footer/FooterComponent"; 

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], }); 
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], });
const ubuntu = Ubuntu({ weight:["300","400","500"], variable: "--font-ubuntu", subsets: ["latin"], });
const ausiNSW = Playwrite_AU_NSW({ weight:["100", "200", "300", "400"], variable: "--font-paywrite-au", });
const nunitoSans = Nunito({ weight: ["200","300", "400", "500", "600", "700", "800", "900"], variable: "--font-nunito-sans", subsets: ["latin"], });
const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], variable: "--font-poppins", subsets: ["latin"], preload: true, });

export const metadata: Metadata = {
  title: "Clean Space",
  description: "Professional services tailored for you",
  keywords: "cleaning, professional services, home cleaning, office cleaning",
  openGraph: {
    title: "Clean Space - Home Cleaning Services",
    description: "Expert cleaning services tailored to your needs.",
    url: "https://cleanspacesfacilities.com.au", // replace with your actual URL
    type: "website",
    // image: "https://yourdomain.com/og-image.jpg", // replace with your image path
  },
  twitter: {
    card: "summary_large_image",
    title: "Clean Space",
    description: "Professional services tailored for you",
    // image: "https://yourdomain.com/twitter-image.jpg", // replace with your image path
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        {/* You can use a specific image as favicon */}
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${ubuntu.variable} ${ausiNSW.variable} ${nunitoSans.variable} ${poppins.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
