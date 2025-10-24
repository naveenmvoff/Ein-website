import React from "react";
import Image from "next/image";

interface ContactTodayProps {
  data: {
    text: string;
  };
}

const ContactToday: React.FC<ContactTodayProps> = ({ data }) => {
  // Define the two sets of CTAs
  const set1 = [
    "Contact us today",
    "Call us today",
    "Contact us now"
  ];

  const set2 = [
    "free quote",
    "get your free house shifting quote",
    "free home shifting quote in Chennai",
    "free home shifting quote in Coimbatore",
    "free home shifting quote in Kochi",
    "free home shifting quote in Thiruvananthapuram"
  ];

  // Function to highlight each CTA
  const highlightCTA = (text: string) => {
    let highlightedText = text;

    // Highlight Set1 (action part)
    set1.forEach((phrase) => {
      const regex = new RegExp(`(${phrase})`, "gi");
      highlightedText = highlightedText.replace(
        regex,
        `<span class="text-blue-600 font-semibold">$1</span>` // Style for SET1
      );
    });

    // Highlight Set2 (quote part)
    set2.forEach((phrase) => {
      const regex = new RegExp(`(${phrase})`, "gi");
      highlightedText = highlightedText.replace(
        regex,
        `<span class="text-green-600 font-semibold">$1</span>` // Style for SET2
      );
    });

    return highlightedText;
  };

  return (
    <div className="flex flex-col gap-6 items-center">
      <Image
        src="/assets/contactAbove.png"
        alt="Eintransport packing"
        width={500}
        height={300}
      />
      <p
        className="text-lg text-gray-600 text-center mb-6"
        dangerouslySetInnerHTML={{
          __html: highlightCTA(data.text), // Set the highlighted text with HTML
        }}
      />
    </div>
  );
};

export default ContactToday;



// import React from "react";
// import Image from "next/image";

// interface ContactTodayProps {
//   data: {
//     text: string;
//   };
// }

// const ContactToday: React.FC<ContactTodayProps> = ({ data }) => {
//   return (
//     <div className="flex flex-col items-center my-12">
//       <Image
//         src="/assets/contactAbove.png"
//         alt="Eintransport packing"
//         width={500}
//         height={300}
//       />
//       <p className="text-lg text-gray-600 text-center mb-6">{data.text}</p>
//     </div>
//   );
// };

// export default ContactToday;
