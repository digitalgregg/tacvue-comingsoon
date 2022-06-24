import Image from "next/image";
import React from "react";
import { headingClasses_sm, paragraphClasses } from "../../pages";

const EcoFriendlyBlockchainSection = () => {
  return (
    <section className="mt-14 md:mt-24 scroll-mt-24" id="read_more">
      <div className="landing_page_container relative z-10">
        <div className="grid md:grid-cols-[auto,400px] gap-20 place-items-center">
          <div className="md:pr-20 ">
            <h3 className={`${headingClasses_sm} mb-6`} data-aos="fade-up">
              <p>ENJOY INNOVATION.</p>
              <p>BUILD YOUR FUTURE ON TACVUE.</p>
            </h3>
            <p
              className={`${paragraphClasses} mb-8 md:w-[80%]`}
              data-aos="fade-up"
            >
              TacVue is designed to gamify the experience of discovering,
              collecting and creating high quality digital content. We make the
              NFT experience less technical, and more fun, by blending game
              mechanics, decentralized finance and digital identity into an
              immersive experience.
            </p>
          </div>
          <div className="md:w-full" data-aos="fade-up">
            <div className="w-[96%] mx-auto md:w-[85%] md:mr-auto">
              <Image
                width={579}
                height={582}
                src="/images/avax_circle.png"
                alt="Avax"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoFriendlyBlockchainSection;
