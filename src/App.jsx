import Loader from './components/Hero/Loader'
import Marquee from './components/marquee/Marquee'
import LocomotiveScroll from 'locomotive-scroll';
import Text from './components/text/Text';
import About from './components/about/About';
const App = () => {
const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='min-h-screen w-full'>
      <Loader />
      <Marquee />
      <Text />
      <About />
    </div>
  )
}

export default App