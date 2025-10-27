import type { Metadata } from "next";
import { metaDataByLocation } from "@/lib/dataSet";
import LandingPageClient from "@/components/landingPage/LandingPageClient";

export async function generateMetadata(): Promise<Metadata> {
  const meta = metaDataByLocation.main;

  return {
    title:
      meta.title ||
      "Best Packers and Movers | Home Shifting Made Easy | Eintransport",
    description:
      meta.description ||
      "Reliable, affordable house shifting and relocation services across South India by Eintransport Packers and Movers.",
    keywords:
      meta.keywords ||
      "packers and movers, home shifting services, relocation experts, movers and packers near me, Eintransport",
    openGraph: {
      title:
        meta.title ||
        "Best Packers and Movers | Home Shifting Made Easy | Eintransport",
      description:
        meta.description ||
        "Move safely with Eintransport Packers and Movers — trusted experts for packing, moving, and relocation.",
      url: "https://eintransport.in",
      type: "website",
      siteName: "Eintransport",
      images: [
        {
          url: "https://eintransport.in/og-image.jpg",
          width: 1200,
          height: 630,
          alt:
            meta.title ||
            "Best Packers and Movers | Home Shifting Made Easy | Eintransport",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title:
        meta.title ||
        "Best Packers and Movers | Home Shifting Made Easy | Eintransport",
      description:
        meta.description ||
        "Trusted home shifting services across Bangalore, Chennai, and Kochi with Eintransport Packers and Movers.",
      images: ["https://eintransport.in/og-image.jpg"],
    },
    alternates: {
      canonical: "https://eintransport.in",
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
    },
    authors: [
      { name: "Eintransport Packers and Movers", url: "https://eintransport.in" },
    ],
    publisher: "Eintransport Packers and Movers",
  };
}

export default function Page() {
  return <LandingPageClient />;
}
