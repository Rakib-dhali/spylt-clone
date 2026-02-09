import gsap from 'gsap';
import Nav from './components/Nav';
import Hero from './sections/Hero';
import { ScrollTrigger } from 'gsap/all';
import Message from './sections/Messege';

gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <main>
      <Nav />
      <Hero />
      <Message/>
    </main>
  );
};

export default App;
