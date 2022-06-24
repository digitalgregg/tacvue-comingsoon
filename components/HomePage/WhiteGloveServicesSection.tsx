import Image, { ImageProps } from "next/image";
import React from "react";
import cx from "classnames";
import { title } from "process";

const cards: CardProps[] = [
  {
    imgSrc: "/images/minting_website.jpg",
    title: "Minting Website",
  },
  {
    imgSrc: "/images/smart_contract_development.jpg",
    title: "Smart Contract development",
  },
  {
    imgSrc: "/images/discord_setup.jpg",
    title: "Discord setup",
  },
  {
    imgSrc: "/images/hourly_consulting .jpg",
    title: "Hourly consulting",
  },
  {
    imgSrc: "/images/discord_setup.jpg",
    title: "Agency Referrals",
  },
  {
    imgSrc: "/images/discord_setup.jpg",
    title: "Launch Day Support",
  },
];

const WhiteGloveServicesSection = () => {
  return (
    <section className="pt-[170px] pb-[160px]">
      <div className="landing_page_container">
        <h2 className="text-center w-[80%] mx-auto font-spaced text-[64px] leading-[61px]">
          White glove services for creators and ideators!
        </h2>

        <div className="mt-[120px] space-y-[100px]">
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
};
const Card = ({ isRtl, imgSrc, title }: CardProps) => {
  return (
    <div
      className={cx(
        "flex items-center gap-[90px]",
        isRtl && "flex-row-reverse",
      )}
    >
      <div
        style={{
          background:
            "linear-gradient(180deg, #091c4a 0%, #0d1c40 100%) padding-box padding-box, linear-gradient(91.52deg, #6396F9 40.77%, #00D1FF 115.11%) border-box border-box",
        }}
        className="w-[612px] h-[500px] relative border border-transparent rounded-[20px] overflow-hidden shrink-0"
      >
        <Image src={imgSrc} layout="fill" />
      </div>
      <div>
        <h4 className="text-white text-[48px] leading-[45px] font-spaced ">
          {title}
        </h4>
        <p className="text-[#838CA3] text-xl mt-5">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </p>

        <button className="py-[16px] px-[38px] rounded-full bg-[#0D1C40] hover:bg-[#122552] border-none outline-none mt-[60px]">
          Register Now
        </button>
      </div>
    </div>
  );
};
