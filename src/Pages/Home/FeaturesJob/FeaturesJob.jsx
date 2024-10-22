import { useEffect, useState } from "react";
import JobCard from "@/Pages/Shared/JobCard/JobCard";

const FeaturesJob = () => {
  const [featuresJob, setFeaturesJob] = useState([]);
  useEffect(() => {
    fetch("https://job-filder-server.vercel.app/allJobs")
      .then((res) => res.json())
      .then((data) =>
        setFeaturesJob(data.filter((features) => features.featuredJob === true))
      );
  }, []);
  return (
    <div className="my-20">
      <h2 className="text-5xl font-bold text-center">Features Job</h2>
      <p className="text-lg mt-4 text-center px-10 md:px-0 w-full md:w-3/6 lg:w-2/6 mx-auto">
        Discover top featured jobs handpicked to match your career aspirations
        and skills.
      </p>

      <div className="grid lg:grid-cols-3 gap-5 grid-cols-1 md:grid-cols-2 mt-8 md:mt-16 px-10">
        {featuresJob?.map((featureJob) => (
          <JobCard key={featureJob._id} allJob={featureJob}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturesJob;
