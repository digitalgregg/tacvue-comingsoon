import classNames from "classnames";
import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { GradientText } from "../components/Marketplace/Components/CommonStyles";
import HeroSection from "../components/TeamPage/HeroSection";
import OurValues from "../components/TeamPage/OurValues";
import OurVisionAndMissionSection from "../components/TeamPage/OurVisionAndMissionSection";
import Slider from "../components/TeamPage/Slider";
import TeamSection from "../components/TeamPage/TeamSection";
import VideoSection from "../components/TeamPage/VideoSection";

const TeamPage = () => {
  return (
    <>
      <Head>
        <title>Team</title>
      </Head>
      <Header />
      <HeroSection />
      <VideoSection />
      <OurVisionAndMissionSection />
      <TeamSection />
      <OurValues />
      <Slider />
      <Footer />
    </>
  );
};

export default TeamPage;
