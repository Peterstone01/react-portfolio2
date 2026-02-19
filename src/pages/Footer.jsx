

// import React from "react";
// // import { navigations } from "../constants/navigations";
// import { navlinks } from "../constants/navlinks";

// import { Link } from "react-scroll";
// import Card from "../components/Card";
// import { MdOutlineMarkEmailRead } from "react-icons/md";
// import { FaPhoneVolume, FaWhatsapp } from "react-icons/fa";
// import { BsWhatsapp } from "react-icons/bs";
// import { FaInstagram } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";

// const Footer = () => {
//   return (
//     <div className="bg-[#00335b] px-16 w-full bottom-0  mb-0 min-h-[50vh] ">
//       <div className="max-w-6xl mx-auto  my-10">
//         <div className="pt-10 flex  justify-center items-center">
//           <Link
//             to="hero"
//             className="text-emerald-500 text-2xl md:text-4xl font-bold"
//           >
//             DiGITAL-stone
//           </Link>
//         </div>
//         <p className="text-gray-200 text-center text-sm">
//           fullstack web developer
//         </p>
//         <div className="flex gap-2  justify-center items-center my-3 text-white">
//           <button className="p-1 shadow-md bg-green-500 rounded-full">
//             <BsWhatsapp />
//           </button>
//           <button className="p-1 shadow-md bg-pink-500 rounded-full">
//             <FaInstagram />
//           </button>
//           <button className="p-1 shadow-md bg-black rounded-full">
//             <FaXTwitter />
//           </button>
//         </div>
//         <div className="w-full h-[1px] bg-gray-300 my-2 mx-auto mb-5"></div>
//         <div className=" md:grid grid-cols-12 gap-5 ">
//           <div className="col-span-4">
//             <div className=" shadow-md rounded-md mb-3  p-4">
//               <h4 className="text-gray-400 text-sm">
//                 we are team of fullstack developer and expert in Mern-stack web
//                 developement
//               </h4>
//             </div>
//           </div>
//           <div className="col-span-4 text-gray-400 text-sm">
//             <div className=" shadow-md rounded-md mb-3  p-4 w-full">
//               <div className="flex items-center justify-start my-2 gap-2">
//                 <MdOutlineMarkEmailRead />
//                 <p>Send us Mail: peterogechukwu58@gmail.com</p>
//               </div>
//               <div className="flex items-center justify-start mb-2 gap-2">
//                 <FaWhatsapp />
//                 <p>Reachout via Whatsapp: +234-(0)-813-8979-218</p>
//               </div>
//               <div className="flex items-center justify-start gap-2">
//                 <FaPhoneVolume />
//                 <p>Our official call line: +234-(0)-813-8979-218</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-span-4">
//             <div className="shadow-md rounded-md mb-3  p-4 w-full">
//               {navlinks.map((item, i) => (
//                 <div
//                   key={i}
//                   className="flex items-center gap-1 text-gray-400 text-sm"
//                 >
//                   {/* {<item.Icon />} */}
//                   <Link
//                     smooth={true}
//                     duration={300}
//                     to={item.href}
//                     className="cursor-pointer"
//                   >
//                     {item.name}
//                   </Link>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
// // export default function Footer() {
// //   return (
// //     <footer className="py-6 bg-gray-800 text-white text-center">
// //       <p>&copy; 2026 Ogechukwu Peter. All rights reserved.</p>
// //       <div className="flex justify-center gap-4 mt-2">
// //         <a href="#" className="hover:text-blue-400">GitHub</a>
// //         <a href="#" className="hover:text-blue-400">LinkedIn</a>
// //         <a href="#" className="hover:text-blue-400">Twitter</a>
// //       </div>
// //     </footer>
// //   );
// // }



import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { BsWhatsapp } from "react-icons/bs";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { navlinks } from "../constants/navlinks";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-6 lg:px-20">
      {/* Logo & Intro */}
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-4xl font-bold text-emerald-500">
          DiGITAL-stone
        </h1>
        <p className="text-gray-400 mt-2 text-sm md:text-base">
          Fullstack Web Developer | MERN-stack Expert
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://wa.me/2348138979218"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-green-500 rounded-full hover:bg-green-600 transition"
          >
            <BsWhatsapp className="text-white text-xl" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-pink-500 rounded-full hover:bg-pink-600 transition"
          >
            <FaInstagram className="text-white text-xl" />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition"
          >
            <FaXTwitter className="text-white text-xl" />
          </a>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {/* About */}
        <div>
          <h4 className="text-white font-semibold mb-4">About Us</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            We are a team of fullstack developers specializing in modern web
            applications using MERN-stack and cutting-edge technologies.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MdOutlineMarkEmailRead className="text-emerald-500 text-lg" />
              peterogechukwu58@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <BsWhatsapp className="text-green-500 text-lg" />
              +234-(0)-813-8979-218
            </li>
            <li className="flex items-center gap-2">
              {/* <FaPhoneVolume className="text-blue-500 text-lg" /> */}
              +234-(0)-813-8979-218
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {navlinks.map((link, i) => (
              <li key={i}>
                <ScrollLink
                  to={link.href}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-emerald-500 transition"
                >
                  {link.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mb-4"></div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm">
        &copy; 2026 DiGITAL-stone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
