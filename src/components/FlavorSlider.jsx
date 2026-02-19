import { useGSAP } from '@gsap/react';
import { flavorLists } from '../constants';
import gsap from 'gsap';
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

const FlavorSlider = () => {
  const sliderRef = useRef();
  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });
  useGSAP(() => {
    if (!isMobile) {
      const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.flavor-section',
          start: '2% top',
          end: `+=${scrollAmount + 1300}px`,
          pin: true,
          scrub: true,
        },
      });
      tl.to('.flavor-section', {
        x: `-${scrollAmount + 1300}px`,
      });

      const titleTL = gsap.timeline({
        scrollTrigger: {
          trigger: '.flavor-section',
          start: 'top top',
          end: 'bottom 80%',
          scrub: true,
        },
      });

      titleTL
        .to('.first-text-split', {
          xPercent: -30,
          ease: 'power1.inOut',
        })
        .to(
          '.flavor-text.scroll',
          {
            xPercent: -33,
            ease: 'power1.inOut',
          },
          '<',
        )
        .to(
          '.second-text-split',
          {
            xPercent: -10,
            ease: 'power1.inOut',
          },
          '<',
        );
    }
  });

  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors">
        {flavorLists.map((flavor) => (
          <div
            key={flavor.name}
            className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:50vh h-80 flex-none ${flavor.rotation}`}
          >
            <img
              src={`images/${flavor.color}-bg.svg`}
              alt=""
              className=" absolute bottom-0 "
            />
            <img
              src={`images/${flavor.color}-drink.webp`}
              alt=""
              className="drinks"
            />
            <img
              src={`images/${flavor.color}-elements.webp`}
              alt=""
              className="elements"
            />
            <h1>{flavor.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;
