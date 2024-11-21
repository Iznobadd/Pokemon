import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { FaCalendar } from "react-icons/fa6";
const Sidebar = () => {
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
                  to="/test"
                  className="group relative flex items-center gap-3 rounded-sm py-2 px-4 hover:bg-gray-600 text-xl font-semibold text-white/90"
                >
                  <FaCalendar /> Calendar
                </Link>
              </li>
              <li>
                <Link
                  to="/test"
                  className="group relative flex items-center gap-3 rounded-sm py-2 px-4 hover:bg-gray-600 text-xl font-semibold text-white/90"
                >
                  <FaCalendar /> Calendar
                </Link>
              </li>
              <li>
                <Link
                  to="/test"
                  className="group relative flex items-center gap-3 rounded-sm py-2 px-4 hover:bg-gray-600 text-xl font-semibold text-white/90"
                >
                  <FaCalendar /> Calendar
                </Link>
              </li>
              <li>
                <Link
                  to="/test"
                  className="group relative flex items-center gap-3 rounded-sm py-2 px-4 hover:bg-gray-600 text-xl font-semibold text-white/90"
                >
                  <FaCalendar /> Calendar
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
