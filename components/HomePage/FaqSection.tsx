import React, { ReactNode, useState } from "react";
import Collapsible from "react-collapsible";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { headingClasses, paragraphClasses } from "../../pages";

const FaqSection = () => {
  return (
    <section className="py-14 md:py-20 md:pb-0 mt-0 md:mt-16 faq_section">
      <div className="landing_page_container">
        <h2
          className={`${headingClasses} text-center mb-12`}
          data-aos="fade-up"
        >
          FAQ
        </h2>

        <div className="text-white space-y-8 relative z-10">
          {/* <BluryCircle className='top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 !h-[420px] !blur-[180px]' /> */}
          <FaqAccordion
            data-aos="fade-up"
            title="How do I become a member"
            description="In order to become a member of the TacVue community, you must mint your entity. An
              entity is a digital asset that grants you access to the system and allows for you to
              represent your metaverse identity to other members. In order to create your entity you
              will need to have a crypto wallet with a small amount of $AVAX to store your access
              token on Avalanche Network."
          />
          <FaqAccordion
            data-aos="fade-up"
            title="What makes TacVue’s marketplace different?"
            description="Although there are several differences between us and our counterparts, the major
              differences are our social authentication system and engagement protocol. Discord is
              often used as an easy way to infiltrate collector communities and defraud them. Since
              there is no 100% verifiable system for determining the holdings of other participants, it is
              often impossible for collectors to ensure that they are interacting with legit third-parties.
              Additionally, the dominant strategy for collectors to make returns on their investments is
              to use hype strategies in order to quickly seek arbitrage from unknowing third-parties.
              Our token-gated, decentralized messaging services and engagement protocol prevent
              this from happening."
          />
          <FaqAccordion
            data-aos="fade-up"
            title="What can I do with a NFT?"
            description="Non-fungible tokens can be used to grow decentralized autonomous organizations
              around brand assets and provide early participants with additional benefits for their
              prolonged support of the brand, creator or project. They can be used as authentication
              or tickets into physical and virtual communities or locations."
          />
          <FaqAccordion
            data-aos="fade-up"
            title="What are the future plans for Tacvue?"
            description="We want to create a trustless ecosystem for the development of brands within the
              multiverse and our real-world. We will continue to build out the infrastructure necessary
              to build the next generation of the Cryptopunks, Bored Apes and other successful
              brands built by unique digital assets. After we have completed the foundation of our
              system we will largely be focused on creating a widely available social network with
              increased usability and growth potential by integrating decentralized social systems and
              artificial intelligence."
          />
        </div>

        <div className="mt-20 lg:mt-[160px] flex flex-col lg:justify-center lg:items-center gap-4 lg:gap-[85px]">
          <h6 className="font-spaced text-[24px] leading-[22px] lg:text-[56px] lg:leading-[60px] -translate-y-2">
            More info:
          </h6>
          <div className="flex items-center gap-4 lg:gap-[117px]">
            <button
              style={{
                background:
                  "linear-gradient(180deg, #0E1B33 0%, #0E1B33 100%) padding-box padding-box, linear-gradient(91.52deg, #6396F9 40.77%, #00D1FF 115.11%) border-box border-box",
              }}
              className="py-4 px-6 lg:px-10 rounded-full text-base lg:text-xl capitalize border-[3px] border-transparent"
            >
              <span className="box_gradient_text font-semibold">
                View our Gitbook
              </span>
            </button>
            <button
              style={{
                background:
                  "linear-gradient(180deg, #0E1B33 0%, #0E1B33 100%) padding-box padding-box, linear-gradient(91.52deg, #6396F9 40.77%, #00D1FF 115.11%) border-box border-box",
              }}
              className="py-4 px-6 lg:px-10 rounded-full text-base lg:text-xl capitalize border-[3px] border-transparent"
            >
              <span className="box_gradient_text font-semibold">
                Contact Support
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

type FaqAccordionProps = {
  title: ReactNode;
  description: ReactNode;
};
const FaqAccordion = ({ title, description, ...rest }: FaqAccordionProps) => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div {...rest}>
      <Collapsible
        transitionTime={200}
        openedClassName="currently_open"
        trigger={
          <div className="flex items-center justify-between px-10 py-5 font-sans">
            <p className="text-xl md:text-2xl">{title}</p>
            <div className="text-[#6396F9]">
              {isOpen ? (
                <AiOutlineMinus size={25} />
              ) : (
                <AiOutlinePlus size={25} />
              )}
            </div>
          </div>
        }
        onOpening={() => setisOpen(true)}
        onClosing={() => setisOpen(false)}
      >
        <p className={`${paragraphClasses} px-10 pb-5`}>{description}</p>
      </Collapsible>
    </div>
  );
};
