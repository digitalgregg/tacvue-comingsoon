import React from "react";

const RXGAirdropsSection = () => {
  return (
    <section className="pt-10 pb-14 lg:py-40">
      <div className="landing_page_container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[100px] lg:place-items-center">
          <div className="grid grid-cols-2 gap-[30px]">
            <Box value={807} label="entities minted" />
            <Box value={150} label="Projects Supported" />
          </div>
          <div>
            <h2 className="text-[30px] leading-[34px] lg:text-[64px] lg:leading-[61px] font-spaced ">
              Don’t Miss out on RXG Airdrops!
            </h2>
            <p className="mt-6 lg:mt-8 text-base lg:text-xl text-[#E5E7EB]">
              Genesis Entities will be rewarded with exclusive airdrops for
              pioneering the TacVue Community
            </p>

            <button
              style={{
                background:
                  "linear-gradient(91.52deg, #6396F9 40.77%, #00D1FF 115.11%), #576993",
              }}
              className="py-4 px-10 mt-7 lg:mt-10 rounded-full text-base lg:text-xl capitalize"
            >
              Claim your Genesis Entity today!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RXGAirdropsSection;

const Box = ({ value, label }: { value: number; label: string }) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #091c4a 0%, #0d1c40 100%) padding-box padding-box, linear-gradient(91.52deg, #6396F9 40.77%, #00D1FF 115.11%) border-box border-box",
      }}
      className="lg:w-[293px] aspect-square border border-transparent rounded-[20px] flex flex-col justify-center items-center"
    >
      <h6 className="box_gradient_text text-[48px] leading-[52px] lg:text-[96px] lg:leading-[100px] font-spaced">
        {value}
      </h6>
      <p className="text-base lg:text-2xl text-[#E5E7EB] capitalize mt-3.5 lg:mt-5">
        {label}
      </p>
    </div>
  );
};
