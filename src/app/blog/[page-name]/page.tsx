import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBlogBySlug, buildCanonicalUrl, type BlogDocument } from "./utils";
import BlogPostClient from "@/components/blog/BlogPostClient";

type PageProps = {
  params: Promise<{
    "page-name": string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { "page-name": pageName } = await params;
  
  // Use Promise.race to timeout the database query if it takes too long
  const blogPromise = getBlogBySlug(pageName, { metadataOnly: true });
  const timeoutPromise = new Promise<null>((resolve) => 
    setTimeout(() => resolve(null), 2000) // 2 second timeout
  );

  let blog: BlogDocument | null;
  try {
    blog = await Promise.race([blogPromise, timeoutPromise]);
  } catch (error) {
    console.error("Error fetching blog for metadata:", error);
    blog = null;
  }

  if (!blog) {
    // Return basic metadata immediately if query fails or times out
    const canonicalUrl = buildCanonicalUrl(pageName);
    return {
      title: "Blog | Eintransport Packers and Movers",
      description: "Read expert articles, moving guides, and packing tips on Eintransport blog.",
      keywords: ["packers and movers", "moving tips", "relocation guide"],
      authors: [{ name: "Eintransport Packers and Movers" }],
      creator: "Eintransport",
      publisher: "Eintransport Packers and Movers",
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: "Blog | Eintransport Packers and Movers",
        description: "Expert articles and guides for hassle-free relocation.",
        url: canonicalUrl,
        siteName: "Eintransport Packers and Movers",
        type: "article",
        locale: "en_IN",
      },
      twitter: {
        card: "summary_large_image",
        title: "Blog | Eintransport",
        description: "Expert relocation guides and tips from Eintransport",
        creator: "@eintransport",
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  }

  const title = blog.metaTitle || blog.title;
  const description =
    blog.metaDescription || `Read ${blog.title} on Eintransport blog.`;
  const keywords = blog.metaKeywords?.length ? blog.metaKeywords : undefined;
  const canonicalUrl = buildCanonicalUrl(blog.pageURL);

  // Use description directly since we're fetching metadataOnly
  const finalDescription = description || `Read ${blog.title} on Eintransport blog.`;

  return {
    title,
    description: finalDescription,
    keywords,
    authors: [{ name: "Eintransport Packers and Movers" }],
    creator: "Eintransport",
    publisher: "Eintransport Packers and Movers",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description: finalDescription,
      url: canonicalUrl,
      siteName: "Eintransport Packers and Movers",
      type: "article",
      publishedTime: blog.createdAt || undefined,
      modifiedTime: blog.updatedAt || undefined,
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: finalDescription,
      creator: "@eintransport",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

// Dynamic rendering configuration
export const revalidate = 300; // Revalidate every 5 minutes

export async function generateStaticParams() {
  try {
    const connectDB = (await import("@/config/db")).default;
    const Blog = (await import("@/models/Blog")).default;
    
    await connectDB();
    
    const blogs = await Blog.find().select('pageURL').lean();

    return blogs.map((blog: any) => ({
      "page-name": blog.pageURL,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { "page-name": pageName } = await params;
  const blog = await getBlogBySlug(pageName);

  if (!blog) {
    notFound();
  }

  const canonicalUrl = buildCanonicalUrl(blog.pageURL);

  return <BlogPostClient blog={blog} canonicalUrl={canonicalUrl} />;
} 