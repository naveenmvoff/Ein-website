'use client'
import React, { useEffect, useState } from "react";

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
        <span key={index} className="text-[#FCC201] text-sm sm:text-lg md:text-xl">
          ★
        </span>
      );
    }
    return (
      <span key={index} className="text-gray-300 text-sm sm:text-lg md:text-xl">
        ★
      </span>
    );
  });
};

export default function CustomersSays({ testimonials }: CustomersSaysProps) {
  const [cardWidth, setCardWidth] = useState(320);
  const cardWidthMobile = 320;
  const cardWidthDesktop = 420;

  useEffect(() => {
    const updateCardWidth = () => {
      setCardWidth(window.innerWidth >= 640 ? cardWidthDesktop : cardWidthMobile);
    };
    
    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);
    return () => window.removeEventListener('resize', updateCardWidth);
  }, []);
  
  return (
    <section className="pt-6 sm:pt-10 px-4 sm:px-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-3">
          What Our Customers Say
        </h2>

        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
          <div
            className="flex animate-marquee hover:pause-animation"
            style={{
              width: `${testimonials.length * 2 * (cardWidth + 32)}px`,
              animationDuration: `${testimonials.length * 15}s`,
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-2 sm:px-4 py-2 sm:py-4"
                style={{ 
                  width: `${cardWidth}px`,
                }}
              >
                <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg border border-gray-200 h-64 sm:h-72 md:h-80 flex flex-col hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 group">
                  <div className="flex items-center mb-2">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mr-3 sm:mr-4 md:mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-[#0086FF] font-bold text-sm sm:text-base md:text-lg">
                        {testimonial.initials}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-sm sm:text-base md:text-lg text-[#0086FF] break-words">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 font-medium text-xs sm:text-sm break-words">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="mb-1 sm:mb-2 flex">
                    {getStarRating(testimonial.rating)}
                  </div>
                  <p className="text-gray-600 italic text-xs sm:text-sm md:text-base leading-relaxed overflow-hidden flex-1 break-words">
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
