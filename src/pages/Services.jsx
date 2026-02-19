// import React from "react";
// import { services } from "../constants/services";
// import { motion } from "motion/react";

// const Services = () => {
//   return (
//     <div
//       id="services"
//       className="px-2 lg:px-14 lg:py-5 mb-10 bg-gray-200  py-5   w-full "
//     >
//       <h1 className="font-bold text-2xl  pb-5 text-center  underline text-light">
//         Services
//       </h1>
//       <div className="grid lg:grid-cols-8 justify-between items-center  gap-4">
//         {services.map((item, i) => (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.6, y: -2 }}
//             whileInView={{ scale: 1, opacity: 1, y: 1 }}
//             transition={{ duration: 1, ease: "easeInOut" }}
//             key={i}
//             className="col-span-8 lg:col-span-2 px-5   bg-tertiary   bg-white shadow-md rounded-md mb-3 shadow-gray-300 p-4"
//           >
//             {/* /////////////////////icons and title */}
//             <div>
//               <div className="mx-auto ">
//                 <item.Icon className="size-10 text-light  font-bold" />
//                 <h1 className="font-bold text-green-500 text-xl my-4">
//                   {item.name}
//                 </h1>
//               </div>
//               <p className="text-black">{item.text}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;


import React from "react";
import { services } from "../constants/services";
import { motion } from "motion/react";

const Services = () => {
  return (
    <section
      id="services"
      className="bg-gray-50 py-16 px-4 lg:px-14"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">
          Services
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
        <p className="text-gray-600 text-sm lg:text-base">
          Explore the range of professional services I provide to help bring your ideas to life.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {services.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Icon */}
            <div className="text-blue-600 mb-4">
              <item.Icon className="text-5xl lg:text-6xl" />
            </div>

            {/* Service Title */}
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-2">
              {item.name}
            </h3>

            {/* Service Description */}
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
