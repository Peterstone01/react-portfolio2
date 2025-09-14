import React from "react";
import { services } from "../constants/services";
import { motion } from "motion/react";

const Services = () => {
  return (
    <div
      id="services"
      className="px-2 lg:px-14 lg:py-5 mb-10 bg-gray-200  py-5   w-full "
    >
      <h1 className="font-bold text-2xl  pb-5 text-center  underline text-light">
        Services
      </h1>
      <div className="grid lg:grid-cols-8 justify-between items-center  gap-4">
        {services.map((item, i) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: -2 }}
            whileInView={{ scale: 1, opacity: 1, y: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            key={i}
            className="col-span-8 lg:col-span-2 px-5   bg-tertiary   bg-white shadow-md rounded-md mb-3 shadow-gray-300 p-4"
          >
            {/* /////////////////////icons and title */}
            <div>
              <div className="mx-auto ">
                <item.Icon className="size-10 text-light  font-bold" />
                <h1 className="font-bold text-green-500 text-xl my-4">
                  {item.name}
                </h1>
              </div>
              <p className="text-black">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
