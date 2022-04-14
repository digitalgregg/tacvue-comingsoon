import classNames from "classnames";
import React from "react";
import { subtitle_sm } from "../../pages/blueprint";
import { GradientText } from "../Marketplace/Components/CommonStyles";

const HeroSection = () => {
  return (
    <section>
      <div className="container">
        <div className="relative">
          <div className="w-[300px] h-[300px] bg-[#8247E5] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 blur-[240px] rounded-full"></div>
          <div className="flex flex-col items-center justify-end h-[75vh] relative z-[5]">
            <h1 className="text-9xl font-black">
              WE ARE <span className={GradientText}>TACVUE</span>{" "}
            </h1>
            <p className={classNames(subtitle_sm, "mt-6 !uppercase")}>
              This will be our one sentence line about what we as a team stand
              for.
            </p>
            <button className="w-10 mt-11">
              <img src="/images/down_arrow.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
