import BastHouseShifting from "@/components/Common/BastHouseShifting";
import WhyChoose from "@/components/ChooseAndCompare/WhyChoose";
import Footer from "@/components/Footer";
import HeaderNavbar from "@/components/landingPage/header";
import HeroSection from "@/components/landingPage/heroSection";
import LocationLanding from "@/components/LocationUI/LocationLanding";
import { bestHouse, whyChoose } from "@/lib/dataSet";
import React from "react";
async function page({ params }: { params: Promise<{ location: string }> }) {
  const { location } = await params;
  console.log("=-----", location);

  return (
    <div>
      <HeaderNavbar />
      <HeroSection />
      <BastHouseShifting data={bestHouse[location]} />
      <WhyChoose data={whyChoose[location]} />
      <Footer />
    </div>
  );
}

export default page;
