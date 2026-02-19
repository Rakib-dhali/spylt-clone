import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useMediaQuery } from 'react-responsive';

const VideoPinSection = () => {
  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });

  useGSAP(() => {
    if (!isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.vd-pin-section',
          start: '-15% top',
          end: '200% top',
          scrub: true,
          pin: true,
        },
      });

      tl.to('.video-box', {
        clipPath: 'circle(100% at 50% 50%)',
        ease: 'power1.inOut',
      });
    }
  });

  return (
    <section className="vd-pin-section">
      <div
        style={{
          clipPath: isMobile
            ? 'circle(100% at 50% 50%)'
            : 'circle(6.25% at 50% 50%)',
        }}
        className="size-full video-box"
      >
        <video
          playsInline
          muted
          autoPlay
          loop
          src="/videos/pin-video.mp4"
        ></video>
        <div className="abs-center md:scale-100 scale-200">
          <img className="spin-circle" src="/images/circle-text.svg" alt="" />
          <div className="play-btn">
            <img
              className="size-[2.5vw] ml-[.5vw]"
              src="/images/play.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPinSection;
