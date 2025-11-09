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
  slugParam: string
): Promise<BlogDocument | null> {
  if (!slugParam?.trim()) {
    return null;
  }

  const normalizedSlug = normalizeSlug(slugParam);
  if (!slugRegex.test(normalizedSlug)) {
    return null;
  }

  await connectDB();

  const blog = await Blog.findOne({ pageURL: normalizedSlug }).lean<BlogModelResult | null>();
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
    content: blog.content,
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

