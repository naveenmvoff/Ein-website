import connectDB from "@/config/db";
import { NextResponse, NextRequest } from "next/server";
import Blog from "@/models/Blog";

const slugRegex = /^[a-z0-9-]+$/;

const normalizeSlug = (value: unknown): string => {
  if (typeof value !== "string") return "";
  return value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
};

const normalizeKeywords = (keywords: unknown): string[] => {
  if (!keywords) return [];
  const items = Array.isArray(keywords) ? keywords : String(keywords).split(",");
  const deduped = new Set<string>();

  return items
    .map((item) => (typeof item === "string" ? item.trim() : ""))
    .filter((item) => {
      if (!item) return false;
      const key = item.toLowerCase();
      if (deduped.has(key)) return false;
      deduped.add(key);
      return true;
    });
};

const validatePayload = (payload: any) => {
  const errors: Record<string, string> = {};

  const title = typeof payload?.title === "string" ? payload.title.trim() : "";
  if (!title) {
    errors.title = "Title is required.";
  } else if (title.length > 150) {
    errors.title = "Title must be 150 characters or less.";
  }

  const content = typeof payload?.content === "string" ? payload.content.trim() : "";
  if (!content) {
    errors.content = "Content is required.";
  }

  const metaTitle =
    typeof payload?.metaTitle === "string" ? payload.metaTitle.trim() : "";
  if (metaTitle.length > 160) {
    errors.metaTitle = "Meta title must be 160 characters or less.";
  }

  const metaDescription =
    typeof payload?.metaDescription === "string"
      ? payload.metaDescription.trim()
      : "";
  if (metaDescription.length > 300) {
    errors.metaDescription = "Meta description must be 300 characters or less.";
  }

  const pageURLRaw =
    typeof payload?.pageURL === "string" ? payload.pageURL : "";
  const pageURL = normalizeSlug(pageURLRaw);
  if (!pageURL) {
    errors.pageURL = "Page URL slug is required.";
  } else if (!slugRegex.test(pageURL)) {
    errors.pageURL =
      "Slug can contain only lowercase letters, numbers, and hyphens.";
  } else if (pageURL.length > 60) {
    errors.pageURL = "Slug must be 60 characters or less.";
  }

  const metaKeywords = normalizeKeywords(payload?.metaKeywords);

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    sanitized: {
      title,
      content,
      metaDescription,
      metaKeywords,
      metaTitle,
      pageURL,
    },
  };
};

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const { isValid, errors, sanitized } = validatePayload(body);

    if (!isValid) {
      return NextResponse.json(
        { success: false, message: "Validation failed", errors },
        { status: 400 }
      );
    }

    const existing = await Blog.exists({ pageURL: sanitized.pageURL });
    if (existing) {
      return NextResponse.json(
        { success: false, message: "A blog with this page URL already exists." },
        { status: 409 }
      );
    }

    const newBlog = await Blog.create(sanitized);
    return NextResponse.json({
      success: true,
      message: "Blog created successfully",
      data: newBlog,
    });
  } catch (error: any) {
    console.error("Error in Blog POST:", error);
    if (error?.code === 11000) {
      return NextResponse.json(
        { success: false, message: "A blog with this page URL already exists." },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { success: false, message: "Server error", error },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const blogs = await Blog.find().sort({ createdAt: -1 });
    return NextResponse.json({
      success: true,
      data: blogs,
    });
  } catch (error) {
    console.error("Error in Blog GET:", error);
    return NextResponse.json(
      { success: false, message: "Server error", error },
      { status: 500 }
    );
  }
}
