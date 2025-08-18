import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito, Poppins, Ubuntu } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/NavbarComponent";
import Footer from "@/components/footer/FooterComponent";
import {
  companyInfo,
  siteUrl,
  defaultOpenGraphImage,
  buildLocalBusinessJsonLd,
  buildOrganizationJsonLd,
} from "@/lib/seo";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const ubuntu = Ubuntu({
  weight: ["400"],
  variable: "--font-ubuntu",
  subsets: ["latin"],
});
const nunitoSans = Nunito({
  weight: ["300", "400", "500", "600"],
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${companyInfo.name}`,
    template: `%s | ${companyInfo.name}`,
  },
  description:
    "Professional residential, commercial and specialty cleaning services in Darwin and NT.",
  keywords: [
    "cleaning",
    "home cleaning",
    "office cleaning",
    "commercial cleaning",
    "Darwin",
    "Northern Territory",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${companyInfo.name} - Professional Cleaning Services in Darwin`,
    description:
      "Expert cleaning services tailored to your needs across Darwin and NT.",
    siteName: companyInfo.name,
    images: [
      {
        url: defaultOpenGraphImage,
        width: 1200,
        height: 630,
        alt: `${companyInfo.name} - Cleaning Services`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: companyInfo.name,
    description:
      "Professional residential, commercial and specialty cleaning services in Darwin and NT.",
    images: [defaultOpenGraphImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  category: "home",
  applicationName: companyInfo.name,
  creator: companyInfo.name,
  publisher: companyInfo.name,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        {/* You can use a specific image as favicon */}
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildOrganizationJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildLocalBusinessJsonLd()),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ubuntu.variable} ${nunitoSans.variable} ${poppins.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
