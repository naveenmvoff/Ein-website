import React from "react";
import Table from "@/components/Table/Table";

const whyChooseEintransport = [
  {
    service: "Bubble & Foam Wrapping",
    weDo: "Use high-quality packing for full safety.",
    othersDont: "Use normal or no wrapping.",
  },
  {
    service: "Free Storage (3 Days)",
    weDo: "Keep goods free for 3 days if needed.",
    othersDont: "Charge for every extra day.",
  },
  {
    service: "Damage Guarantee",
    weDo: "Assured safety or we take responsibility.",
    othersDont: "No guarantee given.",
  },
  {
    service: "Cot Dismantling & Reassembly",
    weDo: "Done by our team at no extra cost.",
    othersDont: "Customer has to arrange.",
  },
  {
    service: "On-Time Delivery",
    weDo: "We deliver as promised.",
    othersDont: "Often delayed.",
  },
  {
    service: "24×7 Support",
    weDo: "Always available till delivery.",
    othersDont: "Limited response.",
  },
  {
    service: "Free Quote & Inspection",
    weDo: "No charge for visit or estimate.",
    othersDont: "Hidden or extra fees.",
  },
  {
    service: "Transparent Price",
    weDo: "Clear rates, no hidden cost.",
    othersDont: "Surprise charges later.",
  },
];

export default function OtherComparision() {
  return (
    <div>
      <Table
        data={whyChooseEintransport}
        caption="Eintransport Packers & Movers and Others service comparison"
      />
    </div>
  );
}
