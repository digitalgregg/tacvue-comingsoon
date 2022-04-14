import React, { ComponentProps } from "react";
import { HiChevronDoubleDown } from "react-icons/hi";
import Header from "../components/Header";
import cx from "classnames";
import ServiceCard from "../components/ServiceCard";
import { BsArrowRightShort } from "react-icons/bs";
import Footer from "../components/Footer";
import QuickAboutCard from "../components/QuickAboutCard";
import { FaDiscord } from "react-icons/fa";
import HeroSection from "../components/Blueprint/HeroSection";
import StorySection from "../components/Blueprint/StorySection";
import ServicesSection from "../components/Blueprint/ServicesSection";
import PartnersSection from "../components/Blueprint/PartnersSection";
import QuickAboutSection from "../components/Blueprint/QuickAboutSection";
import JoinSection from "../components/Blueprint/JoinSection";
import RoadMapSection from "../components/Blueprint/RoadMapSection";
import ThreeJsAnimation from "../components/Blueprint/ThreeJsAnimation";

export const subtitle_sm =
  "text-base md:text-lg text-[#9EB5E1] !leading-[160%] capitalize";
export const text_gradient =
  "text-transparent bg-clip-text bg-gradient-to-r from-[#6396F9] to-[#00D1FF]";
export const title_sm =
  "text-[40px] leading-[35px] md:text-[65px] md:leading-[60px] font-spaced uppercase -mb-2";

const Blueprint = () => {
  return (
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
      {/* <HeroSection /> */}
      <StorySection />
      <ServicesSection />
      <RoadMapSection />
      <PartnersSection />
      <QuickAboutSection />
      <JoinSection />
      <Footer />
    </div>
  );
};

export default Blueprint;

const BluePrintButton = React.forwardRef<
  HTMLButtonElement,
  ComponentProps<"button">
>(({ className = "", ...props }, ref) => {
  return (
    <button className={cx("w-fit", className)} ref={ref} {...props}>
      <div className="flex items-center gap-2 group">
        <span className={cx(text_gradient, "font-bold text-lg relative")}>
          Explore More
          <img
            src="/images/gradient_rectangle.svg"
            className="w-full absolute bottom-[-2px] left-0"
            alt=""
          />
        </span>
        <img
          src="/images/arrow_curvey.svg"
          alt="arrow_curvey"
          className="duration-150 group-hover:translate-x-2.5  group-hover:-translate-y-0.5 group-hover:rotate-[-19deg]"
        />
      </div>
    </button>
  );
});

BluePrintButton.displayName = "BluePrintButton";
export { BluePrintButton };
