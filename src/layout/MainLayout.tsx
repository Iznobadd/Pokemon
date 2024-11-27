import Navbar from "../sections/Navbar";
import Wrapper from "../sections/Wrapper";
import { Outlet } from "react-router-dom";
import Footer from "../sections/Footer";
import Background from "../components/Background";

const MainLayout = () => {
  return (
    <div className="relative max-w-[100vw] overflow-hidden bg-black">
      <Background />
      <div className="w-screen shadow-background min-h-screen">
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
