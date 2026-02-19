// import React from "react";
// import Card from "../components/Card";
// import { FaPhoneVolume } from "react-icons/fa";
// import { MdOutlineMarkEmailRead } from "react-icons/md";
// import { FaWhatsapp } from "react-icons/fa";
// import { FaRegUser } from "react-icons/fa";
// // eslint-disable-next-line no-unused-vars
// import { motion } from "motion/react";

// const Contact = () => {
//   return (
//     <div id="contact" className="w-full mt-20 bg-gray-200 ">
//       <h1 className=" font-bold md:text-2xl text-center text-heading pt-10">
//         Contact Us
//       </h1>
//       <motion.div
//         initial={{ opacity: 0, scale: 0.6, y: -2 }}
//         whileInView={{ scale: 1, opacity: 1, y: 1 }}
//         transition={{ duration: 1, ease: "easeInOut" }}
//         className="max-w-4xl mx-auto  my-10"
//       >
//         <div className="md:grid grid-cols-12 gap-4">
//           {/* ////////////////////left */}
//           <div className="col-span-6 ">
//             <h1 className="font-bold text-gray-300 text-4xl my-4">
//               GET IN TOUCH TODAY
//             </h1>

//             <Card padding="true">
//               <p className="my-5 text-gray-700 ">
//                 For more information about our products and services, reachout
//                 to our customer service through
//               </p>
//               <div className="flex items-center justify-start gap-2 my-2">
//                 <MdOutlineMarkEmailRead />
//                 <p className="">peterogechukwu58@gmail.com</p>
//               </div>
//               <div className="flex items-center justify-start gap-2">
//                 <FaWhatsapp />
//                 <p className=" "> +234-(0)-813-8979-218</p>
//               </div>
//               <div className="flex items-center justify-start gap-2 my-2">
//                 <FaPhoneVolume />
//                 <p className=" "> +234-(0)-813-8979-218</p>
//               </div>
//             </Card>
//           </div>
//           {/* ////////////////////right */}
//           <div className="col-span-6">
//             <Card padding="true">
//               <h4 className="my-4 font-bold text-center">
//                 Fill the form below to send us a direct message
//               </h4>
//               <form action="https://formspree.io/f/xwpbwbny">
//                 <div className="">
//                   <input
//                     type="text"
//                     placeholder="Enter your names"
//                     className="border-b border-gray-400 rounded px-5 py-2  w-full"
//                   />
//                   <input
//                     type="email"
//                     placeholder="Enter your Email Address"
//                     className="border-b border-gray-400 rounded px-5 py-2 mt-2  w-full"
//                   />
//                   <textarea
//                     placeholder="Enter your messages"
//                     className="h-[100px] px-5 border  border-gray-400 rounded w-full mt-2"
//                   ></textarea>
//                 </div>
//                 <button className="px-5 py-2 bg-primary text-white w-full rounded my-5">
//                   {" "}
//                   Send
//                 </button>
//               </form>
//             </Card>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Contact;


import React from "react";
import Card from "../components/Card";
import { FaPhoneVolume, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-50 py-20 px-6 lg:px-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
          Contact Us
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-4"></div>
        <p className="text-gray-600 mt-5 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
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
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Get In Touch Today
          </h3>

          <div className="p-4 bg-white shadow-md rounded-md mb-3 shadow-gray-300">
            <p className="text-gray-700 mb-6 ">
              For more information about our products and services, reach out to our customer service through:
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MdOutlineMarkEmailRead className="text-blue-600 text-2xl" />
                <p className="font-semibold text-gray-800">peterogechukwu58@gmail.com</p>
              </div>
              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-green-500 text-2xl" />
                <p className="font-semibold text-gray-800">+234-(0)-813-8979-218</p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneVolume className="text-blue-500 text-2xl" />
                <p className="font-semibold text-gray-800">+234-(0)-813-8979-218</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="md:col-span-7">
          <div className="bg-white shadow-md rounded-md mb-3 shadow-gray-300 p-4">
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
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
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
