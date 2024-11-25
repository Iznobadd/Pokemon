import Mew from "../../assets/mew.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="w-1/2">
        <h1 className="text-5xl leading-relaxed">
          Discover and collect
          <br /> extraordinary
          <br /> <span className="text-primary">Your Pokemons</span>
        </h1>
        <Link
          to="/generation/Scarlet Violet"
          className="bg-button text-white px-12 py-4 rounded-md text-xl mt-8 inline-block"
        >
          Explore
        </Link>
      </div>
      <div className="w-1/2 text-center">
        <img src={Mew} alt="" className="inline" />
      </div>
    </div>
  );
};

export default Hero;
