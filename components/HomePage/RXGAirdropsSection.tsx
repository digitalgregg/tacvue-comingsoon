import React from "react";

const RXGAirdropsSection = () => {
  return (
    <section className="py-10 lg:py-[75px]">
      <div className="landing_page_container">
        <div className="grid grid-cols-1 ipad:grid-cols-2 gap-12 lg:gap-[100px] lg:place-items-center">
          <div className="grid grid-cols-2 gap-[30px]">
            <Box value={807} label="entities minted" />
            <Box value={150} label="Projects Supported" />
          </div>
          <div>
            <h2 className="title_text text-left">You Snooze, You Lose</h2>
            <p className="mt-6 ipad:mt-3.5 lg:mt-8 body_text">
              Genesis Entities will be rewarded with exclusive airdrops and a
              free Entity mint for pioneering the TacVue Community
            </p>

            <button
              style={{
                background:
                  "linear-gradient(91.52deg, #6396F9 40.77%, #00D1FF 115.11%), #576993",
              }}
              className="py-4 px-10 mt-7 lg:mt-10 rounded-full text-base lg:text-xl capitalize"
            >
              Claim Your Genesis Entity Today!
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
    <div className="w-full flex items-center">
      <div
        style={{
          background:
            "linear-gradient(180deg, #091c4a 0%, #0d1c40 100%) padding-box padding-box, linear-gradient(91.52deg, #6396F9 40.77%, #00D1FF 115.11%) border-box border-box",
        }}
        className="w-full lg:w-[293px] aspect-square rounded-[20px] flex flex-col justify-center items-center"
      >
        <h6 className="box_gradient_text text-[48px] leading-[52px] lg:text-[96px] lg:leading-[100px] font-spaced">
          {value}
        </h6>
        <p className="text-base lg:text-2xl text-[#E5E7EB] capitalize mt-3.5 lg:mt-5">
          {label}
        </p>
      </div>
    </div>
  );
};
