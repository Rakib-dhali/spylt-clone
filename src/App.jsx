import gsap from 'gsap';
import Nav from './components/Nav';
import Hero from './sections/Hero';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <main>
      <Nav />
      <Hero />
    </main>
  );
};

export default App;
