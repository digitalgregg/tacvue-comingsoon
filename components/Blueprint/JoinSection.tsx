import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { subtitle_sm, text_gradient, title_sm } from "../../pages/blueprint";
import cx from "classnames";
const JoinSection = () => {
  return (
    <>
      {/* Join Section --Start-- */}
      <section className="mt-[120px] md:mt-[220px] mb-[60px] md:mb-[150px]">
        <div className="container">
          <div className="w-full mx-0 md:w-fit md:min-w-[650px] lg:min-w-[1092px] md:mx-auto relative py-14 md:py-0">
            <img
              src="/images/join_bg.svg"
              alt="join_bg"
              className="h-full w-full md:h-auto object-cover absolute top-1/2 -translate-y-1/2 left-0"
            />
            <div className="z-[5] relative w-full text-center">
              <h3 className={cx(title_sm, text_gradient, "!text-[42px]")}>
                Join tacvue
              </h3>
              <p className={cx(subtitle_sm, "w-[65%] mx-auto mt-8")}>
                Subscribe to the latest updates
              </p>

              <div className="flex justify-center mt-10">
                <button className="btn_gradient flex items-center gap-2.5">
                  Subscribe Now{" "}
                  <BsArrowRightShort className="shrink-0" size={25} />
                </button>
              </div>
            </div>
            <p></p>
          </div>
        </div>
      </section>
      {/* Join Section --End-- */}
    </>
  );
};

export default JoinSection;
