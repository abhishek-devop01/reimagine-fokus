import Loader from "./components/Hero/Loader";
import ScrollMarquee from "./components/marquee/ScrollMarquee";
import LocomotiveScroll from "locomotive-scroll";
import Text from "./components/text/Text";
import SplitImage from "./components/Split/SplitImage";
import Table from "./components/table/Table";
import Footer from "./components/footer/Footer";
import Marquees from "./components/marquee/Marquees";
import Products from "./components/product/Products";

import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TestComponent from "./components/test/Test";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll(); // optional: move to useEffect if needed

  return (
    <div className="min-h-screen w-full">
      
      <Routes>
        {/* Initial route */}
        <Route path="/" element={<Loader />} />
        <Route path="/home" element={<Loader />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* These will show on all pages which may not be what you want */}
      <ScrollMarquee />
      <Products />

      <Text />
      <TestComponent />

      <Marquees />
      <SplitImage />
      <Table />
      <Footer />
    </div>
  );
};

export default App;
