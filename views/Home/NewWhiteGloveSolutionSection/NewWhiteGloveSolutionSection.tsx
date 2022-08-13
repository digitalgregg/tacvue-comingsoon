import React, { useState } from "react";
import Collapsible from "react-collapsible";
import cx from "classnames";
import { GradientText } from "../../../components/Marketplace/Components/CommonStyles";
import WhiteGloveSolutionsModal from "../../../components/WhiteGloveSolutionsModal";

const tabs = [
  {
    title: "Minting website",
    desc: 'Minting is an essential process in converting your artworks into an NFT. The platforms used to mint NFTs are termed "Minting Websites." Here at TacVue, we help guide aspiring NFT minters through making the right decisions regarding which specific tools to use, information to show, etc. We also offer to build your minting website with nothing more than your project idea. ',
  },
  {
    title: "Smart contracts",
    desc: 'A "smart contract" is a collection of code (its functions) and data (its state) that resides at a specific address on the avalanche  blockchain. With the successful delivery of a number of Blockchain projects, the tacVue team has developed a range of expertise in Blockchain development and leverages the same product development proficiency that helped our clients to realize their dreams.',
  },
  {
    title: "Discord Setup",
    desc: `Discord gives you the ability to get personal with your like-minded community members rather than spamming links at them. You are able to host discussions, live stream events, bring new ideas to life, set up calls as well as promote your project. Here at TacVue we will help set your discord channel, adding recommended bots/channel creation/design, and much more that will take your project to the next level.`,
  },
  {
    title: "Hourly consulting",
    desc: `As the NFT ecosystem grows in popularity, both startup projects and large enterprises are racing to have their own unique NFT proposition. The space is becoming more crowded and projects are looking to stand out. How you promote your NFT project is the difference between a success and a failure. That’s why we’re here! TacVue provides the strategies, secrets, and connections that can help your project grow.`,
  },
  {
    title: "Referrals",
    desc: `Drive brand growth through inspiring, entertaining content that reaches the right audience. We’ve Managed & Promoted Accounts for over many NFT Projects on multiple Blockchain networks. Our team are experts of the highest caliber on how to build hype around an NFT collection. We know how to build massive communities, and have the agency connections you need to grow.`,
  },
  {
    title: "Launch day support",
    desc: `TacVue is revolutionizing NFT launches. Conceptualization, building hype and sellout. Gain mass awareness of your NFT project. Don't waste resources. Take your project to sellout with market-leading strategies. Don’t waste your precious budget on searching for prospects. Let TacVue build you an omnichannel strategy, and then we position your project as the hottest new initiative in the metaverse.`,
  },
  {
    title: "Public Relations",
    desc: "Public relations in the NFT industry contains much more than just pushing media content out. Your story needs to be planned and built to create a cohesive narrative that communicates what your business and project strives to achieve and how it can contribute to its field. Let’s talk about how we can get your project and brand out to the masses.",
  },
];

const NewWhiteGloveSolutionSection = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [activeTabIndex, setActiveTabIndex] = useState<number | null>(0);
  return (
    <section className="pt-[60px] pb-5 xl:py-[150px]" id="solutions">
      <div className="home_container">
        <div className="grid grid-cols-1 gap-16 xl:grid-cols-[597px,auto] xl:gap-[180px]">
          <div>
            <h2 className="home_title_md">
              <p>
                White <span className={GradientText}>Glove</span>
              </p>
              <div className="flex items-center gap-5 mt-4">
                <div
                  style={{
                    background:
                      "linear-gradient(91.52deg, #6396f9 40.77%, #00d1ff 115.11%)",
                  }}
                  className="w-10 xl:w-[85px] h-px shrink-0 translate-y-2 xl:translate-y-5"
                ></div>
                <p>solutions</p>
              </div>
            </h2>
            <p className="home_body_text mt-5 xl:mt-[60px] xl:max-w-[85%]">
              A great NFT platform is one that connects like-minded collectors
              and creators. Unlike most big aggregated marketplaces, Tacvue
              allows creators to assemble their own NFT project and doesn’t
              display any NFT’s outside of it’s own marketplace.
            </p>

            <WhiteGloveSolutionsModal
              open={isOpenModal}
              onClose={() => setIsOpenModal(false)}
            />
            <button
              onClick={() => setIsOpenModal(true)}
              className="inline-block py-[17px] text-center px-9 rounded-full border-2 border-transparent home_learn_more_btn hover:enter_multiverse_btn_hover group mt-5 xl:mt-10"
            >
              <span
                className={cx(
                  GradientText,
                  "capitalize font-medium group-hover:!text-white",
                )}
              >
                Get started here
              </span>
            </button>
          </div>

          <div>
            {tabs.map(({ desc, title }, i) => {
              const isOpen = i === activeTabIndex;
              return (
                <div key={i}>
                  <div
                    className={cx(
                      "flex justify-between items-center py-6 xl:py-10 cursor-pointer select-none",
                      i === 0 && "!pt-0",
                    )}
                    onClick={() =>
                      setActiveTabIndex((prev) => (prev === i ? null : i))
                    }
                  >
                    <span
                      className={cx(
                        isOpen && GradientText,
                        "text-[22px] leading-[24px] xl:text-[28px] xl:leading-[39px] capitalize",
                      )}
                    >
                      {title}
                    </span>{" "}
                    <span className={cx("text-[25px]", isOpen && GradientText)}>
                      {isOpen ? <Minus /> : <Plus />}
                    </span>
                  </div>
                  <Collapsible trigger={""} open={isOpen} transitionTime={200}>
                    <p className="home_body_text">{desc}</p>
                  </Collapsible>
                  <div
                    style={{
                      background: isOpen
                        ? "linear-gradient(91.52deg, #6396f9 40.77%, #00d1ff 115.11%)"
                        : "#576993",
                    }}
                    className={cx(
                      "w-full h-px duration-200",
                      isOpen && "mt-10",
                    )}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewWhiteGloveSolutionSection;

const Minus = () => {
  return (
    <svg
      width="16"
      height="2"
      viewBox="0 0 16 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 1H16H0" stroke="#576993" strokeWidth="1.5" />
      <path
        d="M8 1H16H0"
        stroke="url(#paint0_linear_4383_8671)"
        strokeWidth="1.5"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4383_8671"
          x1="-2"
          y1="1.37681"
          x2="15.5857"
          y2="8.83083"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.411458" stopColor="#6396F9" />
          <stop offset="1" stopColor="#00D1FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const Plus = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 0V8M8 8V16M8 8H16H0" stroke="white" strokeWidth="1.5" />
    </svg>
  );
};
