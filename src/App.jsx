import Loader from "./components/Hero/Loader";
import ScrollMarquee from "./components/marquee/ScrollMarquee";
import LocomotiveScroll from "locomotive-scroll";
import Text from "./components/text/Text";
import Table from "./components/table/Table";
import Footer from "./components/footer/Footer";

import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Influencer from "./components/reviews/Influencer";
import SplitImage from "./components/splitimage/SplitImage";
import Product from "./components/product/Product";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll(); // optional: move to useEffect if needed

  return (
    <div className="min-h-screen w-full">
      
      <Routes>
        <Route path="/" element={<Loader />} />
        <Route path="/home" element={<Loader />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <ScrollMarquee /> 
      <Product />

      <Text />

      <SplitImage />
      <Influencer />
      <Table />
      <Footer />
    </div>
  );
};

export default App;
