import Link from "next/link";
import React, { ComponentProps, useState } from "react";
import MessageUsModal from "../MessageUsModal";

const BuildForYourJourney = () => {
  const [isOpenMessageUsModal, setIsOpenMessageUsModal] = useState(false);
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
            UNLEASHING THE POWER OF COMMUNITY
            {/* <span className='gradient_text'>your journey</span> */}
          </h2>
          <p
            data-aos="fade-up"
            className="lg:w-[520px] mx-auto text-white text-center !leading-[30px] mt-5 lg:mt-10 text-lg font-light"
          >
            Our vision and principles are an essential foundation for the TacVue
            brand and community.
          </p>
          <div className="flex justify-center mt-10">
            <Link href="/blueprint">
              <a data-aos="fade-up" className="btn_gradient">
                LEARN MORE
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
              className="py-[12px] ipad:py-[17px] w-[247px] shrink-0 grow text-center px-[13px] ipad:px-10 rounded-full text-base lg:text-xl capitalize border-[3px] border-transparent"
            >
              <a
                href="https://tacvue.gitbook.io/tacvue/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold box_gradient_text"
              >
                Documentation
              </a>
            </button>
            <button
              style={{
                background:
                  "linear-gradient(180deg, #000715 0%, #000715 100%) padding-box padding-box, linear-gradient(91.52deg, #6396F9 40.77%, #00D1FF 115.11%) border-box border-box",
              }}
              className="py-[12px] ipad:py-[17px] w-[247px] shrink-0 grow text-center px-[13px] ipad:px-10 rounded-full text-base lg:text-xl capitalize border-[3px] border-transparent"
            >
              <span className="font-semibold box_gradient_text">
                Support Channel
              </span>
            </button>
            <Button onClick={() => setIsOpenMessageUsModal(true)}>
              Message Us
            </Button>
          </div>
        </div>
      </div>

      <MessageUsModal
        onClose={() => setIsOpenMessageUsModal(false)}
        open={isOpenMessageUsModal}
      />
    </>
  );
};

export default BuildForYourJourney;

const Button = ({ children, ...props }: ComponentProps<"button">) => {
  return (
    <button
      {...props}
      style={{
        background:
          "linear-gradient(180deg, #000715 0%, #000715 100%) padding-box padding-box, linear-gradient(91.52deg, #6396F9 40.77%, #00D1FF 115.11%) border-box border-box",
      }}
      className="py-[12px] ipad:py-[17px] w-[247px] shrink-0 grow text-center px-[13px] ipad:px-10 rounded-full text-base lg:text-xl capitalize border-[3px] border-transparent"
    >
      <span className="font-semibold box_gradient_text">{children}</span>
    </button>
  );
};

// <<<<<<< HEAD
//         <div className="mt-10 lg:mt-[150px] flex flex-col ipad:flex-row justify-center ipad:justify-between lg:justify-center ipad:items-center gap-7 lg:gap-[100px]">
//           <h6 className="title_text text-center lg:text-left -translate-y-2">
//             More info:
//           </h6>
//           <div className="flex items-center flex-wrap gap-4 lg:gap-[30px] grow">
//             <Button>View our Gitbook</Button>
//             <Button>Contact Support</Button>
//             <Button onClick={() => setIsOpenMessageUsModal(true)}>Message Us</Button>
// =======
