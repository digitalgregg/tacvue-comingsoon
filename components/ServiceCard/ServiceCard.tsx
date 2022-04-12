import React from "react";
import cx from "classnames";
import { subtitle_sm, text_gradient, title_sm } from "../../pages/blueprint";
import Image from "next/image";
import { ServiceType } from "../Blueprint/ServicesSection";

const ServiceCard = ({
  img: { src, width, height },
  title,
  subtitle,
}: ServiceType) => {
  return (
    <div
    //   style={{
    //     background:
    //       'linear-gradient(#000715,#030B1A) padding-box padding-box, linear-gradient(rgb(255 255 255 / 20%), rgb(255 255 255 / 20%), rgba(0,0,0,0), rgba(0,0,0,0)) border-box border-box',
    //   }}
    //   className='border border-transparent rounded-[20px]'
    >
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 209, 255, 0.1) 0%, rgba(0, 209, 255, 0) 100%)",
        }}
        className="pt-[50px] pb-[95px] rounded-[20px] border border-transparent px-6 md:px-8"
      >
        <div
          style={{
            background:
              "linear-gradient(91.52deg, rgb(99 150 249 / 10%) 40.77%, rgb(0 209 255 / 10%) 115.11%), rgb(87 105 147 / 10%)",
          }}
          className="w-[110px] h-[110px] rounded-full mx-auto overflow-hidden bg-slate-800 flex items-center justify-center"
        >
          <Image src={src} width={width} height={height} alt={title} />
        </div>
        <h2
          className={cx(
            text_gradient,
            "mt-[40px] text-[26px] font-bold font-sans text-center uppercase",
          )}
        >
          {title}
        </h2>
        <p className={cx(subtitle_sm, "mt-[15px] text-center")}>{subtitle}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
