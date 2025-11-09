import type { ReactNode } from "react";
import type { Metadata } from "next";
import { getBlogBySlug } from "./utils";

type LayoutParams = {
  params: {
    "page-name": string;
  };
};

const buildCanonicalUrl = (slug: string) => {
  const base = process.env.NEXT_PUBLIC_APP_URL || "";
  if (!base) return undefined;
  return `${base.replace(/\/$/, "")}/blog/${slug}`;
};

export async function generateMetadata({
  params,
}: LayoutParams): Promise<Metadata> {
  const blog = await getBlogBySlug(params["page-name"]);

  if (!blog) {
    return {
      title: "Blog",
    };
  }

  const title = blog.metaTitle || blog.title;
  const description =
    blog.metaDescription || `Read ${blog.title} on our blog.`;

  return {
    title,
    description,
    keywords: blog.metaKeywords?.length ? blog.metaKeywords : undefined,
    alternates: {
      canonical: buildCanonicalUrl(blog.pageURL),
    },
    openGraph: {
      title,
      description,
      url: buildCanonicalUrl(blog.pageURL),
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function BlogPostLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}

