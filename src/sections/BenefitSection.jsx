import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ClipPathTitle from '../components/ClipPathTitle';
import { SplitText } from 'gsap/all';
import VideoPinSection from '../components/videoPinSection';

const BenefitSection = () => {
  useGSAP(() => {
    const firstSplitText = SplitText.create('.first-para',{
        type: 'words, lines',
        linesClass: 'paragraph-line',
    })
    const secondSplitText = SplitText.create('.second-para',{
        type: 'words, lines',
        linesClass: 'paragraph-line',
    })
    const revealTl = gsap.timeline({
      delay: 0.5,
      scrollTrigger: {
        trigger: '.benefit-section',
        start: 'top 40%',
        end: '30% 10%',
        scrub: true,
      },
    });
    revealTl.from(firstSplitText.words,{
        yPercent: 100,
        stagger: 0.02,
        ease: 'power1.inOut',
    }).to('.first-title', {
     duration: 1,
     opacity: 1,
      clipPath: 'polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)',
      ease: 'power1.inOut',})
    .to('.second-title', {
     duration: .5,
     opacity: 1,
      clipPath: 'polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)',
      ease: 'power1.inOut',})
    .to('.third-title', {
     duration: .5,
     opacity: 1,
      clipPath: 'polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)',
      ease: 'power1.inOut',})
    .to('.fourth-title', {
     duration: .5,
     opacity: 1,
      clipPath: 'polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)',
      ease: 'power1.inOut',}).from(secondSplitText.words,{
        yPercent: 100,
        stagger: 0.02,
        ease: 'power1.inOut',
    })
  });

  return (
    <section className="benefit-section">
      <div className="container mx-auto pt-20">
        <div className="col-center">
          <p className='first-para'>
            Unlock the Advantages <br />
            Explore the Key Benefits of Choosing SPYLT
          </p>

          <div className="mt-20 col-center">
            <ClipPathTitle
              title={'Shelf stable'}
              color={'#faeade'}
              bg={'#c88e64'}
              className={'first-title'}
              borderColor={'#222123'}
            />
            <ClipPathTitle
              title={'PROTEIN + CAFFEINE'}
              color={'#2e2d2f'}
              bg={'#faeade'}
              className={'second-title'}
              borderColor={'#222123'}
            />
            <ClipPathTitle
              title={'infinitely recyclable'}
              color={'#faeade'}
              bg={'#7F3B2D'}
              className={'third-title'}
              borderColor={'#222123'}
            />
            <ClipPathTitle
              title={'lactose free'}
              color={'#2e2d2f'}
              bg={'#f1cc70'}
              className={'fourth-title'}
              borderColor={'#222123'}
            />
          </div>
          <div className="md:mt-0 mt-10">
            <p className='last-para'>add much more ...</p>
          </div>
        </div>
        <div className="relative overlay-box">
           <VideoPinSection />
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
