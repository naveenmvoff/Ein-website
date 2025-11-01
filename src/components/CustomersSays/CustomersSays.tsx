import React from "react";

interface Testimonial {
  name: string;
  initials: string;
  role: string;
  text: string;
  rating: number;
}

interface CustomersSaysProps {
  testimonials: Testimonial[];
}

const getStarRating = (rating: number) => {
  return Array.from({ length: 5 }, (_, index) => {
    if (index < rating) {
      return (
        <span key={index} className="text-[#FCC201] text-xl">
          ★
        </span>
      );
    }
    return (
      <span key={index} className="text-gray-300 text-xl">
        ★
      </span>
    );
  });
};

export default function CustomersSays({ testimonials }: CustomersSaysProps) {
  return (
    <section className="pt-10 px-4 sm:px-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl text-gray-900 sm:text-4xl md:text-5xl font-bold text-center mb-10">
          What Our Customers Say
        </h2>

        <div className="relative overflow-hidden rounded-2xl">
          <div
            className="flex animate-marquee hover:pause-animation"
            style={{
              width: `${testimonials.length * 2 * 420}px`,
              animationDuration: `${testimonials.length * 15}s`,
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-4 py-4"
                style={{ width: "420px" }}
              >
                <div className="bg-gray-100 p-8 rounded-2xl shadow-lg border border-gray-100 h-80 flex flex-col hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                  <div className="flex items-center mb-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-[#0086FF] font-bold text-lg">
                        {testimonial.initials}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-lg text-[#0086FF] break-words">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 font-medium break-words">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="mb-1 flex">
                    {getStarRating(testimonial.rating)}
                  </div>
                  <p className="text-gray-600 italic text-base leading-relaxed overflow-hidden flex-1 break-words">
                    {`"${testimonial.text}"`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
