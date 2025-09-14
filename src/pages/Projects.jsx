import React from "react";
import { hover, motion } from "motion/react";
// import { Link, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { spring } from "motion";
import { projects } from "../constants/projects";

const Projects = () => {
  const generator = spring({ keyframes: [0, 100] });
  // const { value, done } = generator.next(10); // Spring state at 10 milliseconds
  return (
    <div
      id="projects"
      className="px-2 lg:px-14 lg:py-5  bg-gray-200 pb-5 mb-10 xl:min-h-[100vh] w-full"
    >
      <div className="text-center my-3 lg:my-10">
        <h1 className="font-bold text-xl mb-5 text-black ">
          MY RECENT PROJECTS
        </h1>
        <motion.p className="text-black w-[90%] mx-auto  bg-white shadow-md rounded-md mb-3 shadow-gray-300 p-4">
          All the projects in this portfolio are aimed at demonstrating the
          understanding of the important framework of a fullstack web
          developement. the major frameworks covered by these projects
          includdes: React.JS, NEXT.js, Postgress database(supabase),
          Authentication(supabase, Auth.js, Clerk, etc), Redux/Toolkits for
          state management and so on
        </motion.p>
      </div>
      <div className="w-full lg:w-[100%]  lg:space-x-10 block  ">
        <div className="col-span-10 space-x-0 grid lg:grid-cols-4 grid-cols-1 gap-4">
          {projects.map((item, i) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.6, y: -2 }}
              whileInView={{ scale: 1, opacity: 1, y: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              key={i}
              className=" bg-white shadow-md rounded-md mb-3 shadow-gray-300   "
            >
              <Link to={item.href} className="">
                <img
                  src={item.image}
                  alt="trusted brands"
                  width={100}
                  height={100}
                  property=""
                  className=" h-[300px] lg:w-[600px] w-full  object-cover"
                />
              </Link>
              <div className="p-4">
                <h1 className=" font-bold text-green-500  my-2 line-clamp-1">
                  {item.title}
                </h1>
                <p className="line-clamp-4 text-black">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
