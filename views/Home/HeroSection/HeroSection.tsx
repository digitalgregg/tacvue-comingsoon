import Link from "next/link";
import React, { useState } from "react";
import cx from "classnames";
import { GradientText } from "../../../components/Marketplace/Components/CommonStyles";
import ApplyToLaunchpadModal from "../../../components/ApplyToLaunchpadModal";

const HeroSection = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <ApplyToLaunchpadModal
        open={isOpenModal}
        onClose={() => setIsOpenModal(false)}
      />
      <section
        style={{
          background: `url('/images/hero_section_bg.png'), linear-gradient(237.69deg, #0E1225 2.21%, #000714 87.3%)`,
        }}
        className="pb-20 pt-[154px] min-h-screen xl:min-h-[auto] relative"
      >
        <div className="home_container flex flex-col items-center justify-center relative">
          <img src="/images/home_hero_circle.png" alt="home_hero_circle" />

          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center">
            <h1 className="text-[48px] leading-[45px] xl:text-[96px] xl:leading-[95px] font-spaced text-center">
              <p>Web3</p>
              <p>Made Easy</p>
            </h1>

            <button
              onClick={() => setIsOpenModal(true)}
              className="inline-block py-[17px] px-7 xl:px-9 rounded-full mt-8 xl:mt-[70px] border-2 border-transparent enter_multiverse_btn hover:enter_multiverse_btn_hover group"
            >
              <span
                className={cx(
                  GradientText,
                  "uppercase font-medium group-hover:!text-white",
                )}
              >
                APPLY TO LAUNCHPAD
              </span>
            </button>
          </div>

          <div className="absolute bottom-0 left-0 cursor-pointer hidden xl:block">
            <svg
              width="9"
              height="199"
              viewBox="0 0 9 199"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.14644 198.354C4.3417 198.549 4.65828 198.549 4.85354 198.354L8.03553 195.172C8.23079 194.976 8.23079 194.66 8.03553 194.464C7.84026 194.269 7.52368 194.269 7.32842 194.464L4.49999 197.293L1.67156 194.464C1.4763 194.269 1.15972 194.269 0.964458 194.464C0.769195 194.66 0.769195 194.976 0.964458 195.172L4.14644 198.354ZM4 -2.18546e-08L3.99999 198L4.99999 198L5 2.18546e-08L4 -2.18546e-08Z"
                fill="#576993"
              />
              <path
                d="M4.14644 198.354C4.3417 198.549 4.65828 198.549 4.85354 198.354L8.03553 195.172C8.23079 194.976 8.23079 194.66 8.03553 194.464C7.84026 194.269 7.52368 194.269 7.32842 194.464L4.49999 197.293L1.67156 194.464C1.4763 194.269 1.15972 194.269 0.964458 194.464C0.769195 194.66 0.769195 194.976 0.964458 195.172L4.14644 198.354ZM4 -2.18546e-08L3.99999 198L4.99999 198L5 2.18546e-08L4 -2.18546e-08Z"
                fill="url(#paint0_linear_4293_8628)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_4293_8628"
                  x1="4.12319"
                  y1="-24.75"
                  x2="-43.1029"
                  y2="-15.7466"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.411458" stop-color="#6396F9" />
                  <stop offset="1" stop-color="#00D1FF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center xl:hidden mt-[120px] gap-4">
          <p className={cx(GradientText, "uppercase font-spaced xl:hidden")}>
            Scroll down
          </p>
          <ArrowForMobile />
        </div>
      </section>
    </>
  );
};

export default HeroSection;

const ArrowForMobile = () => {
  return (
    <svg
      width={8}
      height={42}
      viewBox="0 0 8 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 1C4.5 0.723858 4.27614 0.5 4 0.5C3.72386 0.5 3.5 0.723858 3.5 1L4.5 1ZM3.64644 41.3536C3.84171 41.5488 4.15829 41.5488 4.35355 41.3536L7.53553 38.1716C7.73079 37.9763 7.73079 37.6597 7.53553 37.4645C7.34027 37.2692 7.02369 37.2692 6.82843 37.4645L4 40.2929L1.17157 37.4645C0.976309 37.2692 0.659727 37.2692 0.464465 37.4645C0.269202 37.6597 0.269202 37.9763 0.464464 38.1716L3.64644 41.3536ZM3.5 1L3.5 41L4.5 41L4.5 1L3.5 1Z"
        fill="#576993"
      />
      <path
        d="M4.5 1C4.5 0.723858 4.27614 0.5 4 0.5C3.72386 0.5 3.5 0.723858 3.5 1L4.5 1ZM3.64644 41.3536C3.84171 41.5488 4.15829 41.5488 4.35355 41.3536L7.53553 38.1716C7.73079 37.9763 7.73079 37.6597 7.53553 37.4645C7.34027 37.2692 7.02369 37.2692 6.82843 37.4645L4 40.2929L1.17157 37.4645C0.976309 37.2692 0.659727 37.2692 0.464465 37.4645C0.269202 37.6597 0.269202 37.9763 0.464464 38.1716L3.64644 41.3536ZM3.5 1L3.5 41L4.5 41L4.5 1L3.5 1Z"
        fill="url(#paint0_linear_4309_9422)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4309_9422"
          x1="3.62319"
          y1={-4}
          x2="-22.2648"
          y2="20.4302"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.411458" stopColor="#6396F9" />
          <stop offset={1} stopColor="#00D1FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};
