import React, { ComponentProps } from "react";
import Head from "next/head";
import Header from "../components/Header";
import cx from "classnames";
import Footer from "../components/Footer";
// import HeroSection from "../components/Blueprint/HeroSection";
import StorySection from "../components/Blueprint/StorySection";
import ServicesSection from "../components/Blueprint/ServicesSection";
// import PartnersSection from "../components/Blueprint/PartnersSection";
// import QuickAboutSection from "../components/Blueprint/QuickAboutSection";
import JoinSection from "../components/Blueprint/JoinSection";
import RoadMapSection from "../components/Blueprint/RoadMapSection";
import ThreeJsAnimation from "../components/Blueprint/ThreeJsAnimation";
import Link from "next/link";
import FounderSection from "../components/Blueprint/FounderSection";
import OurVision from "../components/Blueprint/OurVision";
import Leadership from "../components/Blueprint/Leadership";
import TeamMembers from "./../components/Blueprint/TeamMembers";
import NewsLetter from "./../components/Blueprint/NewsLetter";
import SubscribeSection from "../components/HomePage/SubscribeSection";

export const subtitle_sm =
  "text-base md:text-lg text-[#576993] dark:text-[#9EB5E1] !leading-[160%] capitalize";
export const text_gradient =
  "text-transparent bg-clip-text bg-gradient-to-r from-[#6396F9] to-[#00D1FF]";
export const title_sm =
  "text-[40px] leading-[35px] md:text-[65px] md:leading-[60px] font-hypers-techno uppercase -mb-2";

const Blueprint = () => {
  return (
    <>
      <Head>
        <title>Our Story - The TacVue Blueprint</title>
        <meta
          name="description"
          content="The story about how TacVue started, where TacVue is, and what TacVue is planning for the future."
        ></meta>
      </Head>
      <div
        // style={{
        //   background: "linear-gradient(237.69deg, #121831 2.21%, #000715 87.3%)",
        // }}

        style={{
          background:
            'url("https://user-images.githubusercontent.com/26748614/96337246-f14d4580-1085-11eb-8793-a86d929e034d.jpg")',
          backgroundSize: "contain",
          backgroundRepeat: "repeat",
          backdropFilter: "brightness(50%)",
        }}
      >
        <Header />
        <ThreeJsAnimation />
        <OurVision />
        <Leadership />
        <TeamMembers />
        <SubscribeSection title="Please subscribe to receive the latest updates on emerging Avalanche projects and the TacVue community" />
        {/* <HeroSection /> */}
        {/* <StorySection />
      <ServicesSection />
      <RoadMapSection /> */}
        {/* <PartnersSection />
      <QuickAboutSection /> */}
        {/* <FounderSection />
      <JoinSection /> */}
        <Footer />
      </div>
    </>
  );
};

export default Blueprint;

const BluePrintButton = React.forwardRef<
  HTMLAnchorElement,
  ComponentProps<"a">
>(({ className = "", ...props }, ref) => {
  return (
    <Link href={"/team"}>
      <a className={cx("w-fit", className)} ref={ref} {...props}>
        <div className="flex items-center gap-2 group">
          <span className={cx(text_gradient, "font-bold text-lg relative")}>
            Explore More
            <img
              src="/images/gradient_rectangle.svg"
              className="w-full absolute bottom-[-2px] left-0"
              alt="gradient rectangle"
            />
          </span>
          <img
            src="/images/arrow_curvey.svg"
            alt="arrow_curvey"
            className="duration-150 group-hover:translate-x-2.5  group-hover:-translate-y-0.5 group-hover:rotate-[-19deg]"
          />
        </div>
      </a>
    </Link>
  );
});

BluePrintButton.displayName = "BluePrintButton";
export { BluePrintButton };
