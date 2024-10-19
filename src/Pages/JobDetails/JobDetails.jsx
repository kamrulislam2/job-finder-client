import React from "react";
import { GrMap } from "react-icons/gr";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { Link, useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const allJobs = useLoaderData();
  const { id } = useParams();
  const {
    _id,
    jobTitle,
    companyName,
    jobType,
    jobLocation,
    jobCategory,
    jobDescription,
    responsibilities,
    requirements,
    salary,
    deadline,
  } = allJobs?.find((job) => job._id === id);

  return (
    <div>
      <div className="h-60 bg-[#65e7a1] flex items-center justify-center mb-20 flex-col">
        <h2 className="text-4xl font-bold ">Job Details - {jobTitle}</h2>

        <br />
        <p className="w-1/3 text-center text-lg">
          Explore in-depth job listings about <b> {jobTitle} </b> and find the
          details you need to land your next career opportunity.
        </p>
      </div>

      <div className="w-1/2 mx-auto mb-20 text-left rounded-lg px-8 py-10 h-full border-b-8 border-[1px] border-b-[#4CAF7A] border-[#4CAF7A] rounded-b-2xl  shadow-2xl shadow-slate-400">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-xl ">{jobTitle}</h2>
          <p className="text-xs">Deadline: {deadline}</p>
        </div>
        <p className="text-[10px] mb-2 text-muted-foreground">
          Category: {jobCategory}
        </p>
        <p className="font-semibold text-lg text-gray-500">{companyName}</p>

        <p className="border rounded-md border-[#4CAF7A] text-[#4CAF7A] font-extrabold text-base text-center py-2 px-5 w-1/3 my-3">
          {jobType}
        </p>
        <p className="inline-flex gap-2 items-center font-semibold text-lg text-gray-500 mb-4 lg:mb-0">
          <GrMap className="h-6 w-6 bg-white" />
          Location: {jobLocation}
        </p>
        <br />
        <p className=" font-semibold text-lg text-gray-500 break-words inline-flex gap-2 items-center mb-4">
          <HiOutlineCurrencyDollar className="h-6 w-6 bg-white" />
          Salary : {salary}
        </p>

        <br />

        <div className="my-10">
          <h2 className="text-xl font-bold mb-4">Job Descriptions:</h2>
          <p className="text-gray-500">{jobDescription}</p>
        </div>
        <div className="my-10">
          <h2 className="text-xl font-bold mb-4">Job Responsibilities:</h2>
          <p className="text-gray-500">{responsibilities}</p>
        </div>
        <div className="my-10">
          <h2 className="text-xl font-bold mb-4">Requirements:</h2>
          <p className="text-gray-500">{requirements}</p>
        </div>
        <Link to={`/jobDetails/${_id}`}>
          <button className="font-bold text-lg text-white bg-[#4CAF7A] hover:bg-[#54c388] py-3 px-3 lg:px-5 rounded-lg mb-auto shadow-2xl shadow-slate-700 hover:transition-all hover:scale-105">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
