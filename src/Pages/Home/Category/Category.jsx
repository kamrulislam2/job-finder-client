import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    fetch("categoryList.json")
      .then((res) => res.json())
      .then((data) => setCategoryList(data));
  }, []);
  return (
    <div className="my-20">
      <h2 className="text-5xl font-bold text-center">Job Category</h2>
      <p className="text-lg mt-4 text-center w-2/6 mx-auto">
        Browse diverse job categories and find the perfect role for your skills
        and interests.
      </p>

      <div className="grid grid-cols-4 gap-5 mt-16">
        {categoryList?.map((jobs) => (
          <CategoryCard key={jobs.id} jobs={jobs}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
