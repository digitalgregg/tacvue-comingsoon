import React from "react";
import { subtitle_sm, text_gradient, title_sm } from "../../pages/blueprint";
import cx from "classnames";

const Leadership = () => {
  const leadershipData = [
    {
      id: 1,
      title: "Customer Obsessed",
      description:
        "Every business commitment our members make is in our community's best interest. Every decision that impacts the community should be visualized from the community's point of view before any action is taken.",
      img: "/images/customer-centric.svg",
    },
    {
      id: 2,
      title: "Agility over Size",
      description:
        "We firmly believe that the future of TacVue is decentralized and autonomous. Until then, we stick to our core belief that frugality outlasts indulgence.",
      img: "/images/agility.svg",
    },
    {
      id: 3,
      title: "Own your Contribution",
      description:
        "Every Entity holder is encouraged to follow leadership principles. Members are expected to treat their peers with respect and the TacVue infrastructure as an extension of themselves.",
      img: "/images/own-your-contribution.svg",
    },
    {
      id: 4,
      title: "Automate the Boring",
      description:
        "Any task or action that feels repetitive or inefficient should be seen as a problem that requires a solution. If it's tiresome, we strive to automate it.",
      img: "/images/invent-automate.svg",
    },
    {
      id: 5,
      title: "Engagement is Value",
      description:
        "Failure to guide, innovate or create is considered a failure to provide the TacVue community with value.",
      img: "/images/creativity-over-templates.svg",
    },
    {
      id: 6,
      title: "Exude Confidence",
      description:
        "TacVue members must be confident in their ability to receive criticism, reassess their decision-making and determine new paths forward without fear of failure.",
      img: "/images/expect-failures.svg",
    },
    {
      id: 7,
      title: "Politics are Inefficient",
      description:
        "Success is a state of mind, not a quantitative measure. Strive to act in the community's best interest, but also vocalize your unpopular opinions if you believe they're warranted. Leaders serve the community's best interest with honesty, not politics.",
      img: "/images/51-rule.svg",
    },
    {
      id: 8,
      title: "Go the Extra Distance",
      description:
        "TacVue members are encouraged to push the boundaries of what's possible by questioning every piece of the platform. Rather than ask what something is, they should ask why it exists.",
      img: "/images/curiousity-beats-compliance.svg",
    },

    {
      id: 9,
      title: "Pursue Perfection",
      description:
        "True perfection is impossible to accomplish but if our members strive for it, the outcome will always be advantageous.",
      img: "/images/Group 37693.svg",
    },
    {
      id: 10,
      title: "Think Cosmic",
      description:
        "All TacVue members are encouraged to relentlessly push their projects towards monumental goals.",
      img: "/images/VectorProfile.svg",
    },

    {
      id: 11,
      title: "Transparency builds Trust",
      description:
        "Trust is essential to a community's success. We encourage our members to be transparent because we believe it's essential to sustainable collaboration.",
      img: "/images/GroupVectorScall.svg",
    },
    {
      id: 12,
      title: "Contribute More",
      description:
        "In order to compete with established brands, project members need to collaborate with the intention of providing more value than they receive.",
      img: "/images/breeds.svg",
    },
  ];
  return (
    <section>
      <div className="w-[100%] mx-auto px-4 md:px-8 3xl:px-40">
        <h2
          className={cx(
            text_gradient,
            "pt-[80px] sm:pt-[150px] md:pt-[200px] lg:pt-[294px] mb-[40px] sm:mb-[90px] md:mb-[150px] lg:mb-[171px] uppercase text-center   text-[30px] sm:text-[40px] leading-[35px] md:text-[65px] md:leading-[60px] font-spaced"
          )}
        >
          Our leadership pillars
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[60px]  place-items-center w-[94%] mx-auto px-4">
          {leadershipData.map((item: any) => {
            return (
              <div key={item.id} className="">
                <div className="bg-[#0d1329] text-center md:text-left px-4 lg:px-8 xl:w-[100%] 2xl:w-[100%]  h-[390px] md:h-[327px] flex flex-col md:flex-row md:p-[40px] 2xL:p-[69px] rounded-[20px] items-center justify-center mb-2 gap-[30px] md:gap-[40px] 2xl:gap-[54px] ">
                  {/* img */}
                  <div className="md:w-[110px]  2xl:w-[144px] md:h-[110px] h-[110px] w-[110px] 2xl:h-[144px] bg-[#142037] rounded-[82.5px] flex justify-center items-center">
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
                        "font-bold md:-mb-2 h-[40px] text-sm md:text-base text-[18px] md:!text-[25px] 2xl:!text-[32px]  text-transparent bg-clip-text bg-gradient-to-r from-[#6396F9] to-[#00D1FF]"
                      )}
                    >
                      {item.title}
                    </p>
                    <p
                      className={cx(
                        subtitle_sm,
                        "md:w-[350px] 2xl:w-[442px] mt-8 !leading-0 !text-[16px] md:!text-[20px]"
                      )}
                    >
                      {item.description}
                    </p>
                  </div>
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
