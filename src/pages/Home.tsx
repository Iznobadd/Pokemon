import { Helmet } from "react-helmet";
import Hero from "../components/home/Hero";
import Generations from "../components/home/Generations";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - Pokemon</title>
      </Helmet>
      <Hero />
      <Generations />
    </>
  );
};

export default Home;
