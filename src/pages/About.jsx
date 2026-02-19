// import React, { useState } from "react";
// import Card from "../components/Card";

// import { motion } from "motion/react";
// // import { chooseUs } from "../constants/ChooseUs";
// import about from "../assets/about.jpg";
// import { NavLink } from "react-router-dom";
// const About = () => {
//   const [activeTab, setActiveTab] = useState("skills");
//   const tabs = [
//     { id: "skills", label: "Skills" },
//     { id: "education", label: "Education" },
//     { id: "certification", label: "Certifications" },
//   ];
//   const contents = {
//     skills: (
//       <div className="p-2 ">
//         <p className="text-sm my-3  ">
//           React.js (CSR), Next.js (SSR), JsonWebToken (Authentication) MONGO db,
//           (Postgress Database), Tanstack Query (React Query), Redux/Toolkit,
//           Context API (State Management), React Hook form, Framer Motion,
//           Express.js, MERN-Stack developement and deployment
//         </p>
//       </div>
//     ),
//     education: (
//       <div className="px-2 py-2">
//         <h1 className="font-bold text-sm mb-5 ">Certifications acquired</h1>
//         <ul className="">
//           <li className="font-bold  mb-3">
//             MTF- Intitute of Management, Technology and Finance, Portugal
//             (Virtual certification course),
//           </li>
//           <li>
//             <span className="font-bold ">UDEMY</span>: The Ultimate React Course
//             2024: React, Next.js, Redux & More,
//           </li>
//           <li>
//             {" "}
//             <span className="font-bold mb-3">UDEMY</span>: React- The Complete
//             Guide 2025 (incl. Next.js, Redux),
//           </li>
//           <li>FreeCodeCamp Responsive Web Design</li>
//           <li>
//             <span className="font-bold">UDEMY</span>:Web developer Professional
//             certification
//           </li>
//         </ul>
//       </div>
//     ),
//     certification: (
//       <div className="p-2">
//         <ul className=" text-sm ">
//           <li>
//             The Certified Ultimate React Course 2024: React, Next.js, Redux &
//             More
//           </li>
//           <li>
//             React - The Complete Guide 2025 (incl. Next.js, Redux)- Certified
//           </li>
//           <li>Certified FreeCodeCamp Responsive Web Design</li>
//         </ul>
//       </div>
//     ),
//   };
//   return (
//     <section
//       id="about"
//       className="scroll-m-20 w-full px-2 md:p-10 bg-gray-200 py-10"
//     >
//       {" "}
//       <div className="max-w-4xl mx-auto  my-10">
//         <Card padding="true">
//           <h1 className=" font-bold md:text-2xl text-center text-gray-700">
//             About Us
//           </h1>
//           <div className="w-10 h-1 bg-primary mx-auto mb-5"></div>
//           <motion.div
//             initial={{ opacity: 0, scale: 0.6, y: -2 }}
//             whileInView={{ scale: 1, opacity: 1, y: 1 }}
//             transition={{ duration: 1, ease: "easeInOut" }}
//             className="md:grid grid-cols-12 gap-4"
//           >
//             {/* //////////////////left side */}
//             <div className="col-span-5">
//               <div padding="true">
//                 <img src={about} alt="about image" className="object-cover " />
//               </div>
//             </div>
//             {/* //////////////////right side */}
//             <div className="col-span-7">
//               <div>
//                 <h1 className="font-bold text-primary ">Who we are</h1>
//                 <p className="text-sm">
//                   I am a full stack web developer with a passion for creating
//                   interactive and responsive web applications. I have experience
//                   working with Next.js, React.js, Redux/Toolkit, Mongo Database,
//                   HTML, CSS, Tailwind,MERN-stack Sanity CMS and Git. I am a
//                   quick learner and I am always looking to expand my knowledge
//                   and skill set. I am a team player and I am excited to work
//                   with others to create amazing applications.
//                 </p>

//                 {/* tabs */}
//                 {/* //////////////////////////right side */}
//                 <div
//                   data-aos="fade-up"
//                   className="col-span-6 w-full py-10 bg-white "
//                 >
//                   {/* ////////////////////////Tabs (button) */}
//                   <div className="flex justify-start w-full my-1">
//                     {tabs.map((tab) => (
//                       <div key={tab.id}>
//                         <NavLink
//                           className={` px-2  rounded font-bold ${
//                             activeTab === tab.id
//                               ? "border-b-2 bg-primary text-white py-1"
//                               : "text-black"
//                           } `}
//                           onClick={() => setActiveTab(tab.id)}
//                         >
//                           {tab.label}
//                         </NavLink>
//                       </div>
//                     ))}
//                   </div>
//                   {/* ////////////////////////////tab contents */}
//                   <div className="text-slate-800 text-xs">
//                     {contents[activeTab]}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </Card>
//         {/* <h1 className=" font-bold text-center  text-xl my-5 text-gray-700">
//           Why you should choose us
//         </h1>
//         <motion.div
//           initial={{ opacity: 0, scale: 0.6, y: -2 }}
//           whileInView={{ scale: 1, opacity: 1, y: 1 }}
//           transition={{ duration: 1, ease: "easeInOut" }}
//           // style={box}
//           className="md:grid grid-cols-12 gap-4 w-full"
//         >
//           {chooseUs.map((item, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.2 }}
//               whileTap={{ scale: 0.8 }}
//               className="col-span-3 bg-white shadow-md rounded-md mb-3 shadow-gray-300 p-4"
//             >
//               <div className="flex items-center  gap-2">
//                 {<item.Icon className="font-bold" />}

//                 <h2 className="font-bold my-2">{item.title}</h2>
//               </div>
//               <div className="w-10 h-1 bg-primary mb-2"></div>
//               <p>{item.content}</p>
//             </motion.div>
//           ))}
//         </motion.div> */}
//       </div>
//     </section>
//   );
// };

// export default About;



import React, { useState } from "react";
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";
import Card from "../components/Card";
import about from "../assets/about.jpg";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const tabs = [
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "certification", label: "Certifications" },
  ];

  const contents = {
    skills: (
      <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
        React.js (CSR), Next.js (SSR), JsonWebToken (Authentication), MongoDB,
        PostgreSQL, Tanstack Query (React Query), Redux/Toolkit, Context API,
        React Hook Form, Framer Motion, Express.js, MERN-Stack development and deployment.
      </p>
    ),
    education: (
      <ul className="list-disc list-inside text-gray-700 text-sm lg:text-base space-y-2">
        <li>
          <span className="font-semibold">MTF - Institute of Management, Technology and Finance, Portugal</span> (Virtual certification course)
        </li>
        <li>
          <span className="font-semibold">UDEMY:</span> The Ultimate React Course 2024
        </li>
        <li>
          <span className="font-semibold">UDEMY:</span> React - The Complete Guide 2025
        </li>
        <li>FreeCodeCamp Responsive Web Design</li>
        <li>
          <span className="font-semibold">UDEMY:</span> Web Developer Professional Certification
        </li>
      </ul>
    ),
    certification: (
      <ul className="list-disc list-inside text-gray-700 text-sm lg:text-base space-y-2">
        <li>The Certified Ultimate React Course 2024: React, Next.js, Redux & More</li>
        <li>React - The Complete Guide 2025 (incl. Next.js, Redux) - Certified</li>
        <li>Certified FreeCodeCamp Responsive Web Design</li>
      </ul>
    ),
  };

  return (
    <section className="bg-[#0B1120] py-16" id="about">
      <div className="max-w-7xl mx-auto px-4 lg:px-14">
        <div className="p-10 bg-slate-950">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl lg:text-4xl font-extrabold text-[#22D3EE] mb-3"
            >
              About Us
            </motion.h1>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#F8FAFC] text-sm lg:text-base"
            >
              I am a full-stack web developer passionate about building responsive and interactive web applications with modern technologies.
            </motion.p>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          >
            {/* Image */}
            <div className="md:col-span-5">
              <img
                src={about}
                alt="About Us"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>

            {/* Text + Tabs */}
            <div className="md:col-span-7 space-y-6">
              {/* Who We Are */}
              <div>
                <h2 className="text-xl lg:text-2xl font-bold text-[#22D3EE] mb-2">
                  Who We Are
                </h2>
                <p className="text-[#F8FAFC] text-sm lg:text-base leading-relaxed">
               full-stack developer skilled in React.js, Next.js, Redux/Toolkit, MongoDB, HTML, CSS, Tailwind, MERN-stack, Sanity CMS, and Git. I am a quick learner and love collaborating to create amazing applications.
                </p>
              </div>

              {/* Tabs */}
              <div>
                <div className="flex space-x-4 mb-4">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-4 py-2 font-semibold rounded-md transition-all duration-300 ${
                        activeTab === tab.id
                          ? "bg-[#22D3EE] text-white shadow-lg"
                          : "bg-gray-100 text-gray-800 hover:bg-blue-50"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
                <div className="bg-gray-50 p-4 rounded-md shadow-inner">
                  {contents[activeTab]}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
