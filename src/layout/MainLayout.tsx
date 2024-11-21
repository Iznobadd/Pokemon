import Background from "../components/Background";
import Navbar from "../sections/Navbar";
import Wrapper from "../sections/Wrapper";
import { Outlet } from "react-router-dom";
import Footer from "../sections/Footer";

const MainLayout = () => {
  return (
    <div className="relative max-w-[100vw] overflow-hidden bg-black">
      <Background />
      <div className="bg-primary w-screen shadow-background backdrop-blur-2xl">
        <Navbar />
        <Wrapper>
          <Outlet />
        </Wrapper>

        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
