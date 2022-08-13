import React from "react";
import { GradientText } from "../../../components/Marketplace/Components/CommonStyles";
import Card from "./components/Card";

const BuildForYourJourneySection = () => {
  return (
    <section className="py-[60px] xl:pt-[150px] xl:pb-[390px]">
      <div className="home_container relative">
        <h2>
          <p className="home_title_lg">Built for</p>
          <div className="home_title_lg flex items-center gap-5 mt-4">
            <div
              style={{
                background:
                  "linear-gradient(91.52deg, #6396f9 40.77%, #00d1ff 115.11%)",
              }}
              className="w-10 xl:w-[110px] h-px shrink-0 translate-y-1.5 xl:translate-y-5"
            ></div>
            <p>
              <span className={GradientText}>your</span> journey
            </p>
          </div>
        </h2>

        <div className="mt-8 xl:mt-24 xl:pl-[128px]">
          <p className="home_body_text xl:max-w-[320px]">
            A great NFT platform is one that connects like-minded collectors and
            creators. Unlike most big aggregated marketplaces, Tacvue allows
            creators to assemble their own NFT project and doesn’t display any
            NFT’s outside of it’s own marketplace.
          </p>
        </div>

        {/* Images --Start-- */}
        <div className="xl:absolute top-0 right-0 flex gap-4 xl:gap-[60px] mt-9 xl:mt-0">
          <Card
            imgSrc="/images/for_creators.jpg"
            title="For creators"
            url="#"
            className="xl:mt-[315px]"
          />
          <Card
            imgSrc="/images/for_collectors.jpg"
            title="For collectors"
            url="#"
          />
        </div>
        {/* Images --End-- */}
      </div>
    </section>
  );
};

export default BuildForYourJourneySection;
