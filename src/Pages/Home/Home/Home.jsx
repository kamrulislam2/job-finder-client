import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FeaturesJob from "../FeaturesJob/FeaturesJob";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Banner></Banner>
      <Category></Category>
      <FeaturesJob></FeaturesJob>
    </div>
  );
};

export default Home;
