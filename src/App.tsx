import Background from "./components/Background";
import Test from "./pages/Test";
import Footer from "./sections/Footer";
import Navbar from "./sections/Navbar";
import Wrapper from "./sections/Wrapper";

function App() {
  return (
    <div className="relative max-w-[100vw] overflow-hidden">
      <Background />
      <div className="bg-primary w-screen shadow-background backdrop-blur-2xl">
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
