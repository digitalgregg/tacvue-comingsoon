import React from "react";
import { subtitle_sm, text_gradient, title_sm } from "../../pages/blueprint";
import cx from "classnames";

const Leadership = () => {
  const leadershipData = [
    {
      id: 1,
      title: "Customer Obsessed",
      description:
        "Every business commitment we make is in our members' best interest. We take pride in looking at every decision from our customer's point of view before taking action.",
      img: "/images/customer-centric.svg",
    },
    {
      id: 2,
      title: "Agility over Size",
      description:
        "We firmly believe that the future of our team is decentralized and autonomous. We strive to deliver the necessary tooling for large remote organizations to operate as efficiently as smaller centralized teams but until the right tools are developed, we must stick to our core belief: frugality beats indulgence.",
      img: "/images/agility.svg",
    },
    {
      id: 3,
      title: "Own your Contribution",
      description:
        "Every Entity holder is expected to follow leadership principles. Members are expected to treat their peers with respect and TacVue infrastructure as their own. We hope that every Entity holder takes pride in their contributions to the community, project and platform as our core team members would. ",
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
      title: "Creativity over Tradition",
      description:
        "Failure to innovate, advise or create is considered a failure to provide the TacVue community with value.",
      img: "/images/creativity-over-templates.svg",
    },
    {
      id: 6,
      title: "Exude Confidence",
      description:
        "TacVue members must be confident in their ability to receive criticism, reassess their decision-making and determine new paths forward without doubting their own abilities in the case of failure",
      img: "/images/expect-failures.svg",
    },
    {
      id: 7,
      title: "The 51% Rule",
      description:
        "Success is a state of mind, not a quantitative measure. Strive to act in the community's best interest while also vocalizing your unpopular opinions if you believe they are warranted. Leaders serve the community's best interest without playing politics.",
      img: "/images/51-rule.svg",
    },
    {
      id: 8,
      title: "Go the Extra Mile, Then Go Two More",
      description:
        "TacVue members are encouraged to push the boundaries of what's possible by questioning everything on the platform. Rather than ask what something is, you should ask yourself why it exists.",
      img: "/images/curiousity-beats-compliance.svg",
    },

    {
      id: 9,
      title: "Pursue Perfection",
      description:
        "Perfection is impossible but it's what drives our community towards the best possible outcome of every situation. Although it's not attainable, it's what drives us.",
      img: "/images/Group 37693.svg",
    },
    {
      id: 10,
      title: "Think Huge",
      description:
        "All TacVue members are encouraged to push their projects towards immense goals, relentlessly and unconditionally.",
      img: "/images/VectorProfile.svg",
    },

    {
      id: 11,
      title: "Transparency is Bound to Trust",
      description:
        "The best way to accomplish an immense goal as a community is through transparent communication. Although transparency does not guarantee trust, our community members should put trust before compassion.",
      img: "/images/GroupVectorScall.svg",
    },
    {
      id: 12,
      title: "Add More Value Than You Take",
      description:
        "In order to compete with centralized brands, project communities must collaborate with the intention of providing more value than they receive. The projects that accomplish this will have the potential to move mountains.",
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
