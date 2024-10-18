import React from "react";
import { useState } from "react";
import JobCard from "../Shared/JobCard/JobCard";
import { useLoaderData, useParams } from "react-router-dom";

const CategoryWiseJob = () => {
  const { categoryName } = useParams();
  const categoryJobs = useLoaderData();

  const categoryJobFiltered = categoryJobs?.filter(
    (job) => job.jobCategory === categoryName
  );

  return (
    <div className="mb-20">
      <div className="h-60 bg-[#65e7a1] flex items-center justify-center mb-20 flex-col">
        <h2 className="text-4xl font-bold ">{categoryName}</h2>
        <br />
        <p className="w-1/3 text-center text-lg">
          Find your perfect job with <b>{categoryName}</b> category – your
          ultimate destination for diverse career opportunities.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-5 mt-16 max-w-screen-xl mx-auto">
        {categoryJobFiltered?.map((allJob) => (
          <JobCard key={allJob.id} allJob={allJob}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryWiseJob;
