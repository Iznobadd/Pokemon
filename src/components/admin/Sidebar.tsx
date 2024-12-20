import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { FaUsers } from "react-icons/fa6";
import { GrOverview } from "react-icons/gr";
import { SiTask } from "react-icons/si";
import { RiArrowGoBackLine } from "react-icons/ri";

const Sidebar = () => {
  const location = useLocation(); // Accède à l'URL actuelle

  // Fonction pour vérifier si le lien est actif
  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="static w-72 h-screen left-0 top-0 z-[9999] flex-col translate-x-0 bg-[#1c2434]">
      <div className="p-6 flex items-center">
        <img src={Logo} alt="Logo Pokémon" className="w-10 inline-block mr-3" />
        <Link to="/admin" className="block text-white text-3xl font-bold">
          <h1>Admin</h1>
        </Link>
      </div>
      <div className="flex flex-col overflow-y-auto">
        <nav className="mt-9 py-4 px-6">
          <div>
            <h3 className="mb-4 ml-4 text-md font-semibold text-gray-400">
              MENU
            </h3>
            <ul className="mb-6 flex flex-col gap-2">
              <li>
                <Link
                  to="/admin"
                  className={`group relative flex items-center gap-3 rounded-sm py-2 px-4 text-xl font-semibold text-white/90 transition duration-300 ${
                    isActive("/admin") ? "bg-gray-600" : "hover:bg-gray-600"
                  }`}
                >
                  <GrOverview /> Vue d'ensemble
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/orders"
                  className={`group relative flex items-center gap-3 rounded-sm py-2 px-4 text-xl font-semibold text-white/90 transition duration-300 ${
                    isActive("/admin/orders")
                      ? "bg-gray-600"
                      : "hover:bg-gray-600"
                  }`}
                >
                  <SiTask /> Commandes
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/users"
                  className={`group relative flex items-center gap-3 rounded-sm py-2 px-4 text-xl font-semibold text-white/90 transition duration-300 ${
                    isActive("/admin/users")
                      ? "bg-gray-600"
                      : "hover:bg-gray-600"
                  }`}
                >
                  <FaUsers /> Utilisateurs
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className={`group relative flex items-center gap-3 rounded-sm py-2 px-4 text-xl font-semibold text-white/90 transition duration-300 ${
                    isActive("/") ? "bg-gray-600" : "hover:bg-gray-600"
                  }`}
                >
                  <RiArrowGoBackLine /> Retour au site
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
