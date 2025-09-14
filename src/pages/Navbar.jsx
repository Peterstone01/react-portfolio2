import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" absolute top-0  py-3 px-2 md:px-14 border border-b-light w-full">
      <div className="flex items-center justify-between space-x-2 md:space-x-10">
        <Link
          href="/"
          className=" font-bold text-2xl lg:text-3xl text-slate-900"
        >
          STONE
          <span className="">web</span>
        </Link>
        <div className="flex items-center  justify-center space-x-5"></div>
      </div>
    </div>
  );
};

export default Navbar;
