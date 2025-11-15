import type { MetadataRoute } from "next";
import { companyInfo, siteUrl } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: companyInfo.name,
    short_name: companyInfo.name,
    description:
      "Professional residential, commercial and specialty cleaning services across Victoria, Northern Territory, Tasmania, and Queensland.",
    start_url: "/",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    display: "standalone",
    icons: [
      {
        src: "/images/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
