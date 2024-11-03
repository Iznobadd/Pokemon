import Logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <nav className="grid grid-cols-navbar border-b-[0.5px] border-b-primary">
      <div className="flex justify-center items-center">
        <img src={Logo} alt="Logo Pokemon" className="h-12 cursor-pointer" />
      </div>
      <div className="border-x-[0.5px] border-x-primary px-40">
        <ul className="flex justify-center items-center h-full list-none relative z-10"></ul>
      </div>
      <div className="flex justify-center items-center"></div>
    </nav>
  );
};

export default Navbar;
