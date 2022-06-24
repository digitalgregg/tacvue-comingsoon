import React from "react";

const RXGAirdropsSection = () => {
  return (
    <section className="py-40">
      <div className="landing_page_container">
        <div className="grid grid-cols-2 gap-[100px] place-items-center">
          <div className="grid grid-cols-2 gap-[30px]">
            <Box value={807} label="entities minted" />
            <Box value={150} label="projects launched" />
          </div>
          <div>
            <h2 className="text-[64px] leading-[61px] font-spaced ">
              Don’t Miss out on RXG Airdrops!
            </h2>
            <p className="mt-8 text-xl text-[#E5E7EB]">
              Genesis Entities will be rewarded with exclusive airdrops for
              pioneering the TacVue Community
            </p>

            <button
              style={{
                background:
                  "linear-gradient(91.52deg, #6396F9 40.77%, #00D1FF 115.11%), #576993",
              }}
              className="py-4 px-10 mt-10 rounded-full text-xl capitalize"
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
      className="w-[293px] aspect-square border border-transparent rounded-[20px] flex flex-col justify-center items-center"
    >
      <h6 className="box_gradient_text text-[96px] leading-[100px] font-spaced">
        {value}
      </h6>
      <p className="text-2xl text-[#E5E7EB] capitalize mt-5">{label}</p>
    </div>
  );
};
