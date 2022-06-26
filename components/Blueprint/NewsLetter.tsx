import React from "react";

const NewsLetter = () => {
  return (
    <div className="mt-[209px] mb-[288px] px-4">
      <div className="landing_page_container">
        <div
          style={{
            backgroundImage: 'url("/images/subscribe_bg.jpg")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom center",
          }}
          className="py-[60px] sm:py-[100px] rounded-[20px] overflow-hidden px-4"
        >
          <h2 className="text-center font-spaced text-[16px] sm:text-[20px] md:text-[24px] lg:text-[30px] leading-[35px] w-[80%] lg:w-[45%] mx-auto">
            Subscribe for our latest projects and monthly newsletters!
          </h2>
          <p className="text-[16px] md:text-xl mt-4 text-center text-[#838CA3]">
            There are many variations of passages of Lorem Ipsum available
          </p>

          <form className="max-w-[700px] mx-auto mt-[70px]">
            <div className="relative">
              <input
                style={{
                  background: "linear-gradient(0deg, #000715, #000715)",
                }}
                type="email"
                className="w-full block rounded-full text-xl px-9 py-7  border-none outline-none placeholder:text-[#576993] h-[58px] sm:h-[80px]"
                placeholder="Enter Your Email"
              />

              <div className="sm:absolute top-0 h-full right-0 p-2.5 pl-0">
                <button
                  style={{
                    background:
                      "linear-gradient(91.52deg, #6396F9 40.77%, #00D1FF 115.11%), #576993",
                  }}
                  className="text-xl font-medium px-[30px] h-full rounded-full w-full py-2 sm:py-0"
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

export default NewsLetter;
