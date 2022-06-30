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
        className="bg-top bg-cover pb-16 lg:pb-[150px] mt-[80px] md:mt-[250px] bg-no-repeat md:bg-120"
      >
        <div className="container">
          <h2 data-aos="fade-up" className={`${headingClasses} text-center`}>
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

      <div className="mt-20 lg:mt-[160px] flex flex-col lg:justify-center lg:items-center gap-4 lg:gap-[85px]">
        <h6 className="font-spaced text-[24px] leading-[22px] lg:text-[56px] lg:leading-[60px] -translate-y-2">
          More info:
        </h6>
        <div className="flex items-center gap-4 lg:gap-[117px]">
          <button
            style={{
              background:
                "linear-gradient(180deg, #0E1B33 0%, #0E1B33 100%) padding-box padding-box, linear-gradient(91.52deg, #6396F9 40.77%, #00D1FF 115.11%) border-box border-box",
            }}
            className="py-4 px-6 lg:px-10 rounded-full text-base lg:text-xl capitalize border-[3px] border-transparent"
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
                "linear-gradient(180deg, #0E1B33 0%, #0E1B33 100%) padding-box padding-box, linear-gradient(91.52deg, #6396F9 40.77%, #00D1FF 115.11%) border-box border-box",
            }}
            className="py-4 px-6 lg:px-10 rounded-full text-base lg:text-xl capitalize border-[3px] border-transparent"
          >
            <span className="font-semibold box_gradient_text">
              Contact Support
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default BuildForYourJourney;
