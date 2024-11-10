import pokeball1 from "../assets/pokeball.png";
import pokeball2 from "../assets/pokeball2.png";

const Background = () => {
  return (
    <div className="-z-10 fixed max-h-screen grid grid-cols-3 gap-12">
      <img src={pokeball1} alt="" className="h-80 size-auto" />
      <img src={pokeball2} alt="" className="h-80 size-auto" />
      <img src={pokeball1} alt="" className="h-80 size-auto" />
      <img src={pokeball2} alt="" className="h-80 size-auto" />
      <img src={pokeball1} alt="" className="h-80 size-auto" />
      <img src={pokeball2} alt="" className="h-80 size-auto" />
    </div>
  );
};

export default Background;
