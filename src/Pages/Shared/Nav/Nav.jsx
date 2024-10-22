import { Link } from "react-router-dom";
import Logo from "../../../assets/job-finder-logo.png";
import { IoMenuSharp } from "react-icons/io5";
import { useState } from "react";

const Nav = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <nav className="py-5 px-5 md:px-10 border-b-[1px] border-b-gray-100 flex justify-between items-center">
      <Link to="/">
        <img className="w-36 md:w-60 h-full " src={Logo} alt="" />
      </Link>
      <ul className="hidden md:flex space-x-4 text-xl font-bold">
        <Link
          to="/"
          className="hover:rounded-full hover:bg-gray-50 hover:scale-105 hover:transition-all hover:shadow-2xl"
        >
          Home
        </Link>
        <Link
          to="/allJobs"
          className="hover:rounded-full hover:bg-gray-50 hover:scale-105 hover:transition-all hover:shadow-2xl"
        >
          All Jobs
        </Link>
      </ul>

      {isVisible && (
        <ul className="md:hidden space-y-2 text-lg transition-all font-bold mt-2 px-4 absolute top-12 rounded py-4 right-6 bg-white shadow-2xl">
          <Link
            to="/"
            className="block hover:rounded-full hover:bg-gray-50 hover:scale-105 hover:transition-all hover:shadow-2xl"
            onClick={() => setIsVisible(false)} // Close the menu on click
          >
            Home
          </Link>
          <Link
            to="/allJobs"
            className="block hover:rounded-full hover:bg-gray-50 hover:scale-105 hover:transition-all hover:shadow-2xl"
            onClick={() => setIsVisible(false)} // Close the menu on click
          >
            All Jobs
          </Link>

          <Link to="/uploadNewJob" onClick={() => setIsVisible(false)}>
            <button className="bg-[#4CAF7A] hover:bg-[#54c388] text-white text-lg font-bold py-2 px-3 rounded shadow-2xl shadow-slate-700 hover:transition-all hover:scale-105 block mt-2">
              Upload New Job
            </button>
          </Link>
        </ul>
      )}
      <Link to="/uploadNewJob">
        <button className="bg-[#4CAF7A] hover:bg-[#54c388] text-white text-xl font-bold py-2 px-4 rounded shadow-2xl shadow-slate-700 hover:transition-all hover:scale-105 hidden md:block">
          Upload New Job
        </button>
      </Link>

      <IoMenuSharp
        size={32}
        className="md:hidden"
        onClick={() => setIsVisible(!isVisible)}
      />
    </nav>
  );
};

export default Nav;
