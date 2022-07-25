import React from "react";
import { subtitle_sm, text_gradient } from "../../pages/blueprint";
import cx from "classnames";
import { GradientText } from "../Marketplace/Components/CommonStyles";
import CommunityObsessed from "../Icons/CommunityObsessed";
import AgilityOverSize from "../Icons/AgilityOverSize";
import OwnYourContribution from "../Icons/OwnYourContribution";
import AutomateTheBoring from "../Icons/AutomateTheBoring";
import EngagementIsValue from "../Icons/EngagementIsValue";
import ExudeConfidence from "../Icons/ExudeConfidence";
import PoliticsAreInefficient from "../Icons/PoliticsAreInefficient";
import GoTheExtraDistance from "../Icons/GoTheExtraDistance";
import PursuePerfection from "../Icons/PursuePerfection";
import ThinkCosmic from "../Icons/ThinkCosmic";
import TransparencyBuildsTrust from "../Icons/TransparencyBuildsTrust";
import ContributeMore from "../Icons/ContributeMore";

const leadershipData = [
  {
    id: 1,
    title: "Community Obsessed",
    description:
      "Every business commitment our members make is in our community's best interest. Every decision that impacts the community should be visualized from the community's point of view before any action is taken.",
    img: <CommunityObsessed />,
  },
  {
    id: 2,
    title: "Agility over Size",
    description:
      "We firmly believe that the future of TacVue is decentralized and autonomous. Until then, we stick to our core belief that frugality outlasts indulgence.",
    img: <AgilityOverSize />,
  },
  {
    id: 3,
    title: "Own your Contribution",
    description:
      "Every Entity holder is encouraged to follow leadership principles. Members are expected to treat their peers with respect and the TacVue infrastructure as an extension of themselves.",
    img: <OwnYourContribution />,
  },
  {
    id: 4,
    title: "Automate the Boring",
    description:
      "Any task or action that feels repetitive or inefficient should be seen as a problem that requires a solution. If it's tiresome, we strive to automate it.",
    img: <AutomateTheBoring />,
  },
  {
    id: 5,
    title: "Engagement is Value",
    description:
      "Failure to guide, innovate or create is considered a failure to provide the TacVue community with value.",
    img: <EngagementIsValue />,
  },
  {
    id: 6,
    title: "Exude Confidence",
    description:
      "TacVue members must be confident in their ability to receive criticism, reassess their decision-making and determine new paths forward without fear of failure.",
    img: <ExudeConfidence />,
  },
  {
    id: 7,
    title: "Politics are Inefficient",
    description:
      "Success is a state of mind, not a quantitative measure. Strive to act in the community's best interest, but also vocalize your unpopular opinions if you believe they're warranted. Leaders serve the community's best interest with honesty, not politics.",
    img: <PoliticsAreInefficient />,
  },
  {
    id: 8,
    title: "Go the Extra Distance",
    description:
      "TacVue members are encouraged to push the boundaries of what's possible by questioning every piece of the platform. Rather than ask what something is, they should ask why it exists.",
    img: <GoTheExtraDistance />,
  },

  {
    id: 9,
    title: "Pursue Perfection",
    description:
      "True perfection is impossible to accomplish but if our members strive for it, the outcome will always be advantageous.",
    img: <PursuePerfection />,
  },
  {
    id: 10,
    title: "Think Cosmic",
    description:
      "All TacVue members are encouraged to relentlessly push their projects towards monumental goals.",
    img: <ThinkCosmic />,
  },

  {
    id: 11,
    title: "Transparency Builds Trust",
    description:
      "Trust is essential to a community's success. We encourage our members to be transparent because we believe it's essential to sustainable collaboration.",
    img: <TransparencyBuildsTrust />,
  },
  {
    id: 12,
    title: "Contribute More",
    description:
      "In order to compete with established brands, project members need to collaborate with the intention of providing more value than they receive.",
    img: <ContributeMore />,
  },
];

const Leadership = () => {
  return (
    <section className="mt-[150px]">
      <div className="landing_page_container">
        <h2
          className={cx(
            text_gradient,
            "uppercase text-center  text-[30px] sm:text-[40px] leading-[35px] md:text-[65px] md:leading-[60px] font-spaced",
          )}
        >
          Our leadership pillars
        </h2>
        <div className="grid grid-cols-1 minixl:grid-cols-2 gap-y-[30px] gap-x-[30px] mt-20">
          {leadershipData.map((item: any) => {
            return (
              <div
                key={item.id}
                style={{
                  background: "rgba(13, 19, 41, 0.75)",
                }}
                className="text-center border border-white/20 md:text-left flex flex-col md:flex-row md:p-[40px] rounded-[20px] items-center justify-center px-10 py-[30px] gap-6 lg:h-[260px]"
              >
                {/* img */}
                <div
                  style={{
                    background:
                      "linear-gradient(91.52deg, rgba(99, 150, 249, 0.1) 40.77%, rgba(0, 209, 255, 0.1) 115.11%)",
                  }}
                  className="flex justify-center shrink-0 items-center w-[110px] aspect-square rounded-full"
                >
                  {typeof item.img !== "string" && item.img}
                  {/* <img
                    src={item.img}
                    alt=""
                    className="md:w-[45px] md:h-[45px] 2xl:w-[66px] 2xl:h-[66px]"
                  /> */}
                </div>
                {/* content */}
                <div className="flex flex-col">
                  <p
                    className={cx(
                      GradientText,
                      "text-[24px] font-bold leading-[140%]",
                    )}
                  >
                    {item.title}
                  </p>
                  <p
                    className={cx(
                      subtitle_sm,
                      "text-lg text-[#9EBBFF] leading-[145%] mt-4",
                    )}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
