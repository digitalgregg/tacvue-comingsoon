import React from "react";
import { headingClasses, paragraphClasses } from "../../pages";

const TechnologySection = () => {
  return (
    <section className="py-28 md:mt-16">
      <div className="landing_page_container">
        <div>
          <h2
            className={`${headingClasses} text-center uppercase`}
            data-aos="fade-up"
          >
            The Destiny of Web3
          </h2>
          <p
            className={`${paragraphClasses} text-center mt-5 md:w-[80%] mx-auto mb-5`}
            data-aos="fade-up"
          >
            Enthusiasts understand that web3 is powerful enough to rebuild
            social constructs and reorganize our common interests towards a
            better future. Most systems attempt to educate you on how to harness
            its power. TacVue is designed for anyone to have fun doing it.
          </p>
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
                    src="/images/color-pallette.png"
                    className="w-full"
                    alt="color_palette"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h5
                    data-aos="fade-up"
                    className="font-sans font-bold text-2xl mb-2 md:w-[65%] text-transparent bg-clip-text bg-gradient-to-br from-[#11AAF5] to-[#65D3FF]"
                  >
                    Create
                  </h5>
                  <p
                    data-aos="fade-up"
                    className={`${paragraphClasses} md:w-[80%]`}
                  >
                    Creators can focus on delivering the highest quality content
                    to their community instead of fighting for space on a
                    never-ending timeline. They earn $AVAX for selling their
                    digital merchandise to their biggest fans.
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
                    src="/images/trophy-1.png"
                    className="w-[85%] ml-auto"
                    alt="trophy"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h5
                    data-aos="fade-up"
                    className="font-sans font-bold text-2xl mb-2 md:w-[65%] text-transparent bg-clip-text bg-gradient-to-br from-[#AD72F3] to-[#C797FF]"
                  >
                    Collect
                  </h5>
                  <p
                    data-aos="fade-up"
                    className={`${paragraphClasses} md:w-[95%]`}
                  >
                    Collectors can exchange assets with a means of representing
                    their social identity, while supporting their favorite
                    creators and communities. They can earn rewards and
                    creations before other entities.
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

export default TechnologySection;
