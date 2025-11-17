import connectDB from "@/config/db";
import Blog from "@/models/Blog";
import { NextRequest, NextResponse } from "next/server";

type BlogLean = {
  _id: unknown;
  title: string;
  content: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string[];
  pageURL: string;
  createdAt?: Date;
  updatedAt?: Date;
};

const slugRegex = /^[a-z0-9-]+$/;

const normalizeSlug = (value: string): string =>
  value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const slugParam = searchParams.get("slug") || "";

    if (!slugParam.trim()) {
      return NextResponse.json(
        { success: false, message: "Slug is required." },
        { status: 400 }
      );
    }

    const normalizedSlug = normalizeSlug(slugParam);

    if (!slugRegex.test(normalizedSlug)) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Slug must contain only lowercase letters, numbers, and hyphens.",
        },
        { status: 400 }
      );
    }

    const blog = await Blog.findOne({ pageURL: normalizedSlug }).lean<BlogLean | null>();

    if (!blog) {
      return NextResponse.json(
        { success: false, message: "Blog not found." },
        { status: 404 }
      );
    }

    const createdAt =
      blog.createdAt instanceof Date ? blog.createdAt.toISOString() : null;
    const updatedAt =
      blog.updatedAt instanceof Date ? blog.updatedAt.toISOString() : null;

    return NextResponse.json({
      success: true,
      data: {
        ...blog,
        _id:
          typeof (blog._id as { toString?: () => string })?.toString === "function"
            ? (blog._id as { toString: () => string }).toString()
            : String(blog._id),
        createdAt,
        updatedAt,
      },
    });
  } catch (error) {
    console.error("Error fetching blog by slug:", error);
    return NextResponse.json(
      { success: false, message: "Server error", error },
      { status: 500 }
    );
  }
}

