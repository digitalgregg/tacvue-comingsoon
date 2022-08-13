import React from "react";
import { GradientText } from "../../../components/Marketplace/Components/CommonStyles";
import CircularSlider from "./components/CircularSlider";

const PlatformForEveryoneSection = () => {
  return (
    <section className="py-[60px] xl:py-[150px]" id="features">
      <div className="home_container relative">
        <h2 className="home_title_md">
          <p>The Platform</p>
          <div className="flex items-center gap-5 mt-4">
            <div
              style={{
                background:
                  "linear-gradient(91.52deg, #6396f9 40.77%, #00d1ff 115.11%)",
              }}
              className="w-10 xl:w-[110px] h-px shrink-0 translate-y-2 xl:translate-y-5"
            ></div>
            <p>
              <span className={GradientText}>for</span> Everyone
            </p>
          </div>
        </h2>

        <CircularSlider />
      </div>
    </section>
  );
};

export default PlatformForEveryoneSection;
