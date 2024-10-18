import { Link } from "react-router-dom";
import Logo from "../../../assets/job-finder-logo.png";
const Nav = () => {
  return (
    <nav className="py-5 px-10 border-b-[1px] border-b-gray-100 flex justify-between items-center">
      <Link to="/">
        <img className="w-60 h-full " src={Logo} alt="" />
      </Link>
      <div>
        <ul className="flex space-x-4 text-xl font-bold">
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
      </div>
      <Link to="/uploadNewJob">
        <button className="bg-[#4CAF7A] hover:bg-[#54c388] text-white text-xl font-bold py-2 px-4 rounded shadow-2xl shadow-slate-700 hover:transition-all hover:scale-105">
          Upload New Job
        </button>
      </Link>
    </nav>
  );
};

export default Nav;
