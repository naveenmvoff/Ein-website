import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    sitemap: "https://eintransport.in/sitemap.xml",
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: ["/admin", "/private", "/thank-you/order-placed"],
    },
  };
}

