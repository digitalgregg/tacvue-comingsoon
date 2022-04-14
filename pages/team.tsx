import classNames from "classnames";
import React from "react";
import Header from "../components/Header";
import { GradientText } from "../components/Marketplace/Components/CommonStyles";
import HeroSection from "../components/TeamPage/HeroSection";
import OurValues from "../components/TeamPage/OurValues";
import OurVisionAndMissionSection from "../components/TeamPage/OurVisionAndMissionSection";
import TeamSection from "../components/TeamPage/TeamSection";
import VideoSection from "../components/TeamPage/VideoSection";

const TeamPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <VideoSection />
      <OurVisionAndMissionSection />
      <TeamSection />
      <OurValues />
    </>
  );
};

export default TeamPage;
