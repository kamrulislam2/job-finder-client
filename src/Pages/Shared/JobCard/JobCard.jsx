import React from "react";
import { GrMap } from "react-icons/gr";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { Link } from "react-router-dom";

const JobCard = ({ allJob }) => {
  const { _id, jobTitle, companyName, jobType, jobLocation, salary } = allJob;

  return (
    <div className="text-left rounded-lg px-8 py-10 h-full border-b-8 border-r-2 border-b-[#4CAF7A] border-r-[#4CAF7A] rounded-b-2xl  shadow-2xl shadow-slate-400">
      <Link to={`/jobDetails/${_id}`}>
        <h2 className="font-bold text-xl mb-2">{jobTitle}</h2>
      </Link>
      <p className="font-semibold text-lg text-gray-500">{companyName}</p>
      <p className="border rounded-md border-[#4CAF7A] text-[#4CAF7A] font-extrabold text-base text-center py-2 px-5 w-1/2 my-3">
        {jobType}
      </p>
      <p className="inline-flex gap-2 items-center font-semibold text-lg text-gray-500 mb-4 lg:mb-0">
        <GrMap className="h-6 w-6 bg-white" />
        Location: {jobLocation}
      </p>
      <div className="inline-flex gap-2 items-center mb-4">
        <HiOutlineCurrencyDollar className="h-6 w-6 text-gray-500" />
        <p className=" font-semibold text-lg text-gray-500 break-words">
          Salary : {salary}
        </p>
      </div>

      <Link to={`/jobDetails/${_id}`}>
        <button className="font-bold text-lg text-white bg-[#4CAF7A] hover:bg-[#54c388] py-3 px-3 lg:px-5 rounded-lg mb-auto shadow-2xl shadow-slate-700 hover:transition-all hover:scale-105">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default JobCard;
