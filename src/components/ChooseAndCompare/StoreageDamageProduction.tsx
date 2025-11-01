import React from "react";

interface StorageDamageProps {
  data: {
    heading: string;
    text: string;
  };
}

const StorageDamageProduction: React.FC<StorageDamageProps> = ({ data }) => {
  return (
    <div className="py-12 px-4 sm:px-6 max-w-4xl mx-auto text-center">
      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
        {data.heading}
      </h3>
      <p className="text-base text-gray-700 leading-relaxed">
        {data.text}
      </p>
    </div>
  );
};

export default StorageDamageProduction;


// import React from "react";

// interface StorageDamageProps {
//   data: {
//     heading: string;
//     text: string;
//   };
// }

// const StorageDamageProduction: React.FC<StorageDamageProps> = ({ data }) => {
//   return (
//     <div className="flex flex-col px-10 items-center my-12">
//       <h3 className="text-xl font-semibold text-center mb-4">{data.heading}</h3>
//       <p className="leading-8 text-gray-600 text-center mb-6">{data.text}</p>
//     </div>
//   );
// };

// export default StorageDamageProduction;


// "use client"
// import { motion } from "framer-motion";
// import { AlertTriangle, Shield, Package } from "lucide-react";
// import React from "react";

// interface StorageDamageProps {
//   data: {
//     heading: string;
//     text: string;
//   };
// }

// const StorageDamageProduction: React.FC<StorageDamageProps> = ({ data }) => {
//   return (
//     <section className="px-4 sm:px-6 lg:px-10 py-16 overflow-hidden">
//       <div className="max-w-6xl mx-auto">
//         {/* Animated Container */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//           className="relative group"
//         >
//           {/* Glassmorphic Card */}
//           <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-8 sm:p-10 lg:p-12 border border-white/20 overflow-hidden">
//             {/* Gradient Background Orbs */}
//             <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-full blur-3xl animate-pulse"></div>
//             <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>

//             <div className="relative z-10 flex flex-col items-center text-center">
//               {/* Icon with Animation */}
//               <motion.div
//                 initial={{ scale: 0, rotate: -180 }}
//                 whileInView={{ scale: 1, rotate: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 120 }}
//                 className="mb-6 p-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl shadow-lg inline-block"
//               >
//                 <AlertTriangle className="w-10 h-10 text-white" />
//               </motion.div>

//               {/* Heading with Text Reveal */}
//               <motion.h3
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, delay: 0.4 }}
//                 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4"
//               >
//                 {data.heading}
//               </motion.h3>

//               {/* Description with Typing Effect */}
//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, delay: 0.6 }}
//                 className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl"
//               >
//                 {data.text}
//               </motion.p>

//               {/* Protection Badges */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: 0.8 }}
//                 className="flex flex-wrap gap-3 sm:gap-4 mt-8 justify-center"
//               >
//                 <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow">
//                   <Shield className="w-4 h-4" />
//                   <span>100% Insured</span>
//                 </div>
//                 <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow">
//                   <Package className="w-4 h-4" />
//                   <span>Climate Controlled</span>
//                 </div>
//               </motion.div>
//             </div>

//             {/* Hover Glow Effect */}
//             <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-400/0 via-transparent to-blue-400/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default StorageDamageProduction;