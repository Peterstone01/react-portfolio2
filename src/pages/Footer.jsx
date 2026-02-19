

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
export default function Footer() {
  return (
    <footer className="py-6 bg-gray-800 text-white text-center">
      <p>&copy; 2026 Ogechukwu Peter. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="#" className="hover:text-blue-400">GitHub</a>
        <a href="#" className="hover:text-blue-400">LinkedIn</a>
        <a href="#" className="hover:text-blue-400">Twitter</a>
      </div>
    </footer>
  );
}


