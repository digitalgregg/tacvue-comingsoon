import React from "react";

const SubscribeSection = () => {
  return (
    <div className="mt-10 lg:mt-[110px]">
      <div className="landing_page_container">
        <div
          style={{
            backgroundImage: 'url("/images/subscribe_bg.jpg")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom center",
          }}
          className="py-[30px] lg:py-[100px] rounded-[20px] overflow-hidden px-5"
        >
          <h2 className="text-center font-spaced text-[24px] leading-[22px] lg:text-[30px] lg:leading-[35px] lg:w-[45%] mx-auto">
            Subscribe for our latest projects and monthly newsletters!
          </h2>
          {/* <p className="text-xl mt-5 text-center text-[#838CA3] capitalize">
            Don&apos;t miss out on the tips and strategies we offer to community
          </p> */}

          <form className="max-w-[700px] mx-auto mt-12 lg:mt-[70px]">
            <div className="relative">
              <input
                style={{
                  background: "linear-gradient(0deg, #000715, #000715)",
                }}
                type="email"
                className="w-full block rounded-full text-xl px-9 py-7 lg:pr-[230px] border-none outline-none placeholder:text-[#576993]"
                placeholder="Enter Your Email"
              />

              <div className="lg:absolute lg:top-0 lg:h-full lg:right-0 lg:p-2.5 lg:pl-0">
                <button
                  style={{
                    background:
                      "linear-gradient(91.52deg, #6396F9 40.77%, #00D1FF 115.11%), #576993",
                  }}
                  className="text-xl font-medium py-7 w-full lg:w-auto lg:py-0 mt-[14px] lg:mt-0 px-[30px] h-full rounded-full"
                >
                  Subscribe Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
