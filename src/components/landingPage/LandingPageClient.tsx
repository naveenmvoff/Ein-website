import BestHouseShifting from "@/components/Common/BestHouseShifting";
import ServiceCities from "@/components/Common/Service-Cities";
import WhyChoose from "@/components/ChooseAndCompare/WhyChoose";
import Footer from "@/components/Footer";
import HeaderNavbar from "@/components/landingPage/header";
import HeroSection from "@/components/landingPage/heroSection";
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
} from "@/lib/dataSet";
import React from "react";
import MostTrusted from "@/components/ChooseAndCompare/MostTrusted";
import DynamicTable from "@/components/Table/Table";
import CustomersSays from "@/components/CustomersSays/CustomersSays";
import StorageDamageProduction from "@/components/ChooseAndCompare/StoreageDamageProduction";
import DeliveryConfirmFinal from "@/components/ChooseAndCompare/DeliveryConfirm";
import ContactToday from "@/components/ChooseAndCompare/ContactToday";
import FaqPage from "@/components/FAQ/FAQ";
import FormPopUp from "@/components/PopUP/FormPop";
import Image from "next/image";


const Page = () => {
  return (
    <div>
      <HeaderNavbar />
      <HeroSection />
      <ServiceCities />
      <section className="bg-blue-50/50 pt-8 pb-6 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <Image
              src={"/assets/whychoose.png"}
              alt="House Shifting Service"
              width={400}
              height={400}
              className="rounded-lg float-right ml-6 mb-4 object-cover"
            />

            <BestHouseShifting data={bestHouse.landing} />
            <WhyChoose data={whyChoose.landing} />

            <div className="clear-both"></div>
          </div>
        </div>
      </section>
      <OtherComparision />

      <MostTrusted />
      <DynamicTable
        data={localShitingCost}
        caption="Local Shifting Cost (Within 100 KM)"
        note="Note: The prices listed are approximate. Final charges may vary depending on distance, item value, and any additional services you require."
      />
      <DynamicTable
        data={anotherCity}
        caption="Moving from one city to another? Here's our KM-wise transportation-only price chart."
        note="Note: The prices listed are approximate. Final charges may vary depending on distance, item value, and any additional services you require."
      />
      <DynamicTable
        data={packingCost}
        caption="Packing Cost"
        note="Note: The prices listed are approximate. Final charges may vary depending on distance, item value, and any additional services you require."
      />
      <CustomersSays testimonials={testimonials} />
      <StorageDamageProduction data={StoreageDamageProduction.landing} />
      <DeliveryConfirmFinal data={DeliveryConfirm} />
      <ContactToday data={ContactTodayData.landing} />
      <FaqPage />
      <Footer />
      <StaticUI />

      <FormPopUp />
    </div>
  );
};

export default Page;
