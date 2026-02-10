import gsap from 'gsap';
import Nav from './components/Nav';
import Hero from './sections/Hero';
import { ScrollTrigger } from 'gsap/all';
import Message from './sections/Messege';
import FlavorSection from './sections/FlavorSection';

gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <main>
      <Nav />
      <Hero />
      <Message/>
      <FlavorSection/>
    </main>
  );
};

export default App;
