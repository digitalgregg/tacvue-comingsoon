import React from "react";
import { subtitle_sm, text_gradient, title_sm } from "../../pages/blueprint";
import cx from "classnames";
const RoadMapSection = () => {
  return (
    <>
      {/* Roadmap Section --Start-- */}
      <section className="mt-[80px] md:mt-[120px]">
        <div className="container">
          <h2 className={cx(text_gradient, title_sm, "text-center")}>
            THE BLUEPRINT
          </h2>
          <div className="w-[90%] md:w-[80%] mx-auto relative space-y-12 md:space-y-20 mt-[110px]">
            {/* Line --Start-- */}
            <div
              style={{
                background:
                  "linear-gradient(356.65deg, #00D1FF 2.93%, #6396F9 51.73%, #00D1FF 93.07%)",
              }}
              className="absolute top-1/2 -translate-y-1/2 -left-[2px] md:left-1/2 md:-translate-x-1/2 w-1 h-[82%] md:h-[85%]"
            ></div>
            {/* Line --End-- */}

            <RightSideBox
              title="Q3 2022"
              description="Project minting"
              stage={1}
            />
            <LeftSideBox
              title="Q1 2023"
              description="Token Gated Messaging"
              stage={2}
            />
            <RightSideBox
              title="Q1 2023"
              description="Community Infrastructure Implementation"
              stage={3}
            />
            <LeftSideBox
              title="Q2 2023"
              description="Additional Tooling"
              stage={4}
            />
            <RightSideBox title="Q3 2023" description="Mobile App" stage={5} />
          </div>
        </div>
      </section>
      {/* Roadmap Section --End-- */}
    </>
  );
};

export default RoadMapSection;

type BoxProps = {
  title: string;
  description: string;
  stage: number;
};
const RightSideBox = ({ title, description, stage }: BoxProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="hidden text-right mr-10 md:flex items-center justify-end font-spaced text-xl">
        Stage {stage}
      </div>
      <div className="relative group">
        <div
          style={{
            background:
              "linear-gradient(250.67deg, #0A415E 2.2%, #1E325A 100%)",
          }}
          className="md:w-[500px] border border-transparent ml-16 rounded-[15px] py-[30px] px-[24px]"
        >
          <h5 className={cx(text_gradient, title_sm, "!text-4xl")}>{title}</h5>
          <p className={cx(subtitle_sm, "mt-5")}>{description}</p>
        </div>
        <div className="w-10 h-10 rounded-full absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 border-[3px] border-transparent roadmap_circle_bg group-hover:roadmap_circle_bg_hover flex items-center justify-center">
          <span className="font-semibold text-lg inline-block -mt-px md:hidden">
            {stage}
          </span>
        </div>
      </div>
    </div>
  );
};

const LeftSideBox = ({ title, description, stage }: BoxProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="relative group">
        <div
          style={{
            background:
              "linear-gradient(250.67deg, #0A415E 2.2%, #1E325A 100%)",
          }}
          className="md:w-[500px] border border-transparent ml-16 md:ml-auto md:-translate-x-16 rounded-[15px] py-[30px] px-[24px]"
        >
          <h5 className={cx(text_gradient, title_sm, "!text-4xl")}>{title}</h5>
          <p className={cx(subtitle_sm, "mt-5")}>{description}</p>
        </div>
        <div className="w-10 h-10 rounded-full absolute top-1/2 left-0 md:left-full md:-translate-y-1/2 -translate-x-1/2 border-[3px] border-transparent roadmap_circle_bg group-hover:roadmap_circle_bg_hover flex items-center justify-center">
          <span className="font-semibold text-lg inline-block -mt-px md:hidden">
            {stage}
          </span>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-start font-spaced text-xl ml-10">
        Stage {stage}
      </div>
    </div>
  );
};
