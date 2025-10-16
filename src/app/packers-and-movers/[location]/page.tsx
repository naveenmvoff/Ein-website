"use client";

import LocationLanding from "@/components/LocationUI/LocationLanding";
import React from "react";
async function page({ params }: { params: Promise<{ location: string }> }) {
  const { location } = await params;
  console.log("=-----", location);
  return (
    <div>
      <LocationLanding area={location} />
    </div>
  );
}

export default page;
