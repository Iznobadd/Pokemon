import Background from "./components/Background";
import Test from "./pages/Test";
import Footer from "./sections/Footer";
import Navbar from "./sections/Navbar";
import Wrapper from "./sections/Wrapper";

function App() {
  return (
    <div className="relative max-w-[100vw] overflow-hidden h-screen">
      <Background />
      <div className="bg-primary h-screen w-screen shadow-background backdrop-blur-2xl grid grid-rows-[10vh_auto_10vh] grid-cols-1">
        <Navbar />
        <Wrapper>
          <Test />
        </Wrapper>

        <Footer />
      </div>
    </div>
  );
}

export default App;
