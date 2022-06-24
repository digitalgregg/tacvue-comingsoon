import React from "react";
import { headingClasses, paragraphClasses } from "../../pages";

const WhyJoinTacVueSection = () => {
  return (
    <section className="py-28 md:mt-16">
      <div className="landing_page_container">
        <div>
          <h2 className={`${headingClasses} text-center`} data-aos="fade-up">
            WHY SHOULD YOU JOIN TACVUE?
          </h2>
          <div className="grid md:grid-cols-2 gap-20 mt-[120px]">
            {/* Box One --Start-- */}
            <div>
              <div className="grid md:grid-cols-[90px,auto] gap-10 relative z-10">
                {/* <BluryCircle className='md:-top-full md:-left-1/2' /> */}
                <div
                  className="-mt-5 w-[40%] mx-auto md:w-full"
                  data-aos="fade-up"
                >
                  <img
                    src="/images/verified-badge.png"
                    className="w-full"
                    alt="verified_shield"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h5
                    data-aos="fade-up"
                    className="font-sans font-bold text-2xl mb-2 md:w-[71%] text-transparent bg-clip-text bg-gradient-to-br from-[#11AAF5] to-[#65D3FF]"
                  >
                    Trusted Contracts &amp; Token-Gated Communication
                  </h5>
                  <p
                    data-aos="fade-up"
                    className={`${paragraphClasses} md:w-[80%]`}
                  >
                    Our smart contracts are highly secure and efficient and
                    tested by the best hackers in the world. We are continually
                    evolving our safety standards in order to provide our
                    members with the highest level of security, so they can use
                    our protocol without the stress or spam
                  </p>
                </div>
              </div>
            </div>
            {/* Box One --End-- */}

            {/* Box Two --Start-- */}
            <div>
              <div className="grid md:grid-cols-[90px,auto] gap-10 relative z-10">
                {/* <BluryCircle className='md:-top-full md:-right-1/3 !bg-[#30266E]' /> */}
                <div
                  data-aos="fade-up"
                  className="-mt-5 w-[40%] mx-auto md:w-full"
                >
                  <img
                    src="/images/megaphone.png"
                    className="w-full"
                    alt="mic"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h5
                    data-aos="fade-up"
                    className="font-sans font-bold text-2xl mb-2 md:w-[65%] text-transparent bg-clip-text bg-gradient-to-br from-[#AD72F3] to-[#C797FF]"
                  >
                    Brand Launchpad
                  </h5>
                  <p
                    data-aos="fade-up"
                    className={`${paragraphClasses} md:w-[85%]`}
                  >
                    Gone are the days of centralized brand development that have
                    become commonplace in the world of social media and Discord
                    DAOs. We provide promotional tools to our most engaged users
                    in order to provide the most committed creators and
                    collectors with the highest visibility on our platform.
                  </p>
                </div>
              </div>
            </div>
            {/* Box Two --End-- */}
          </div>
          <div className="grid md:grid-cols-2 gap-20 mt-[120px]">
            {/* Box One --Start-- */}
            <div>
              <div className="grid md:grid-cols-[90px,auto] gap-10 relative z-10">
                {/* <BluryCircle className='md:-top-full md:-left-1/2' /> */}
                <div
                  className="-mt-5 w-[40%] mx-auto md:w-full"
                  data-aos="fade-up"
                >
                  <img
                    src="/images/bulb.png"
                    className="w-[80%] ml-auto"
                    alt="bulb"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h5
                    data-aos="fade-up"
                    className="font-sans font-bold text-2xl mb-2 md:w-[65%] text-transparent bg-clip-text bg-gradient-to-br from-[#11AAF5] to-[#65D3FF]"
                  >
                    Exposure to New Ideas &amp; Creations
                  </h5>
                  <p
                    data-aos="fade-up"
                    className={`${paragraphClasses} md:w-[80%]`}
                  >
                    The TacVue system allows for new ideas and creations to gain
                    attention and customer traction before the next phase of
                    organizational development. This allows for members to see
                    the emerging ideas and projects that have the potential to
                    take our world by storm.
                  </p>
                </div>
              </div>
            </div>
            {/* Box One --End-- */}

            {/* Box Two --Start-- */}
            <div>
              <div className="grid md:grid-cols-[90px,auto] gap-10 relative z-10">
                {/* <BluryCircle className='md:-top-full md:-right-1/3 !bg-[#30266E]' /> */}
                <div
                  data-aos="fade-up"
                  className="-mt-5 w-[40%] mx-auto md:w-full"
                >
                  <img
                    src="/images/game.png"
                    className="w-[80%] ml-auto"
                    alt="chase"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h5
                    data-aos="fade-up"
                    className="font-sans font-bold text-2xl mb-2 md:w-[65%] text-transparent bg-clip-text bg-gradient-to-br from-[#AD72F3] to-[#C797FF]"
                  >
                    Gamified Brand Building
                  </h5>
                  <p
                    data-aos="fade-up"
                    className={`${paragraphClasses} md:w-[85%]`}
                  >
                    The TacVue platform is designed to be fun. Instead of
                    educating our members on every aspect of the system, we use
                    gamification to provide an intuitive process that lets
                    members have fun while learning about the benefits of
                    decentralized communities and cryptocurrencies.
                  </p>
                </div>
              </div>
            </div>
            {/* Box Two --End-- */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinTacVueSection;
