import React from "react";
import BuildForYourJourneySection from "./BuildForYourJourneySection";
import ChooseYourTeamComingSoonSection from "./ChooseYourTeamComingSoonSection";
import CommunitySection from "./CommunitySection";
import Footer from "./Footer";
import ForgeYourEntitySection from "./ForgeYourEntitySection";
import HeroSection from "./HeroSection";
import HomePageNav from "./HomePageNav";
import NewWhiteGloveSolutionSection from "./NewWhiteGloveSolutionSection";
import PlatformForEveryoneSection from "./PlatformForEveryoneSection";

const Home = () => {
  return (
    <div className="bg-[#15182B]">
      <div className="relative">
        {/* <Header /> */}
        <HomePageNav />
        <HeroSection />
      </div>
      <BuildForYourJourneySection />
      <ForgeYourEntitySection />
      <PlatformForEveryoneSection />
      <ChooseYourTeamComingSoonSection />
      <NewWhiteGloveSolutionSection />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Home;
