import React, { ReactNode, useState } from "react";
import Collapsible from "react-collapsible";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { headingClasses, paragraphClasses } from "../../pages";

const CollapsibleComponent =
  Collapsible as unknown as React.ComponentProps<any>;

const FaqSection = () => {
  return (
    <section className="mt-0 py-10 lg:py-[75px] faq_section">
      <div className="landing_page_container">
        <h2
          className={`${headingClasses} text-center mb-12`}
          data-aos="fade-up"
        >
          FAQ
        </h2>

        <div className="relative z-10 space-y-3.5 lg:space-y-8 text-white">
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
      <CollapsibleComponent
        transitionTime={200}
        openedClassName="currently_open"
        trigger={
          <div className="flex items-center justify-between px-6 pr-7 lg:px-10 py-5 font-sans">
            <p className="lg:text-xl md:text-2xl">{title}</p>
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
        <p
          className={`text-[#9EBBFF] text-base leading-[22px] px-6 lg:px-10 pb-5`}
        >
          {description}
        </p>
      </CollapsibleComponent>
    </div>
  );
};
