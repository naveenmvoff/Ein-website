"use client";

import type { BlogDocument } from "@/app/blog/[page-name]/utils";
import HeaderNavbar from "@/components/landingPage/header";
import Footer from "@/components/Footer";
import StaticUI from "@/components/StaticUI/StaticUI";
import FormPopUp from "@/components/PopUP/FormPop";

interface BlogPostClientProps {
  blog: BlogDocument;
  canonicalUrl: string;
}

export default function BlogPostClient({
  blog,
  canonicalUrl,
}: BlogPostClientProps) {
  const createdDate = blog.createdAt ? new Date(blog.createdAt) : null;
  const updatedDate = blog.updatedAt ? new Date(blog.updatedAt) : null;

  const formattedCreated =
    createdDate && !isNaN(createdDate.getTime())
      ? createdDate.toLocaleDateString("en-IN", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : null;

  const formattedUpdated =
    updatedDate && !isNaN(updatedDate.getTime())
      ? updatedDate.toLocaleDateString("en-IN", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.metaDescription || blog.title,
    author: {
      "@type": "Organization",
      name: "Eintransport Packers and Movers",
      url: process.env.NEXT_PUBLIC_APP_URL || "https://eintransport.in",
    },
    publisher: {
      "@type": "Organization",
      name: "Eintransport Packers and Movers",
      logo: {
        "@type": "ImageObject",
        url: `${process.env.NEXT_PUBLIC_APP_URL || "https://eintransport.in"}/logo.png`,
      },
    },
    datePublished: blog.createdAt,
    dateModified: blog.updatedAt || blog.createdAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    keywords: blog.metaKeywords?.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-blue-50/50">
        <HeaderNavbar />

        <main className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <article
            className="bg-white rounded-lg mt-5 md:mt-15 px-6 py-8 shadow-md ring-1 ring-gray-200"
            itemScope
            itemType="https://schema.org/BlogPosting"
          >
            <header className="mb-6 border-b border-gray-200 pb-4">
              <h1
                className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-3"
                itemProp="headline"
              >
                {blog.title}
              </h1>

              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                {formattedCreated && (
                  <time
                    dateTime={blog.createdAt || ""}
                    itemProp="datePublished"
                    className="flex items-center gap-1"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    Published: {formattedCreated}
                  </time>
                )}
                {/* {formattedUpdated && formattedUpdated !== formattedCreated && (
                  <time
                    dateTime={blog.updatedAt || ""}
                    itemProp="dateModified"
                    className="flex items-center gap-1"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    Updated: {formattedUpdated}
                  </time>
                )} */}
              </div>
            </header>

            <section
              className="prose prose-blue prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-gray-900
                prose-p:text-gray-700 prose-p:leading-relaxed
                prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                prose-img:rounded-lg prose-img:shadow-md
                prose-blockquote:border-l-4 prose-blockquote:border-blue-500
                prose-blockquote:bg-blue-50 prose-blockquote:py-2 prose-blockquote:px-4"
              itemProp="articleBody"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Hidden structured data for search engines */}
            <div
              className="hidden"
              itemProp="author"
              itemScope
              itemType="https://schema.org/Organization"
            >
              <span itemProp="name">Eintransport Packers and Movers</span>
            </div>
            <div
              className="hidden"
              itemProp="publisher"
              itemScope
              itemType="https://schema.org/Organization"
            >
              <span itemProp="name">Eintransport Packers and Movers</span>
              <span itemProp="logo" itemScope itemType="https://schema.org/ImageObject">
                <meta
                  itemProp="url"
                  content={`${process.env.NEXT_PUBLIC_APP_URL || "https://eintransport.in"}/logo.png`}
                />
              </span>
            </div>
          </article>
        </main>

        <Footer />
        <StaticUI />
        <FormPopUp />
      </div>
    </>
  );
}

