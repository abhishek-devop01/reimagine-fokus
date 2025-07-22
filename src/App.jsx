import Loader from './components/Hero/Loader'
import Marquee from './components/marquee/Marquee'
import LocomotiveScroll from 'locomotive-scroll';
import Text from './components/text/Text';
import About from './components/about/About';
import Indi from './components/Indi';
const App = () => {
const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='min-h-screen w-full'>
      <Loader />
      <Marquee />
      <Text />
      <Indi />
      <About />
    </div>
  )
}

export default App