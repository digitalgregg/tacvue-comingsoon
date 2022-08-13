import classNames from "classnames";
import React from "react";
import { GradientText } from "../../../components/Marketplace/Components/CommonStyles";

const ChooseYourTeamComingSoonSection = () => {
  return (
    <section
      style={{
        background: "linear-gradient(237.69deg, #121831 2.21%, #000715 87.3%)",
      }}
      className="flex justify-center relative"
    >
      <img
        src="/images/chose_your_team_coming_soon.png"
        alt="chose_your_team_coming_soon"
      />

      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col text-center">
        <p className="text-[#9EB5E1] text-[12px] leading-[15px] xl:text-[24px] xl:leading-[33px] capitalize mb-2.5">
          Choose your team
        </p>
        <h3 className={classNames(GradientText, "home_title_md")}>
          COMING SOON
        </h3>
      </div>
    </section>
  );
};

export default ChooseYourTeamComingSoonSection;
