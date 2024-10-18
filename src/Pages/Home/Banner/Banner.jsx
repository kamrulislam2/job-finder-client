import { Link } from "react-router-dom";
import bannerImage from "../../../assets/banner/job-finder-banner2.png";
const Banner = () => {
  return (
    <div className="h-[calc(100vh-85px)] w-full flex items-center ">
      <div className="w-full">
        <h2 className="font-extrabold text-6xl leading-tight w-full lg:w-8/12">
          Find Your
          <span className="text-[#4CAF7A]"> Dream Job</span> Today!
        </h2>
        <p className="font-medium text-lg w-full lg:w-9/12 leading-relaxed my-6">
          Explore thousands of job opportunities across various industries and
          locations. Whether you&apos;re just starting out or looking for your
          next big career move, Job Finder makes it easy to connect with top
          employers. Start your job search today and take the next step in your
          career journey!
        </p>
        <Link to="/allJobs">
          <button className="font-bold text-xl text-white bg-[#4CAF7A] hover:bg-[#54c388] px-4 py-3 lg:py-4 lg:px-7 rounded-lg shadow-2xl shadow-slate-700 hover:transition-all hover:scale-105">
            Explore Now
          </button>
        </Link>
      </div>
      <img
        className="w-full lg:w-2/4 h-[550px] lg:-mr-20 bg-[#54c388] rounded-full"
        src={bannerImage}
        alt="header section image"
      />
    </div>
  );
};

export default Banner;
