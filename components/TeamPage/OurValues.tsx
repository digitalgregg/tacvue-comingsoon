import classNames from "classnames";
import React from "react";
import { subtitle_sm, text_gradient, title_sm } from "../../pages/blueprint";

const OurValues = () => {
  return (
    <section className="mt-[230px]">
      <div className="container">
        <div className="grid grid-cols-[40%,auto]">
          <div>
            <h2 className={classNames(title_sm, text_gradient)}>
              We’re Driven By Our Values
            </h2>
            <p className={classNames(subtitle_sm, "mt-14 w-[80%]")}>
              Culture is an incredibly important part of how we operate. we
              stand by six key pillars to success.
            </p>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-[30px] w-[800px] ml-auto">
              <div
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0, 209, 255, 0.1) 0%, rgba(0, 209, 255, 0) 100%)",
                }}
                className="py-[20px] px-[25px] rounded-[20px] overflow-hidden flex items-center gap-5"
              >
                <div className="w-[70px] h-[70px] rounded-full overflow-hidden bg-slate-800"></div>
                <p className="text-xl text-white font-semibold">Community</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
