import Head from "next/head";
import { FaInstagram, FaMediumM, FaTwitter } from "react-icons/fa";
import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SubscribeSection from "../components/HomePage/SubscribeSection";
import TacVueAlphaSection from "../components/HomePage/TacVueAlphaSection";
import WhiteGloveServicesSection from "../components/HomePage/WhiteGloveServicesSection";
import RXGAirdropsSection from "../components/HomePage/RXGAirdropsSection";
import BuildForYourJourney from "../components/HomePage/BuildForYourJourney";
import FaqSection from "../components/HomePage/FaqSection";
import HeroSection from "../components/HomePage/HeroSection";
import ProductAndServicesSection from "../components/HomePage/ProductAndServicesSection";
import { SiDiscord } from "react-icons/si";
import UniqueValuePropositionsSection from "../components/HomePage/UniqueValuePropositionsSection";
import BuiltForThePeopelSection from "../components/HomePage/BuiltForThePeopelSection";
import WhiteGloveSolutionsModal from "../components/WhiteGloveSolutionsModal";

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

export const headingClasses =
  "uppercase text-white text-5xl md:text-[64px] font-spaced";
export const headingClasses_sm =
  "uppercase text-white text-[35px] md:text-[45px] leading-[1] font-spaced";
export const paragraphClasses =
  "font-sans text-[#9EB5E1] text-sm xs:text-base sm:text-lg leading-[1.6]";

export const SocialIcons = () => {
  return (
    <div className="flex items-center gap-6 md:gap-12">
      <a
        href="https://www.twitter.com/tacvue"
        className="text-[#576993] hover:text-[#4f6391] -mt-2"
      >
        <FaTwitter className="w-7 h-7 md:h-8 md:w-8" />
      </a>
      <a
        href="https://www.twitter.com/tacvue"
        className="text-[#576993] hover:text-[#4f6391] -mt-2"
      >
        <SiDiscord className="w-7 h-7 md:h-8 md:w-8" />
      </a>
      <a
        href="https://www.instagram.com/tacvue/"
        className="text-[#576993] hover:text-[#4f6391] -mt-2"
      >
        <FaInstagram className="w-7 h-7 md:h-8 md:w-8" />
      </a>
      <a
        href="https://www.tiktok.com/@tacvue"
        className="text-[#576993] hover:text-[#4f6391] -mt-2"
      >
        <FaMediumM className="w-7 h-7 md:h-8 md:w-8" />
      </a>
    </div>
  );
};

function LandingPage() {
  // const router = useRouter();

  // const [modalIsOpen, setModalIsOpen] = useState(false);
  // const modalHandleOpen = () => setModalIsOpen(true);
  // const modalHandleClose = () => setModalIsOpen(false);

  // useEffect(() => {
  //   AOS.init({ disable: 'mobile' });
  // }, []);

  return (
    <>
      <Script
        src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=XtYuXA"
        async
        type="text/javascript"
        defer
      />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-205037825-1"
        async
        type="text/javascript"
        defer
      />
      <Script
        id="google_analytics_script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-205037825-1');
  `,
        }}
      />

      <Head>
        <title>TacVue - The Multiverse Portal</title>
        <meta
          name="description"
          content="TacVue is designed to gamify the experience of discovering, collecting and creating high quality digital content."
        ></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* Facebook Meta Tag */}
        <meta property="og:title" content="TacVue" />
        <meta property="og:description" content="Media Reimagined" />
        <meta
          property="og:image"
          content="https://www.tacvue.io/images/tacvue-color-icon.png"
        />
        <meta property="og:url" content="https://tacvue.io" />
        {/* Twitter Meta Tag */}
        <meta name="twitter:title" content="TacVue" />
        <meta name="twitter:description" content="Media Reimagined" />
        <meta
          name="twitter:url"
          content="https://www.tacvue.io/images/tacvue-color-icon.png"
        />
        <meta name="twitter:card" content="Built for Your Journey" />
      </Head>

      <div
        style={{
          background:
            "linear-gradient(237.69deg, #121831 2.21%, #000715 87.3%)",
        }}
        className="max-w-[100vw]"
      >
        {/* <WhiteGloveSolutionsModal open onClose={() => {}} /> */}
        <Header />
        <HeroSection />
        <SubscribeSection />
        <div
          style={{
            backgroundImage: 'url("/images/products_and_services_bg.png")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="py-10 lg:py-[75px] space-y-20 lg:space-y-[150px]"
        >
          <UniqueValuePropositionsSection />
          <BuiltForThePeopelSection />
          {/* <TacVueAlphaSection /> */}
          <ProductAndServicesSection />
        </div>
        <WhiteGloveServicesSection />

        <div
          style={{
            backgroundImage: 'url("/images/products_and_services_bg.png")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <RXGAirdropsSection />
          {/* <EcoFriendlyBlockchainSection />
        <TechnologySection />
        <FutureOfNFTSection />
        <WhyJoinTacVueSection /> */}

          <FaqSection />
        </div>
        <BuildForYourJourney />

        {/* klaviyo Section --Start-- */}
        {/* <section className="pb-14 md:pb-28 mt-[50px]">
          <div className="landing_page_container">
            <div data-aos="fade-up">
              <div className='md:w-[80%] bg-cover md:bg-110 mx-auto flex flex-col justify-center items-center py-14 md:py-0 md:px-14 text-center md:bg-size-full'>
                <div className='klaviyo-form-XGdvPD'></div>
              </div>
            </div>
          </div>
        </section> */}
        {/* klaviyo Section --End-- */}

        <Footer />
      </div>
    </>
  );
}

export default LandingPage;

// FAQ Accordion Component --Start--

// FAQ Accordion Component --End--

// BluryCircle Component --Start--
// const BluryCircle = ({ className = '' }: { className?: string }) => {
//   return (
//     <div
//       className={`w-[600px] h-[350px] bg-[#1A335D] absolute rounded-full blur-[190px] z-[-1] ${className}`}
//     ></div>
//   );
// };
// BluryCircle Component --End--

// Nft Card Component --Start--

// Nft Card Component --End--
