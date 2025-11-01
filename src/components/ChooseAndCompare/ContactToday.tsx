import React from "react";
import Image from "next/image";

interface ContactTodayProps {
  data: {
    text: string;
  };
}

const ContactToday: React.FC<ContactTodayProps> = ({ data }) => {
  const set1 = ["Contact us today", "Call us today", "Contact us now"];
  const set2 = [
    "free quote",
    "get your free house shifting quote",
    "free home shifting quote in Chennai",
    "free home shifting quote in Coimbatore",
    "free home shifting quote in Kochi",
    "free home shifting quote in Thiruvananthapuram",
  ];

  const phoneNumber = "+919043384332";

  const highlightCTA = (text: string) => {
    let highlightedText = text;

    set1.forEach((phrase) => {
      const regex = new RegExp(`(${phrase})`, "gi");
      highlightedText = highlightedText.replace(
        regex,
        // `<span class="text-[#0086ff] font-semibold">$1</span>`
        `<a href="tel:${phoneNumber}" class="text-gray-600 font-semibold hover:underline">$1</a>`
      );
    });

    set2.forEach((phrase) => {
      const regex = new RegExp(`(${phrase})`, "gi");
      highlightedText = highlightedText.replace(
        regex,
        `<a href="tel:${phoneNumber}" class="text-gray-600 font-semibold hover:underline">$1</a>`
      );
    });

    return highlightedText;
  };

  return (
    <section className="bg-blue-50/50">
      <div className="pt-6 pb-2 px-4 sm:px-6 max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <Image
            src="/assets/contactAbove.png"
            alt="contact"
            width={600}
            height={600}
            className="rounded-lg"
          />
        </div>

        <p
          className="text-base text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: highlightCTA(data.text),
          }}
        />
      </div>
    </section>
  );
};

export default ContactToday;
