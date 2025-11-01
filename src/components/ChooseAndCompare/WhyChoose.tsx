import Image from "next/image";
import React from "react";

function WhyChoose({ data }: any) {
  return (
    <section className="bg-blue-50/50">
      <div
        id="about"
        className="py-12  px-4 sm:px-6 max-w-4xl mx-auto scroll-mt-20"
      >
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-6">
          {data.heading}
        </h3>
        <p className="text-base text-gray-700 leading-relaxed mb-8">
          {data.text}
        </p>
        <div className="flex justify-center">
          <Image
            src={data.image}
            alt="why choose"
            width={600}
            height={600}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;

// import Image from "next/image";
// import React from "react";

// function WhyChoose({ data }: any) {
//   return (
//     <div
//       id="about"
//       className="flex flex-col gap-8 mt-7 px-10 scroll-mt-28" // ← Add this
//     >
//       <h3 className="flex justify-center text-xl font-semibold">
//         {data.heading}
//       </h3>
//       <p className="leading-8">{data.text}</p>
//       <div className="flex justify-center">
//         <Image src={data.image} alt="whychoose" width={600} height={600} />
//       </div>
//     </div>
//   );
// }

// export default WhyChoose;
