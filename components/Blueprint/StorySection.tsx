import React from "react";
import cx from "classnames";
import {
  BluePrintButton,
  subtitle_sm,
  text_gradient,
  title_sm,
} from "../../pages/blueprint";
const StorySection = () => {
  return (
    <>
      {/* Story Section --Start-- */}
      <section className="mt-10 pb-20" id="story">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-[45%,auto] gap-16 md:gap-10 place-items-center">
            <div className="relative">
              <div className="absolute top-0 left-6 bg-gradient-to-r from-[#6396F9] to-[#00D1FF] w-[260px] h-[290px] rounded-full blur-[125px] opacity-40"></div>

              <div className="relative z-[5]">
                <p
                  className={cx(
                    text_gradient,
                    "font-bold md:-mb-2 tracking-widest text-sm md:text-base",
                  )}
                >
                  OUR STORY
                </p>
                <h2 className={cx(title_sm, text_gradient)}>WE ARE TACVUE</h2>
                <img src="/images/gradient_rectangle.svg" alt="" />
                <p
                  className={cx(subtitle_sm, "md:w-[75%] !leading-[160%] mt-8")}
                >
                  At TacVue , we are excited to offer members of all types a new
                  system with all of the tools necessary for building a unique
                  digital experience.
                </p>

                {/* <BluePrintButton className="mt-[43px] inline-block" /> */}
              </div>
            </div>
            <div
              style={{
                background: "url('/images/story_image_bg.svg')",
                backgroundSize: "110%",
              }}
              className="bg-bottom"
            >
              <img
                src="/images/story_image_bg_without_text.svg"
                alt="tacvue_sory_image"
                className="md:scale-[1.2] origin-top-right"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Story Section --End-- */}
    </>
  );
};

export default StorySection;
