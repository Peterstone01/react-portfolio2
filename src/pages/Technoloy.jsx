import React from "react";
import { technologies } from "../constants/technologies";
import { motion } from "motion/react";

const boxVariant = {
  initial: { scale: 1 },
  hover: {
    scale: 1.2,
    transition: { duration: 0.3 },
  },
};
const Technoloy = () => {
  return (
    <div className="px-2 max-w-8xl  bg-gray-200 mx-auto lg:px-14 lg:py-5  py-10 my-10  bg-grey    xl:min-h-[100vh] w-full ">
      <div className="py-5">
        <motion.h1 className="font-bold text-center text-lg text-black  lg:text-2xl">
          Technologies I work with
        </motion.h1>
        <p className="text-center text-slate-900 font-semibold">
          Below are some of the modern tools I utilize for developments
        </p>
      </div>
      <div className="lg:grid grid-cols-12 space-y-3 gap-4">
        {technologies.map((item, i) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: -2 }}
            whileInView={{ scale: 1, opacity: 1, y: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            key={i}
            className="col-span-3 bg-white shadow-md rounded-md mb-3 shadow-gray-300 p-4  "
          >
            <img
              src={item.img}
              alt={item.title}
              className="size-10 rounded-full "
            />
            <h1 className="text-slate-900 font-bold text-lg my-3">
              {item.title}
            </h1>
            <p className="text-slate-800 text-sm">{item.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technoloy;
