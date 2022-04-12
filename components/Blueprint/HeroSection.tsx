import React from "react";
import { HiChevronDoubleDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <>
      {/* Hero Section --Start-- */}
      <section className="relative">
        <img
          src="/images/blueprint_bg.png"
          alt="blueprint_bg"
          className="w-full h-full md:h-auto absolute top-0 left-0 object-cover"
        />

        <div className="absolute left-1/2 -translate-x-1/2 top-20 w-[180px] md:w-[500px]">
          <img src="/images/globe.svg" alt="globe" />
        </div>

        <div className="min-h-screen flex flex-col justify-center relative z-[5]">
          <div className="container">
            <h1 className="text-white font-spaced text-center text-[60px] leading-[55px] md:text-[120px] md:leading-[105px]">
              <p>Built for</p>
              <p>your journey</p>
            </h1>
            <p className="text-xl text-[#CDF4FF] md:w-[680px] mx-auto text-center mt-[40px] hidden md:block">
              Avalanche is the fastest smart contracts platform in the
              blockchain industry. Launch, Buy, and Create NFTs supported by the
              future of blockchain tech.
            </p>
          </div>

          {/* Learn More --Start-- */}
          <a
            // data-aos="fade-up"
            href="#story"
            className="flex flex-col items-center z-10 cursor-pointer text-white absolute left-1/2 -translate-x-1/2 bottom-16 group"
          >
            <p>Learn More</p>
            <div className="animate_slide_up_down">
              <HiChevronDoubleDown
                size={30}
                className="group-hover:translate-y-2 duration-200"
              />
            </div>
          </a>
          {/* Learn More --End-- */}
        </div>
      </section>
      {/* Hero Section --End-- */}
    </>
  );
};

export default HeroSection;
