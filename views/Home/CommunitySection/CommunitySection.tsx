import Link from "next/link";
import React from "react";
import { GradientText } from "../../../components/Marketplace/Components/CommonStyles";

const CommunitySection = () => {
  return (
    <section className="home_container px-0 xl:px-5 mt-[60px] xl:mt-[150px]">
      <div
        className="py-10 xl:py-[100px] px-10 xl:rounded-[20px] text-center flex flex-col items-center"
        style={{
          background:
            "linear-gradient(237.69deg, #121831 2.21%, #000715 87.3%)",
        }}
      >
        <h3 className="home_title_sm max-w-[740px] mx-auto">
          unleashing the <span className={GradientText}>power of</span>{" "}
          community
        </h3>
        <p className="home_body_text max-w-[606px] mt-8">
          Are mission is to create a platform that breaks norms, of common
          social platforms. We’re striving to build a community for the people
          by the people.
        </p>

        <Link href="/blueprint">
          <a className="home_learn_more_btn hover:enter_multiverse_btn_hover px-9 py-[17px] rounded-full border-2 border-transparent mt-[30px] xl:mt-[60px]">
            Learn More
          </a>
        </Link>
      </div>
    </section>
  );
};

export default CommunitySection;
