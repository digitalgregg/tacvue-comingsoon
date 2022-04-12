import React from "react";
import {
  BluePrintButton,
  subtitle_sm,
  text_gradient,
  title_sm,
} from "../../pages/blueprint";
import QuickAboutCard from "../QuickAboutCard";
import cx from "classnames";

const QuickAboutSection = () => {
  return (
    <>
      {/* Quick About --Start-- */}
      <section className="mt-[120px] md:mt-[220px]">
        <div className="container">
          <div className="gap-[30px] md:gap-[120px] grid grid-cols-1 md:grid-cols-2">
            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-[348px,292px] gap-5">
                <div>
                  <QuickAboutCard
                    img={{
                      src: "/images/quick_about_1.png",
                      width: 348,
                      height: 396,
                    }}
                    name="Abadul Richards"
                    title="CEO"
                  />
                </div>
                <div className="flex items-end md:translate-y-[-20px]">
                  <QuickAboutCard
                    img={{
                      src: "/images/quick_about_2.png",
                      width: 292 * 3,
                      height: 332 * 3,
                    }}
                    name="Nayem Jonathan"
                    title="Head of operation"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-[292px,348px] gap-5 md:translate-x-[35px]">
                <div className="flex items-start">
                  <QuickAboutCard
                    img={{
                      src: "/images/quick_about_3.png",
                      width: 292 * 3,
                      height: 332 * 3,
                    }}
                    name="Hasib Bishwash"
                    title="Assistant Manager"
                  />
                </div>
                <div className="md:translate-y-[-20px]">
                  <QuickAboutCard
                    img={{
                      src: "/images/quick_about_1.png",
                      width: 348,
                      height: 396,
                    }}
                    name="Sakib Richards"
                    title="Vice Presi"
                  />
                </div>
              </div>
            </div>
            <div className="mt-[20px] md:mt-[60px]">
              <h2 className={cx(title_sm, text_gradient)}>Quick about</h2>
              <p className={cx(subtitle_sm, "mt-[45px] w-[70%]")}>
                After four friends discovered Solana and its tremendous
                potential, Magic Eden was born. With backgrounds across crypto,
                DeFi, consumer internet
              </p>
              <p className={cx(subtitle_sm, "mt-8 w-[70%] mb-5")}>
                companies and management consulting, they identified gaps in
                existing NFT marketplaces and created something new.
              </p>
              <BluePrintButton />

              <div className="mt-10 flex items-center gap-6">
                <a
                  href="#"
                  style={{
                    background:
                      "linear-gradient(rgb(47 182 253 / 10%),#030B1A) padding-box padding-box, linear-gradient(180deg, rgb(25 195 254 / 29%) 0%, rgba(25, 195, 254, 0) 79.17%) border-box border-box",
                  }}
                  className="w-[60px] h-[60px] border-4 border-transparent rounded-[10px] flex items-center justify-center"
                >
                  <img src="/images/icons8-discord.svg" className="w-8 h-8" />
                </a>
                <a
                  href="#"
                  style={{
                    background:
                      "linear-gradient(rgb(47 182 253 / 10%),#030B1A) padding-box padding-box, linear-gradient(180deg, rgb(25 195 254 / 29%) 0%, rgba(25, 195, 254, 0) 79.17%) border-box border-box",
                  }}
                  className="w-[60px] h-[60px] border-4 border-transparent rounded-[10px] flex items-center justify-center"
                >
                  <img src="/images/icons8-twitter.png" className="w-8 h-8" />
                </a>
                <a
                  href="#"
                  style={{
                    background:
                      "linear-gradient(rgb(47 182 253 / 10%),#030B1A) padding-box padding-box, linear-gradient(180deg, rgb(25 195 254 / 29%) 0%, rgba(25, 195, 254, 0) 79.17%) border-box border-box",
                  }}
                  className="w-[60px] h-[60px] border-4 border-transparent rounded-[10px] flex items-center justify-center"
                >
                  <img src="/images/telegram_icon.png" className="w-7 h-7" />
                </a>
                <a
                  href="#"
                  style={{
                    background:
                      "linear-gradient(rgb(47 182 253 / 10%),#030B1A) padding-box padding-box, linear-gradient(180deg, rgb(25 195 254 / 29%) 0%, rgba(25, 195, 254, 0) 79.17%) border-box border-box",
                  }}
                  className="w-[60px] h-[60px] border-4 border-transparent rounded-[10px] flex items-center justify-center"
                >
                  <img src="/images/instagram_icon.png" className="w-7 h-7" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Quick About --End-- */}
    </>
  );
};

export default QuickAboutSection;
