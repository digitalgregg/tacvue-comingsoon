import classNames from "classnames";
import React from "react";
import { text_gradient, title_sm } from "../../pages/blueprint";
import QuickAboutCard from "../QuickAboutCard";

const TeamSection = () => {
  return (
    <section className="mt-[120px]">
      <h2 className={classNames(text_gradient, title_sm, "text-center")}>
        Meet the team
      </h2>

      <div className="container grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] mt-[110px]">
        {[...new Array(8).keys()].map((e) => (
          <QuickAboutCard
            key={e}
            img={{
              src: "/images/quick_about_1.png",
              width: 348,
              height: 396,
            }}
            name="Team Member"
            title="Role"
          />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
