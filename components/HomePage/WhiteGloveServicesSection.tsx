import React, { useState } from "react";
import cx from "classnames";
import SmartContractDevelopmentModal from "./Modals/SmartContractDevelopmentModal";
import RegisterModalLayout from "../RegisterModalLayout";
import DiscordSetupModal from "./Modals/DiscordSetupModal";
import MintingWebsiteModal from "./Modals/MintingWebsiteModal";
import HourlyConsultingModal from "./Modals/HourlyConsultingModal";
import LaunchDaySupportModal from "./Modals/LaunchDaySupportModal";

const cards: CardProps[] = [
  {
    Modal: MintingWebsiteModal,
    imgSrc: "/images/minting_website.jpg",
    title: "Minting Website",
    desc: 'MINTING is an essential process in converting your artworks into an NFT. The platforms used to mint NFTs are termed "Minting Websites." Here at tacVue, we help guide aspiring NFT minters through making the right decisions regarding which specific tools to use, information to show, etc. We also offer to build your minting website with nothing more than your project idea.',
  },
  {
    Modal: SmartContractDevelopmentModal,
    imgSrc: "/images/smart_contract_development.jpg",
    title: "Smart Contract development",
    desc: 'A "smart contract" is a collection of code (its functions) and data (its state) that resides at a specific address on the avalanche  blockchain. With the successful delivery of a number of Blockchain projects, the tacVue team has developed a range of expertise in Blockchain development and leverages the same product development proficiency that helped our clients to realize their dreams.',
  },
  {
    Modal: DiscordSetupModal,
    imgSrc: "/images/discord_setup.jpg",
    title: "Discord setup",
    desc: `Discord gives you the ability to get personal with your like-minded community members rather than spamming links at them. You are able to host discussions, live stream events, bring new ideas to life, set up calls as well as promote your project. Here at TacVue we will help set your discord channel, adding recommended bots/channel creation/design, and much more that will take your project to the next level.`,
  },
  {
    Modal: HourlyConsultingModal,
    imgSrc: "/images/hourly_consulting.jpg",
    title: "Hourly consulting",
    desc: `As the NFT ecosystem grows in popularity, both startup projects and large enterprises are racing to have their own unique NFT proposition. The space is becoming more crowded and projects are looking to stand out. How you promote your NFT project is the difference between a success and a failure. That’s why we’re here! TacVue provides the strategies, secrets, and connections that can help your project grow.`,
  },
  {
    Modal: SmartContractDevelopmentModal,
    imgSrc: "/images/agency_referrals.jpg",
    title: "Agency Referrals",
    desc: `Drive brand growth through inspiring, entertaining content that reaches the right audience. We’ve Managed & Promoted Accounts for over many NFT Projects on multiple Blockchain networks. Our team are experts of the highest caliber on how to build hype around an NFT collection. We know how to build massive communities, and have the agency connections you need to grow.`,
  },
  {
    Modal: LaunchDaySupportModal,
    imgSrc: "/images/launch_day_support.jpg",
    title: "Launch Day Support",
    desc: `TacVue is revolutionizing NFT launches. Conceptualization, building hype and sellout. Gain mass awareness of your NFT project. Don't waste resources. Take your project to sellout with market-leading strategies. Don’t waste your precious budget on searching for prospects. Let TacVue build you an omnichannel strategy, and then we position your project as the hottest new initiative in the metaverse.`,
  },
];

const WhiteGloveServicesSection = () => {
  return (
    <section className="py-20 lg:pt-[170px] lg:pb-[160px]">
      <div className="landing_page_container">
        <h2 className="text-center lg:w-[80%] mx-auto font-spaced text-[32px] leading-[30px] lg:text-[64px] lg:leading-[61px]">
          Need custom solutions for your project?
        </h2>

        <div className="mt-14 lg:mt-[120px] space-y-[60px] xl:space-y-[100px]">
          {cards.map((card, i) => (
            <Card {...card} isRtl={(i + 1) % 2 === 0 ? true : false} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhiteGloveServicesSection;

type CardProps = {
  imgSrc: string;
  title: string;
  isRtl?: boolean;
  desc: string;
  Modal: any;
};
const Card = ({ isRtl, imgSrc, title, desc, Modal }: CardProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <RegisterModalLayout
        open={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        title={title}
      >
        <Modal onClose={() => setIsOpenModal(false)} />
      </RegisterModalLayout>
      <div
        className={cx(
          "flex flex-col gap-5 items-center lg:gap-[90px]",
          isRtl ? "lg:flex-row-reverse" : "lg:flex-row",
        )}
      >
        <div
          style={{
            background:
              "linear-gradient(180deg, #091c4a 0%, #0d1c40 100%) padding-box padding-box, linear-gradient(91.52deg, #6396F9 40.77%, #00D1FF 115.11%) border-box border-box",
          }}
          className="max-w-[612px] relative border border-transparent rounded-[20px] overflow-hidden shrink-0"
        >
          <img src={imgSrc} />
        </div>
        <div>
          <h4 className="text-white text-2xl lg:text-[48px] lg:leading-[45px] font-spaced ">
            {title}
          </h4>
          <p className="text-[#838CA3] text-base lg:text-xl mt-4 lg:mt-5 capitalize">
            {desc}
          </p>

          <button
            onClick={() => setIsOpenModal(true)}
            className="py-[16px] px-[38px] rounded-full bg-[#0D1C40] hover:bg-[#122552] border-none outline-none mt-6 lg:mt-[60px]"
          >
            Register Now
          </button>
        </div>
      </div>
    </>
  );
};
