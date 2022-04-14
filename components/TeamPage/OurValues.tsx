import classNames from "classnames";
import React from "react";
import { subtitle_sm, text_gradient, title_sm } from "../../pages/blueprint";

const OurValues = () => {
  return (
    <section className="mt-[230px] mb-[120px]">
      <div className="container">
        <div className="grid grid-cols-[45%,auto]">
          <div>
            <h2 className={classNames(title_sm, text_gradient)}>
              We’re Driven By Our Values
            </h2>
            <p className={classNames(subtitle_sm, "mt-14 w-[55%] relative")}>
              Culture is an incredibly important part of how we operate. we
              stand by six key pillars to success.
            </p>
          </div>
          <div className="space-y-[30px]">
            <div className="grid grid-cols-2 gap-[30px] w-[700px] ml-auto">
              <Item iconSrc="/images/community_icon.svg" text="Community" />
              <Item
                iconSrc="/images/transparency_icon.svg"
                text="Transparency"
              />
            </div>
            <div className="grid grid-cols-2 gap-[30px] w-[700px] ml-auto -translate-x-[30px]">
              <Item iconSrc="/images/team_icon.svg" text="Team" />
              <Item iconSrc="/images/creativity_icon.svg" text="Creativity" />
            </div>
            <div className="grid grid-cols-2 gap-[30px] w-[700px] ml-auto -translate-x-[60px]">
              <Item iconSrc="/images/innovation_icon.svg" text="Innovation" />
              <Item
                iconSrc="/images/trust_respect_icon.svg"
                text="Trust & Respect"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;

type ItemProps = {
  iconSrc: string;
  text: string;
};
const Item = ({ iconSrc, text }: ItemProps) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(#062036 0%, rgb(0 209 255 / 0%) 100%) padding-box padding-box, linear-gradient(rgb(255 255 255 / 20%) 0%, rgba(25, 195, 254, 0) 79.17%) border-box border-box",
      }}
      className="py-[20px] px-[25px] rounded-[20px] overflow-hidden flex items-center gap-5 border-2 border-transparent"
    >
      <div
        style={{
          background:
            "linear-gradient(#062036 0%, rgb(0 209 255 / 0%) 100%) padding-box padding-box, linear-gradient(rgb(255 255 255 / 20%) 0%, rgba(25, 195, 254, 0) 79.17%) border-box border-box",
        }}
        className="w-[60px] h-[60px] flex items-center justify-center rounded-full overflow-hidden border-2 border-transparent"
      >
        <img src={iconSrc} alt="community_icon" width={25} height={25} />
      </div>
      <p className="text-xl text-white font-semibold">{text}</p>
    </div>
  );
};
