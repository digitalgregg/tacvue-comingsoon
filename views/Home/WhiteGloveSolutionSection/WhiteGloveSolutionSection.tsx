import React, { useState } from "react";
import { GradientText } from "../../../components/Marketplace/Components/CommonStyles";
import BigText from "./components/BigText";
import WhiteGloveSolutionsModal from "./components/WhiteGloveSolutionsModal";

const desc =
  "More than just an NFT marketplace. TacVue is here to help your project through every step of it’s journey. From building a website, to handling all the required smart contracts, all the way to launching your project. TacVue has your back.";

const WhiteGloveSolutionSection = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="pt-[60px] xl:pt-[150px]" id="solutions">
      <div className="home_container relative">
        <h2>
          <p className="home_title_lg">
            White <span className={GradientText}>Glove</span>
          </p>
          <div className="home_title_lg flex gap-5 mt-4">
            <div className="hidden xl:block w-[438px] home_body_text translate-y-[60px] font-[Rubik,sans-serif]">
              <p className="max-w-[298px]">{desc}</p>
            </div>
            <p>Solutions</p>
          </div>
        </h2>
        <p className="xl:hidden home_body_text mt-8">{desc}</p>
        <WhiteGloveSolutionsModal
          open={showModal}
          onClose={() => setShowModal(false)}
        />
        <div className="mt-5 xl:mt-[150px]">
          <BigText onClick={() => setShowModal(true)} title="Minting website" />
          <BigText onClick={() => setShowModal(true)} title="Smart contracts" />
          <BigText onClick={() => setShowModal(true)} title="Discord Setup" />
          <BigText
            onClick={() => setShowModal(true)}
            title="Hourly consulting"
          />
          <BigText onClick={() => setShowModal(true)} title="Referrals" />
          <BigText
            onClick={() => setShowModal(true)}
            title="Launch day support"
          />
          <BigText
            onClick={() => setShowModal(true)}
            title="Public Relations"
          />
        </div>
      </div>
    </section>
  );
};

export default WhiteGloveSolutionSection;
