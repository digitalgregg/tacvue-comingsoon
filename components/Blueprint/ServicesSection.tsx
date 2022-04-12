import React from "react";
import { subtitle_sm, text_gradient, title_sm } from "../../pages/blueprint";
import ServiceCard from "../ServiceCard";
import cx from "classnames";
export type ServiceType = {
  img: {
    src: string;
    width: number;
    height: number;
  };
  title: string;
  subtitle: string;
};
const services: ServiceType[] = [
  {
    img: {
      src: "/images/create_icon.svg",
      width: 41,
      height: 41,
    },
    title: "CREATE",
    subtitle: "Create your entity card with your own personal HQ.",
  },
  {
    img: {
      src: "/images/explore_icon.svg",
      width: 52,
      height: 51,
    },
    title: "EXPLORE",
    subtitle: "Create your entity card with your own personal HQ.",
  },
  {
    img: {
      src: "/images/buy_sell_icon.svg",
      width: 51,
      height: 41,
    },
    title: "BUY & SELL",
    subtitle: "Create your entity card with your own personal HQ.",
  },
  {
    img: {
      src: "/images/setup_wallet_icon.svg",
      width: 56,
      height: 40,
    },
    title: "Set up your wallet",
    subtitle: "Create your entity card with your own personal HQ.",
  },
  {
    img: {
      src: "/images/add_nft_icon.svg",
      width: 56,
      height: 40,
    },
    title: "Add your NFTs",
    subtitle: "Create your entity card with your own personal HQ.",
  },
  {
    img: {
      src: "/images/list_icon.svg",
      width: 56,
      height: 40,
    },
    title: "List them for sale",
    subtitle: "Create your entity card with your own personal HQ.",
  },
  {
    img: {
      src: "/images/create_icon.svg",
      width: 41,
      height: 41,
    },
    title: "CREATE",
    subtitle: "Create your entity card with your own personal HQ.",
  },
  {
    img: {
      src: "/images/create_icon.svg",
      width: 41,
      height: 41,
    },
    title: "CREATE",
    subtitle: "Create your entity card with your own personal HQ.",
  },
];

const ServicesSection = () => {
  return (
    <>
      {/* Services Section --Start-- */}
      <section className="mt-[50px] md:mt-[150px]">
        <div className="container">
          <div className="text-center">
            <h2 className={cx(title_sm, text_gradient)}>OUR Services</h2>
            <p className={cx(subtitle_sm, "mt-[40px] md:w-[500px] mx-auto")}>
              After four friends discovered Solana and its tremendous potential,
              Magic Eden was born
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-[50px] mt-[75px]">
            {services.map((service: ServiceType, i: number) => (
              <ServiceCard {...service} key={i} />
            ))}
          </div>
          <div className="flex justify-center overflow-hidden max-w-[100vw] mt-0 md:mt-[40px]">
            <img
              src="/images/services_rectengle.svg"
              alt="services_rectengle"
              className="w-[120%]"
            />
          </div>
        </div>
      </section>
      {/* Services Section --End-- */}
    </>
  );
};

export default ServicesSection;
