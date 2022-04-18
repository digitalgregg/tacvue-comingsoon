import classNames from "classnames";
import React from "react";
import { subtitle_sm, text_gradient, title_sm } from "../../pages/blueprint";

const OurVisionAndMissionSection = () => {
  return (
    <section className="mt-[100px]">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[100px] sm:w-[85%] mx-auto">
          <div className="h-[300px] rounded-[20px] border border-[#838CA3]/30 bg-white dark:vision_mission_gradient dark:border-transparent p-[50px] text-center">
            <h4 className={classNames(title_sm, text_gradient)}>our vision</h4>
            <p className={classNames(subtitle_sm, "mt-[45px] text-[#838CA3]")}>
              we created a vision statement which is clear short and timeless
              every project gains the benefits of previous projects and
              experience. innovation via automation
            </p>
          </div>
          <div className="h-[300px] rounded-[20px] border border-[#838CA3]/30 bg-white dark:vision_mission_gradient dark:border-transparent p-[50px] text-center">
            <h4 className={classNames(title_sm, text_gradient)}>our mission</h4>
            <p className={classNames(subtitle_sm, "mt-[45px] text-[#838CA3]")}>
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
