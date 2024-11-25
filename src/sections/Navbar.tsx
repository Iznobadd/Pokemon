import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { FaBasketShopping, FaUser } from "react-icons/fa6";
import { useCart } from "../context/useCart";
import { useAuth } from "../context/useAuth";
const Navbar = () => {
  const { cart } = useCart();
  const { user } = useAuth();

  const generations = [
    "Scarlet Violet",
    "Legends Arceus",
    "Brilliant Diamond / Shining Pearl",
    "Sword / Shield",
  ];

  return (
    <nav className="py-6 bg-black fixed w-full z-30">
      <div className="flex justify-between items-center w-full h-full container mx-auto">
        <Link to="/">
          <img src={Logo} alt="Logo Pokemon" className="h-12 cursor-pointer" />
        </Link>
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
            <Link to="/cart">
              <FaBasketShopping
                className="text-white cursor-pointer"
                size={32}
              />
              {cart.length > 0 && (
                <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-button text-white text-xs font-bold rounded-full px-2 py-1">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>
          <FaUser className="text-white cursor-pointer" size={32} />
          {user?.role === "ADMIN" && (
            <Link
              to="/admin"
              className="text-white px-4 py-2 bg-button rounded-md"
            >
              Administration
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
