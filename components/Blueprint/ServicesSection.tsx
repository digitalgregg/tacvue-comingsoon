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
      src: "/images/color_palatte.svg",
      width: 57,
      height: 52,
    },
    title: "CREATE",
    subtitle: "Create your entity card with your own personal HQ",
  },
  {
    img: {
      src: "/images/cart_icon.svg",
      width: 50,
      height: 45,
    },
    title: "BUY & SELL",
    subtitle: "Discover items and collections on the marketplace.",
  },
  {
    img: {
      src: "/images/buy_sell_icon.svg",
      width: 51,
      height: 41,
    },
    title: "EARN",
    subtitle: "earn tokens through staking and the engagement protocol",
  },
  {
    img: {
      src: "/images/users.svg",
      width: 60,
      height: 49,
    },
    title: "ENGAGE",
    subtitle:
      "build and grow with your favorite creators and help shape the future",
  },
];

const ServicesSection = () => {
  return (
    <>
      {/* Services Section --Start-- */}
      <section className="mt-[50px] md:mt-[150px]">
        <div className="container">
          <div className="text-center">
            <h2 className={cx(title_sm, text_gradient)}>MEDIA REIMAGINED</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[50px] lg:mt-[75px] xl:max-w-[1080px] mx-auto mt-[70px] md:mt-[120px]">
            {services.map((service: ServiceType, i: number) => (
              <ServiceCard {...service} key={i} />
            ))}
          </div>
          <div className="flex justify-center overflow-hidden max-w-[100vw] mt-0">
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
