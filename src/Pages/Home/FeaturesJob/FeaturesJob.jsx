import { useEffect, useState } from "react";
import JobCard from "@/Pages/Shared/JobCard/JobCard";

const FeaturesJob = () => {
  const [featuresJob, setFeaturesJob] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) =>
        setFeaturesJob(data.filter((features) => features.featuredJob === true))
      );
  }, []);
  return (
    <div className="my-20">
      <h2 className="text-5xl font-bold text-center">Features Job</h2>
      <p className="text-lg mt-4 text-center w-2/6 mx-auto">
        Discover top featured jobs handpicked to match your career aspirations
        and skills.
      </p>

      <div className="grid lg:grid-cols-3 gap-5 mt-16">
        {featuresJob?.map((featureJob) => (
          <JobCard key={featureJob.id} allJob={featureJob}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturesJob;
