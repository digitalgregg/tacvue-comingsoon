import React from "react";
import { Autoplay, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { serviceCards } from "../../config/constants";

const ProductAndServicesSection = () => {
  return (
    <section>
      <div className="landing_page_container">
        <h2 className="title_text">Want the technicals?</h2>
        <p className="mt-7 ipad:mt-5 text-[#838CA3] text-base leading-[22px] lg:text-[20px] lg:leading-[26px] text-center ">
          TacVue features at a glance
        </p>
      </div>

      <div className="mt-10 lg:mt-[120px] products_and_services_slider">
        <Swiper
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          speed={4000}
          freeMode={{
            enabled: true,
          }}
          loop
          modules={[Autoplay, FreeMode]}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
              spaceBetween: 15,
            },
            680: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            830: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
            1400: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          {serviceCards.map((serviceCard, i) => (
            <SwiperSlide key={i}>
              <div
                style={{
                  background:
                    "linear-gradient(180deg, rgba(158, 187, 255, 0) 0%, rgba(99, 150, 249, 0.1) 100%)",
                }}
                className="rounded-[20px] border border-[#6396f91a] hover:border-[#00D1FF] duration-150 p-5"
              >
                <div className="rounded-[15px] overflow-hidden">
                  <img
                    src={serviceCard.imgSrc}
                    alt={serviceCard.imgSrc
                      .replace(".jpg", "")
                      .replace("/images/", "")}
                    className="w-full"
                  />
                </div>
                <div className="mt-4 text-xl text-center text-[#9EBBFF] capitalize pb-5 px-5">
                  {serviceCard.title.split("<br/>").map((e, i) => (
                    <p key={i}>{e}</p>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductAndServicesSection;
