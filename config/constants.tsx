import AgencyReferrals from "../components/Icons/AgencyReferrals";
import DiscordSetup from "../components/Icons/DiscordSetup";
import HourlyConsulting from "../components/Icons/HourlyConsulting";
import LaunchDaySupport from "../components/Icons/LaunchDaySupport";
import MintingWebsite from "../components/Icons/MintingWebsite";
import SmartContract from "../components/Icons/SmartContract";

type ServiceCard = {
  imgSrc: string;
  title: string;
};
export const serviceCards: ServiceCard[] = [
  {
    imgSrc: "/images/tokenize_your_social_profile.jpg",
    title: "On-Chain & Non-<br/>Fungible Accounts",
  },
  {
    imgSrc: "/images/recharge-your-wallet-while-you-sleep.jpg",
    title: "Generative NFT <br/> Project Assembler",
  },
  {
    imgSrc: "/images/promote-your-upcoming-events.jpg",
    title: "Own a piece of TacVue<br/> & govern us to the top",
  },
  {
    imgSrc: "/images/analyze-member-behavior.jpg",
    title: "No-Code NFT <br/> Launchpad",
  },
  {
    imgSrc: "/images/stay-updated-on-the-latest-in-crypto.jpg",
    title: "Tokenize your <br/> social entity",
  },
  {
    imgSrc: "/images/real-time-project-tracking.jpg",
    title: "Entity Rankings & <br/> Competitions",
  },
  {
    imgSrc: "/images/buy-&-sell-with-one-account.jpg",
    title: "Recharge your wallet while you sleep",
  },
  {
    imgSrc: "/images/assemble-generative-nft-projects.jpg",
    title: "Promote your favorite <br/> events & projects",
  },
  {
    imgSrc: "/images/launch-your-own-collection.jpg",
    title: "Do some recon <br/> on the community",
  },
  {
    imgSrc: "/images/launch-your-project-in-seconds.jpg",
    title: "All your crypto <br/> news in one place",
  },
  {
    imgSrc: "/images/buy-&-sell-with-one-account.jpg",
    title: "Data-driven <br/> marketplace ",
  },
  {
    imgSrc: "/images/launch-your-own-collection.jpg",
    title: "We’re just <br/> getting started!",
  },
];

export const whiteGlovesServices = [
  {
    icon: <MintingWebsite />,
    label: "Minting Website",
    value: "Minting Website",
  },
  {
    icon: <SmartContract />,
    label: "Smart Contracts",
    value: "Smart Contracts",
  },
  {
    icon: <DiscordSetup />,
    label: "Discord Setup",
    value: "Discord Setup",
  },
  {
    icon: <HourlyConsulting />,
    label: "Hourly consulting",
    value: "Hourly consulting",
  },
  {
    icon: <AgencyReferrals />,
    label: "Agency Referrals",
    value: "Agency Referrals",
  },
  {
    icon: <LaunchDaySupport />,
    label: "Launch Day Support",
    value: "Launch Day Support",
  },
];
