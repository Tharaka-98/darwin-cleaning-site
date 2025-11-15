export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://cleanspacesfacilities.com.au";

export const companyInfo = {
  name: "Clean Space Facilities",
  url: siteUrl,
  phone: "+61 415 703 231",
  logo: "/images/logo.png",
  areaServed: [
    "Victoria",
    "Northern Territory",
    "Tasmania",
    "Queensland",
    "Darwin",
    "Palmerston",
  ],
  address: {
    streetAddress: "",
    addressLocality: "Darwin",
    addressRegion: "NT",
    postalCode: "",
    addressCountry: "AU",
  },
  sameAs: [] as string[],
};

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyInfo.name,
    url: companyInfo.url,
    logo: companyInfo.logo,
    telephone: companyInfo.phone,
    sameAs: companyInfo.sameAs,
  };
}

export function buildLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: companyInfo.name,
    image: companyInfo.logo,
    url: companyInfo.url,
    telephone: companyInfo.phone,
    areaServed: companyInfo.areaServed,
    address: {
      "@type": "PostalAddress",
      ...companyInfo.address,
    },
  };
}

export const defaultOpenGraphImage = "/images/hero2.jpg";
