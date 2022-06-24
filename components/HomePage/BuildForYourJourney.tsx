import Link from "next/link";
import React from "react";
import { headingClasses } from "../../pages";

const BuildForYourJourney = () => {
  return (
    <section
      style={{
        backgroundImage: "url('/images/grids_bg.svg')",
      }}
      className="bg-top bg-cover pb-[150px] mt-[150px] md:mt-[250px] bg-no-repeat md:bg-120"
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
          offered and available on the tacvue system.
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
  );
};

export default BuildForYourJourney;
