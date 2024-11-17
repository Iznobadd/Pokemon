import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { FaBasketShopping, FaUser } from "react-icons/fa6";
import { useCart } from "../context/useCart";
const Navbar = () => {
  const { cart } = useCart();

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
        <div className="flex gap-8 items-center">
          <div className="relative">
            <FaBasketShopping className="text-white cursor-pointer" size={32} />
            {cart.length > 0 && (
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
                {cart.length}
              </span>
            )}
          </div>
          <FaUser className="text-white cursor-pointer" size={32} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
