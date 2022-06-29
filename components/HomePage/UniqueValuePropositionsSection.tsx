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
    <section className="pt-20 lg:pt-[170px]">
      <div className="landing_page_container">
        <h2 className="text-center font-spaced text-[32px] leading-[30px] lg:text-[64px] lg:leading-[61px] ">
          Unique Value Propositions
        </h2>

        <div className="mt-[100px] grid grid-cols-1 gap-y-5 md:gap-x-7 md:gap-y-5 md:grid-cols-2 xl:gap-y-[60px] xl:gap-x-[30px] xl:grid-cols-3">
          {cards.map(({ icon, desc }, i) => (
            <div
              style={{
                background: "url('/images/card_bg.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className="rounded-[20px] py-9 pl-[38px] pr-6 overflow-hidden flex items-center gap-[34px]"
              key={i}
            >
              <div className="shrink-0">{icon}</div>
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
