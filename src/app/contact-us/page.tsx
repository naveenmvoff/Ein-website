import { HeroForm } from "@/components/landingPage/heroForm";
import { MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";
const locations = [
  {
    name: "Eintransport Packers and Movers in Bangalore",
    href: "/packers-and-movers/bangalore",
  },
  {
    name: "Eintransport Packers and Movers in Chennai",
    href: "/packers-and-movers/chennai",
  },
  {
    name: "Eintransport Packers and Movers in Coimbatore",
    href: "/packers-and-movers/coimbatore",
  },
  {
    name: "Eintransport Packers and Movers in Kochi",
    href: "/packers-and-movers/kochi",
  },
  {
    name: "Eintransport Packers and Movers in Trivandrum",
    href: "/packers-and-movers/thiruvananthapuram",
  },
];
export default function page() {
  return (
    <div>
      <h1>Contact Eintransport Packer and Movers</h1>
      <HeroForm />
      <p>
        At Eintransport Packers and Movers (Eintransport Pvt Ltd), we are
        available 7 days a week to assist with home shifting, office shifting,
        vehicle transport, and intercity relocation.
      </p>

      <div>
        <h2>📞 Call or WhatsApp</h2>
        <p>Phone / WhatsApp: +91 90433 84332</p>
        <p>(Instant support for bookings & enquiries)</p>
        <h2>📧 Email Us</h2>
        <p>Official Email: info@eintransport.in</p>

        <h2>🕒 Working Hours</h2>
        <p>Monday to Sunday — 7:00 AM to 10:00 PM</p>

        <h2>📍 Office Address</h2>

        <p>
          Eintransport Packer and Movers (Entransport Pvt Ltd) No. 22, 4th Cross
          Rd, Muneshwara Layout, Phase II, Electronic City, Bengaluru, Karnataka
          – 560100 GSTIN: 29AAICE9652R1ZJ PAN: AAICE9652R
        </p>
      </div>

      <div>
        <h3>Service Locations</h3>

        {locations.map((k, i) => {
          return (
            <Link
              href={k.href}
              key={i}
              className="flex flex-col items-center w-fit rounded-md p-2 bg-green-200 text-green-500 border-[1px] border-green-500"
            >
              <MapPin />
              {k.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
