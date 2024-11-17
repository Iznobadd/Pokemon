import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { FaBasketShopping, FaUser } from "react-icons/fa6";
const Navbar = () => {
  const generations = [
    "Scarlet Violet",
    "Legends Arceus",
    "Brilliant Diamond / Shining Pearl",
    "Sword / Shield",
  ];

  return (
    <nav className="border-b-[0.5px] border-b-primary py-6">
      <div className="flex justify-between items-center w-full h-full container mx-auto">
        <img src={Logo} alt="Logo Pokemon" className="h-12 cursor-pointer" />
        <ul className="flex">
          {generations.map((generation) => (
            <li key={generation} className="mx-4 cursor-pointer text-white">
              <Link to={`/generation/${encodeURIComponent(generation)}`}>
                {generation}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-8">
          <FaBasketShopping className="text-white cursor-pointer" size={32} />
          <FaUser className="text-white cursor-pointer" size={32} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
