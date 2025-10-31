import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://eintransport.in";
  const cities = ["bangalore", "chennai", "coimbatore", "kochi", "thiruvananthapuram"];
  const otherdata = ["#about", "#contact", "#faq"];

  const staticPages = [
    { url: `${baseUrl}/`, priority: 1 },
  ];

  const cityPages = cities.map((city) => ({
    url: `${baseUrl}/packers-and-movers/${city}`,
    lastModified: new Date(),
    // changeFrequency: "weekly",
    priority: 0.9,
  }));

  const otherDetails = otherdata.map((data) => ({
    url: `${baseUrl}/${data}`,
    lastModified: new Date(),
    // changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticPages, ...cityPages, ...otherDetails];
}
