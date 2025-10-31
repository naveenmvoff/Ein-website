import React from "react";

interface DeliveryConfirmProps {
  data: {
    heading: string;
    text: string;
  };
}

const DeliveryConfirmFinal: React.FC<DeliveryConfirmProps> = ({ data }) => {
  return (
    <div className="flex flex-col px-10 items-center ">
      <h3 className="text-xl font-semibold text-center mb-4">{data.heading}</h3>
      <p className="text-gray-600 text-center mb-6">{data.text}</p>
    </div>
  );
};

export default DeliveryConfirmFinal;
// "use client"

// import { motion } from "framer-motion";
// import { CheckCircle2, Truck, Clock, MapPin } from "lucide-react";
// import React from "react";

// interface DeliveryConfirmProps {
//   data: {
//     heading: string;
//     text: string;
//   };
// }

// const DeliveryConfirmFinal: React.FC<DeliveryConfirmProps> = ({ data }) => {
//   return (
//     <section className="px-4 sm:px-6 lg:px-10 py-16 overflow-hidden bg-gradient-to-b from-green-50/50 to-transparent">
//       <div className="max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//           className="relative group"
//         >
//           {/* Glassmorphic Card with Green Theme */}
//           <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl p-8 sm:p-10 lg:p-12 border border-green-100 overflow-hidden">
//             {/* Animated Background Orbs */}
//             <div className="absolute -top-16 -right-16 w-56 h-56 bg-gradient-to-br from-emerald-400/30 to-green-500/30 rounded-full blur-3xl animate-pulse"></div>
//             <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-gradient-to-tr from-teal-400/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>

//             <div className="relative z-10 flex flex-col items-center text-center">
//               {/* Success Icon with Bounce */}
//               <motion.div
//                 initial={{ scale: 0 }}
//                 whileInView={{ scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 0.6,
//                   delay: 0.2,
//                   type: "spring",
//                   stiffness: 200,
//                   damping: 15,
//                 }}
//                 className="mb-6 p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg inline-block"
//               >
//                 <CheckCircle2 className="w-10 h-10 text-white" />
//               </motion.div>

//               {/* Heading with Gradient */}
//               <motion.h3
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, delay: 0.4 }}
//                 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent mb-4"
//               >
//                 {data.heading}
//               </motion.h3>

//               {/* Description */}
//               <motion.p
//                 initial={{ opacity: 0, y: 15 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, delay: 0.6 }}
//                 className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mb-8"
//               >
//                 {data.text}
//               </motion.p>

//               {/* Delivery Status Badges */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: 0.8 }}
//                 className="flex flex-wrap gap-3 sm:gap-4 justify-center"
//               >
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-emerald-200"
//                 >
//                   <Truck className="w-4 h-4" />
//                   <span>On-Time Delivery</span>
//                 </motion.div>

//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   className="flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-teal-200"
//                 >
//                   <MapPin className="w-4 h-4" />
//                   <span>Real-Time Tracking</span>
//                 </motion.div>

//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   className="flex items-center gap-2 bg-cyan-50 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-cyan-200"
//                 >
//                   <Clock className="w-4 h-4" />
//                   <span>24/7 Support</span>
//                 </motion.div>
//               </motion.div>

//               {/* CTA Button */}
//               {/* <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: 1.0 }}
//                 className="mt-10"
//               >
//                 <button className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
//                   <span>Track Your Delivery</span>
//                   <svg
//                     className="w-5 h-5 group-hover:translate-x-1 transition-transform"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M9 5l7 7-7 7"
//                     />
//                   </svg>
//                 </button>
//               </motion.div> */}
//             </div>

//             {/* Hover Glow Effect */}
//             <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-400/0 via-emerald-400/10 to-teal-400/0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"></div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default DeliveryConfirmFinal;