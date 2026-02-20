const FooterSection = () => {
  return (
    <section className="footer-section mt-72">
      <img
        className="w-full object-cover -translate-y-1"
        src="/images/footer-dip.png"
        alt=""
      />
      <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
            <div className="overflow-hidden z-10">
                <h1 className="general-title text-center text-milk py-5">#chugresponsibly</h1>
            </div>
            <video src="/videos/splash.mp4" autoPlay muted className="absolute top-0 object-contain mix-blend-lighten"></video>
            <div className="flex-center gap-5 z-10 md:mt-20 mt-5  ">
                <div className="social-btn"><img src="/images/yt.svg" alt="" /></div>
                <div className="social-btn"><img src="/images/insta.svg" alt="" /></div>
                <div className="social-btn"><img src="/images/tiktok.svg" alt="" /></div>
            </div>
            <div className="mt-40 md:px-10 px-5 gap-10 flex flex-col md:flex-row justify-between text-milk font-paragraph md:text-lg font-medium">
                 <div className="flex items-center md:gap-16 gap-5">
                    <div>
                        <p>SPYLY Flavors</p>
                    </div>
                    <div>
                        <p>Chug Club</p>
                        <p>Student Marketing</p>
                        <p>Dairy Dealers</p>
                    </div>
                    <div>
                        <p>Company</p>
                        <p>Contacts</p>
                        <p>Tasty talk</p>
                    </div>
                    
                 </div>
                 <div className="md:max-w-lg ">
                        <p>Get Exclusive Early Access and Stay Informed About Product Updates, Events, and More!</p>
                        <div className="flex justify-between items-center border-b border-[#d9d9d9] py-5 md:mt-10">
                            <input type="email" placeholder="Enter Your Email" className="w-full placeholder:font-sans placeholder:text-[#999999]"/>
                            <img src="/images/arrow.svg" alt="" />
                        </div>
                    </div>
            </div>
            <div>
                
            </div>
      </div>
    </section>
  );
};

export default FooterSection;
