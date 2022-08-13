import FormulatedIcon from "../../../../../components/Icons/FormulatedIcon";
import ConstructedForCreatorsIcon from "../../../../../components/Icons/ConstructedForCreatorsIcon";
import Image from "next/image";
import React, { useMemo, useRef, useState } from "react";
import NavDot from "./components/NavDot";
import BuiltForYourBransIcon from "../../../../../components/Icons/BuiltForYourBransIcon";
import DesignedForDreamersIcon from "../../../../../components/Icons/DesignedForDreamersIcon";

const slides = [
  {
    icon: <BuiltForYourBransIcon />,
    title: "Built for brands",
    desc: "We give brands many different avenues and channels to be able to connect with their fans through community building and social features. We’re bridging the gap between brands and fans.",
    key: "brands",
    imgSrc: "/images/brands_circle_img.jpg",
  },
  {
    icon: <ConstructedForCreatorsIcon />,
    title: "Constructed for creators",
    desc: "Create....assemble... and launch your project all on one platform without the need for code. We offer creators many tools and features, allowing them to focus on the art and not worry about the technical. ",
    key: "creators",
    imgSrc: "/images/creators_circle_img.jpg",
  },
  {
    icon: <FormulatedIcon />,
    title: "Formulated for fans",
    desc: "Easily follow and support the content of your favorite brands and creators. Unlock exclusive access to first ever gamified media platform and get rewarded for active participation.",
    key: "fans",
    imgSrc: "/images/fans_circle_img.jpg",
  },
  {
    icon: <DesignedForDreamersIcon />,
    title: "Designed for dreamers",
    desc: "Unleash your imagination, creativity, and ideas and watch them come to life on the first ever user-focused platform. Without needing to know how to code, whatever you dream, you can build. ",
    key: "dreamers",
    imgSrc: "/images/dreamers_circle_img.jpg",
  },
];

const CircularSlider = () => {
  const gradientCircleStrokeRef = useRef<SVGCircleElement>(null!);
  const [activeSlideKey, setActiveSlideKey] = useState("brands");

  const activeSlideHandler = (slideKey: string, strokeDashOffset: string) => {
    setActiveSlideKey(slideKey);
    gradientCircleStrokeRef.current.style.strokeDashoffset = strokeDashOffset;
  };

  const activeSlide = useMemo(
    () => slides.find((slide) => slide.key === activeSlideKey),
    [activeSlideKey],
  );
  return (
    <div className="mt-0 xl:mt-[100px] max-w-[1280px] flex flex-col-reverse xl:grid xl:grid-cols-[540px,auto] xl:gap-[190px]">
      <div className="xl:pt-[100px]">
        <div
          style={{
            background:
              "linear-gradient(91.52deg, #6396f9 40.77%, #00d1ff 115.11%)",
          }}
          className="w-full h-px shrink-0"
        ></div>

        <div className="grid grid-cols-[58px,auto] xl:grid-cols-[100px,auto] gap-4 xl:gap-10 mt-10">
          <div>{activeSlide?.icon}</div>
          <div>
            <h5 className="home_title_sm text-[24px] leading-[24px] xl:text-[44px] xl:leading-[44px]">
              {activeSlide?.title}
            </h5>
            <p className="mt-3.5 xl:mt-9 home_body_text">{activeSlide?.desc}</p>
          </div>
        </div>
      </div>

      <div className="max-w-[100vw] max-h-[450px] overflow-hidden xl:max-h-[auto] xl:overflow-visible">
        <div className="translate-x-[-12%] scale-[0.6] xl:!scale-[1] xl:translate-x-0 w-[500px] aspect-square rounded-full border border-[#576993] flex justify-center items-center relative">
          <div className="h-[320px] w-[320px] rounded-full overflow-hidden bg-slate-800">
            {activeSlide?.imgSrc && (
              <Image
                src={activeSlide?.imgSrc}
                width={320}
                height={320}
                alt={activeSlide?.title}
              />
            )}
          </div>
          <NavDot
            title="brands"
            right="164px"
            top="8px"
            isActive={activeSlideKey === "brands"}
            onClick={() => activeSlideHandler("brands", "40%")}
          />
          <NavDot
            title="fans"
            right="16px"
            bottom="143px"
            isActive={activeSlideKey === "fans"}
            onClick={() => activeSlideHandler("fans", "268.5%")}
          />
          <NavDot
            title="dreamers"
            left="103px"
            bottom="39px"
            isActive={activeSlideKey === "dreamers"}
            onClick={() => activeSlideHandler("dreamers", "182%")}
          />
          <NavDot
            title="creators"
            left="10px"
            top="158px"
            isActive={activeSlideKey === "creators"}
            onClick={() => activeSlideHandler("creators", "115%")}
          />

          <div className="absolute top-0 left-0 w-full h-full scale-[1.01] z-[0] rotate-[-70deg]">
            <svg
              viewBox="0 0 500 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx={250}
                cy={250}
                r="248.5"
                stroke="#576993"
                strokeWidth={3}
              />
              <circle
                cx={250}
                cy={250}
                ref={gradientCircleStrokeRef}
                r="248.5"
                stroke="url(#paint0_linear_4313_9134)"
                strokeWidth={3}
                style={{
                  strokeDasharray: "350%",
                  strokeDashoffset: "350%",
                  transition: "all 0.4s ease-in-out",
                }}
              />
              <defs>
                <linearGradient
                  id="paint0_linear_4313_9134"
                  x1="-62.5"
                  y1="188.406"
                  x2="585.333"
                  y2="205.568"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.411458" stopColor="#6396F9" />
                  <stop offset={1} stopColor="#00D1FF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularSlider;
