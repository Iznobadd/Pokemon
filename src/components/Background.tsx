import pokeball1 from "../assets/pokeball.png";
import pokeball2 from "../assets/pokeball2.png";

const Background = () => {
  return (
    <div className=" fixed inset-0 h-auto grid grid-cols-3 gap-12 filter blur-3xl">
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
