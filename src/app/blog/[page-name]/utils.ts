import connectDB from "@/config/db";
import Blog from "@/models/Blog";

const slugRegex = /^[a-z0-9-]+$/;

const normalizeSlug = (value: string): string =>
  value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

export type BlogDocument = {
  id: string;
  title: string;
  content: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  pageURL: string;
  createdAt: string | null;
  updatedAt: string | null;
};

export const buildCanonicalUrl = (slug: string): string => {
  const base = process.env.NEXT_PUBLIC_APP_URL || "https://eintransport.in";
  return `${base.replace(/\/$/, "")}/blog/${slug}`;
};

type BlogModelResult = {
  _id: { toString(): string } | string;
  title: string;
  content: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string[];
  pageURL: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export async function getBlogBySlug(
  slugParam: string,
  options?: { metadataOnly?: boolean }
): Promise<BlogDocument | null> {
  if (!slugParam?.trim()) {
    return null;
  }

  const normalizedSlug = normalizeSlug(slugParam);
  if (!slugRegex.test(normalizedSlug)) {
    return null;
  }

  await connectDB();

  // For metadata generation, only fetch necessary fields to improve performance
  const selectFields = options?.metadataOnly
    ? "title metaTitle metaDescription metaKeywords pageURL createdAt updatedAt"
    : undefined;

  // Use maxTimeMS to prevent slow queries from blocking metadata generation
  let query = Blog.findOne({ pageURL: normalizedSlug });
  
  if (selectFields) {
    query = query.select(selectFields);
  }
  
  const blog = await query
    .maxTimeMS(3000) // 3 second timeout for metadata queries
    .lean<BlogModelResult | null>();
    
  if (!blog) {
    return null;
  }

  return {
    id:
      typeof blog._id === "string"
        ? blog._id
        : typeof blog._id?.toString === "function"
        ? blog._id.toString()
        : "",
    title: blog.title,
    content: blog.content || "",
    metaTitle: blog.metaTitle ?? "",
    metaDescription: blog.metaDescription ?? "",
    metaKeywords: Array.isArray(blog.metaKeywords) ? blog.metaKeywords : [],
    pageURL: blog.pageURL,
    createdAt:
      blog.createdAt instanceof Date ? blog.createdAt.toISOString() : null,
    updatedAt:
      blog.updatedAt instanceof Date ? blog.updatedAt.toISOString() : null,
  };
}

