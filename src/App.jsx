import Loader from "./components/Hero/Loader";
import Marquee from "./components/marquee/Marquee";
import LocomotiveScroll from "locomotive-scroll";
import Text from "./components/text/Text";
import About from "./components/about/About";
import Indi from "./components/Indi";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Marquees from "./components/Marquees";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Stripes from "./components/Stripes";
import WorkHero from "./components/WorkHero";
const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="min-h-screen w-full">
      <Loader />
      <Marquee />
      <Text />
      <Products />

      <Marquees />

      <About />
      <Indi />
      {/* <WorkHero /> */}

      {/* <Navbar /> */}
      {/* <Stripes /> */}
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
