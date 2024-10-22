import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    fetch("https://job-filder-server.vercel.app/categorylist")
      .then((res) => res.json())
      .then((data) => setCategoryList(data));
  }, []);
  return (
    <div className="my-20">
      <h2 className="text-5xl font-bold text-center">Job Category</h2>
      <p className="text-lg mt-4 text-center px-10 md:px-0 w-full md:w-3/6 lg:w-2/6 mx-auto">
        Browse diverse job categories and find the perfect role for your skills
        and interests.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8 md:mt-16 px-10">
        {categoryList?.map((jobs) => (
          <CategoryCard key={jobs._id} jobs={jobs}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
