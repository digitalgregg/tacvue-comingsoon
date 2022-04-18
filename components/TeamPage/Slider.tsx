import classNames from "classnames";
import React from "react";
import { Navigation } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { subtitle_sm, text_gradient, title_sm } from "../../pages/blueprint";
import QuickAboutCard from "../QuickAboutCard";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const slider_nav_style =
  "w-10 h-10 rounded-full overflow-hidden absolute top-[20%] md:top-1/2 text-white z-10 flex items-center justify-center";

const Slider = () => {
  return (
    <section className="mb-[120px]">
      <div className="container">
        <div className="md:w-[85%] mx-auto relative">
          <button
            id="swiper_prev"
            style={{
              background:
                " linear-gradient(91.52deg, #6396F9 40.77%, #00D1FF 115.11%), linear-gradient(0deg, #576993, #576993)",
            }}
            className={classNames(slider_nav_style, "left-0 -translate-x-1/2")}
          >
            <FiChevronLeft size={22} />
          </button>
          <button
            id="swiper_next"
            style={{
              background:
                " linear-gradient(91.52deg, #6396F9 40.77%, #00D1FF 115.11%), linear-gradient(0deg, #576993, #576993)",
            }}
            className={classNames(
              slider_nav_style,
              "left-full -translate-x-1/2",
            )}
          >
            <FiChevronRight size={22} />
          </button>
          <div>
            <Swiper
              modules={[Navigation]}
              spaceBetween={25}
              slidesPerView={1.1}
              navigation={{
                prevEl: "#swiper_prev",
                nextEl: "#swiper_next",
              }}
            >
              {[1, 2, 3, 4, 5, 6].map((e) => (
                <SwiperSlide key={e}>
                  <div className="w-full grid grid-cols-1 md:grid-cols-[300px,auto] gap-[60px]">
                    <QuickAboutCard
                      key={e}
                      img={{
                        src: "/images/quick_about_1.png",
                        width: 348,
                        height: 396,
                      }}
                      name="Team Member"
                      title="Role"
                    />
                    <div className="h-full w-full flex flex-col justify-center">
                      <p
                        className={classNames(
                          text_gradient,
                          "font-bold tracking-[2px] -mb-1",
                        )}
                      >
                        TESTIMONIALS
                      </p>
                      <h5 className={classNames(text_gradient, title_sm)}>
                        what creators say...
                      </h5>
                      <img
                        src="/images/gradient_rectangle.svg"
                        alt="gradient_rectangle"
                        className="hidden md:block md:w-[400px]"
                      />
                      <p
                        className={classNames(subtitle_sm, "mt-10 md:w-[90%]")}
                      >
                        After four friends discovered Solana and its tremendous
                        potential, Magic Eden was born. With backgrounds across
                        crypto, DeFi, consumer internet
                      </p>
                      <p className={classNames(subtitle_sm, "mt-9 md:w-[90%]")}>
                        companies and management consulting, they identified
                        gaps in existing NFT marketplaces and created something
                        new.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
