import classNames from "classnames";
import React from "react";
import { GradientText } from "../../Marketplace/Components/CommonStyles";

const boxs: BoxProps[] = [
  {
    img: "/images/tacvue_logo_gradient.svg",
    label: "2%",
    imgClass: "max-w-[70%]",
  },
  {
    img: "/images/app_store.svg",
    label: "15-30%",
    imgClass: "max-w-[27%]",
  },
  {
    img: "/images/youtube.svg",
    label: "45%",
    imgClass: "max-w-[30%]",
  },
  {
    img: "/images/others_social_icons.svg",
    label: "~100%",
    imgClass: "max-w-[70%]",
  },
];

const BuiltForThePeopelSection = () => {
  return (
    <section>
      <div className="landing_page_container">
        <div className="text-center">
          <h2 className="title_text lg:max-w-[55%] lg:mx-auto">
            BUILT FOR THE PEOPLE, BY THE PEOPLE
          </h2>
          <p className="text-lg text-[#FEFEFE] mt-5 pb-10 border-b border-[#838CA3] mb-10 w-fit mx-auto lg:px-3">
            Web3 platforms have drastically lower royalty shares than the
            internet giants today
          </p>
          <p className={classNames(GradientText, "italic font-medium")}>
            “The tyranny of big tech can be challenged”
          </p>
          <p className={classNames(GradientText, "text-sm font-medium mt-2.5")}>
            - Jon Harvey
          </p>
        </div>

        <div className="mt-[60px] grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 lg:gap-[30px]">
          {boxs.map((box, i) => (
            <Box {...box} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuiltForThePeopelSection;

type BoxProps = {
  label: string;
  img: string;
  imgClass: string;
};
const Box = ({ label, img, imgClass }: BoxProps) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(261.43deg, rgba(0, 208, 255, 0.01) 0%, rgba(0, 208, 255, 0.1) 100%)",
      }}
      className="aspect-square rounded-[20px] flex flex-col justify-center items-center text-center  gap-[30px]"
    >
      <img src={img} className={imgClass} />
      <p
        className={classNames(
          GradientText,
          "text-[40px] md:text-[64px] leading-[110%] md:leading-[140%] font-spaced",
        )}
      >
        {label}
      </p>
    </div>
  );
};
