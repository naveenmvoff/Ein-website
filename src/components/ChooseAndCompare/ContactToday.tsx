"use client";

import React from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

interface ContactTodayProps {
  data: {
    text: string;
  };
}

const ContactToday: React.FC<ContactTodayProps> = ({ data }) => {
  const router = useRouter();
  const pathname = usePathname();
  const phoneNumber = "+919043384332";

  // ✅ Smooth scroll to <HeroSection />
  const scrollToHero = () => {
    setTimeout(() => {
      const hero = document.getElementById("hero-section");
      if (hero) {
        hero.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
        // subtle highlight to show scroll focus
        hero.classList.add("ring-2", "ring-blue-400", "transition");
        setTimeout(() => {
          hero.classList.remove("ring-2", "ring-blue-400", "transition");
        }, 1500);
      }
    }, 600);
  };

  // ✅ Smart navigation — scrolls immediately if already on the same page
  const navigateAndScroll = (path: string) => {
    if (pathname === path) {
      scrollToHero();
    } else {
      router.push(path);
      scrollToHero();
    }
  };


  const highlightCTA = (text: string) => {
    let highlightedText = text;

    // Set 1: Phone contact CTAs
    const set1 = ["Contact us today", "Call us today", "Contact us now"];

    // Set 2: Quote-related CTAs
    const set2 = [
      "free quote",
      "get your free house shifting quote",
      "free home shifting quote in Bangalore",
      "free home shifting quote in Chennai",
      "free home shifting quote in Coimbatore",
      "free home shifting quote in Kochi",
      "free home shifting quote in Thiruvananthapuram",
    ];

    // Set 1 → tel links
    set1.forEach((phrase) => {
      const regex = new RegExp(`(${phrase})`, "gi");
      highlightedText = highlightedText.replace(
        regex,
        `<a href="tel:${phoneNumber}" class="text-blue-600 font-semibold underline">$1</a>`
      );
    });

    // Set 2 → route links
    set2.forEach((phrase) => {
      let action = "main";
      if (phrase.includes("Chennai")) action = "chennai";
      else if (phrase.includes("Coimbatore")) action = "coimbatore";
      else if (phrase.includes("Kochi")) action = "kochi";
      else if (phrase.includes("Thiruvananthapuram"))
        action = "thiruvananthapuram";
      else if (phrase.toLowerCase().includes("bangalore")) action = "bangalore";
      // else if (phrase.includes("get free house shifting quote")) action = "bangalore";
      // else if (phrase.includes("bangalore")) action = "bangalore";

      const regex = new RegExp(`(${phrase})`, "gi");
      highlightedText = highlightedText.replace(
        regex,
        `<a href="#" data-action="${action}" class="text-blue-600 font-semibold underline">$1</a>`
      );
    });

    return highlightedText;
  };

  // ✅ Handle clicks for navigation
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.tagName === "A" && target.dataset.action) {
      e.preventDefault();
      const action = target.dataset.action;

      // “free quote” (main page)
      if (action === "main") {
        navigateAndScroll("/");
      } else {
        // city-based routes
        navigateAndScroll(`/packers-and-movers/${action}`);
      }
    }
  };

  return (
    <section className="bg-blue-50/50">
      <div
        className="pt-6 pb-2 px-4 sm:px-6 max-w-5xl mx-auto text-center"
        onClick={handleClick}
      >
        <div className="flex justify-center mb-5">
          <Image
            src="/assets/contactAbove.png"
            alt="Movers wrapping furniture for safe shifting"
            width={600}
            height={600}
            className="rounded-lg"
          />
        </div>

        <p
          className="text-md md:text-xl text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: highlightCTA(data.text),
          }}
        />
      </div>
    </section>
  );
};

export default ContactToday;