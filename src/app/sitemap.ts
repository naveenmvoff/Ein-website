import { MetadataRoute } from "next";
import connectDB from "@/config/db";
import Blog from "@/models/Blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  await connectDB();
  const baseUrl = "https://eintransport.in";
  const cities = ["bangalore", "chennai", "coimbatore", "kochi", "thiruvananthapuram"];

  const lastModified = new Date();

  const staticPages = [
    { url: `${baseUrl}/`, lastModified, priority: 1 },
  ];
 
  const cityPages = cities.map((city) => ({
    url: ${baseUrl}/packers-and-movers/${city},
    lastModified: new Date(),
    // changeFrequency: "weekly",
    priority: 0.9,
  }));

  const staticPages1 = [
    { url: ${baseUrl}/blog, lastModified, priority: 0.9 },
  ];

  const blogs = await Blog.find({ status: "Active" }).select("pageURL updatedAt").lean();
  const dynamicblogs = blogs.map((blog: any) => ({
    url: ${baseUrl}/blog/${blog.pageURL},
    lastModified: blog.updatedAt || new Date(),
    priority: 0.8,
  }));

  return [...staticPages, ...cityPages, ...staticPages1, ...dynamicblogs];
}
