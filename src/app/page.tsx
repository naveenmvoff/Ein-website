"use client";

import {
  ArrowBigRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MoveRight,
  Phone,
  Youtube,
  ChevronDown,
  MapPinHouse,
} from "lucide-react";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import RotatingText from "@/components/RotatingText";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Carousel from "@/components/test";
import Image from "next/image";
import Table from "@/components/Table/Table";
import StaticUI from "@/components/StaticUI/StaticUI";
import Footer from "@/components/Footer";

export default function Component() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [fromAddress, setFromAddress] = useState("");
  const [toAddress, setToAddress] = useState("");
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    sessionStorage.setItem("isMove", "false");
    if (sessionStorage.getItem("isMove") === "false") {
      document.cookie = "isMove=false; path=/";
    }

    setIsVisible(true);
  }, []);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setShowModal(true);
  //   }, 20000); // 20000ms = 20 seconds
  //   return () => clearInterval(timer);
  // }, []);

  // useEffect(() => {
  //   // First timeout: trigger after 7 seconds
  //   const firstTimer = setTimeout(() => {
  //     setShowModal(true);

  //     // After the first one, set interval to trigger every 20 seconds
  //     const intervalTimer = setInterval(() => {
  //       setShowModal(true);
  //     }, 30000);

  //     // Save intervalTimer to clear on cleanup
  //     // This must be outside setTimeout to be reachable
  //     return () => clearInterval(intervalTimer);
  //   }, 7000);

  //   // Cleanup function
  //   return () => clearTimeout(firstTimer);
  // }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLetsMove = () => {
    if (fromAddress || toAddress) {
      // Save to localStorage for transfer
      sessionStorage.setItem("fromAddress", fromAddress);
      sessionStorage.setItem("toAddress", toAddress);
    }
    router.push("/packers-and-movers");
  };

  const testimonials = [
    {
      name: "Anjali M",
      initials: "AM",
      role: "Bangalore",
      text: "Eintransport made my house shifting unbelievably easy. The team arrived on time, packed everything with care, and delivered it safely without a scratch. I didn't have to lift a finger. Totally stress-free!",
    },
    {
      name: "Venkat K",
      initials: "VK",
      role: "Bangalore",
      text: "I booked a mini truck for urgent goods delivery across the city. It was smooth, fast, and affordable. Will definitely book again!",
    },
    {
      name: "Dhanaasager G",
      initials: "DG",
      role: "Chennai",
      text: "I had just a few boxes to move, but they treated it like a priority. Respectful staff, neat work — highly recommended!",
    },
    {
      name: "Kaviyarasan G",
      initials: "KG",
      role: "Kochi",
      text: "I've moved houses before, but never this smoothly. The eintransport team packed everything perfectly and handled my fragile items with care. It felt like I had friends helping me move.",
    },
  ];

  const faqs = [
    {
      question: "What regions do you cover?",
      answer:
        "Our transport services cover Karnataka, Kerala, Tamil Nadu. We also offer long-distance and interstate transport depending on the requirements.",
    },
    {
      question: "What services does Eintransport provide?",
      answer:
        "Eintransport provides two types of services: 1. Packers and Movers services 2. Truck Service for any permitted goods.",
    },
    {
      question: "Does Eintransport provide Packers and Movers services?",
      answer:
        "Yes, packing cities include Bangalore, Chennai, Coimbatore, Kochi, and Thiruvananthapuram. Delivery depends on the requirements.",
    },
    {
      question: "What type of vehicles do you use?",
      answer:
        "We offer a wide range of vehicles including TATA 407, open-body trucks, and container trucks. Whether you need a small vehicle or a high-capacity one, we'll provide the right fit for your move.",
    },
  ];

  useEffect(() => {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: "page_view",
      page: "/",
    });
  }, []);
  const packingCost = [
    {
      Equipment: "Few Items",
      "Packing Material Cost": "₹850 – ₹1,950",
      "Men Power Cost": "₹1,210 – ₹2,580",
      "Total Cost": "₹2,060 – ₹4,530",
      "Total -----": "₹2,060 – ₹4,530",
    },
    {
      Equipment: "1 BHK",
      "Packing Material Cost": "₹1,450 – ₹2,950",
      "Men Power Cost": "₹2,050 – ₹3,850",
      "Total Cost": "₹3,500 – ₹6,800",
    },
    {
      Equipment: "2 BHK",
      "Packing Material Cost": "₹1,790 – ₹4,330",
      "Men Power Cost": "₹2,450 – ₹4,420",
      "Total Cost": "₹4,240 – ₹8,750",
    },
    {
      Equipment: "3 BHK",
      "Packing Material Cost": "₹2,590 – ₹6,640",
      "Men Power Cost": "₹3,700 – ₹6,140",
      "Total Cost": "₹6,290 – ₹12,780",
    },
    {
      Equipment: "Villa / Bungalow",
      "Packing Material Cost": "₹3,600 – ₹7,550",
      "Men Power Cost": "₹5,250 – ₹9,900",
      "Total Cost": "₹8,850 – ₹17,450",
    },
  ];
  return (
    <>
      <Table data={packingCost} caption="" />
      <StaticUI />
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>

      <Footer/>
    </>
  );
}
