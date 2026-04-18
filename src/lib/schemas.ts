/**
 * schemas.ts — Centralised Schema.org structured-data builders for Eintransport.
 *
 * Every function returns a plain object ready to be passed to <JsonLd schema={…} />.
 * No JSX, no side-effects — pure data.
 *
 * Import what you need:
 *   import { buildOrganizationSchema, buildFAQSchema } from "@/lib/schemas";
 */

const BASE_URL =
  process.env.NEXT_PUBLIC_APP_URL || "https://eintransport.in";

// ─── Shared constants ────────────────────────────────────────────────────────

export const EINTRANSPORT = {
  name: "Eintransport Packers and Movers",
  legalName: "Entransport Pvt Ltd",
  url: BASE_URL,
  telephone: "+919043384332",
  email: "info@eintransport.in",
  logo: `${BASE_URL}/Eintransport.png`,
  image: `${BASE_URL}/og-image.jpg`,
  vatID: "29AAICE9652R1ZJ",
  foundingDate: "2020",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No. 25, GPR Layout, SFS Ward 1, Block 92, Hebbagodi",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560100",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "City", name: "Bangalore" },
    { "@type": "City", name: "Chennai" },
    { "@type": "City", name: "Coimbatore" },
    { "@type": "City", name: "Kochi" },
    { "@type": "City", name: "Thiruvananthapuram" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+919043384332",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi", "Tamil", "Kannada", "Malayalam"],
  },
  sameAs: [
    "https://www.facebook.com/eintransport",
    "https://www.instagram.com/eintransport",
  ],
  openingHours: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday", "Tuesday", "Wednesday", "Thursday",
      "Friday", "Saturday", "Sunday",
    ],
    opens: "08:00",
    closes: "20:00",
  },
} as const;

// ─── 1. Organization ─────────────────────────────────────────────────────────

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "MovingCompany"],
    "@id": `${BASE_URL}/#organization`,
    name: EINTRANSPORT.name,
    legalName: EINTRANSPORT.legalName,
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: EINTRANSPORT.logo,
      width: 512,
      height: 512,
    },
    image: EINTRANSPORT.image,
    description:
      "Eintransport Packers and Movers provides reliable, affordable house shifting and relocation services across South India – Bangalore, Chennai, Coimbatore, Kochi, and Thiruvananthapuram.",
    telephone: EINTRANSPORT.telephone,
    email: EINTRANSPORT.email,
    vatID: EINTRANSPORT.vatID,
    address: EINTRANSPORT.address,
    areaServed: EINTRANSPORT.areaServed,
    contactPoint: EINTRANSPORT.contactPoint,
    sameAs: EINTRANSPORT.sameAs,
    foundingDate: EINTRANSPORT.foundingDate,
  };
}

// ─── 2. WebSite (enables Sitelinks Searchbox) ────────────────────────────────

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: EINTRANSPORT.name,
    url: BASE_URL,
    description:
      "Reliable, affordable house shifting and relocation services across South India.",
    publisher: { "@id": `${BASE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// ─── 3. MovingCompany / Homepage ─────────────────────────────────────────────

export function buildMovingCompanySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "@id": `${BASE_URL}/#movingcompany`,
    name: EINTRANSPORT.name,
    image: EINTRANSPORT.image,
    url: BASE_URL,
    telephone: EINTRANSPORT.telephone,
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Bank Transfer",
    address: EINTRANSPORT.address,
    openingHoursSpecification: EINTRANSPORT.openingHours,
    areaServed: EINTRANSPORT.areaServed,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Moving Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Home Shifting",
            description:
              "Safe and reliable home shifting with professional packing and unpacking.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Office Shifting",
            description:
              "Minimal downtime office relocation services across South India.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Intercity Relocation",
            description:
              "Long-distance and intercity transport services with full insurance.",
          },
        },
      ],
    },
  };
}

// ─── 4. FAQPage ──────────────────────────────────────────────────────────────

export interface FAQItem {
  question: string;
  answer: string;
}

export function buildFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Default FAQ data for the FAQ page
export const DEFAULT_FAQS: FAQItem[] = [
  {
    question: "What regions do you cover?",
    answer:
      "Our transport services cover Karnataka, Kerala, Tamil Nadu. We also offer long-distance and interstate transport depending on the requirements.",
  },
  {
    question: "What services does Eintransport provide?",
    answer:
      "Eintransport provides two types of services: 1. Packers and Movers services 2. Truck Service for any permitted goods.",
  },
  {
    question: "Does Eintransport provide Packers and Movers services?",
    answer:
      "Yes, packing cities include Bangalore, Chennai, Coimbatore, Kochi, and Thiruvananthapuram. Delivery depends on the requirements.",
  },
  {
    question: "What type of vehicles do you use?",
    answer:
      "We offer a wide range of vehicles including TATA 407, open-body trucks, and container trucks. Whether you need a small vehicle or a high-capacity one, we'll provide the right fit for your move.",
  },
  {
    question: "Do you offer insurance for goods during transit?",
    answer:
      "Yes, Eintransport provides transit insurance options to protect your belongings during the move. Contact us for details on coverage.",
  },
  {
    question: "How do I get a quote for my move?",
    answer:
      "You can get a free quote by calling us at +91 90433 84332 or by filling out the inquiry form on our website. We typically respond within a few hours.",
  },
];

// ─── 5. LocalBusiness (per city) ─────────────────────────────────────────────

export function buildLocalBusinessSchema(city: string) {
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);
  const region =
    city === "kochi" || city === "thiruvananthapuram"
      ? "Kerala"
      : city === "bangalore"
      ? "Karnataka"
      : "Tamil Nadu";

  return {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "@id": `${BASE_URL}/packers-and-movers/${city}/#localbusiness`,
    name: `Eintransport Packers and Movers in ${cityName}`,
    image: EINTRANSPORT.image,
    url: `${BASE_URL}/packers-and-movers/${city}`,
    telephone: EINTRANSPORT.telephone,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      addressLocality: cityName,
      addressRegion: region,
      addressCountry: "IN",
    },
    areaServed: { "@type": "City", name: cityName },
    openingHoursSpecification: EINTRANSPORT.openingHours,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Moving Services in ${cityName}`,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `Home Shifting in ${cityName}`,
            description: `Professional house relocation services in ${cityName} by Eintransport Packers and Movers.`,
            provider: { "@id": `${BASE_URL}/#organization` },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `Office Shifting in ${cityName}`,
            description: `Reliable and efficient office relocation in ${cityName}.`,
            provider: { "@id": `${BASE_URL}/#organization` },
          },
        },
      ],
    },
    parentOrganization: { "@id": `${BASE_URL}/#organization` },
  };
}

// ─── 6. ContactPage ──────────────────────────────────────────────────────────

export function buildContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Eintransport Packers and Movers",
    url: `${BASE_URL}/contact-us`,
    description:
      "Contact Eintransport for reliable relocation help. Reach us by email or call your branch for quick guidance and smooth, hassle-free shifting support.",
    mainEntity: {
      "@type": "MovingCompany",
      name: EINTRANSPORT.name,
      telephone: EINTRANSPORT.telephone,
      email: EINTRANSPORT.email,
      url: BASE_URL,
      address: EINTRANSPORT.address,
      contactPoint: EINTRANSPORT.contactPoint,
    },
  };
}

// ─── 7. BlogPosting ──────────────────────────────────────────────────────────

export interface BlogSchemaInput {
  title: string;
  metaDescription?: string;
  metaKeywords?: string[];
  createdAt?: string | null;
  updatedAt?: string | null;
  thumbnail?: string | null;
  pageURL: string;
}

export function buildBlogPostingSchema(
  blog: BlogSchemaInput,
  canonicalUrl: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${canonicalUrl}#article`,
    headline: blog.title,
    description: blog.metaDescription || blog.title,
    url: canonicalUrl,
    image:
      blog.thumbnail && blog.thumbnail.startsWith("http")
        ? blog.thumbnail
        : EINTRANSPORT.image,
    author: {
      "@type": "Organization",
      name: EINTRANSPORT.name,
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: EINTRANSPORT.name,
      logo: {
        "@type": "ImageObject",
        url: EINTRANSPORT.logo,
        width: 512,
        height: 512,
      },
    },
    datePublished: blog.createdAt,
    dateModified: blog.updatedAt || blog.createdAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    keywords: blog.metaKeywords?.join(", "),
    articleSection: "Relocation Tips & Guides",
    inLanguage: "en-IN",
    isPartOf: {
      "@type": "Blog",
      "@id": `${BASE_URL}/blog`,
      name: "Eintransport Blog",
    },
  };
}

// ─── 8. BreadcrumbList ───────────────────────────────────────────────────────

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export function buildBreadcrumbSchema(crumbs: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  };
}

// ─── 9. Blog listing page ────────────────────────────────────────────────────

export interface BlogListItem {
  title: string;
  metaDescription?: string;
  createdAt?: string;
  pageURL: string;
}

export function buildBlogListSchema(blogs: BlogListItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Eintransport Packers and Movers Blog",
    description:
      "Expert articles, moving guides, and packing tips for smooth relocation",
    url: `${BASE_URL}/blog`,
    publisher: {
      "@type": "Organization",
      name: EINTRANSPORT.name,
      logo: {
        "@type": "ImageObject",
        url: EINTRANSPORT.logo,
      },
    },
    blogPost: blogs.map((blog) => ({
      "@type": "BlogPosting",
      headline: blog.title,
      description: blog.metaDescription || blog.title,
      datePublished: blog.createdAt,
      url: `${BASE_URL}/blog/${blog.pageURL}`,
    })),
  };
}
