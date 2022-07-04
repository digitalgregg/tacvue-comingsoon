import React from "react";
import { subtitle_sm, text_gradient, title_sm } from "../../pages/blueprint";
import cx from "classnames";
import { GradientText } from "../Marketplace/Components/CommonStyles";

const leadershipData = [
  {
    id: 1,
    title: "Community Obsessed",
    description:
      "Every Business Commitment Our Members Make Is In Our Community's Best Interest. Every Decision That Impacts The Community Should Be Visualized From The Community's Point Of View Before Any Action Is Taken.",
    img: "/images/customer-centric.svg",
  },
  {
    id: 2,
    title: "Agility over Size",
    description:
      "We Firmly Believe That The Future Of TacVue Is Decentralized And Autonomous. Until Then, We Stick To Our Core Belief That Frugality Outlasts Indulgence.",
    img: "/images/agility.svg",
  },
  {
    id: 3,
    title: "Own your Contribution",
    description:
      "Every Entity Holder Is Encouraged To Follow Leadership Principles. Members Are Expected To Treat Their Peers With Respect And The TacVue Infrastructure As An Extension Of Themselves.",
    img: "/images/own-your-contribution.svg",
  },
  {
    id: 4,
    title: "Automate the Boring",
    description:
      "Any Task Or Action That Feels Repetitive Or Inefficient Should Be Seen As A Problem That Requires A Solution. If It's Tiresome, We Strive To Automate It.",
    img: "/images/invent-automate.svg",
  },
  {
    id: 5,
    title: "Engagement is Value",
    description:
      "Failure To Guide, Innovate Or Create Is Considered A Failure To Provide The TacVue Community With Value.",
    img: "/images/creativity-over-templates.svg",
  },
  {
    id: 6,
    title: "Exude Confidence",
    description:
      "TacVue Members Must Be Confident In Their Ability To Receive Criticism, Reassess Their Decision-Making And Determine New Paths Forward Without Fear Of Failure.",
    img: "/images/expect-failures.svg",
  },
  {
    id: 7,
    title: "Politics are Inefficient",
    description:
      "Success Is A State Of Mind, Not A Quantitative Measure. Strive To Act In The Community's Best Interest, But Also Vocalize Your Unpopular Opinions If You Believe They're Warranted. Leaders Serve The Community's Best Interest With Honesty, Not Politics.",
    img: "/images/51-rule.svg",
  },
  {
    id: 8,
    title: "Go the Extra Mile",
    description:
      "TacVue Members Are Encouraged To Push The Boundaries Of What's Possible By Questioning Every Piece Of The Platform. Rather Than Ask What Something Is, They Should Ask Why It Exists.",
    img: "/images/curiousity-beats-compliance.svg",
  },

  {
    id: 9,
    title: "Pursue Perfection",
    description:
      "True Perfection Is Impossible To Accomplish But If Our Members Strive For It, The Outcome Will Always Be Advantageous.",
    img: "/images/Group 37693.svg",
  },
  {
    id: 10,
    title: "Think Cosmic",
    description:
      "All TacVue Members Are Encouraged To Relentlessly Push Their Projects Towards Monumental Goals.",
    img: "/images/VectorProfile.svg",
  },

  {
    id: 11,
    title: "Transparency Builds Trust",
    description:
      "Trust Is Essential To A Community's Success. We Encourage Our Members To Be Transparent Because We Believe It's Essential To Sustainable Collaboration.",
    img: "/images/GroupVectorScall.svg",
  },
  {
    id: 12,
    title: "Contribute More",
    description:
      "In Order To Compete With Established Brands, Project Members Need To Collaborate With The Intention Of Providing More Value Than They Receive.",
    img: "/images/breeds.svg",
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
                  <img
                    src={item.img}
                    alt=""
                    className="md:w-[45px] md:h-[45px] 2xl:w-[66px] 2xl:h-[66px]"
                  />
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
