import Image from "next/image";
import React, { ReactNode } from "react";

const cardsData: CardProps[] = [
  {
    img: (
      <Image
        src={"/images/3d_power_icon.png"}
        width={49}
        height={80}
        alt="NFT"
      />
    ),
    text: "The most entertaining way to collect NFTs",
  },
  {
    img: (
      <Image
        src={"/images/3d_search_icon.png"}
        width={97}
        height={96}
        alt="SEARCH"
      />
    ),
    text: "Post & Boost your tweets & events. One-stop shop for all your web3 needs!",
  },
  {
    img: (
      <Image
        src={"/images/3d_coins_icon.png"}
        width={90}
        height={60}
        alt="NFT"
      />
    ),
    text: "The fastest way to launch an NFT project on the market.",
  },
];

const UniqueValuePropositionsSection = () => {
  return (
    <section className="py-[170px]">
      <div className="landing_page_container">
        <h2 className="text-center font-spaced text-[64px] leading-[61px] ">
          Unique Value Propositions
        </h2>
        <p className="max-w-[950px] mx-auto mt-7 text-[#838CA3] text-xl text-center ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>

        <div className="mt-[60px] grid grid-cols-3 gap-[30px]">
          {cardsData.map((card, i) => (
            <Card {...card} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniqueValuePropositionsSection;

type CardProps = {
  img: ReactNode;
  text: string;
};
const Card = ({ img, text }: CardProps) => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(261.43deg, rgba(54, 25, 62, 0.7) 0%, rgba(33, 48, 55, 0.7) 100%)",
      }}
      className="backdrop-blur-[80px] rounded-[20px] py-[30px] pl-7 pr-7 grid grid-cols-[auto,auto] gap-[30px] place-items-center"
    >
      {img}
      <p className="text-xl text-[#9EBBFF]">{text}</p>
    </div>
  );
};
