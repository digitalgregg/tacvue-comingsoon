import Link from "next/link";
import React from "react";
import { headingClasses } from "../../pages";

const BuildForYourJourney = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: "url('/images/grids_bg.svg')",
        }}
        className="bg-top bg-cover py-10 lg:py-[75px] bg-no-repeat bg-size-300 lg:bg-size-120"
      >
        <div className="container">
          <h2 data-aos="fade-up" className={`title_text text-center`}>
            Building for your journey
            {/* <span className='gradient_text'>your journey</span> */}
          </h2>
          <p
            data-aos="fade-up"
            className="lg:w-[520px] mx-auto text-white text-center !leading-[30px] mt-10 text-lg font-light"
          >
            Our blueprint maps out the future tools and features that will be
            offered and available on the TacVue system.
          </p>
          <div className="flex justify-center mt-10">
            <Link href="/blueprint">
              <a data-aos="fade-up" className="btn_gradient">
                VIEW OUR BLUEPRINT
              </a>
            </Link>
          </div>
        </div>
      </section>

      <div className="landing_page_container">
        <div className="mt-10 lg:mt-[150px] flex flex-col lg:flex-row  justify-center lg:items-center gap-7 lg:gap-[185px]">
          <h6 className="title_text text-left -translate-y-2">More info:</h6>
          <div className="flex items-center gap-4 lg:gap-[30px]">
            <button
              style={{
                background:
                  "linear-gradient(180deg, #000715 0%, #000715 100%) padding-box padding-box, linear-gradient(91.52deg, #6396F9 40.77%, #00D1FF 115.11%) border-box border-box",
              }}
              className="py-[12px] px-[13px] lg:px-10 rounded-full text-base lg:text-xl capitalize border-[3px] border-transparent"
            >
              <a
                href="https://tacvue.gitbook.io/tacvue/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold box_gradient_text"
              >
                View our Gitbook
              </a>
            </button>
            <button
              style={{
                background:
                  "linear-gradient(180deg, #000715 0%, #000715 100%) padding-box padding-box, linear-gradient(91.52deg, #6396F9 40.77%, #00D1FF 115.11%) border-box border-box",
              }}
              className="py-[12px] px-[13px] lg:px-10 rounded-full text-base lg:text-xl capitalize border-[3px] border-transparent"
            >
              <span className="font-semibold box_gradient_text">
                Contact Support
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuildForYourJourney;
