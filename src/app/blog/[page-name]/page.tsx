// File: src/app/blog/[page-name]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBlogBySlug, type BlogDocument } from "./utils";
import HeaderNavbar from "@/components/landingPage/header";
import Footer from "@/components/Footer";
import StaticUI from "@/components/StaticUI/StaticUI";
import FormPopUp from "@/components/PopUP/FormPop";

type PageProps = {
  params: Promise<{
    "page-name": string;
  }>;
};

const buildCanonicalUrl = (slug: string) => {
  const base = process.env.NEXT_PUBLIC_APP_URL || "https://eintransport.in";
  return `${base.replace(/\/$/, "")}/blog/${slug}`;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { "page-name": pageName } = await params;
  const blog = await getBlogBySlug(pageName);

  if (!blog) {
    return {
      title: "Blog Not Found | Eintransport",
      description: "The requested blog post could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = blog.metaTitle || blog.title;
  const description =
    blog.metaDescription || `Read ${blog.title} on Eintransport blog.`;
  const keywords = blog.metaKeywords?.length ? blog.metaKeywords : undefined;
  const canonicalUrl = buildCanonicalUrl(blog.pageURL);

  const plainTextContent = blog.content.replace(/<[^>]*>/g, "").slice(0, 160);
  const finalDescription = description || plainTextContent;

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

  const canonicalUrl = buildCanonicalUrl(blog.pageURL);

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
      {/* Enhanced Head Section for Better SEO Detection */}
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
              
              {/* Hidden metadata for SEO crawlers */}
              <meta itemProp="description" content={blog.metaDescription || blog.title} />
              <meta itemProp="author" content="Eintransport Packers and Movers" />
              <meta itemProp="publisher" content="Eintransport Packers and Movers" />
              {blog.metaKeywords && blog.metaKeywords.length > 0 && (
                <meta itemProp="keywords" content={blog.metaKeywords.join(", ")} />
              )}
              <link itemProp="url" href={canonicalUrl} />
              
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
                {formattedUpdated && formattedUpdated !== formattedCreated && (
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
                )}
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

            {/* Additional semantic markup */}
            <div className="hidden">
              <span itemProp="author" itemScope itemType="https://schema.org/Organization">
                <meta itemProp="name" content="Eintransport Packers and Movers" />
              </span>
              <span itemProp="publisher" itemScope itemType="https://schema.org/Organization">
                <meta itemProp="name" content="Eintransport Packers and Movers" />
                <span itemProp="logo" itemScope itemType="https://schema.org/ImageObject">
                  <meta itemProp="url" content={`${process.env.NEXT_PUBLIC_APP_URL || "https://eintransport.in"}/logo.png`} />
                </span>
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



// // File: src/app/blog/[page-name]/page.tsx
// import { notFound } from "next/navigation";
// import type { Metadata } from "next";
// import { getBlogBySlug } from "./utils";
// import HeaderNavbar from "@/components/landingPage/header";
// import Footer from "@/components/Footer";
// import StaticUI from "@/components/StaticUI/StaticUI";
// import FormPopUp from "@/components/PopUP/FormPop";

// type PageProps = {
//   params: Promise<{
//     "page-name": string;
//   }>;
// };

// const buildCanonicalUrl = (slug: string) => {
//   const base = process.env.NEXT_PUBLIC_APP_URL || "https://eintransport.in";
//   return `${base.replace(/\/$/, "")}/blog/${slug}`;
// };

// export async function generateMetadata({
//   params,
// }: PageProps): Promise<Metadata> {
//   const { "page-name": pageName } = await params;
//   const blog = await getBlogBySlug(pageName);

//   if (!blog) {
//     return {
//       title: "Blog Not Found | Eintransport",
//       description: "The requested blog post could not be found.",
//       robots: {
//         index: false,
//         follow: false,
//       },
//     };
//   }

//   const title = blog.metaTitle || blog.title;
//   const description =
//     blog.metaDescription || `Read ${blog.title} on Eintransport blog.`;
//   const keywords = blog.metaKeywords?.length ? blog.metaKeywords : undefined;
//   const canonicalUrl = buildCanonicalUrl(blog.pageURL);

//   const plainTextContent = blog.content.replace(/<[^>]*>/g, "").slice(0, 160);
//   const finalDescription = description || plainTextContent;

//   return {
//     title,
//     description: finalDescription,
//     keywords,
//     authors: [{ name: "Eintransport Packers and Movers" }],
//     creator: "Eintransport",
//     publisher: "Eintransport Packers and Movers",
//     alternates: {
//       canonical: canonicalUrl,
//     },
//     openGraph: {
//       title,
//       description: finalDescription,
//       url: canonicalUrl,
//       siteName: "Eintransport Packers and Movers",
//       type: "article",
//       publishedTime: blog.createdAt || undefined,
//       modifiedTime: blog.updatedAt || undefined,
//       locale: "en_IN",
//     },
//     twitter: {
//       card: "summary_large_image",
//       title,
//       description: finalDescription,
//       creator: "@eintransport",
//     },
//     robots: {
//       index: true,
//       follow: true,
//       googleBot: {
//         index: true,
//         follow: true,
//         "max-video-preview": -1,
//         "max-image-preview": "large",
//         "max-snippet": -1,
//       },
//     },
//   };
// }

// // Add dynamic rendering for development
// export const dynamic = 'force-dynamic';
// export const revalidate = 300; // Revalidate every 5 minutes

// export async function generateStaticParams() {
//   try {
//     const connectDB = (await import("@/config/db")).default;
//     const Blog = (await import("@/models/Blog")).default;
    
//     await connectDB();
    
//     const blogs = await Blog.find().select('pageURL').lean();

//     return blogs.map((blog: any) => ({
//       "page-name": blog.pageURL,
//     }));
//   } catch (error) {
//     console.error("Error generating static params:", error);
//     return [];
//   }
// }

// export default async function BlogPostPage({ params }: PageProps) {
//   const { "page-name": pageName } = await params;
//   const blog = await getBlogBySlug(pageName);

//   if (!blog) {
//     notFound();
//   }

//   const createdDate = blog.createdAt ? new Date(blog.createdAt) : null;
//   const updatedDate = blog.updatedAt ? new Date(blog.updatedAt) : null;

//   const formattedCreated =
//     createdDate && !isNaN(createdDate.getTime())
//       ? createdDate.toLocaleDateString("en-IN", {
//           year: "numeric",
//           month: "long",
//           day: "numeric",
//         })
//       : null;

//   const formattedUpdated =
//     updatedDate && !isNaN(updatedDate.getTime())
//       ? updatedDate.toLocaleDateString("en-IN", {
//           year: "numeric",
//           month: "long",
//           day: "numeric",
//         })
//       : null;

//   const canonicalUrl = buildCanonicalUrl(blog.pageURL);

//   const jsonLd = {
//     "@context": "https://schema.org",
//     "@type": "BlogPosting",
//     headline: blog.title,
//     description: blog.metaDescription || blog.title,
//     author: {
//       "@type": "Organization",
//       name: "Eintransport Packers and Movers",
//       url: process.env.NEXT_PUBLIC_APP_URL || "https://eintransport.in",
//     },
//     publisher: {
//       "@type": "Organization",
//       name: "Eintransport Packers and Movers",
//       logo: {
//         "@type": "ImageObject",
//         url: `${process.env.NEXT_PUBLIC_APP_URL || "https://eintransport.in"}/logo.png`,
//       },
//     },
//     datePublished: blog.createdAt,
//     dateModified: blog.updatedAt || blog.createdAt,
//     mainEntityOfPage: {
//       "@type": "WebPage",
//       "@id": canonicalUrl,
//     },
//     keywords: blog.metaKeywords?.join(", "),
//   };

//   return (
//     <>
//       {/* Enhanced Head Section for Better SEO Detection */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
//       />

//       <div className="min-h-screen bg-blue-50/50">
//         <HeaderNavbar />

//         <main className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
//           <article
//             className="bg-white rounded-lg mt-5 md:mt-15 px-6 py-8 shadow-md ring-1 ring-gray-200"
//             itemScope
//             itemType="https://schema.org/BlogPosting"
//           >
//             <header className="mb-6 border-b border-gray-200 pb-4">
//               <h1
//                 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-3"
//                 itemProp="headline"
//               >
//                 {blog.title}
//               </h1>
              
//               {/* Hidden metadata for SEO crawlers */}
//               <meta itemProp="description" content={blog.metaDescription || blog.title} />
//               <meta itemProp="author" content="Eintransport Packers and Movers" />
//               <meta itemProp="publisher" content="Eintransport Packers and Movers" />
//               {blog.metaKeywords && blog.metaKeywords.length > 0 && (
//                 <meta itemProp="keywords" content={blog.metaKeywords.join(", ")} />
//               )}
//               <link itemProp="url" href={canonicalUrl} />
              
//               <div className="flex flex-wrap gap-4 text-sm text-gray-600">
//                 {formattedCreated && (
//                   <time
//                     dateTime={blog.createdAt || ""}
//                     itemProp="datePublished"
//                     className="flex items-center gap-1"
//                   >
//                     <svg
//                       className="w-4 h-4"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                       />
//                     </svg>
//                     Published: {formattedCreated}
//                   </time>
//                 )}
//                 {formattedUpdated && formattedUpdated !== formattedCreated && (
//                   <time
//                     dateTime={blog.updatedAt || ""}
//                     itemProp="dateModified"
//                     className="flex items-center gap-1"
//                   >
//                     <svg
//                       className="w-4 h-4"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
//                       />
//                     </svg>
//                     Updated: {formattedUpdated}
//                   </time>
//                 )}
//               </div>
//             </header>

//             <section
//               className="prose prose-blue prose-lg max-w-none
//                 prose-headings:font-bold prose-headings:text-gray-900
//                 prose-p:text-gray-700 prose-p:leading-relaxed
//                 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
//                 prose-img:rounded-lg prose-img:shadow-md
//                 prose-blockquote:border-l-4 prose-blockquote:border-blue-500
//                 prose-blockquote:bg-blue-50 prose-blockquote:py-2 prose-blockquote:px-4"
//               itemProp="articleBody"
//               dangerouslySetInnerHTML={{ __html: blog.content }}
//             />

//             {/* Additional semantic markup */}
//             <div className="hidden">
//               <span itemProp="author" itemScope itemType="https://schema.org/Organization">
//                 <meta itemProp="name" content="Eintransport Packers and Movers" />
//               </span>
//               <span itemProp="publisher" itemScope itemType="https://schema.org/Organization">
//                 <meta itemProp="name" content="Eintransport Packers and Movers" />
//                 <span itemProp="logo" itemScope itemType="https://schema.org/ImageObject">
//                   <meta itemProp="url" content={`${process.env.NEXT_PUBLIC_APP_URL || "https://eintransport.in"}/logo.png`} />
//                 </span>
//               </span>
//             </div>
//           </article>
//         </main>

//         <Footer />
//         <StaticUI />
//         <FormPopUp />
//       </div>
//     </>
//   );
// }




// // import { notFound } from "next/navigation";
// // import type { Metadata } from "next";
// // import { getBlogBySlug, type BlogDocument } from "./utils";
// // import HeaderNavbar from "@/components/landingPage/header";
// // import Footer from "@/components/Footer";
// // import StaticUI from "@/components/StaticUI/StaticUI";
// // import FormPopUp from "@/components/PopUP/FormPop";

// // type PageProps = {
// //   params: Promise<{
// //     "page-name": string;
// //   }>;
// // };

// // const buildCanonicalUrl = (slug: string) => {
// //   const base = process.env.NEXT_PUBLIC_APP_URL || "https://eintransport.in";
// //   return `${base.replace(/\/$/, "")}/blog/${slug}`;
// // };

// // export async function generateMetadata({
// //   params,
// // }: PageProps): Promise<Metadata> {
// //   const { "page-name": pageName } = await params;
// //   const blog = await getBlogBySlug(pageName);

// //   if (!blog) {
// //     return {
// //       title: "Blog Not Found | Eintransport",
// //       description: "The requested blog post could not be found.",
// //       robots: {
// //         index: false,
// //         follow: false,
// //       },
// //     };
// //   }

// //   const title = blog.metaTitle || blog.title;
// //   const description =
// //     blog.metaDescription || `Read ${blog.title} on Eintransport blog.`;
// //   const keywords = blog.metaKeywords?.length ? blog.metaKeywords : undefined;
// //   const canonicalUrl = buildCanonicalUrl(blog.pageURL);

// //   const plainTextContent = blog.content.replace(/<[^>]*>/g, "").slice(0, 160);
// //   const finalDescription = description || plainTextContent;

// //   return {
// //     title,
// //     description: finalDescription,
// //     keywords,
// //     authors: [{ name: "Eintransport Packers and Movers" }],
// //     creator: "Eintransport",
// //     publisher: "Eintransport Packers and Movers",
// //     alternates: {
// //       canonical: canonicalUrl,
// //     },
// //     openGraph: {
// //       title,
// //       description: finalDescription,
// //       url: canonicalUrl,
// //       siteName: "Eintransport Packers and Movers",
// //       type: "article",
// //       publishedTime: blog.createdAt || undefined,
// //       modifiedTime: blog.updatedAt || undefined,
// //       locale: "en_IN",
// //     },
// //     twitter: {
// //       card: "summary_large_image",
// //       title,
// //       description: finalDescription,
// //       creator: "@eintransport",
// //     },
// //     robots: {
// //       index: true,
// //       follow: true,
// //       googleBot: {
// //         index: true,
// //         follow: true,
// //         "max-video-preview": -1,
// //         "max-image-preview": "large",
// //         "max-snippet": -1,
// //       },
// //     },
// //   };
// // }

// // export async function generateStaticParams() {
// //   try {
// //     const connectDB = (await import("@/config/db")).default;
// //     const Blog = (await import("@/models/Blog")).default;
    
// //     await connectDB();
    
// //     const blogs = await Blog.find().select('pageURL').lean();

// //     return blogs.map((blog: any) => ({
// //       "page-name": blog.pageURL,
// //     }));
// //   } catch (error) {
// //     console.error("Error generating static params:", error);
// //     return [];
// //   }
// // }

// // export default async function BlogPostPage({ params }: PageProps) {
// //   const { "page-name": pageName } = await params;
// //   const blog = await getBlogBySlug(pageName);

// //   if (!blog) {
// //     notFound();
// //   }

// //   const createdDate = blog.createdAt ? new Date(blog.createdAt) : null;
// //   const updatedDate = blog.updatedAt ? new Date(blog.updatedAt) : null;

// //   const formattedCreated =
// //     createdDate && !isNaN(createdDate.getTime())
// //       ? createdDate.toLocaleDateString("en-IN", {
// //           year: "numeric",
// //           month: "long",
// //           day: "numeric",
// //         })
// //       : null;

// //   const formattedUpdated =
// //     updatedDate && !isNaN(updatedDate.getTime())
// //       ? updatedDate.toLocaleDateString("en-IN", {
// //           year: "numeric",
// //           month: "long",
// //           day: "numeric",
// //         })
// //       : null;

// //   const jsonLd = {
// //     "@context": "https://schema.org",
// //     "@type": "BlogPosting",
// //     headline: blog.title,
// //     description: blog.metaDescription || blog.title,
// //     author: {
// //       "@type": "Organization",
// //       name: "Eintransport Packers and Movers",
// //       url: process.env.NEXT_PUBLIC_APP_URL || "https://eintransport.in",
// //     },
// //     publisher: {
// //       "@type": "Organization",
// //       name: "Eintransport Packers and Movers",
// //       logo: {
// //         "@type": "ImageObject",
// //         url: `${process.env.NEXT_PUBLIC_APP_URL || "https://eintransport.in"}/logo.png`,
// //       },
// //     },
// //     datePublished: blog.createdAt,
// //     dateModified: blog.updatedAt || blog.createdAt,
// //     mainEntityOfPage: {
// //       "@type": "WebPage",
// //       "@id": buildCanonicalUrl(blog.pageURL),
// //     },
// //     keywords: blog.metaKeywords?.join(", "),
// //   };

// //   return (
// //     <div className="min-h-screen bg-blue-50/50">
// //       <script
// //         type="application/ld+json"
// //         dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
// //       />

// //       <HeaderNavbar />

// //       <main className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
// //         <article
// //           className="bg-white rounded-lg mt-5 md:mt-15 px-6 py-8 shadow-md ring-1 ring-gray-200"
// //           itemScope
// //           itemType="https://schema.org/BlogPosting"
// //         >
// //           <header className="mb-6 border-b border-gray-200 pb-4">
// //             <h1
// //               className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-3"
// //               itemProp="headline"
// //             >
// //               {blog.title}
// //             </h1>
// //             <div className="flex flex-wrap gap-4 text-sm text-gray-600">
// //               {formattedCreated && (
// //                 <time
// //                   dateTime={blog.createdAt || ""}
// //                   itemProp="datePublished"
// //                   className="flex items-center gap-1"
// //                 >
// //                   <svg
// //                     className="w-4 h-4"
// //                     fill="none"
// //                     stroke="currentColor"
// //                     viewBox="0 0 24 24"
// //                   >
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       strokeWidth={2}
// //                       d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
// //                     />
// //                   </svg>
// //                   Published: {formattedCreated}
// //                 </time>
// //               )}
// //               {formattedUpdated && formattedUpdated !== formattedCreated && (
// //                 <time
// //                   dateTime={blog.updatedAt || ""}
// //                   itemProp="dateModified"
// //                   className="flex items-center gap-1"
// //                 >
// //                   <svg
// //                     className="w-4 h-4"
// //                     fill="none"
// //                     stroke="currentColor"
// //                     viewBox="0 0 24 24"
// //                   >
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       strokeWidth={2}
// //                       d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
// //                     />
// //                   </svg>
// //                   Updated: {formattedUpdated}
// //                 </time>
// //               )}
// //             </div>
// //           </header>

// //           <section
// //             className="prose prose-blue prose-lg max-w-none
// //               prose-headings:font-bold prose-headings:text-gray-900
// //               prose-p:text-gray-700 prose-p:leading-relaxed
// //               prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
// //               prose-img:rounded-lg prose-img:shadow-md
// //               prose-blockquote:border-l-4 prose-blockquote:border-blue-500
// //               prose-blockquote:bg-blue-50 prose-blockquote:py-2 prose-blockquote:px-4"
// //             itemProp="articleBody"
// //             dangerouslySetInnerHTML={{ __html: blog.content }}
// //           />

// //           <meta itemProp="author" content="Eintransport Packers and Movers" />
// //           <meta
// //             itemProp="publisher"
// //             content="Eintransport Packers and Movers"
// //           />
// //           {blog.metaKeywords && (
// //             <meta itemProp="keywords" content={blog.metaKeywords.join(", ")} />
// //           )}
// //         </article>

// //       </main>

// //       <Footer />
// //       <StaticUI />
// //       <FormPopUp />
// //     </div>
// //   );
// // }