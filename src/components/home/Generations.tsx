import LegendsArceus from "../../assets/legends-arceus.jpg";
import ScarletViolet from "../../assets/scarlet-violet.jpg";
import SwordShield from "../../assets/sword-shield.jpg";
import DiamondPearl from "../../assets/diamond-pearl.jpg";
import { Link } from "react-router-dom";
const Generations = () => {
  return (
    <div className="grid grid-cols-2 gap-16 py-40">
      <div
        className="flex flex-col items-center justify-center h-96 text-white bg-cover rounded-xl hover:scale-110 transition-all duration-300"
        style={{ backgroundImage: `url(${ScarletViolet})` }}
      >
        <h1 className="text-4xl font-bold">Scarlet Violet</h1>
        <Link to="/generation/Scarlet Violet">
          <p className="mt-4 text-lg px-12 py-2 bg-button rounded">Explore</p>
        </Link>
      </div>
      <div
        className="flex flex-col items-center justify-center h-96 text-white bg-cover rounded-xl hover:scale-110 transition-all duration-300"
        style={{ backgroundImage: `url(${LegendsArceus})` }}
      >
        <h1 className="text-4xl font-bold">Legends Arceus</h1>
        <Link to="/generation/Legends Arceus">
          <p className="mt-4 text-lg px-12 py-2 bg-button rounded">Explore</p>
        </Link>
      </div>
      <div
        className="flex flex-col items-center justify-center h-96 text-white bg-cover rounded-xl hover:scale-110 transition-all duration-300"
        style={{ backgroundImage: `url(${DiamondPearl})` }}
      >
        <h1 className="text-4xl font-bold text-center">
          Brilliant Diamond <br /> Shining Pearl
        </h1>
        <Link to="/generation/Brilliant Diamond %2F Shining Pearl">
          <p className="mt-4 text-lg px-12 py-2 bg-button rounded">Explore</p>
        </Link>
      </div>
      <div
        className="flex flex-col items-center justify-center h-96 text-white bg-cover rounded-xl hover:scale-110 transition-all duration-300"
        style={{ backgroundImage: `url(${SwordShield})` }}
      >
        <h1 className="text-4xl font-bold">Sword / Shield</h1>
        <Link to="/generation/Sword Shield">
          <p className="mt-4 text-lg px-12 py-2 bg-button rounded">Explore</p>
        </Link>
      </div>
    </div>
  );
};

export default Generations;
