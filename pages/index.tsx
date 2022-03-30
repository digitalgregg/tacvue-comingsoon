import Image from "next/image";
import { useRouter } from "next/router";
import { HiChevronDoubleDown, HiOutlineArrowRight } from "react-icons/hi";
import { FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Collapsible from "react-collapsible";
import { ReactNode, useState } from "react";
import AOS from "aos";
import { useEffect } from "react";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";

export const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    background: "linear-gradient(45deg, #6396f9, #00d1ff)",
    border: 0,
    p: 1,
};

// if (typeof window !== "undefined") {
//     AOS.init();
// }

const headingClasses = "uppercase text-white text-5xl md:text-[64px] font-spaced";
const headingClasses_sm = "uppercase text-white text-[35px] md:text-[45px] leading-[1] font-spaced";
const paragraphClasses = "font-sans text-[#9EB5E1] text-sm xs:text-base sm:text-lg leading-[1.6]";

const SocialIcons = () => {
    return (
        <div className="flex items-center gap-6 md:gap-10">
            <a
                href="https://www.twitter.com/tacvue"
                className="text-[#9EB5E1] hover:text-[#618ee4] -mt-2"
            >
                <FaTwitter className="w-6 h-6 md:h-7 md:w-7" />
            </a>
            <a
                href="https://www.instagram.com/tacvue/"
                className="text-[#9EB5E1] hover:text-[#618ee4] -mt-2"
            >
                <FaInstagram className="w-6 h-6 md:h-7 md:w-7" />
            </a>
            <a
                href="https://www.tiktok.com/@tacvue"
                className="text-[#9EB5E1] hover:text-[#618ee4] -mt-2"
            >
                <FaTiktok className="w-6 h-6 md:h-7 md:w-7" />
            </a>
        </div>
    );
};

function LandingPage() {
    const router = useRouter();

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const modalHandleOpen = () => setModalIsOpen(true);
    const modalHandleClose = () => setModalIsOpen(false);

    useEffect(() => {
        AOS.init({ disable: "mobile" });
    }, []);

    return (
        <div className="max-w-[100vw] overflow-hidden bg-[#030C16]">
            <header>
                <nav
                    className={
                        "flex justify-between w-full py-4 md:py-8 fixed top-0 left-0 z-50 backdrop-blur-sm px-5 xl:px-16 2xl:px-20"
                    }
                >
                    <div className="flex items-center cursor-pointer w-[140px] md:w-auto">
                        <Image
                            alt="Tacvue Logo"
                            className="mr-2"
                            src="/images/tacvue-whitegradient-logo.svg"
                            width={180}
                            height={55}
                            onClick={() => router.push("/")}
                        />
                    </div>
                    <SocialIcons />
                </nav>
            </header>

            {/* Hero Section --Start-- */}
            <section className="bg-cover bg-no-repeat bg-top">
                <div className="h-screen w-full relative">
                    {/* Background Video --Start-- */}
                    <div className="w-full h-full absolute top-0 left-0 z-[0]">
                        <video
                            src="/video/TacVue-Bkgd-header.webm"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        ></video>
                    </div>
                    {/* Background Video --End-- */}

                    <div className="landing_page_container flex flex-col items-center justify-center h-full w-full relative z-10">
                        <h1 className="text-5xl xs:text-6xl md:text-8xl text-center uppercase font-spaced mb-3">
                            <p data-aos="fade-up">nfts</p>
                            <p data-aos="fade-up" data-aos-delay="100">
                                reimagined
                            </p>
                        </h1>

                        {/* Buttons --Start-- */}
                        <div className="flex flex-col items-center mt-8 gap-3">
                            <button
                                onClick={modalHandleOpen}
                                data-aos="fade-up"
                                data-aos-delay="200"
                                className="from-blue-500 to-cyan-500 bg-gradient-to-r text-sm sm:text-base px-10 py-2.5 rounded-full hover:from-blue-600 hover:to-cyan-600"
                            >
                                ENTER MULTIVERSE
                            </button>
                            <Modal
                                open={modalIsOpen}
                                onClose={modalHandleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={modalStyle}>
                                    <video
                                        src="/video/TacVue-Bkgd-header.webm"
                                        controls
                                        className="w-full h-full object-cover"
                                    ></video>
                                </Box>
                            </Modal>
                        </div>
                        {/* Buttons --End-- */}
                    </div>

                    {/* Learn More --Start-- */}
                    <a
                        // data-aos="fade-up"
                        href="#read_more"
                        className="flex flex-col items-center z-10 cursor-pointer text-[#6396F9] absolute left-1/2 -translate-x-1/2 bottom-16 group"
                    >
                        <p>Learn More</p>
                        <div className="animate_slide_up_down">
                            <HiChevronDoubleDown
                                size={30}
                                className="group-hover:translate-y-2 duration-200"
                            />
                        </div>
                    </a>
                    {/* Learn More --End-- */}
                </div>
            </section>
            {/* Hero Section --End-- */}

            {/* Eco Friendly Blockchain Section --Start-- */}
            <section className="mt-14 md:mt-24 scroll-mt-24" id="read_more">
                <div className="landing_page_container relative z-10">
                    <div className="grid md:grid-cols-[auto,400px] gap-20 place-items-center">
                        <div className="md:pr-20 ">
                            <h3 className={`${headingClasses_sm} mb-6`} data-aos="fade-up">
                                <p>NFTs Are A Game.</p>
                                <p>Come Play Them on TacVue.</p>
                            </h3>
                            <p
                                className={`${paragraphClasses} mb-8 md:w-[80%]`}
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                TacVue is designed to gamify the experience of discovering,
                                collecting and creating high quality digital content. We make the
                                NFT experience less technical, and more fun, by blending game
                                mechanics, decentralized finance and digital identity into an
                                immersive experience.
                            </p>
                        </div>
                        <div className="md:w-full" data-aos="fade-up">
                            <div className="w-[96%] mx-auto md:w-[85%] md:mr-auto">
                                <Image width={579} height={582} src="/images/avax_circle.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Eco Friendly Blockchain Section --End-- */}

            {/* The Technology Section --Start-- */}
            <section className="py-28 md:mt-16">
                <div className="landing_page_container">
                    <div>
                        <h2
                            className={`${headingClasses} text-center uppercase`}
                            data-aos="fade-up"
                        >
                            The Destiny of Web3
                        </h2>
                        <p
                            className={`${paragraphClasses} text-center mt-5 md:w-[80%] mx-auto mb-5`}
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            Enthusiasts understand that web3 is powerful enough to rebuild social
                            constructs and reorganize our common interests towards a better future.
                            Most systems attempt to educate you on how to harness its power. TacVue
                            is designed for anyone to have fun doing it.
                        </p>
                        <div className="grid md:grid-cols-2 gap-20 mt-[120px]">
                            {/* Box One --Start-- */}
                            <div>
                                <div className="grid md:grid-cols-[90px,auto] gap-10 relative z-10">
                                    <BluryCircle className="md:-top-full md:-left-1/2" />
                                    <div
                                        className="-mt-5 w-[40%] mx-auto md:w-full"
                                        data-aos="fade-up"
                                    >
                                        <img
                                            src="/images/color_palette.svg"
                                            className="w-full"
                                            alt="color_palette"
                                        />
                                    </div>
                                    <div className="text-center md:text-left">
                                        <h5
                                            data-aos="fade-up"
                                            className="font-sans font-bold text-2xl mb-2 md:w-[65%] text-transparent bg-clip-text bg-gradient-to-br from-[#11AAF5] to-[#65D3FF]"
                                        >
                                            Create
                                        </h5>
                                        <p
                                            data-aos="fade-up"
                                            data-aos-delay="200"
                                            className={`${paragraphClasses} md:w-[80%]`}
                                        >
                                            Creators can focus on delivering the highest quality
                                            content to their community instead of fighting for space
                                            on a never-ending timeline. They earn $AVAX for selling
                                            their digital merchandise to their biggest fans.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Box One --End-- */}

                            {/* Box Two --Start-- */}
                            <div>
                                <div className="grid md:grid-cols-[90px,auto] gap-10 relative z-10">
                                    <BluryCircle className="md:-top-full md:-right-1/3 !bg-[#30266E]" />
                                    <div
                                        data-aos="fade-up"
                                        className="-mt-5 w-[40%] mx-auto md:w-full"
                                    >
                                        <img
                                            src="/images/trophy.svg"
                                            className="w-[85%] ml-auto"
                                            alt="trophy"
                                        />
                                    </div>
                                    <div className="text-center md:text-left">
                                        <h5
                                            data-aos="fade-up"
                                            className="font-sans font-bold text-2xl mb-2 md:w-[65%] text-transparent bg-clip-text bg-gradient-to-br from-[#AD72F3] to-[#C797FF]"
                                        >
                                            Collect
                                        </h5>
                                        <p
                                            data-aos="fade-up"
                                            data-aos-delay="200"
                                            className={`${paragraphClasses} md:w-[95%]`}
                                        >
                                            Collectors can exchange assets with other collectors as
                                            a means of portraying their social identity and
                                            establishing an immutable record of sponsorship for
                                            certain projects and creators. They can earn financial
                                            rewards for finding undervalued creations before other
                                            Entities.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Box Two --End-- */}
                        </div>
                    </div>
                </div>
            </section>
            {/* The Technology Section --End-- */}

            {/* Future Of NFT Section --Start-- */}
            <section className="py-14 md:py-20">
                <div className="landing_page_container">
                    <div className="text-center relative z-10">
                        <BluryCircle className="top-[150%] left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        <h2 className={`${headingClasses} mb-5`} data-aos="fade-up">
                            Become an Insider
                        </h2>
                        <p
                            className={`${paragraphClasses} md:w-[40%] mx-auto`}
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            Seize your ticket into the web3 revolution by creating your first
                            Multiverse Entity. This asset grants you access to the TacVue ecosystem.
                        </p>
                    </div>
                    <div
                        className="mt-16 md:mt-24 grid md:grid-cols-3 gap-12 md:gap-28 relative z-10 px-5 md:px-0"
                        data-aos="fade-up"
                    >
                        <div
                            className="absolute top-1/2 left-1/2 w-2 h-[80%] md:w-[80%] md:h-2 -translate-x-1/2 -translate-y-1/2"
                            style={{
                                backgroundImage: "url('/images/dots.png')",
                                backgroundSize: "20px",
                                backgroundPosition: "center",
                            }}
                        ></div>
                        <NFtCard
                            title="Personalize"
                            subtitle="Customize your own tag so people can find you."
                            iconImgSrc="/images/nft_power_icon.png"
                            bgImgSrc="/images/nft_card_bg.png"
                        />
                        <NFtCard
                            title="Recognize"
                            subtitle="Make your wallet easily identifiable with your TacVue Entity."
                            iconImgSrc="/images/search_icon.png"
                            bgImgSrc="/images/nft_card_purple_bg.png"
                        />
                        <NFtCard
                            title="Uncensored"
                            subtitle="Secure your content with your irrevocable access token."
                            iconImgSrc="/images/coin_icon.png"
                            bgImgSrc="/images/nft_card_bg.png"
                        />
                    </div>
                </div>
            </section>
            {/* Future Of NFT Section --End-- */}

            {/* The Why Join TacVue Section --Start-- */}
            <section className="py-28 md:mt-16">
                <div className="landing_page_container">
                    <div>
                        <h2 className={`${headingClasses} text-center`} data-aos="fade-up">
                            WHY SHOULD YOU JOIN TACVUE?
                        </h2>
                        <div className="grid md:grid-cols-2 gap-20 mt-[120px]">
                            {/* Box One --Start-- */}
                            <div>
                                <div className="grid md:grid-cols-[90px,auto] gap-10 relative z-10">
                                    <BluryCircle className="md:-top-full md:-left-1/2" />
                                    <div
                                        className="-mt-5 w-[40%] mx-auto md:w-full"
                                        data-aos="fade-up"
                                    >
                                        <img
                                            src="/images/verified_shield.png"
                                            className="w-full"
                                            alt="verified_shield"
                                        />
                                    </div>
                                    <div className="text-center md:text-left">
                                        <h5
                                            data-aos="fade-up"
                                            className="font-sans font-bold text-2xl mb-2 md:w-[71%] text-transparent bg-clip-text bg-gradient-to-br from-[#11AAF5] to-[#65D3FF]"
                                        >
                                            Trusted Contracts &amp; Token-Gated Communication
                                        </h5>
                                        <p
                                            data-aos="fade-up"
                                            data-aos-delay="200"
                                            className={`${paragraphClasses} md:w-[80%]`}
                                        >
                                            Our smart contracts are highly secure and efficient and
                                            tested by the best hackers in the world. We are
                                            continually evolving our safety standards in order to
                                            provide our members with the highest level of security,
                                            so they can use our protocol without the stress or spam
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Box One --End-- */}

                            {/* Box Two --Start-- */}
                            <div>
                                <div className="grid md:grid-cols-[90px,auto] gap-10 relative z-10">
                                    <BluryCircle className="md:-top-full md:-right-1/3 !bg-[#30266E]" />
                                    <div
                                        data-aos="fade-up"
                                        className="-mt-5 w-[40%] mx-auto md:w-full"
                                    >
                                        <img src="/images/mic.svg" className="w-full" alt="mic" />
                                    </div>
                                    <div className="text-center md:text-left">
                                        <h5
                                            data-aos="fade-up"
                                            className="font-sans font-bold text-2xl mb-2 md:w-[65%] text-transparent bg-clip-text bg-gradient-to-br from-[#AD72F3] to-[#C797FF]"
                                        >
                                            Brand Launchpad
                                        </h5>
                                        <p
                                            data-aos="fade-up"
                                            data-aos-delay="200"
                                            className={`${paragraphClasses} md:w-[85%]`}
                                        >
                                            Gone are the days of centralized brand development that
                                            have become commonplace in the world of social media and
                                            Discord DAOs. We provide promotional tools to our most
                                            engaged users in order to provide the most committed
                                            creators and collectors with the highest visibility on
                                            our platform.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Box Two --End-- */}
                        </div>
                        <div className="grid md:grid-cols-2 gap-20 mt-[120px]">
                            {/* Box One --Start-- */}
                            <div>
                                <div className="grid md:grid-cols-[90px,auto] gap-10 relative z-10">
                                    <BluryCircle className="md:-top-full md:-left-1/2" />
                                    <div
                                        className="-mt-5 w-[40%] mx-auto md:w-full"
                                        data-aos="fade-up"
                                    >
                                        <img
                                            src="/images/bulb.svg"
                                            className="w-[80%] ml-auto"
                                            alt="bulb"
                                        />
                                    </div>
                                    <div className="text-center md:text-left">
                                        <h5
                                            data-aos="fade-up"
                                            className="font-sans font-bold text-2xl mb-2 md:w-[65%] text-transparent bg-clip-text bg-gradient-to-br from-[#11AAF5] to-[#65D3FF]"
                                        >
                                            Exposure to New Ideas &amp; Creations
                                        </h5>
                                        <p
                                            data-aos="fade-up"
                                            data-aos-delay="200"
                                            className={`${paragraphClasses} md:w-[80%]`}
                                        >
                                            The TacVue system allows for new ideas and creations to
                                            gain attention and customer traction before the next
                                            phase of organizational development. This allows for
                                            members to see the emerging ideas and projects that have
                                            the potential to take our world by storm.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Box One --End-- */}

                            {/* Box Two --Start-- */}
                            <div>
                                <div className="grid md:grid-cols-[90px,auto] gap-10 relative z-10">
                                    <BluryCircle className="md:-top-full md:-right-1/3 !bg-[#30266E]" />
                                    <div
                                        data-aos="fade-up"
                                        className="-mt-5 w-[40%] mx-auto md:w-full"
                                    >
                                        <img
                                            src="/images/chase.svg"
                                            className="w-[80%] ml-auto"
                                            alt="chase"
                                        />
                                    </div>
                                    <div className="text-center md:text-left">
                                        <h5
                                            data-aos="fade-up"
                                            className="font-sans font-bold text-2xl mb-2 md:w-[65%] text-transparent bg-clip-text bg-gradient-to-br from-[#AD72F3] to-[#C797FF]"
                                        >
                                            Gamified Brand Building
                                        </h5>
                                        <p
                                            data-aos="fade-up"
                                            data-aos-delay="200"
                                            className={`${paragraphClasses} md:w-[85%]`}
                                        >
                                            The TacVue platform is designed to be fun. Instead of
                                            educating our members on every aspect of the system, we
                                            use gamification to provide an intuitive process that
                                            lets members have fun while learning about the tools of
                                            decentralized finance and cryptocurrency.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Box Two --End-- */}
                        </div>
                    </div>
                </div>
            </section>
            {/* The Technology Section --End-- */}

            {/* FAQ Section --Start-- */}
            <section className="py-14 md:py-20 md:pb-0 faq_section">
                <div className="landing_page_container">
                    <h2 className={`${headingClasses} text-center mb-12`} data-aos="fade-up">
                        FAQ
                    </h2>

                    <div className="text-white space-y-8 relative z-10">
                        <BluryCircle className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 !h-[420px] !blur-[180px]" />
                        <FaqAccordion
                            data-aos="fade-up"
                            data-aos-delay="200"
                            title="How do I sign up?"
                            description="In order to become a member of the TacVue community, you must mint your entity. An
              entity is a digital asset that grants you access to the platform and allows for you to
              represent your metaverse identity to other members. In order to create your entity you
              will need to have a crypto wallet with a small amount of $avax to store your access
              token on Avalanche Network."
                        />
                        <FaqAccordion
                            data-aos="fade-up"
                            data-aos-delay="300"
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
                            data-aos-delay="400"
                            title="What can I do with my NFT?"
                            description="Non-fungible tokens can be used to grow decentralized autonomous organizations
              around brand assets and provide early participants with additional benefits for their
              prolonged support of the brand, creator or project. They can be used as authentication
              or tickets into physical and virtual communities or locations."
                        />
                        <FaqAccordion
                            data-aos="fade-up"
                            data-aos-delay="500"
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
            {/* FAQ Section --End-- */}

            {/* Discord Section --Start-- */}
            <section className="pb-14 md:pb-28">
                <div className="landing_page_container">
                    <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                        <div
                            className="md:w-[80%] bg-cover md:bg-110 mx-auto flex flex-col justify-center items-center py-14 md:py-0 md:h-[700px] md:px-14 text-center md:bg-size-full"
                            style={{
                                backgroundImage: "url('/images/discord_bd.png')",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <div data-aos="fade-up" data-aos-delay="150">
                                <img
                                    src="/images/tacvue-gradient-icon.svg"
                                    className="w-[90px]"
                                    alt="Tacvue"
                                />
                            </div>
                            <h5
                                data-aos="fade-up"
                                data-aos-delay="250"
                                className="text-xl md:text-3xl font-sans md:leading-[40px] px-5 md:px-0 mb-8 mt-6"
                            >
                                Subscribe to TacVue and get the latest updates and announcements in
                                your inbox!
                            </h5>
                            <form className="w-full px-4 md:px-0 md:w-[80%] mx-auto flex justify-center items-center flex-col">
                                <input
                                    type="text"
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                    className="block bg-[#121831] text-white text-center px-6 py-3 rounded-md mb-6 w-full text-xl outline-none"
                                    placeholder="Email address"
                                />
                                <button
                                    data-aos="fade-up"
                                    data-aos-delay="350"
                                    className="from-blue-500 font-sans font-medium to-cyan-500 bg-gradient-to-r px-10 py-2.5 rounded-full hover:from-blue-600 hover:to-cyan-600 flex items-center justify-center gap-3"
                                >
                                    Subscribe Now
                                    <HiOutlineArrowRight size={18} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* Discord Section --End-- */}

            {/* Footer Section --Start-- */}
            <footer>
                <div className="px-5 xl:px-16 2xl:px-20 pb-10 font-sans flex items-center justify-between gap-10 md:gap-0">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center cursor-pointer w-[140px] md:w-auto">
                            <Image
                                alt="Tacvue Logo"
                                className="mr-2"
                                src="/images/tacvue-whitegradient-logo.svg"
                                width={180}
                                height={55}
                                onClick={() => router.push("/")}
                            />
                        </div>
                    </div>

                    <SocialIcons />
                </div>
            </footer>
            {/* Footer Section --End-- */}
        </div>
    );
}

export default LandingPage;

// FAQ Accordion Component --Start--
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
                            {isOpen ? <AiOutlineMinus size={25} /> : <AiOutlinePlus size={25} />}
                        </div>
                    </div>
                }
                onOpen={() => setisOpen(true)}
                onClose={() => setisOpen(false)}
            >
                <p className={`${paragraphClasses} px-10 pb-5`}>{description}</p>
            </Collapsible>
        </div>
    );
};
// FAQ Accordion Component --End--

// BluryCircle Component --Start--
const BluryCircle = ({ className = "" }: { className?: string }) => {
    return (
        <div
            className={`w-[600px] h-[350px] bg-[#1A335D] absolute rounded-full blur-[190px] z-[-1] ${className}`}
        ></div>
    );
};
// BluryCircle Component --End--

// Nft Card Component --Start--
type nftCardProps = {
    iconImgSrc: string;
    bgImgSrc: string;
    title: ReactNode;
    subtitle: ReactNode;
};
const NFtCard = ({ bgImgSrc, iconImgSrc, title, subtitle }: nftCardProps) => {
    return (
        <div className="relative">
            <img src={bgImgSrc} alt="nft_card_bg" className="w-full h-auto" />

            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-around items-center">
                <div className="grow w-full flex items-center justify-center">
                    <img src={iconImgSrc} alt="nft_power_icon" className="scale-75" />
                </div>
                <div className="text-center px-4 xs:px-5 sm:px-7 flex-shrink-0 py-10 pb-10">
                    <h6 className="font-sans font-bold mb-4 text-[22px] text-transparent bg-clip-text bg-gradient-to-br from-[#6396F9] to-[#00D1FF] uppercase">
                        {title}
                    </h6>
                    <p className={`${paragraphClasses}`}>{subtitle}</p>
                </div>
            </div>
        </div>
    );
};
// Nft Card Component --End--
