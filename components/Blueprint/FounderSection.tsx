import classNames from "classnames";
import React from "react";
import { text_gradient, title_sm } from "../../pages/blueprint";
import QuickAboutCard from "../QuickAboutCard";

const FounderSection = () => {
  return (
    <section className="mt-[120px] md:mt-[150px]">
      <h2 className={classNames(title_sm, text_gradient, "text-center")}>
        THE FOUNDERS
      </h2>

      <div className="container mt-[86px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          <QuickAboutCard
            img={{
              src: "/images/Sebastian_Lueders.jpg",
              width: 348,
              height: 396,
            }}
            name="Sebastian Lueders"
          />
          <QuickAboutCard
            img={{
              src: "/images/Robert_Goldsborough_III.jpg",
              width: 348,
              height: 396,
            }}
            name="Robert Goldsborough III"
            twitter="https://twitter.com/GoldsboroughIii"
          />
          <QuickAboutCard
            img={{
              src: "/images/Anoop_Nannra.jpg",
              width: 348,
              height: 396,
            }}
            name="Anoop Nannra"
            twitter="https://twitter.com/anannra"
          />
          <QuickAboutCard
            img={{
              src: "/images/Brad_Myrick.jpg",
              width: 348,
              height: 396,
            }}
            name="Brad Myrick"
            twitter="https://twitter.com/terran_nft"
          />
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
