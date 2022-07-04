import Link from "next/link";
import React from "react";
import { HiChevronDoubleDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section className="bg-cover bg-no-repeat bg-top">
      <div className="h-screen w-full relative">
        {/* Background Video --Start-- */}
        {/* before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/50 */}
        <div className="vimeo_wrapper w-full h-full absolute top-0 left-0 z-[0]">
          <video
            src="/video/TacVue-Bkgd-header.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          ></video>

          {/* <Vimeo
          video="700855294"
          autoplay={true}
          loop={true}
          className="w-full h-full"
          controls={false}
        /> */}
        </div>
        {/* Background Video --End-- */}

        <div className="landing_page_container flex flex-col items-center justify-center h-full w-full relative z-10">
          <h1 className="text-5xl xs:text-6xl md:!text-[64px] md:!leading-[110%] lg:!text-[110px] lg:!leading-[1] text-center uppercase font-spaced mb-3">
            <p data-aos="fade-up">Media</p>
            Reimagined
          </h1>
        </div>

        {/* Learn More --Start-- */}
        {/* <a
          // data-aos="fade-up"
          href="#read_more"
          className="flex flex-col items-center z-10 cursor-pointer text-[#6396F9] absolute left-1/2 -translate-x-1/2 bottom-16 group"
        >
          <p>View More</p>
          <div className="animate_slide_up_down">
            <HiChevronDoubleDown
              size={30}
              className="group-hover:translate-y-2 duration-200"
            />
          </div>
        </a> */}
        {/* Learn More --End-- */}
      </div>
    </section>
  );
};

export default HeroSection;
