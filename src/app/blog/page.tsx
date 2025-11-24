// File: src/app/blog/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import HeaderNavbar from "@/components/landingPage/header";
import Footer from "@/components/Footer";
import StaticUI from "@/components/StaticUI/StaticUI";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog | Packing & Moving Tips | Eintransport Packers and Movers",
  description:
    "Explore expert articles, moving guides, and packing tips curated by professionals to help you relocate smoothly. Read our latest blog posts on home shifting, office relocation, and more.",
  keywords: [
    "packing tips",
    "moving guides",
    "relocation advice",
    "packers and movers blog",
    "home shifting tips",
    "office relocation guide",
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL || "https://eintransport.in"
      }/blog`,
  },
  openGraph: {
    title: "Blog | Packing & Moving Tips | Eintransport",
    description:
      "Expert articles and guides for hassle-free relocation. Learn from professionals.",
    url: `${process.env.NEXT_PUBLIC_APP_URL || "https://eintransport.in"}/blog`,
    siteName: "Eintransport Packers and Movers",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Packing & Moving Tips",
    description: "Expert relocation guides and tips from Eintransport",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const revalidate = 300;

async function getBlogPosts() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/admin/blog?includeContent=false`, {
      next: { revalidate: 300 },
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Failed to fetch blogs:", res.status, res.statusText);
      return [];
    }

    const json = await res.json();
    return json?.data.filter((i: any) => i.status == "Active") || [];
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export default async function BlogPage() {
  const blogs = await getBlogPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Eintransport Packers and Movers Blog",
    description:
      "Expert articles, moving guides, and packing tips for smooth relocation",
    url: `${process.env.NEXT_PUBLIC_APP_URL || "https://eintransport.in"}/blog`,
    publisher: {
      "@type": "Organization",
      name: "Eintransport Packers and Movers",
      logo: {
        "@type": "ImageObject",
        url: `${process.env.NEXT_PUBLIC_APP_URL || "https://eintransport.in"
          }/logo.png`,
      },
    },
    blogPost: blogs
      .filter((i: any) => i.status == "Active")
      .map((blog: any) => ({
        "@type": "BlogPosting",
        headline: blog.title,
        description: blog.metaDescription || blog.title,
        datePublished: blog.createdAt,
        dateModified: blog.updatedAt || blog.createdAt,
        url: `${process.env.NEXT_PUBLIC_APP_URL || "https://eintransport.in"
          }/blog/${blog.pageURL}`,
      })),
  };
  console.log("blogs", blogs);

  return (
    <div className="bg-blue-50/50 min-h-screen">
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeaderNavbar />

      <section
        className="max-w-6xl mx-auto pt-20 px-4 py-10"
        itemScope
        itemType="https://schema.org/Blog"
      >
        <header className="mb-8">
          <h1
            className="text-3xl md:text-4xl font-bold mb-3 text-gray-900"
            itemProp="name"
          >
            Latest Blog Posts
          </h1>
          <p
            className="text-gray-600 text-lg mb-3 md:mb-5 max-w-3xl"
            itemProp="description"
          >
            Explore expert articles, moving guides, and packing tips curated by
            professionals to help you relocate smoothly.
          </p>
        </header>

        {blogs.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <svg
              className="w-16 h-16 mx-auto mb-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              No blog posts available
            </h2>
            <p className="text-gray-600">
              Check back soon for expert moving tips and guides!
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog: any) => (
              <article
                key={blog._id}
                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                <Link
                  href={`/blog/${blog.pageURL}`}
                  className="
   
  "
                >
                  {/* Thumbnail */}
                  <div className="relative w-full h-48 bg-gray-100 flex items-center justify-center">
                    {blog.thumbnail ? (
                      <Image
                        src={
                          blog.thumbnail.startsWith("data:")
                            ? blog.thumbnail
                            : `data:image/jpeg;base64,${blog.thumbnail}`
                        }
                        alt={blog.title}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-300"
                        sizes="100vw"
                      />
                    ) : (
                      <h2
                        className="text-xl font-semibold text-gray-900 px-4 text-center"
                        itemProp="headline"
                      >
                        {blog.title}
                      </h2>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow p-5">
                    {/* Title (visible only if image exists) */}
                    {blog.thumbnail && (
                      <h2
                        className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition"
                        itemProp="headline"
                      >
                        {blog.title}
                      </h2>
                    )}

                    {/* Description */}
                    {blog.metaDescription && (
                      <p
                        className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow"
                        itemProp="description"
                      >
                        {blog.metaDescription}
                      </p>
                    )}

                    {/* Footer */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                      <time
                        className="text-xs text-gray-500 flex items-center gap-1"
                        dateTime={blog.updatedAt}
                        itemProp="datePublished"
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
                            strokeWidth="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>

                        {new Date(blog.updatedAt).toLocaleDateString("en-IN", {
                          timeZone: "Asia/Kolkata",
                          year: "numeric",
                          month: "short",
                          day: "2-digit",
                        })}
                      </time>

                      <span className="text-blue-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read More
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </div>

                    <meta
                      itemProp="author"
                      content="Eintransport Packers and Movers"
                    />
                    <meta itemProp="dateModified" content={blog.updatedAt} />
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>

      <StaticUI />
      <Footer />
    </div>
  );
}

// // File: src/app/blog/page.tsx
// import Link from "next/link";
// import type { Metadata } from "next";
// import HeaderNavbar from "@/components/landingPage/header";
// import Footer from "@/components/Footer";
// import StaticUI from "@/components/StaticUI/StaticUI";

// export const metadata: Metadata = {
//   title: "Blog | Packing & Moving Tips | Eintransport Packers and Movers",
//   description:
//     "Explore expert articles, moving guides, and packing tips curated by professionals to help you relocate smoothly. Read our latest blog posts on home shifting, office relocation, and more.",
//   keywords: [
//     "packing tips",
//     "moving guides",
//     "relocation advice",
//     "packers and movers blog",
//     "home shifting tips",
//     "office relocation guide",
//   ],
//   alternates: {
//     canonical: `${process.env.NEXT_PUBLIC_APP_URL || "https://eintransport.in"}/blog`,
//   },
//   openGraph: {
//     title: "Blog | Packing & Moving Tips | Eintransport",
//     description:
//       "Expert articles and guides for hassle-free relocation. Learn from professionals.",
//     url: `${process.env.NEXT_PUBLIC_APP_URL || "https://eintransport.in"}/blog`,
//     siteName: "Eintransport Packers and Movers",
//     type: "website",
//     locale: "en_IN",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Blog | Packing & Moving Tips",
//     description: "Expert relocation guides and tips from Eintransport",
//   },
//   robots: {
//     index: true,
//     follow: true,
//   },
// };

// export const revalidate = 300; // Revalidate every 5 minutes

// async function getBlogPosts() {
//   try {
//     const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
//     // Only fetch necessary fields for listing page to reduce payload size
//     const res = await fetch(
//       `${baseUrl}/api/admin/sdkjfhsdkfjhdskjfhkjsdfhkjsdfhdskjfhdskjfh/dhkjfhksjdhfkjsdfhkjsdfhkjdsfh/blog?fields=_id title metaDescription pageURL createdAt updatedAt`,
//       {
//         next: { revalidate: 300 },
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     if (!res.ok) {
//       console.error("Failed to fetch blogs:", res.status, res.statusText);
//       return [];
//     }

//     const json = await res.json();
//     return json?.data || [];
//   } catch (error) {
//     console.error("Error fetching blog posts:", error);
//     return [];
//   }
// }

// export default async function BlogPage() {
//   const blogs = await getBlogPosts();

//   // JSON-LD structured data for blog list
//   const jsonLd = {
//     "@context": "https://schema.org",
//     "@type": "Blog",
//     name: "Eintransport Packers and Movers Blog",
//     description:
//       "Expert articles, moving guides, and packing tips for smooth relocation",
//     url: `${process.env.NEXT_PUBLIC_APP_URL || "https://eintransport.in"}/blog`,
//     publisher: {
//       "@type": "Organization",
//       name: "Eintransport Packers and Movers",
//       logo: {
//         "@type": "ImageObject",
//         url: `${process.env.NEXT_PUBLIC_APP_URL || "https://eintransport.in"}/logo.png`,
//       },
//     },
//     blogPost: blogs.map((blog: any) => ({
//       "@type": "BlogPosting",
//       headline: blog.title,
//       description: blog.metaDescription || blog.title,
//       datePublished: blog.createdAt,
//       dateModified: blog.updatedAt || blog.createdAt,
//       url: `${process.env.NEXT_PUBLIC_APP_URL || "https://eintransport.in"}/blog/${blog.pageURL}`,
//     })),
//   };

//   return (
//     <div className="bg-blue-50/50 min-h-screen">
//       {/* JSON-LD structured data */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
//       />

//       <HeaderNavbar />

//       <section
//         className="max-w-6xl mx-auto pt-20 px-4 py-10"
//         itemScope
//         itemType="https://schema.org/Blog"
//       >
//         {/* Breadcrumb */}
//         <nav
//           className="mb-6 text-sm text-gray-600"
//           aria-label="Breadcrumb"
//           itemScope
//           itemType="https://schema.org/BreadcrumbList"
//         >
//           <ol className="flex items-center gap-2">
//             <li
//               itemProp="itemListElement"
//               itemScope
//               itemType="https://schema.org/ListItem"
//             >
//               <a
//                 href="/"
//                 itemProp="item"
//                 className="hover:text-blue-600 transition"
//               >
//                 <span itemProp="name">Home</span>
//               </a>
//               <meta itemProp="position" content="1" />
//             </li>
//             <li className="text-gray-400">/</li>
//             <li
//               itemProp="itemListElement"
//               itemScope
//               itemType="https://schema.org/ListItem"
//             >
//               <span itemProp="name" className="text-gray-900">
//                 Blog
//               </span>
//               <meta itemProp="position" content="2" />
//             </li>
//           </ol>
//         </nav>

//         <header className="mb-8">
//           <h1
//             className="text-3xl md:text-4xl font-bold mb-3 text-gray-900"
//             itemProp="name"
//           >
//             Latest Blog Posts
//           </h1>
//           <p
//             className="text-gray-600 text-lg mb-3 md:mb-5 max-w-3xl"
//             itemProp="description"
//           >
//             Explore expert articles, moving guides, and packing tips curated by
//             professionals to help you relocate smoothly.
//           </p>
//         </header>

//         {blogs.length === 0 ? (
//           <div className="bg-white rounded-lg shadow-sm p-12 text-center">
//             <svg
//               className="w-16 h-16 mx-auto mb-4 text-gray-400"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//               />
//             </svg>
//             <h2 className="text-xl font-semibold text-gray-900 mb-2">
//               No blog posts available
//             </h2>
//             <p className="text-gray-600">
//               Check back soon for expert moving tips and guides!
//             </p>
//           </div>
//         ) : (
//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {blogs.map((blog: any) => (
//               <article
//                 key={blog._id}
//                 className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
//                 itemScope
//                 itemType="https://schema.org/BlogPosting"
//               >
//                 <Link
//                   href={`/blog/${blog.pageURL}`}
//                   className="block p-6 h-full flex flex-col"
//                 >
//                   <h2
//                     className="text-xl font-semibold mb-3 text-gray-900 hover:text-blue-600 transition line-clamp-2"
//                     itemProp="headline"
//                   >
//                     {blog.title}
//                   </h2>

//                   {blog.metaDescription && (
//                     <p
//                       className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow"
//                       itemProp="description"
//                     >
//                       {blog.metaDescription}
//                     </p>
//                   )}

//                   <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
//                     <time
//                       className="text-xs text-gray-500 flex items-center gap-1"
//                       dateTime={blog.updatedAt}
//                       itemProp="datePublished"
//                     >
//                       <svg
//                         className="w-4 h-4"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                         />
//                       </svg>
//                       {new Date(blog.updatedAt).toLocaleDateString("en-IN", {
//                         timeZone: "Asia/Kolkata",
//                         year: "numeric",
//                         month: "short",
//                         day: "2-digit",
//                       })}
//                     </time>

//                     <span className="text-blue-600 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
//                       Read More
//                       <svg
//                         className="w-4 h-4"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M9 5l7 7-7 7"
//                         />
//                       </svg>
//                     </span>
//                   </div>

//                   <meta itemProp="author" content="Eintransport Packers and Movers" />
//                   <meta itemProp="dateModified" content={blog.updatedAt} />
//                 </Link>
//               </article>
//             ))}
//           </div>
//         )}
//       </section>

//       <StaticUI />
//       <Footer />
//     </div>
//   );
// }

// // // File: src/app/blog/page.tsx
// // import Link from "next/link";
// // import type { Metadata } from "next";
// // import HeaderNavbar from "@/components/landingPage/header";
// // import Footer from "@/components/Footer";
// // import StaticUI from "@/components/StaticUI/StaticUI";

// // export const metadata: Metadata = {
// //   title: "Blog | Packing & Moving Tips | Eintransport Packers and Movers",
// //   description:
// //     "Explore expert articles, moving guides, and packing tips curated by professionals to help you relocate smoothly. Read our latest blog posts on home shifting, office relocation, and more.",
// //   keywords: [
// //     "packing tips",
// //     "moving guides",
// //     "relocation advice",
// //     "packers and movers blog",
// //     "home shifting tips",
// //     "office relocation guide",
// //   ],
// //   alternates: {
// //     canonical: `${process.env.NEXT_PUBLIC_APP_URL || "https://eintransport.in"}/blog`,
// //   },
// //   openGraph: {
// //     title: "Blog | Packing & Moving Tips | Eintransport",
// //     description:
// //       "Expert articles and guides for hassle-free relocation. Learn from professionals.",
// //     url: `${process.env.NEXT_PUBLIC_APP_URL || "https://eintransport.in"}/blog`,
// //     siteName: "Eintransport Packers and Movers",
// //     type: "website",
// //     locale: "en_IN",
// //   },
// //   twitter: {
// //     card: "summary_large_image",
// //     title: "Blog | Packing & Moving Tips",
// //     description: "Expert relocation guides and tips from Eintransport",
// //   },
// //   robots: {
// //     index: true,
// //     follow: true,
// //   },
// // };

// // export const revalidate = 300; // Revalidate every 5 minutes

// // async function getBlogPosts() {
// //   try {
// //     const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
// //     const res = await fetch(`${baseUrl}/api/admin/sdkjfhsdkfjhdskjfhkjsdfhkjsdfhdskjfhdskjfh/dhkjfhksjdhfkjsdfhkjsdfhkjdsfh/blog`, {
// //       next: { revalidate: 300 },
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //     });

// //     if (!res.ok) {
// //       console.error("Failed to fetch blogs:", res.status, res.statusText);
// //       return [];
// //     }

// //     const json = await res.json();
// //     return json?.data || [];
// //   } catch (error) {
// //     console.error("Error fetching blog posts:", error);
// //     return [];
// //   }
// // }

// // export default async function BlogPage() {
// //   const blogs = await getBlogPosts();

// //   // JSON-LD structured data for blog list
// //   const jsonLd = {
// //     "@context": "https://schema.org",
// //     "@type": "Blog",
// //     name: "Eintransport Packers and Movers Blog",
// //     description:
// //       "Expert articles, moving guides, and packing tips for smooth relocation",
// //     url: `${process.env.NEXT_PUBLIC_APP_URL || "https://eintransport.in"}/blog`,
// //     publisher: {
// //       "@type": "Organization",
// //       name: "Eintransport Packers and Movers",
// //       logo: {
// //         "@type": "ImageObject",
// //         url: `${process.env.NEXT_PUBLIC_APP_URL || "https://eintransport.in"}/logo.png`,
// //       },
// //     },
// //     blogPost: blogs.map((blog: any) => ({
// //       "@type": "BlogPosting",
// //       headline: blog.title,
// //       description: blog.metaDescription || blog.title,
// //       datePublished: blog.createdAt,
// //       dateModified: blog.updatedAt || blog.createdAt,
// //       url: `${process.env.NEXT_PUBLIC_APP_URL || "https://eintransport.in"}/blog/${blog.pageURL}`,
// //     })),
// //   };

// //   return (
// //     <div className="bg-blue-50/50 min-h-screen">
// //       <script
// //         type="application/ld+json"
// //         dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
// //       />

// //       <HeaderNavbar />

// //       <section
// //         className="max-w-6xl mx-auto pt-20 px-4 py-10"
// //         itemScope
// //         itemType="https://schema.org/Blog"
// //       >

// //         <header className="mb-8">
// //           <h1
// //             className="text-3xl md:text-4xl font-bold mb-3 text-gray-900"
// //             itemProp="name"
// //           >
// //             Latest Blog Posts
// //           </h1>
// //           <p
// //             className="text-gray-600 text-lg mb-3 md:mb-5 max-w-3xl"
// //             itemProp="description"
// //           >
// //             Explore expert articles, moving guides, and packing tips curated by
// //             professionals to help you relocate smoothly.
// //           </p>
// //         </header>

// //         {blogs.length === 0 ? (
// //           <div className="bg-blue-50/50 rounded-lg shadow-sm p-12 text-center">
// //             <svg
// //               className="w-16 h-16 mx-auto mb-4 text-gray-400"
// //               fill="none"
// //               stroke="currentColor"
// //               viewBox="0 0 24 24"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth={2}
// //                 d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
// //               />
// //             </svg>
// //             <h2 className="text-xl font-semibold text-gray-900 mb-2">
// //               No blog posts available
// //             </h2>
// //             <p className="text-gray-600">
// //               Check back soon for expert moving tips and guides!
// //             </p>
// //           </div>
// //         ) : (
// //           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
// //             {blogs.map((blog: any) => (
// //               <article
// //                 key={blog._id}
// //                 className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
// //                 itemScope
// //                 itemType="https://schema.org/BlogPosting"
// //               >
// //                 <Link
// //                   href={`/blog/${blog.pageURL}`}
// //                   className="block p-6 h-full flex flex-col"
// //                 >
// //                   <h2
// //                     className="text-xl font-semibold mb-3 text-gray-900 hover:text-blue-600 transition line-clamp-2"
// //                     itemProp="headline"
// //                   >
// //                     {blog.title}
// //                   </h2>

// //                   {blog.metaDescription && (
// //                     <p
// //                       className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow"
// //                       itemProp="description"
// //                     >
// //                       {blog.metaDescription}
// //                     </p>
// //                   )}

// //                   <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
// //                     <time
// //                       className="text-xs text-gray-500 flex items-center gap-1"
// //                       dateTime={blog.updatedAt}
// //                       itemProp="datePublished"
// //                     >
// //                       <svg
// //                         className="w-4 h-4"
// //                         fill="none"
// //                         stroke="currentColor"
// //                         viewBox="0 0 24 24"
// //                       >
// //                         <path
// //                           strokeLinecap="round"
// //                           strokeLinejoin="round"
// //                           strokeWidth={2}
// //                           d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
// //                         />
// //                       </svg>
// //                       {new Date(blog.updatedAt).toLocaleDateString("en-IN", {
// //                         timeZone: "Asia/Kolkata",
// //                         year: "numeric",
// //                         month: "short",
// //                         day: "2-digit",
// //                       })}
// //                     </time>

// //                     <span className="text-blue-600 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
// //                       Read More
// //                       <svg
// //                         className="w-4 h-4"
// //                         fill="none"
// //                         stroke="currentColor"
// //                         viewBox="0 0 24 24"
// //                       >
// //                         <path
// //                           strokeLinecap="round"
// //                           strokeLinejoin="round"
// //                           strokeWidth={2}
// //                           d="M9 5l7 7-7 7"
// //                         />
// //                       </svg>
// //                     </span>
// //                   </div>

// //                   <meta itemProp="author" content="Eintransport Packers and Movers" />
// //                   <meta itemProp="dateModified" content={blog.updatedAt} />
// //                 </Link>
// //               </article>
// //             ))}
// //           </div>
// //         )}
// //       </section>

// //       <StaticUI />
// //       <Footer />
// //     </div>
// //   );
// // }

// // // import Link from "next/link";
// // // import HeaderNavbar from "@/components/landingPage/header";
// // // import Footer from "@/components/Footer";
// // // import StaticUI from "@/components/StaticUI/StaticUI";

// // // export default async function BlogPage() {
// // //   const res = await fetch("http://localhost:3000/api/admin/sdkjfhsdkfjhdskjfhkjsdfhkjsdfhdskjfhdskjfh/dhkjfhksjdhfkjsdfhkjsdfhkjdsfh/blog", {
// // //     next: { revalidate: 10 },
// // //   });

// // //   const json = await res.json();
// // //   console.log("Blog list fetch response:", json);
// // //   const blogs = json?.data || [];
// // //   console.log("Blogs array:", blogs);

// // //   return (
// // //     <div className="bg-blue-50/50">
// // //       <HeaderNavbar />

// // //       <section className="max-w-5xl mx-auto pt-20 px-4 py-10">
// // //         <h1 className="text-3xl font-bold mb-1">Latest Blog Posts</h1>

// // //         <p className="text-gray-600 mb-3 md:mb-5">
// // //           Explore expert articles, moving guides, and packing tips curated by
// // //           professionals to help you relocate smoothly.
// // //         </p>

// // //         <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
// // //           {blogs.length === 0 ? (
// // //             <p>No blogs found.</p>
// // //           ) : (
// // //             <>
// // //               {blogs.map((blog: any) => (
// // //                 <Link
// // //                   key={blog._id}
// // //                   href={`/blog/${blog.pageURL}`}
// // //                   className="block border p-5 rounded-lg shadow-sm hover:shadow-md transition hover:bg-gray-50 cursor-pointer"
// // //                 >
// // //                   <h2 className="text-xl font-semibold">{blog.title}</h2>
// // //                   <p className="text-sm text-gray-500">
// // //                     {new Date(blog.updatedAt).toLocaleString("en-IN", {
// // //                       timeZone: "Asia/Kolkata",
// // //                       year: "numeric",
// // //                       month: "short",
// // //                       day: "2-digit",
// // //                       hour: "2-digit",
// // //                       minute: "2-digit",
// // //                     })}
// // //                   </p>

// // //                   <span className="text-blue-400 mt-2 ">Read More</span>
// // //                 </Link>
// // //               ))}
// // //             </>
// // //           )}
// // //         </div>
// // //       </section>
// // //       <StaticUI />

// // //       <Footer />
// // //     </div>
// // //   );
// // // }
