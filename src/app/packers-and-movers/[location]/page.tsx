// "use client"
import BestHouseShifting from "@/components/Common/BestHouseShifting";
import WhyChoose from "@/components/ChooseAndCompare/WhyChoose";
import Footer from "@/components/Footer";
import HeaderNavbar from "@/components/landingPage/header";
import HeroSection from "@/components/landingPage/heroSection";
// import LocationLanding from "@/components/LocationUI/LocationLanding";
// import ServiceCities from "@/components/Common/Service-Cities";
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
  shiftingService,
} from "@/lib/dataSet";
// import MostTrusted from "@/components/ChooseAndCompare/MostTrusted";
import DynamicTable from "@/components/Table/Table";
import CustomersSays from "@/components/CustomersSays/CustomersSays";
import StorageDamageProduction from "@/components/ChooseAndCompare/StoreageDamageProduction";
import DeliveryConfirmFinal from "@/components/ChooseAndCompare/DeliveryConfirm";
import ContactToday from "@/components/ChooseAndCompare/ContactToday";
import FaqPage from "@/components/FAQ/FAQ";
import React from "react";
import NotFound from "@/app/not-found";
import Image from "next/image";

import { Metadata } from "next";
import WhyChooseBasedCity from "@/components/ChooseAndCompare/whyChooseBasedCity";
import LocalShifting from "@/components/ChooseAndCompare/LocalShifting";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const { location: locationParam } = await params;
  const location = decodeURIComponent(locationParam.toLowerCase());

  // Find matching meta data or fallback to main
  const meta =
    (
      metaDataByLocation as unknown as Record<
        string,
        { title: string; description: string; keywords: string }
      >
    )[location] || metaDataByLocation.main;

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
    authors: [
      {
        name: "Eintransport Packers and movers",
        url: "https://eintransport.in",
      },
    ],
    publisher: "Eintransport Packers and movers",
  };
}

async function page({ params }: { params: Promise<{ location: string }> }) {
  const { location } = await params;

  // Validate if the location exists in both bestHouse and whyChoose
  const validLocations = Object.keys(bestHouse);
  if (!validLocations.includes(location)) {
    // Handle invalid location (you can redirect, show an error page, etc.)
    return <NotFound />;
  }

  // Fetch location-specific data based on the exact location
  const bestHouseData =
    (bestHouse as unknown as Record<string, typeof bestHouse.landing>)[
      location
    ] || bestHouse.landing;
  const whyChooseData =
    (whyChoose as unknown as Record<string, typeof whyChoose.landing>)[
      location
    ] || whyChoose.landing;
  const shiftService =
    (
      shiftingService as unknown as Record<
        string,
        typeof shiftingService.landing
      >
    )[location] || shiftingService.landing;

  return (
    <div>
      <HeaderNavbar />
      <section id="hero-section">
        <HeroSection />
      </section>

      <section className="bg-blue-50/50 pt-8 pb-6 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="hidden md:block">
              <Image
                src={whyChooseData.image || "/assets/whychoose.png"}
                alt="House Shifting Service"
                width={400}
                height={400}
                className="rounded-lg float-right ml-6 mb-4 object-cover"
              />
            </div>

            <BestHouseShifting data={bestHouseData} />
            
            <div className="md:hidden flex justify-center my-4">
              <Image
                src={whyChooseData.image || "/assets/whychoose.png"}
                alt="House Shifting Service"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            
            <WhyChoose data={whyChooseData} />

            <div className="clear-both"></div>
          </div>
        </div>
      </section>

      <DynamicTable
        data={packingCost}
        caption="Packing Cost"
        note="Note: The prices listed are approximate. Final charges may vary depending on distance, item value, and any additional services you require."
      />

      <DynamicTable
        data={anotherCity}
        caption="Moving from one city to another? Here's our KM-wise transportation-only price chart."
        note="Note: The prices listed are approximate. Final charges may vary depending on distance, item value, and any additional services you require."
      />

      <OtherComparision />
      <WhyChooseBasedCity location={location} />

      <LocalShifting data={shiftService} />
      <DynamicTable
        data={localShitingCost}
        caption="Local Shifting Cost (Within 100 KM)"
        note="Note: The prices listed are approximate. Final charges may vary depending on distance, item value, and any additional services you require."
      />

      <CustomersSays testimonials={testimonials} />
      <StorageDamageProduction
        data={
          (
            StoreageDamageProduction as unknown as Record<
              string,
              typeof StoreageDamageProduction.landing
            >
          )[location] || StoreageDamageProduction.landing
        }
      />

      <DeliveryConfirmFinal data={DeliveryConfirm} />
      <ContactToday
        data={
          (
            ContactTodayData as unknown as Record<
              string,
              typeof ContactTodayData.landing
            >
          )[location] || ContactTodayData.landing
        }
      />
      <FaqPage />
      <Footer />
      <StaticUI />
    </div>
  );
}

export default page;
