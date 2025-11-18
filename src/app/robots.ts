import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/packers-and-movers/bangalore", "/packers-and-movers/chennai", "/packers-and-movers/coimbatore", "/packers-and-movers/kochi", "/packers-and-movers/thiruvananthapuram"],
      disallow: ["/admin", "/private", "/privacyPolicy", "/thank-you/order-placed"],
    },
    sitemap: "https://eintransport.in/sitemap.xml",
  };
}
