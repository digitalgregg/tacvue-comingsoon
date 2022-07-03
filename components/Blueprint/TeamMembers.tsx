import classNames from "classnames";
import React from "react";
import { text_gradient, title_sm } from "../../pages/blueprint";
import TeamMemberCard from "./TeamMemberCard/TeamMemberCard";

const TeamSection = () => {
  const teamInfo = [
    {
      id: 1,
      title: "Sebastian Lueders",
      position: "Chief Information Officer",
      linkedIn: "",
      twitter: "",
      profile: "/images/Sebastian_Lueders.webp",
    },
    {
      id: 2,
      title: "Rob Goldsborough III",
      position: "Head of Operations",
      linkedIn: "",
      twitter: "https://twitter.com/GoldsboroughIii",
      profile: "/images/Robert_Goldsborough_III.webp",
    },
    {
      id: 3,
      title: "Anoop Nannra",
      position: "Lead Advisor",
      linkedIn: "",
      twitter: "",
      profile: "/images/Anoop_Nannra.webp",
    },
    {
      id: 4,
      title: "Brad Myrick",
      position: "Chief Technology Officer",
      linkedIn: "",
      twitter: "https://twitter.com/terran_nft",
      profile: "/images/Brad_Myrick.webp",
    },
    // {
    //   id: 5,
    //   title: "TEAM MEMBER",
    //   position: "CEO",
    //   linkedIn: "",
    //   twitter: "",
    //   profile: "/images/Rectangle4104.svg",
    // },
    // {
    //   id: 6,
    //   title: "TEAM MEMBER",
    //   position: "Head of operation",
    //   linkedIn: "",
    //   twitter: "",
    //   profile: "/images/Rectangle4105(1).svg",
    // },
    // {
    //   id: 7,
    //   title: "TEAM MEMBER",
    //   position: "Assistant Manager",
    //   linkedIn: "",
    //   twitter: "",
    //   profile: "/images/Rectangle4106(1).svg",
    // },
    // {
    //   id: 8,
    //   title: "TEAM MEMBER",
    //   position: "Vice Presi",
    //   linkedIn: "",
    //   twitter: "",
    //   profile: "/images/Rectangle4107(1).svg",
    // },
  ];
  return (
    <section className="mt-[120px]">
      <h2 className={classNames(text_gradient, title_sm, "text-center")}>
        Meet the team
      </h2>

      <div className="container grid gap-[26px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-content-center	 lg:gap-[30px] mt-[110px]">
        {teamInfo.map((e) => (
          <TeamMemberCard
            key={e.id}
            img={{
              src: `${e.profile}`,
              width: 383,
              height: 447,
            }}
            name={e.title}
            twitter={e.twitter}
            // title={e.position}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
