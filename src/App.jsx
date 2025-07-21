import Loader from './components/Hero/Loader'
import Marquee from './components/Marquee'
import LocomotiveScroll from 'locomotive-scroll';
import Text from './components/text/Text';
const App = () => {
const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='min-h-screen w-full'>
      <Loader />
      <Marquee />
      <Text />
    </div>
  )
}

export default App