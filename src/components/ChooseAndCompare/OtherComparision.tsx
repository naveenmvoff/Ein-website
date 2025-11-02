import React from "react";
import Table from "@/components/Table/Table";

const whyChooseEintransport = [
  {
    service: "Bubble & Foam Wrapping",
    "we Do": "Use high-quality packing for full safety.",
    "Others Don't": "Use normal or no wrapping.",
  },
  {
    service: "Free Storage (3 Days)",
    "we Do": "Keep goods free for 3 days if needed.",
    "Others Don't": "Charge for every extra day.",
  },
  {
    service: "Damage Guarantee",
    "we Do": "Assured safety or we take responsibility.",
    "Others Don't": "No guarantee given.",
  },
  {
    service: "Cot Dismantling & Reassembly",
    "we Do": "Done by our team at no extra cost.",
    "Others Don't": "Customer has to arrange.",
  },
  {
    service: "On-Time Delivery",
    "we Do": "We deliver as promised.",
    "Others Don't": "Often delayed.",
  },
  {
    service: "24×7 Support",
    "we Do": "Always available till delivery.",
    "Others Don't": "Limited response.",
  },
  {
    service: "Free Quote & Inspection",
    "we Do": "No charge for visit or estimate.",
    "Others Don't": "Hidden or extra fees.",
  },
  {
    service: "Transparent Price",
    "we Do": "Clear rates, no hidden cost.",
    "Others Don't": "Surprise charges later.",
  },
];

export default function OtherComparision() {
  return (
    <section className="bg-blue-50/50">
      <div>
        <Table
          data={whyChooseEintransport}
          caption="Eintransport Packers & Movers and Others service comparison"
        />
      </div>
    </section>
  );
}
