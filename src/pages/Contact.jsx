

import React from "react";
import Card from "../components/Card";
import { FaPhoneVolume, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#0F172A] py-20 px-6 lg:px-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#22D3EE]">
          Contact Us
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-4"></div>
        <p className="text-white/40 mt-5 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
          Reach out to us today! You can send a direct message or use any of the contact methods listed below.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12"
      >
        {/* Left: Contact Info */}
        <div className="md:col-span-5 flex flex-col justify-center space-y-8  ">
          <h3 className="text-3xl lg:text-4xl font-bold text-[#22D3EE]">
            Get In Touch Today
          </h3>

          <div className="p-4 bg-slate-950 shadow-md rounded-md mb-3 ">
            <p className=" mb-6  text-white">
              For more information about our products and services, reach out to our customer service through:
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MdOutlineMarkEmailRead className="text-blue-600 text-2xl" />
                <p className=" text-white/50">peterogechukwu58@gmail.com</p>
              </div>
              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-blue-500 text-2xl" />
                <p className="text-white/50">+234-(0)-813-8979-218</p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneVolume className="text-blue-500 text-2xl" />
                <p className="text-white/50">+234-(0)-813-8979-218</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="md:col-span-7">
          <div className="bg-white shadow-md rounded-md mb-3  p-4">
            <h4 className="text-xl lg:text-2xl font-bold text-gray-900 text-center mb-6">
              Send Us a Message
            </h4>

            <form
              action="https://formspree.io/f/xwpbwbny"
              className="space-y-6"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
              <textarea
                placeholder="Your Message"
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition h-36 resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 bg-[#22D3EE] text-white font-semibold rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
