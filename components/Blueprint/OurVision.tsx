import React from "react";
import { subtitle_sm, text_gradient, title_sm } from "../../pages/blueprint";
import cx from "classnames";

const OurVision = () => {
  return (
    <section className="mt-10 " id="story">
      <div className="container">
        <div className="px-4 text-center">
          <h2 className={cx(title_sm, text_gradient, "pt-20")}>OUR VISION</h2>
          <p className="mt-11 font-base leading-[160%] text-white ipad:max-w-[70%] lg:max-w-[50%] mx-auto">
            TacVue&apos;s mission is to power the individual to engage with an
            open and accessible web3. We do not follow models, we develop them.
            We build for the future, not the present.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
