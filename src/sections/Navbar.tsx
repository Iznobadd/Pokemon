import Logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <nav className="border-b-[0.5px] border-b-primary">
      <div className="flex justify-center items-center w-full h-full">
        <img src={Logo} alt="Logo Pokemon" className="h-12 cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
