import { Helmet } from "react-helmet";
import Hero from "../components/home/Hero";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - Pokemon</title>
      </Helmet>
      <Hero />
    </>
  );
};

export default Home;
