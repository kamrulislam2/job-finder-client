import React from "react";
import { useEffect, useState } from "react";
import JobCard from "../Shared/JobCard/JobCard";

const AllJobs = () => {
  const [allJobs, setAllJobs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allJobs")
      .then((res) => res.json())
      .then((data) => setAllJobs(data));
  }, []);

  return (
    <div className="mb-20">
      <div className="h-60 bg-[#65e7a1] flex items-center justify-center mb-20 flex-col">
        <h2 className="text-4xl font-bold ">All Jobs</h2>
        <br />
        <p className="w-1/3 text-center text-lg">
          Find your perfect job with All Jobs – your ultimate destination for
          diverse career opportunities.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-5 mt-16 max-w-screen-xl mx-auto">
        {allJobs?.map((allJob) => (
          <JobCard key={allJob._id} allJob={allJob}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
