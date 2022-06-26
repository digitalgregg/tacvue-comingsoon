import React from "react";
import { subtitle_sm, text_gradient, title_sm } from "../../pages/blueprint";
import cx from "classnames";

const Leadership = () => {
  const leadershipData = [
    {
      id: 1,
      title: "Customer-Centric to our Core",
      description:
        "Every single action that our leaders make is in our customer’s best interest. There should be no situation that benefits us without also benefiting our customers.",
      img: "/images/customer-centric.svg",
    },
    {
      id: 2,
      title: "Agility over Size",
      description:
        "The size of the team is irrelevant, the speed at which they work towards achieving their mission is paramount. Frugality is the recipe for success, not indulgence.",
      img: "/images/agility.svg",
    },
    {
      id: 3,
      title: "Own your Contribution",
      description:
        "Every employee is expected to treat TacVue customers as their family and our products as their own. Take pride in success, and feel embarrassment in shortcomings.",
      img: "/images/own-your-contribution.svg",
    },
    {
      id: 4,
      title: "Invent & Automate",
      description:
        "Every task should be seen as a problem without a solution. our employees are never happy with average and are always striving to Automate, innovate, and create new way to be efficient.",
      img: "/images/invent-automate.svg",
    },
    {
      id: 5,
      title: "Creativity over Templates",
      description:
        "Our teams never follow models, we take what works and blend the pieces into a successful workflow system. Failure to create  is the failure to provide the TacVue brand with value.",
      img: "/images/creativity-over-templates.svg",
    },
    {
      id: 6,
      title: "Expect Failures",
      description:
        "	Failure is required in order to move forward. Our employees must be confident in their ability to take failures, analyze them, and determine new methods of accomplishing innovation.",
      img: "/images/expect-failures.svg",
    },
    {
      id: 7,
      title: "The 51% Rule",
      description:
        "Success is a state of mind, not a quantitative measure. In order to be considered a leader in this organization, strive to provide value that would be considered beneficial.",
      img: "/images/51-rule.svg",
    },
    {
      id: 8,
      title: "Curiosity beats Compliance",
      description:
        "The TacVue team is expected to not just follow orders, but dig deeper into every request by returning completed assignments with additional probing into solutions.",
      img: "/images/curiousity-beats-compliance.svg",
    },

    {
      id: 9,
      title: "Pursue Perfection",
      description:
        "Perfection is not attainable, but we must chase it regardless. The pursuit of perfection is required in order to provide the best possible outcome in any situation. ",
      img: "/images/Group 37693.svg",
    },
    {
      id: 10,
      title: "Think bigger",
      description:
        "Instead of labeling tasks as chores, our team considers every task to be the opportunity for individuals to produce large-scale change. Regardless of the importance of it. ",
      img: "/images/VectorProfile.svg",
    },

    {
      id: 11,
      title: "Operate precisely",
      description:
        "Move with speed but don’t miss the opportunity. Every action our team takes on should be scrutinized and held to the highest standard.",
      img: "/images/GroupVectorScall.svg",
    },
    {
      id: 12,
      title: "Transparency Breeds Trust",
      description:
        "In order to accomplish innovation, trust is required between peers and colleagues. The best way to accomplish trust is by working transparently and without any concealment.",
      img: "/images/breeds.svg",
    },
    {
      id: 13,
      title: "Go the Extra Mile",
      description:
        "Our bare minimum is the extra mile. Failure to investigate, check or push for more is a failure to provide the basic level of accountability that’s required to work with TacVue.",
      img: "/images/extraMile.svg",
    },
    {
      id: 14,
      title: "Provide Value ",
      description:
        "Every team member should create more value than they take from the organization. Failure to accomplish this is a direct insult to the wider mission, values and vision of the organization.",
      img: "/images/provideValue.svg",
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
