import gsap from 'gsap';
import Nav from './components/Nav';
import Hero from './sections/Hero';
import { ScrollSmoother, ScrollTrigger } from 'gsap/all';
import Message from './sections/Message';
import FlavorSection from './sections/FlavorSection';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effect: true,
    });
  });

  return (
    <main>
      <Nav />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <Message />
          <FlavorSection />
        </div>
      </div>
    </main>
  );
};

export default App;
