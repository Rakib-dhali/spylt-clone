import FlavorSlider from '../components/FlavorSlider.jsx';
import FlavorTitle from '../components/FlavorTitle.jsx';

const FlavorSection = () => {
  return (
    <section className="flavor-section">
      <div className="h-full flex flex-col lg:flex-row items-center relative">
        <div className=" lg:w-[57%] flex-none lg:h-full md:mt-20 xl:mt-0">
          <FlavorTitle />
        </div>
        <div className="h-full">
          <FlavorSlider />
        </div>
      </div>
    </section>
  );
};

export default FlavorSection;
