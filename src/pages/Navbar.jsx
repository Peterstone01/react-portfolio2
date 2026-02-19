// import { FaBars } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div className=" absolute top-0  py-3 px-2 md:px-14 border border-b-light w-full">
//       <div className="flex items-center justify-between space-x-2 md:space-x-10">
//         <Link
//           href="/"
//           className=" font-bold text-2xl lg:text-3xl text-slate-900"
//         >
//           STONE
//           <span className="">web</span>
//         </Link>
//         <div className="flex items-center  justify-center space-x-5"></div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-14 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl md:text-3xl font-extrabold text-gray-900">
          STONE<span className="text-blue-600">web</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-600 transition">About</Link>
          <Link to="/services" className="hover:text-blue-600 transition">Services</Link>
          <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link
            to="/"
            className="block px-6 py-3 text-gray-700 font-medium hover:bg-gray-100 transition"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-6 py-3 text-gray-700 font-medium hover:bg-gray-100 transition"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/services"
            className="block px-6 py-3 text-gray-700 font-medium hover:bg-gray-100 transition"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="block px-6 py-3 text-gray-700 font-medium hover:bg-gray-100 transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
