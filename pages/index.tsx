import Head from "next/head";
import { FaInstagram, FaMediumM, FaTwitter } from "react-icons/fa";
import Script from "next/script";
import { SiDiscord } from "react-icons/si";
import Home from "../views/Home";

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
  return (
    <>
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
      <Home />
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
