import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Nunito,
  Playwrite_AU_NSW,
  Poppins,
  Ubuntu,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/header/NavbarComponent";
import Footer from "@/components/footer/FooterComponent";
import ThemeToggle from "@/components/theme/ThemeToggle";
import ScrollToTop from "@/components/scrollToTop/ScrollToTop";
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
  weight: ["300", "400", "500"],
  variable: "--font-ubuntu",
  subsets: ["latin"],
});
const ausiNSW = Playwrite_AU_NSW({
  weight: ["100", "200", "300", "400"],
  variable: "--font-paywrite-au",
});
const nunitoSans = Nunito({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
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
  metadataBase: new URL(siteUrl),
  title: {
    default: `${companyInfo.name}`,
    template: `%s | ${companyInfo.name}`,
  },
  description:
    "Professional residential, commercial and specialty cleaning services across Victoria, Northern Territory, Tasmania, and Queensland.",
  keywords: [
    "cleaning",
    "home cleaning",
    "office cleaning",
    "commercial cleaning",
    "Victoria",
    "Northern Territory",
    "Tasmania",
    "Queensland",
    "Darwin",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${companyInfo.name} - Professional Cleaning Services Across Australia`,
    description:
      "Expert cleaning services tailored to your needs across Victoria, Northern Territory, Tasmania, and Queensland.",
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
      "Professional residential, commercial and specialty cleaning services across Victoria, Northern Territory, Tasmania, and Queensland.",
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
    <html lang="en" suppressHydrationWarning>
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
        className={`${geistSans.variable} ${geistMono.variable} ${ubuntu.variable} ${ausiNSW.variable} ${nunitoSans.variable} ${poppins.variable} antialiased`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                try {
                  var stored = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var theme = stored || (prefersDark ? 'dark' : 'light');
                  if (theme === 'dark') document.documentElement.classList.add('dark');
                } catch {}
              })();
            `,
          }}
        />
        <Header />
        <div className="fixed right-4 bottom-4 z-[500]">
          {/* <ThemeToggle /> */}
        </div>
        <ScrollToTop />
        {children}
        <Footer />
      </body>
    </html>
  );
}
