import React from "react";
import CollectNFTs from "../Icons/CollectNFTs";
import DiscoverTheBest from "../Icons/DiscoverTheBest";
import LaunchAnNFT from "../Icons/LaunchAnNFT";
import OneStepShop from "../Icons/OneStepShop";
import OwnYourNft from "../Icons/OwnYourNft";
import ProjectEvents from "../Icons/ProjectEvents";

const cards = [
  {
    icon: <CollectNFTs />,
    desc: "The most entertaining way to collect NFTs",
  },
  {
    icon: <ProjectEvents />,
    desc: "Post & Boost your tweets & Project events.",
  },
  {
    icon: <LaunchAnNFT />,
    desc: "The fastest way to launch an NFT project on the market.",
  },
  {
    icon: <OneStepShop />,
    desc: "One-stop shop for all your web3 needs!",
  },
  {
    icon: <DiscoverTheBest />,
    desc: "Discover the best projects in web3",
  },
  {
    icon: <OwnYourNft />,
    desc: "Own your NFT experience",
  },
];

const UniqueValuePropositionsSection = () => {
  return (
    <section>
      <div className="landing_page_container">
        <h2 className="title_text">Tacvue Alpha</h2>

        <div className="mt-10 lg:mt-[100px] grid grid-cols-1 gap-y-5 md:gap-x-7 md:gap-y-5 md:grid-cols-2 xl:gap-y-[60px] xl:gap-x-[30px] xl:grid-cols-3">
          {cards.map(({ icon, desc }, i) => (
            <div
              style={{
                background:
                  "linear-gradient(261.43deg, rgba(0, 208, 255, 0.01) 0%, rgba(0, 208, 255, 0.1) 100%)",
              }}
              className="rounded-[20px] py-9 pl-[38px] pr-6 overflow-hidden flex items-center gap-[34px] border border-[rgba(255,255,255,0.08)]"
              key={i}
            >
              <div className="shrink-0 w-[58px] h-[58px] lg:w-auto lg:h-auto flex items-center">
                {icon}
              </div>
              <p className="text-base leading-[28px] xl:text-xl lg:leading-[32px] text-[#9EBBFF]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniqueValuePropositionsSection;
