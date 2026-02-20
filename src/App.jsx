import Nav from './components/Nav';
import Hero from './sections/Hero';
import Message from './sections/Message';
import NutritionSection from './sections/NutritionSection';
import FlavorSection from './sections/FlavorSection';
import BenefitSection from './sections/BenefitSection';
import TestimonialSection from './sections/TestimonialSection';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollSmoother, ScrollTrigger } from 'gsap/all';
import FooterSection from './sections/FooterSection';

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
          <NutritionSection />
          <div>
            <BenefitSection />
            <TestimonialSection />
            <FooterSection />
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
