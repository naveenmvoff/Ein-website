
'use client';
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import BastHouseShifting from "@/components/Common/BastHouseShifting";
import ServiceCities from "@/components/Common/Service-Cities";
import WhyChoose from "@/components/ChooseAndCompare/WhyChoose";
import Footer from "@/components/Footer";
import HeaderNavbar from "@/components/landingPage/header";
import HeroSection from "@/components/landingPage/heroSection";
import OtherComparision from "@/components/ChooseAndCompare/OtherComparision";
import StaticUI from "@/components/StaticUI/StaticUI";
import { bestHouse, localShitingCost, packingCost, whyChoose, anotherCity, testimonials, DeliveryConfirm, StoreageDamageProduction, ContactTodayData, metaDataByLocation } from "@/lib/dataSet";
import React from "react";
import MostTrusted from "@/components/ChooseAndCompare/MostTrusted";
import DynamicTable from "@/components/Table/Table";
import CustomersSays from "@/components/CustomersSays/CustomersSays";
import StorageDamageProduction from "@/components/ChooseAndCompare/StoreageDamageProduction";
import DeliveryConfirmFinal from "@/components/ChooseAndCompare/DeliveryConfirm";
import ContactToday from "@/components/ChooseAndCompare/ContactToday";
import FaqPage from "@/components/FAQ/FAQ";
import {HeroForm} from "@/components/landingPage/heroForm";


const Page = () => {
  const [showFormModal, setShowFormModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFormModal(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <HeaderNavbar />
      <HeroSection />
      <BastHouseShifting data={bestHouse.landing} />
      <ServiceCities />
      <WhyChoose data={whyChoose.landing} />
      <OtherComparision />

      <MostTrusted />
      <DynamicTable data={localShitingCost} caption="Local Shifting Cost (Within 100 KM)" note="The prices listed are approximate. Final charges may vary depending on distance, item value, and any additional services you require."/>
      <DynamicTable data={anotherCity} caption="Moving from one city to another? Here's our KM-wise transportation-only price chart." note="The prices listed are approximate. Final charges may vary depending on distance, item value, and any additional services you require."/>
      <DynamicTable data={packingCost} caption="Packing Cost" note="The prices listed are approximate. Final charges may vary depending on distance, item value, and any additional services you require."/>
      <CustomersSays testimonials={testimonials}/>
      <StorageDamageProduction data={StoreageDamageProduction.landing}/>
      <DeliveryConfirmFinal data={DeliveryConfirm}/>
      <ContactToday data={ContactTodayData.landing}/>
      <FaqPage/>
      <Footer />
      <StaticUI />


      {/* Form Modal */}
      {showFormModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="relative max-w-md w-full bg-white rounded-2xl p-6 animate-fadeIn">
            {/* Close button */}
            <button
              onClick={() => setShowFormModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            
            {/* Form wrapper to remove additional styling */}
            <div className="[&>*]:shadow-none [&>*]:border-none">
              <HeroForm />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Page;
