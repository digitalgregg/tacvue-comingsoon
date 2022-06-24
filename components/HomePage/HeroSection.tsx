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
          <h1 className="text-5xl xs:text-6xl md:!text-[110px] md:!leading-[1] text-center uppercase font-spaced mb-3">
            <p data-aos="fade-up">Media</p>
            Reimagined
          </h1>

          {/* Buttons --Start-- */}
          <div className="flex flex-col items-center mt-8 gap-5">
            <div className="btn_gradient">
              <Link
                href={"https://t.co/JSCz7YdhnD"}
                // onClick={modalHandleOpen}
              >
                APPLY TO LAUNCHPAD
              </Link>
            </div>
            <Link
              href={"https://tacvue.gitbook.io/tacvue/"}
              // onClick={modalHandleOpen}
            >
              <a
                data-aos="fade-up"
                className="text-sm sm:text-base px-10 py-2.5 rounded-full border-2 border-white duration-200 text-white font-semibold hover:bg-white hover:text-black uppercase"
              >
                MORE ABOUT TACVUE
              </a>
            </Link>
            {/* <Modal
            open={modalIsOpen}
            onClose={modalHandleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={modalStyle}>
              <video
                src="/video/TacVue-Bkgd-header.webm"
                controls
                className="w-full h-full object-cover"
              ></video>
            </Box>
          </Modal> */}
          </div>
          {/* Buttons --End-- */}
        </div>

        {/* Learn More --Start-- */}
        <a
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
        </a>
        {/* Learn More --End-- */}
      </div>
    </section>
  );
};

export default HeroSection;
