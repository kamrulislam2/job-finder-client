import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CategoryCard = ({ jobs }) => {
  // eslint-disable-next-line react/prop-types
  const { categoryIcon, categoryName, availablePosition } = jobs;
  return (
    <div className="text-start px-8 py-10 bg-[#65e7a1] rounded shadow-2xl shadow-slate-400">
      <Link
        to={`/${categoryName}`}
        className="bg-[#54c388] h-16 w-16 flex justify-center items-center rounded-lg mb-10 hover:transition-all hover:scale-105"
      >
        <img className="h-10 w-10" src={categoryIcon} alt="job category logo" />
      </Link>
      <Link to={`/${categoryName}`}>
        <h2 className="font-bold text-xl mb-2 hover:transition-all hover:scale-105">
          {categoryName}
        </h2>
      </Link>
      <p className="font-medium text-sm ">
        Available Position: {availablePosition}
      </p>
    </div>
  );
};

export default CategoryCard;
