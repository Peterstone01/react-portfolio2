// import { FaWhatsapp } from "react-icons/fa";
// import { IoMailUnreadOutline } from "react-icons/io5";
// import about1 from "../assets/about1.jpg";
// import gradient4 from "../assets/gradient4.jpg";
// import { motion } from "motion/react";
// import { Link } from "react-router-dom";
// import Navbar from "./Navbar";

// // import hero3 from "../assets/hero.jpg";

// const Hero = () => {
//   return (
//     <div className=" relative border-b  border-b-light bg-grey  xl:min-h-[100vh] w-full ">
//       <img
//         src={gradient4}
//         className="h-[80vh] md:h-[50vh]  lg:h-[100vh]  w-full -z-1"
//       />
//       <Navbar />
//       <div className=" w-full  flex  justify-center items-center py-10  flex-col mx-auto">
//         {/* ////////////////////////////// */}
//         <div className="absolute grid grid-cols-12  lg:space-x-4 items-center xl:gap-4 w-full md:w-[70%] lg:w-[90%] top-[10%]">
//           <div className="col-span-5 ">
//             <div>
//               <motion.img
//                 animate={{ y: [0, -5, 0] }}
//                 transition={{
//                   duration: 4,
//                   ease: "easeInOut",
//                   repeat: Infinity,
//                 }}
//                 src={about1}
//                 width={200}
//                 height={200}
//                 alt="profile image"
//                 className="  rounded-3xl lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] "
//               />
//             </div>
//           </div>
//           <div className="col-span-7">
//             {" "}
//             <div className="my-5  md:px-10 py-2">
//               <p className="   lg:font-bold text-xl text-slate-900 lg:text-2xl">
//                 Hi, I am Peter Ogechukwu,
//               </p>
//               <h1 className="  font-bold text-2xl my-1 lg:my-3  lg:font-extrabold lg:text-3xl text-Slate-800">
//                 A Fullstack <span> Web Developer</span>
//               </h1>
//               <h1 className="  font-bold    text-light lg:font-extrabold lg:text-3xl"></h1>
//               <div className="hidden lg:block">
//                 <p className="text-black ">
//                   I am Dynamic, responsive, user-friendly and well optimized Web
//                   Developer. I am strongly focused on React.JS for Front-end
//                   development and Node/Express.js for Back-end and server-side
//                   logics. with a proven track record of delvering high-quality
//                   projects, I specialize in creating scalable, user-friendly and
//                   mobile responsive websites
//                 </p>

//                 <p className="text-slate-800 my-3">
//                   Either you need an expert to join your team or a relaible
//                   professional to take charge of your entire project, I am here
//                   to Render a high Quality service to match your standard and
//                   needs
//                 </p>
//               </div>
//               {/* <p className=" hidden lg:block my-3 text-white">
//                 I am Dynamic, responsive, user-friendly and well optimized Web
//                 Developer. my favorite frame-works includes: Next.js, React.js,
//                 Mongo Database, React QUERY, React-Hook-Form Tailwind CSS,
//                 Redux/Toolkit, Framer Motion, MERN Stack.
//               </p> */}

//               <h2 className="hidden lg:block font-bold text-lg lg:text-xl    text-slate-700">
//                 For Collaboration and about your next project?
//               </h2>
//               <div className="hidden lg:block my-5 space-x-5">
//                 <Link
//                   to="https://wa.me/+2348138979218"
//                   className="bg-slate-950 py-2 px-5 rounded font-bold text-lg text-white "
//                 >
//                   Whatsapp
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className=" my-4 absolute top-[40%] border-t py-5 md:top-[50%] left-0 lg:hidden text-sm">
//             <p className="text-slate-800 px-2 ">
//               I am Dynamic, responsive, user-friendly and well optimized Web
//               Developer. I am strongly focused on React.JS, Next JS, Tailwind
//               CSS, React QUERY, React-Hook-Form Tailwind CSS, Redux/Toolkit,
//               Framer Motion, etc. for Front-end development and Node.js,
//               Express.js, Mongo Database, for Back-end and server-side logics.
//               with a proven track record of delvering high-quality projects, I
//               specialize in creating scalable, user-friendly and mobile
//               responsive websites
//             </p>

//             <h2 className="lg:hidden font-bold lg:text-xl px-2 text-slate-950">
//               For Collaboration and about your next project?
//             </h2>
//             <div className="lg:hidden px-2  space-x-5 my-3">
//               <link></link>
//               {/* <button className="bg-primary py-2 px-5 rounded text-white  gap-2">
//               Email
//             </button> */}
//               <Link
//                 to="https://wa.me/+2348138979218"
//                 className="bg-slate-900 py-2 px-5 rounded font-bold text-lg text-white  "
//               >
//                 Whatsapp
//               </Link>
//             </div>
//           </div>
//         </div>
//         {/* ////////////////////////////// */}
//         {/* ////////////////////image */}

//         {/* ///////////////////////hero text */}
//       </div>
//     </div>
//   );
// };

// export default Hero;

import Navbar from "../components/Navbar";
import Card from "../components/Card";
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";
import Slider from "./Slider";
const Hero = () => {
  ///////////////////////////////////////////////////////

  return (
    <div id="hero" className=" mx-auto bg-green-500  w-full">
      <Navbar />
      {/* ///////////////////////////////////// */}
      <Slider />
      {/* ///////////////////////////////////////////// */}
      <div className="absolute top-1/2 left-1/2 w-full md:w-[70%] -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-3xl md:text-5xl text-center  text-white font-bold   ">
          DiGITAL-stone<span className=""> </span>
          <div className="w-20 h-1 mt-2 bg-primary mx-auto mb-5"></div>
        </h1>
        <div>
          <p className="  text-center text-white max-w-4xl leading-5 px-3">
            we are team of fullstack developer and expert in Mern-stack web
            developement
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

///////////////////////////////////
