import classNames from "classnames";
import React from "react";
import Header from "../components/Header";
import { GradientText } from "../components/Marketplace/Components/CommonStyles";
import { subtitle_sm, text_gradient, title_sm } from "./blueprint";

const TeamPage = () => {
  return (
    <>
      <Header />
      <section>
        <div className="container">
          <div className="relative">
            <div className="w-[300px] h-[300px] bg-[#8247E5] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 blur-[240px] rounded-full"></div>
            <div className="flex flex-col items-center justify-end h-[75vh] relative z-[5]">
              <h1 className="text-9xl font-black">
                WE ARE <span className={GradientText}>TACVUE</span>{" "}
              </h1>
              <p className={classNames(subtitle_sm, "mt-6 !uppercase")}>
                This will be our one sentence line about what we as a team stand
                for.
              </p>
              <button className="w-10 mt-11">
                <img src="/images/down_arrow.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[125px]">
        <div className="rounded-[30px] overflow-hidden relative w-[94%] mx-auto">
          <img src="/images/video_bg.jpg" alt="video_bg" />

          <button className="w-[140px] h-[140px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <img
              src="/images/play_icon.svg"
              alt="Play"
              className="w-full h-full object-cover"
            />
          </button>
        </div>
      </section>

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
              <h4 className={classNames(title_sm, text_gradient)}>
                our vision
              </h4>
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
              <h4 className={classNames(title_sm, text_gradient)}>
                our mission
              </h4>
              <p className={classNames(subtitle_sm, "mt-[45px]")}>
                we created a vision statement which is clear short and timeless
                every project gains the benefits of previous projects and
                experience. innovation via automation
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamPage;
