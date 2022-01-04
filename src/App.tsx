import "./App.css";
import HeaderHero from "./components/HeaderHero";
import Gallery from "./components/Gallery";
import About from "./components/About";

import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-hidden">
      <HeaderHero />
      <Gallery />
      <About />
      <Footer />
    </div>
  );
}

export default App;
