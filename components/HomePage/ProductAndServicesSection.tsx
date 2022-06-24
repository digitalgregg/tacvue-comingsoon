import React from "react";
import { Autoplay, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductAndServicesSection = () => {
  return (
    <section
      style={{
        backgroundImage: 'url("/images/products_and_services_bg.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="py-40"
    >
      <div className="landing_page_container">
        <h2 className="text-center font-spaced text-[64px] leading-[61px] ">
          Our products & services
          <p>(member exclusive)</p>
        </h2>
        <p className="mt-7 text-[#838CA3] text-xl text-center ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor!
        </p>
      </div>

      <div className="mt-[60px] products_and_services_slider">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
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
        >
          {[...new Array(20).keys()].map((e) => (
            <SwiperSlide key={e}>
              <div
                style={{
                  background:
                    "linear-gradient(180deg, rgba(158, 187, 255, 0) 0%, rgba(99, 150, 249, 0.1) 100%)",
                }}
                className="rounded-[20px] border border-[#6396f91a] hover:border-[#00D1FF] duration-150 p-5"
              >
                <div className="rounded-[15px] overflow-hidden">
                  <img
                    src="/images/product_img.jpg"
                    alt="product_img"
                    className="w-full"
                  />
                </div>
                <p className="mt-4 text-xl text-center text-[#9EBBFF] capitalize pb-5">
                  Recharge your wallet while you sleep
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductAndServicesSection;
