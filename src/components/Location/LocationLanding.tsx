"use client";

import React from "react";
import { Table } from "../ui/table";
import StaticUI from "@/components/StaticUI/StaticUI";
import Footer from "../Footer";

function LocationLanding({ area }) {
  let UI;
  if (area == "bangalore") {
    UI = (
      <>
        <h2>Dummy UI</h2>
      </>
    );
  }

  return (
    <div>
      <Table />
      <StaticUI />
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      {UI}
      <Footer />
    </div>
  );
}

export default LocationLanding;
