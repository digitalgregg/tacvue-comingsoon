import React, { ReactNode } from "react";
import { headingClasses, paragraphClasses } from "../../pages";

const FutureOfNFTSection = () => {
  return (
    <section className="py-14 md:py-20">
      <div className="landing_page_container">
        <div className="text-center relative z-10">
          {/* <BluryCircle className='top-[150%] left-1/2 -translate-x-1/2 -translate-y-1/2' /> */}
          <h2 className={`${headingClasses} mb-5`} data-aos="fade-up">
            Become an Insider
          </h2>
          <p
            className={`${paragraphClasses} md:w-[40%] mx-auto`}
            data-aos="fade-up"
          >
            Gain entry into the web3 revolution by creating your first
            Multiverse Entity. This asset grants you access to the TacVue
            system.
          </p>
        </div>
        <div
          className="mt-16 md:mt-24 grid md:grid-cols-3 gap-12 md:gap-28 relative z-10 px-5 md:px-0"
          data-aos="fade-up"
        >
          <div
            className="absolute top-1/2 left-1/2 w-2 h-[80%] md:w-[80%] md:h-2 -translate-x-1/2 -translate-y-1/2"
            style={{
              backgroundImage: "url('/images/dots.png')",
              backgroundSize: "20px",
              backgroundPosition: "center",
            }}
          ></div>
          <NFtCard
            title="Personalize"
            subtitle="Customize your own tag so people can find you."
            iconImgSrc="/images/nft_power_icon.png"
            bgImgSrc="/images/nft_card_bg.png"
            alt="nft_card_bg"
          />
          <NFtCard
            title="Recognize"
            subtitle="Make your wallet easily identifiable with your TacVue Entity."
            iconImgSrc="/images/search_icon.png"
            bgImgSrc="/images/nft_card_purple_bg.png"
            alt="nft_card_bg"
          />
          <NFtCard
            title="Secure"
            subtitle="Protect your content with your irrevocable access token."
            iconImgSrc="/images/secure.png"
            bgImgSrc="/images/nft_card_bg.png"
            alt="nft_card_bg"
          />
        </div>
      </div>
    </section>
  );
};

export default FutureOfNFTSection;

type nftCardProps = {
  iconImgSrc: string;
  bgImgSrc: string;
  title: ReactNode;
  subtitle: ReactNode;
  alt: string;
};
const NFtCard = ({
  bgImgSrc,
  iconImgSrc,
  title,
  subtitle,
  alt,
}: nftCardProps) => {
  return (
    <div className="relative">
      <img src={bgImgSrc} alt="nft_card_bg" className="w-full h-auto" />

      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-around items-center">
        <div className="grow w-full flex items-center justify-center">
          <img src={iconImgSrc} alt="nft_power_icon" className="scale-75" />
        </div>
        <div className="text-center px-4 xs:px-5 sm:px-7 flex-shrink-0 py-10 pb-10">
          <h6 className="font-sans font-bold mb-4 text-[22px] text-transparent bg-clip-text bg-gradient-to-br from-[#6396F9] to-[#00D1FF] uppercase">
            {title}
          </h6>
          <p className={`${paragraphClasses}`}>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};
