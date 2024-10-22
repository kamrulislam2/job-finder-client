import React from "react";
import { useEffect, useState } from "react";
import JobCard from "../Shared/JobCard/JobCard";

const AllJobs = () => {
  const [allJobs, setAllJobs] = useState([]);
  useEffect(() => {
    fetch("https://job-filder-server.vercel.app/allJobs")
      .then((res) => res.json())
      .then((data) => setAllJobs(data));
  }, []);

  return (
    <div className="mb-20">
      <div className="h-full md:h-60 p-12 md:py-16 bg-[#65e7a1] flex items-center justify-center mb-20 flex-col">
        <h2 className="text-3xl md:text-4xl font-bold text-center">All Jobs</h2>
        <br />
        <p className="w-full  sm:w-2/3 md:w-1/3 text-center text-lg">
          Find your perfect job with All Jobs – your ultimate destination for
          diverse career opportunities.
        </p>
      </div>

      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-screen-xl mx-auto  mt-8 md:mt-16 px-10">
        {allJobs?.map((allJob) => (
          <JobCard key={allJob._id} allJob={allJob}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
