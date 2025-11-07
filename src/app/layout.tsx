// "use client";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "react-day-picker/dist/style.css";
import Script from "next/script";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Packers and Movers | Home Shifting Made Easy | Eintransport",
  description:
    "We provide on-demand, reliable, and affordable transport services for all your moving and delivery needs. Whether you need to relocate household items, deliver goods to customers, or transport commercial cargo, our fleet of vehicles and professional drivers ensure safe, fast, and hassle-free transportation.",
  icons: {
    icon: [
      { url: "/Eintransport.png", type: "image/png" },
      { url: "/Eintransport.png", type: "image/png" },
    ],
    apple: "/Eintransport.png",
  },
  keywords:
    "packers and movers, home shifting services, relocation experts, movers and packers near me, Eintransport",
  authors: [
    {
      name: "Eintransport Packers and Movers",
      url: "https://eintransport.in",
    },
  ],
  publisher: "Eintransport Packers and Movers",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-TNFPM87F";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-base" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
