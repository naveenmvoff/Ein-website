import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/private"], // Add restricted paths if any
    },
    sitemap: "https://eintransport.in/sitemap.xml",
  };
}
