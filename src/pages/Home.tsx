import { Helmet } from "react-helmet";
import Mew from "../assets/mew.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - Pokemon</title>
      </Helmet>
      <div className="flex justify-around items-center">
        <div className="w-1/2">
          <h1 className="text-5xl leading-relaxed">
            Discover and collect
            <br /> extraordinary
            <br /> Your Pokemons
          </h1>
          <Link
            to="/generation/Scarlet Violet"
            className="bg-button text-white px-12 py-4 rounded-md text-xl mt-8 inline-block"
          >
            Explore
          </Link>
        </div>
        <div className="w-1/2">
          <img src={Mew} alt="" className="" />
        </div>
      </div>
    </>
  );
};

export default Home;
