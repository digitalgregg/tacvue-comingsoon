import React from "react";
import { subtitle_sm, text_gradient, title_sm } from "../../pages/blueprint";
import cx from "classnames";
const PartnersSection = () => {
  return (
    <>
      {/* Partners Section --Start-- */}
      <section className="mt-[120px]">
        <div className="container">
          <div className="text-center">
            <h2 className={cx(title_sm, text_gradient)}>our partners</h2>
            <p className={cx(subtitle_sm, "mt-[40px]")}>
              After four friends discovered Solana and its friends discovere{" "}
            </p>
          </div>

          <div className="mt-[105px] flex flex-wrap  items-center justify-center gap-10">
            <img src="/images/brand_1.png" alt="brand 1" />
            <img src="/images/brand_2.png" alt="brand 2" />
            <img src="/images/brand_3.png" alt="brand 3" />
          </div>
        </div>
      </section>
      {/* Partners Section --End-- */}
    </>
  );
};

export default PartnersSection;
