// "use client"
import BastHouseShifting from "@/components/Common/BastHouseShifting";
import WhyChoose from "@/components/ChooseAndCompare/WhyChoose";
import Footer from "@/components/Footer";
import HeaderNavbar from "@/components/landingPage/header";
import HeroSection from "@/components/landingPage/heroSection";
import LocationLanding from "@/components/LocationUI/LocationLanding";
import ServiceCities from "@/components/Common/Service-Cities";
import OtherComparision from "@/components/ChooseAndCompare/OtherComparision";
import StaticUI from "@/components/StaticUI/StaticUI";
import {
  bestHouse,
  localShitingCost,
  packingCost,
  whyChoose,
  anotherCity,
  testimonials,
  DeliveryConfirm,
  StoreageDamageProduction,
  ContactTodayData,
  metaDataByLocation,
} from "@/lib/dataSet";
import MostTrusted from "@/components/ChooseAndCompare/MostTrusted";
import DynamicTable from "@/components/Table/Table";
import CustomersSays from "@/components/CustomersSays/CustomersSays";
import StorageDamageProduction from "@/components/ChooseAndCompare/StoreageDamageProduction";
import DeliveryConfirmFinal from "@/components/ChooseAndCompare/DeliveryConfirm";
import ContactToday from "@/components/ChooseAndCompare/ContactToday";
import FaqPage from "@/components/FAQ/FAQ";
import React from "react";
import NotFound from "@/app/not-found";

import { Metadata } from "next";

// export async function generateMetadata({ params }): Promise<Metadata> {
//   console.log("------------------------->", params);
//   return {
//     title: `${params} | Eintransport Blog`,
//     description: params,
//   };
// }


export async function generateMetadata({
  params,
}: {
  params: { location: string };
}): Promise<Metadata> {
  const location = decodeURIComponent(params.location.toLowerCase());

  // Find matching meta data or fallback to main
  const meta = metaDataByLocation[location] || metaDataByLocation.main;

  
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://eintransport.in/packers-and-movers/${location}`,
      type: "website",
      images: [
        {
          url: "https://eintransport.in/og-image.jpg",
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["https://eintransport.in/og-image.jpg"],
    },
    alternates: {
      canonical: `https://eintransport.in/packers-and-movers/${location}`,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
    },
    authors: [{ name: "Eintransport Packers and movers", url: "https://eintransport.in" }],
    publisher: "Eintransport Packers and movers",
  };
}


async function page({ params }: { params: Promise<{ location: string }> }) {
  const { location } = await params;

  console.log("=-----", location); // Logs the dynamic location

  // Validate if the location exists in both bestHouse and whyChoose
  const validLocations = Object.keys(bestHouse);
  if (!validLocations.includes(location)) {
    // Handle invalid location (you can redirect, show an error page, etc.)
    return (
      <NotFound/>
    );
  }

  // Fetch location-specific data based on the exact location
  const bestHouseData = bestHouse[location];
  const whyChooseData = whyChoose[location];

  return (
    <div>
      <HeaderNavbar />
      <HeroSection />
      <BastHouseShifting data={bestHouseData} />
      <div className="h-48"></div>
      <WhyChoose data={whyChooseData} />
      <MostTrusted />

      <DynamicTable
        data={packingCost}
        caption="Packing Cost"
        note="The prices listed are approximate. Final charges may vary depending on distance, item value, and any additional services you require."
      />
      <DynamicTable
        data={localShitingCost}
        caption="Local Shifting Cost (Within 100 KM)"
        note="The prices listed are approximate. Final charges may vary depending on distance, item value, and any additional services you require."
      />
      <DynamicTable
        data={anotherCity}
        caption="Moving from one city to another? Here's our KM-wise transportation-only price chart."
        note="The prices listed are approximate. Final charges may vary depending on distance, item value, and any additional services you require."
      />

      <CustomersSays testimonials={testimonials} />
      <StorageDamageProduction data={StoreageDamageProduction.landing} />
      <DeliveryConfirmFinal data={DeliveryConfirm} />
      <ContactToday data={ContactTodayData.landing} />
      <FaqPage />
      <Footer />
      <StaticUI />
    </div>
  );
}

export default page;
