// import React from "react";
// import { technologies } from "../constants/technologies";
// import { motion } from "motion/react";

// const boxVariant = {
//   initial: { scale: 1 },
//   hover: {
//     scale: 1.2,
//     transition: { duration: 0.3 },
//   },
// };
// const Technoloy = () => {
//   return (
//     <div className="px-2 max-w-8xl  bg-gray-200 mx-auto lg:px-14 lg:py-5  py-10 my-10  bg-grey    xl:min-h-[100vh] w-full ">
//       <div className="py-5">
//         <motion.h1 className="font-bold text-center text-lg text-black  lg:text-2xl">
//           Technologies I work with
//         </motion.h1>
//         <p className="text-center text-slate-900 font-semibold">
//           Below are some of the modern tools I utilize for developments
//         </p>
//       </div>
//       <div className="lg:grid grid-cols-12 space-y-3 gap-4">
//         {technologies.map((item, i) => (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.6, y: -2 }}
//             whileInView={{ scale: 1, opacity: 1, y: 1 }}
//             transition={{ duration: 1, ease: "easeInOut" }}
//             key={i}
//             className="col-span-3 bg-white shadow-md rounded-md mb-3 shadow-gray-300 p-4  "
//           >
//             <img
//               src={item.img}
//               alt={item.title}
//               className="size-10 rounded-full "
//             />
//             <h1 className="text-slate-900 font-bold text-lg my-3">
//               {item.title}
//             </h1>
//             <p className="text-slate-800 text-sm">{item.content}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Technoloy;


import React from "react";
import { technologies } from "../constants/technologies";
import { motion } from "motion/react";

const Technoloy = () => {
  return (
    <section className="bg-[#0F172A] py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-14">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl lg:text-4xl font-extrabold text-[#22D3EE] mb-4"
          >
            Technologies I Work With
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#F8FAFC] text-lg lg:text-xl"
          >
            Here are some of the modern tools and technologies I use to build scalable and efficient applications.
          </motion.p>
        </div>

        {/* Grid of Technologies */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {technologies.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-[#1E293B] rounded-xl shadow-lg p-6 flex flex-col items-center  hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-20 h-20 object-contain rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-[#22D3EE] mb-2">
                {item.title}
              </h3>
              <p className="text-[#F8FAFC] text-sm">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technoloy;
