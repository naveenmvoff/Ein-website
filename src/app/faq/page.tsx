import type { Metadata } from "next";
import FAQClient from "@/components/FAQ/FAQClient";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://eintransport.in";

export const metadata: Metadata = {
  title: "FAQ | Eintransport Packers and Movers",
  description:
    "Get clear answers about Eintransport’s packers, movers, pricing, vehicles, insurance, and interstate services. Everything you need to know in one FAQ page.",
  keywords: ["Eintransport packers and movers faq"],
  alternates: {
    canonical: `${BASE_URL}/faq`,
  },
  openGraph: {
    title: "FAQ | Eintransport Packers and Movers",
    description:
      "Get clear answers about Eintransport’s packers, movers, pricing, vehicles, insurance, and interstate services. Everything you need to know in one FAQ page.",
    url: `${BASE_URL}/faq`,
    siteName: "Eintransport Packers and Movers",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Eintransport Packers and Movers",
    description:
      "Get clear answers about Eintransport’s packers, movers, pricing, vehicles, insurance, and interstate services. Everything you need to know in one FAQ page.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <FAQClient />;
}
