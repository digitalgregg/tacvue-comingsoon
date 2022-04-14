import classNames from "classnames";
import React from "react";
import { subtitle_sm, text_gradient, title_sm } from "../../pages/blueprint";

const OurVisionAndMissionSection = () => {
  return (
    <section className="mt-[100px]">
      <div className="container">
        <div className="grid grid-cols-2 gap-[100px] w-[85%] mx-auto">
          <div
            style={{
              background:
                "linear-gradient(180deg, #092238 0%, rgba(0, 209, 255, 0) 100%) padding-box padding-box, linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%) border-box border-box",
            }}
            className="h-[300px] rounded-[20px] border border-transparent p-[50px] text-center"
          >
            <h4 className={classNames(title_sm, text_gradient)}>our vision</h4>
            <p className={classNames(subtitle_sm, "mt-[45px]")}>
              we created a vision statement which is clear short and timeless
              every project gains the benefits of previous projects and
              experience. innovation via automation
            </p>
          </div>
          <div
            style={{
              background:
                "linear-gradient(180deg, #092238 0%, rgba(0, 209, 255, 0) 100%) padding-box padding-box, linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%) border-box border-box",
            }}
            className="h-[300px] rounded-[20px] border border-transparent p-[50px] text-center"
          >
            <h4 className={classNames(title_sm, text_gradient)}>our mission</h4>
            <p className={classNames(subtitle_sm, "mt-[45px]")}>
              we created a vision statement which is clear short and timeless
              every project gains the benefits of previous projects and
              experience. innovation via automation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVisionAndMissionSection;
