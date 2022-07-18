import React, { useState } from "react";
import cx from "classnames";
import SmartContractDevelopmentModal from "./Modals/SmartContractDevelopmentModal";
import RegisterModalLayout from "../RegisterModalLayout";
import DiscordSetupModal from "./Modals/DiscordSetupModal";
import MintingWebsiteModal from "./Modals/MintingWebsiteModal";
import HourlyConsultingModal from "./Modals/HourlyConsultingModal";
import LaunchDaySupportModal from "./Modals/LaunchDaySupportModal";
import { GradientText } from "../Marketplace/Components/CommonStyles";
import WhiteGloveSolutionsModal from "../WhiteGloveSolutionsModal";

const cards: CardProps[] = [
  {
    Modal: MintingWebsiteModal,
    buttonText: "Apply Here",
    imgSrc: "/images/minting_website.jpg",
    title: "Minting Website",
    desc: "A minting website is essential for any large-scale project that will go the extra mile to differentiate their brand. We can design, consult and launch your project from your own domain if you want to go the extra mile for your community.",
  },
  {
    Modal: SmartContractDevelopmentModal,
    buttonText: "Inquire",
    imgSrc: "/images/smart_contract_development.jpg",
    title: "Custom Smart Contracts",
    desc: "A smart contract is a self-operating contract that contains terms of agreement between two parties directly written into the contract. The code controls the execution of specified transactions, which are easily trackable and immutable after initiation. The coded agreement is stored across a distributed blockchain network in order to prevent fraudulent mediation. Whether you need a smart contract for a real estate application or a meme marketplace, we build the highest quality smart contracts south of the North Pole.",
  },
  {
    Modal: DiscordSetupModal,
    buttonText: "Inquire",
    imgSrc: "/images/discord_setup.jpg",
    title: "Discord Setup",
    desc: `Discord allows for you to communicate with your community members, interested buyers and NFT holders. We can build gamified Discords with bots for games, customer service, token-gated channels or anything else you may need. No task is too small, we can take your community server to the next level.`,
  },
  {
    Modal: HourlyConsultingModal,
    buttonText: "Apply Here",
    imgSrc: "/images/hourly_consulting.jpg",
    title: "Hourly Consulting",
    desc: `Are you thinking about launching a project but you’re not sure where to start? We can help by providing you with insight, feedback and recommendations on your project so that you can be assured in your strategy. We can also connect you with our network of developers and agencies if you’re looking for some manpower.`,
  },
  // {
  //   Modal: SmartContractDevelopmentModal,
  //   buttonText: "",
  //   imgSrc: "/images/agency_referrals.jpg",
  //   title: "Agency Referrals",
  //   desc: `Drive brand growth through inspiring, entertaining content that reaches the right audience. We’ve Managed & Promoted Accounts for over many NFT Projects on multiple Blockchain networks. Our team are experts of the highest caliber on how to build hype around an NFT collection. We know how to build massive communities, and have the agency connections you need to grow.`,
  // },
  {
    Modal: LaunchDaySupportModal,
    buttonText: "Check availability",
    imgSrc: "/images/launch_day_support.jpg",
    title: "Launch Day Support",
    desc: `Are you worried that launch day might get out of control or do you just want someone on your team to turn to if something goes wrong? Although we know you’ll be fine without us, we are here to help if you want us. Remember, we want to see you crush it!`,
  },
];

const WhiteGloveServicesSection = () => {
  return (
    <section className="py-10 lg:py-[75px]">
      <div className="landing_page_container">
        <h2 className="title_text">
          We’ve got custom solutions for your moonshot project
        </h2>

        <div className="mt-14 lg:mt-[120px] space-y-[60px] xl:space-y-[150px]">
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
  buttonText: string;
};
const Card = ({ isRtl, imgSrc, title, desc, Modal, buttonText }: CardProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      {/* <RegisterModalLayout
        open={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        title={title}
      >
        <Modal onClose={() => setIsOpenModal(false)} />
      </RegisterModalLayout> */}
      <WhiteGloveSolutionsModal
        open={isOpenModal}
        onClose={() => setIsOpenModal(false)}
      />
      <div
        className={cx(
          "flex flex-col gap-5 lg:items-center ipad:gap-10 lg:!gap-[90px]",
          isRtl ? "ipad:flex-row-reverse" : "ipad:flex-row",
        )}
      >
        <div className="shrink-0 ipad:max-w-[50%]">
          <div
            style={{
              background:
                "linear-gradient(180deg, #091c4a 0%, #0d1c40 100%) padding-box padding-box, linear-gradient(91.52deg, #6396F9 40.77%, #00D1FF 115.11%) border-box border-box",
            }}
            className="relative border border-transparent rounded-[20px] overflow-hidden"
          >
            <img src={imgSrc} className="w-full" />
          </div>
        </div>
        <div>
          <h4 className="text-white text-2xl lg:text-[48px] lg:leading-[45px] font-spaced ">
            {title}
          </h4>
          <p
            className="mt-4 lg:mt-8 body_text"
            style={{ textTransform: "unset" }}
          >
            {desc}
          </p>

          <button
            style={{
              background:
                "linear-gradient(#030A1A, #030A1A) padding-box padding-box, linear-gradient(91.52deg, #6396F9 40.77%, #00D1FF 115.11%) border-box border-box ",
            }}
            onClick={() => setIsOpenModal(true)}
            className="py-[16px] px-9 rounded-full border-2 border-transparent text-base lg:text-lg outline-none mt-6 lg:mt-[55px] w-[220px] text-center"
          >
            <span className={cx(GradientText, "font-medium capitalize")}>
              {buttonText}
            </span>
          </button>
        </div>
      </div>
    </>
  );
};
