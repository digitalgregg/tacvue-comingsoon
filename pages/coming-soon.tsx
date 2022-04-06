/* eslint-disable @next/next/no-img-element */
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import classNames from "classnames";
import * as React from "react";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import {
  DiscordIcon,
  GradientTweeterIcon,
  NFTDropCoverImageIcon,
} from "../components/ControlCenter/Promotions/Icons";
import { GradientText } from "../components/Marketplace/Components/CommonStyles";
import { GradientBorderContainer } from "../components/Marketplace/Components/GradientBorderContainer";
import { Slider } from "@mui/material";
import Header from "../components/Header";
import Image from "next/image";

const AvaxIcon = () => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.5 19C14.7467 19 19 14.7467 19 9.5C19 4.2533 14.7467 0 9.5 0C4.2533 0 0 4.2533 0 9.5C0 14.7467 4.2533 19 9.5 19Z"
      fill="#E84142"
    />
    <path
      d="M12.8513 9.74671C13.1805 9.1782 13.7116 9.1782 14.0407 9.74671L16.0903 13.3447C16.4195 13.9132 16.1502 14.377 15.4919 14.377H11.3628C10.712 14.377 10.4427 13.9132 10.7643 13.3447L12.8513 9.74671ZM8.88678 2.81993C9.21591 2.25143 9.73953 2.25143 10.0687 2.81993L10.525 3.64277L11.6021 5.53529C11.8639 6.07387 11.8639 6.7097 11.6021 7.24828L7.98914 13.5093C7.66 14.018 7.11394 14.3396 6.50804 14.377H3.50843C2.85016 14.377 2.58087 13.9207 2.91 13.3447L8.88678 2.81993Z"
      fill="white"
    />
  </svg>
);

function BorderedDropDown({
  options,
  onSelect,
  placeholder,
  rounded = "rounded-full",
}: {
  options: string[];
  onSelect: (op: string) => void;
  placeholder: string;
  rounded?: string;
}) {
  const [isVisible, setVisible] = React.useState(false);
  const [selected, setSelected] = React.useState("");
  return (
    <div className="w-full z-[100]">
      <div className="relative">
        <div
          className={classNames(
            "border border-[#576993] bg-transparent px-4 py-3 flex",
            rounded
          )}
          onClick={() => setVisible(!isVisible)}
        >
          <div className="flex items-center flex-1">
            <span
              className={classNames(
                "flex-1 pl-3 align-middle",
                selected !== "" ? "text-white" : "text-[#576993]"
              )}
            >
              {selected === "" && placeholder}
              {selected !== "" && selected}
            </span>
          </div>
          {/* <span className="w-px h-full bg-[#9AA5BE] mx-4" /> */}
          <div className="flex items-center mr-4">
            <span>
              <svg
                width="16"
                height="9"
                viewBox="0 0 16 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.36684 3.25597e-07L8 6.37307L14.6332 -8.34181e-07L16 1.31331L8 9L1.23536e-06 1.31331L1.36684 3.25597e-07Z"
                  fill="url(#paint0_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="-11.7572"
                    y1="47.4635"
                    x2="110.147"
                    y2="49.8991"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.411458" stopColor="#6396F9" />
                    <stop offset="1" stopColor="#00D1FF" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </div>
        </div>
        {isVisible && (
          <div className="absolute z-50 w-full h-56 overflow-y-auto">
            <div
              className={classNames(
                "w-full flex flex-col py-3 px-4 rounded-lg",
                "space-y-2 divide-y divide-[#576993]"
              )}
              style={{
                background:
                  "linear-gradient(237.69deg, #181e36 2.21%, #0e1014 87.3%)",
              }}
            >
              {options.map((option) => (
                <span
                  key={option}
                  className={`text-left cursor-pointer text-[#9EBBFF] py-2 hover:text-white`}
                  onClick={() => {
                    onSelect(option);
                    setSelected(option);
                    setVisible(false);
                  }}
                >
                  {option}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const GradientTimesIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.33503 0L0 2.33503L1.19236 3.52739L4.14013 6.52484L1.19236 9.47261L0 10.6153L2.33503 13L3.52739 11.8076L6.52484 8.81019L9.47261 11.8076L10.6153 13L13 10.6153L11.8076 9.47261L8.81019 6.52484L11.8076 3.52739L13 2.33503L10.6153 0L9.47261 1.19236L6.52484 4.14013L3.52739 1.19236L2.33503 0V0Z"
      fill="black"
    />
    <path
      d="M2.33503 0L0 2.33503L1.19236 3.52739L4.14013 6.52484L1.19236 9.47261L0 10.6153L2.33503 13L3.52739 11.8076L6.52484 8.81019L9.47261 11.8076L10.6153 13L13 10.6153L11.8076 9.47261L8.81019 6.52484L11.8076 3.52739L13 2.33503L10.6153 0L9.47261 1.19236L6.52484 4.14013L3.52739 1.19236L2.33503 0V0Z"
      fill="url(#paint0_linear_1340_1827)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1340_1827"
        x1="-1.625"
        y1="4.89855"
        x2="15.2187"
        y2="5.34477"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.411458" stopColor="#6396F9" />
        <stop offset="1" stopColor="#00D1FF" />
      </linearGradient>
    </defs>
  </svg>
);

type TGallaryView = "portrait" | "constraint" | "full";

function NFTCard({
  image,
  nftName,
  tagName,
  thumbnail,
  orientation,
}: {
  image: string | null;
  nftName: string;
  tagName: string | undefined;
  thumbnail: string;
  orientation: TGallaryView;
}) {
  return (
    <div className="flex items-center justify-center">
      <div
        className={classNames(
          `drop-shadow-lg from-cyan-500 to-blue-500 bg-gradient-to-r`,
          "relative rounded-3xl p-px",
          "relative"
        )}
      >
        <svg
          className="absolute z-50 top-8 right-8"
          width="17"
          height="29"
          viewBox="0 0 17 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.0119 0.561355C15.9217 0.404083 15.7543 0.307129 15.573 0.307129H5.14207C4.92495 0.307129 4.73199 0.445645 4.66256 0.65136L0.192142 13.897C0.140056 14.0514 0.165559 14.2215 0.260557 14.3539C0.355622 14.4863 0.508643 14.5648 0.671651 14.5648H4.90957L0.0320364 27.6241C-0.0541901 27.8549 0.0385133 28.1144 0.251583 28.2384C0.331198 28.2847 0.418908 28.3071 0.505877 28.3071C0.651612 28.3071 0.795121 28.2442 0.894234 28.1258L14.4711 11.9C14.5972 11.7493 14.6246 11.5392 14.5414 11.3611C14.4583 11.1831 14.2795 11.0692 14.083 11.0692H10.1634L16.0099 1.06859C16.1014 0.912064 16.1022 0.718628 16.0119 0.561355Z"
            fill="#07E1FF"
          />
        </svg>
        <div
          className={`flex justify-center bg-[#161B2E] items-center p-0.5 rounded-3xl h-[520px] w-[330px]`}
        >
          {image && (
            <img
              src={image}
              className={classNames(
                "rounded-3xl h-full",
                orientation === "portrait" &&
                  "w-[240px] h-[300px] mx-auto object-fill",
                orientation === "constraint" &&
                  "w-[300px] h-[300px] object-cover mx-auto",
                orientation === "full" && "object-cover"
              )}
              alt=" "
            />
          )}
        </div>

        <div
          className={classNames(
            "absolute bottom-0 left-0 right-0 w-full ",
            "flex flex-col"
          )}
        >
          <div
            className={classNames(
              "absolute flex items-center justify-center  -top-5 left-8",
              "rounded-full from-cyan-500 to-blue-500 bg-gradient-to-r p-0.5",
              "w-10 h-10 z-50"
            )}
          >
            <img
              src={thumbnail}
              className="z-50 w-full h-full rounded-full"
              alt=" "
            />
          </div>
          <div
            className={`from-cyan-500 to-blue-500 bg-gradient-to-r w-full h-0.5`}
          ></div>

          <div className="px-0.5 pb-0.5 pt-0">
            <div
              className={classNames("rounded-b-3xl", "flex flex-col space-y-1")}
              style={{
                background:
                  "linear-gradient(152.97deg, rgba(9, 28, 74, 0.72) 0%, rgba(18, 28, 55, 0.72) 100%)",
                backdropFilter: "blur(45px)",
                WebkitBackdropFilter: "blur(45px)",
              }}
            >
              <div className={"flex flex-col px-0.5 pb-0.5 rounded-3xl"}>
                {/* Info  */}
                <div
                  className={classNames(
                    "w-full rounded-b-3xl flex",
                    "px-5 xl:px-3 pb-3 pt-6",
                    "space-x-4 justify-end"
                  )}
                >
                  <div
                    className={classNames(
                      "flex justify-between flex-1 space-y-3"
                    )}
                  >
                    <div>
                      <p
                        className={classNames(
                          "text-sm font-medium tracking-wider md:text-base xl:text-lg 2xl:text-xl",
                          "text-left whitespace-nowrap min-h-[15px]",
                          "text-ellipsis w-44 overflow-hidden"
                        )}
                      >
                        {nftName}
                      </p>
                      <p
                        className={classNames(
                          "-mt-1 text-[10px] xl:text-xs 2xl:text-base font-light text-[#9EBBFF] text-opacity-80",
                          "text-left"
                        )}
                      >
                        by {tagName}
                      </p>
                    </div>
                    <button
                      className={classNames(
                        `from-blue-500 to-cyan-500 bg-gradient-to-r`,
                        "rounded-3xl p-[2px]"
                      )}
                    >
                      <p
                        className={classNames(
                          "bg-gradient-to-l from-[#091C4A] to-[#121C37]",
                          "rounded-3xl w-full h-full ",
                          "px-3 2xl:px-4  py-[2px]"
                        )}
                      >
                        <span
                          className={classNames(
                            `from-blue-500 to-cyan-500 bg-gradient-to-r bg-clip-text text-transparent`,
                            "text-xs xl:text-sm 2xl:text-base"
                          )}
                        >
                          1.5 AVAX
                        </span>
                      </p>
                    </button>
                  </div>
                </div>
                {/* CTA */}
                <div className="flex w-full px-3 pb-3 space-x-12">
                  <button
                    className={classNames(
                      "flex-1 py-1 text-white rounded-3xl",
                      "whitespace-nowrap w-full"
                    )}
                    style={{
                      background:
                        "linear-gradient(91.52deg, #6396F9 40.77%, #00D1FF 115.11%), #C4C4C4",
                    }}
                  >
                    Buy Now
                  </button>
                  <button
                    className={classNames(
                      "flex-1 py-1 text-white rounded-3xl",
                      "whitespace-nowrap w-full border border-white"
                    )}
                  >
                    Place Bid
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CreateNFTRoundedButton({
  name,
  textClassName = "",
  textSize = "text-xl",
}: {
  name: string;
  textClassName?: string;
  textSize?: string;
}) {
  return (
    <button
      className={classNames(
        "text-white rounded-full font-semibold from-[#6396f9] to-[#00d1ff] bg-gradient-to-r p-[2px]",
        "transition-all duration-300 ease-in-out w-full"
      )}
      onClick={() => {
        alert("Create NFT Triggered"); // placeholder function
      }}
    >
      <div
        className={classNames(
          `bg-black/50 text-sm rounded-full  py-3.5 px-6`,
          "hover:bg-gradient-to-r hover:from-[#6396f9] hover:to-[#00d1ff]",
          "transition-all duration-300 ease-in-out",
          "hover:text-white group w-full",
          textClassName
        )}
      >
        <span
          className={classNames(
            "text-transparent bg-clip-text from-[#6396F9] to-[#00D1FF] bg-gradient-to-r",
            "transition-all duration-300 ease-in-out",
            `group-hover:text-white`,
            "whitespace-nowrap uppercase",
            textSize
          )}
        >
          {name}
        </span>
      </div>
    </button>
  );
}

type CollectionItem = {
  id: number;
  name: string;
  imgSrc: string;
};

const CollectionsItems: CollectionItem[] = [
  {
    id: 1,
    name: "TacVault",
    imgSrc: "/images/tacvue-gradient-icon.svg",
  },
  {
    id: 2,
    name: "Flowers for Vader",
    imgSrc: "/images/collection-ex-1.png",
  },
];

// Launch Your NFT Modal

const GradientDateSelector: React.FC = () => (
  <div className={classNames("rounded-lg p-px bg-[#576993]")}>
    <div
      className={classNames(
        "flex items-center justify-between bg-[#101528] w-full py-3 rounded-lg"
      )}
    >
      <div className="px-4 w-full">
        <input
          type="date"
          name=""
          id=""
          className="bg-[#101528] outline-none w-full block font-light text-[#576993]"
        />
      </div>
    </div>
  </div>
);

const LinkedInGIcons = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.46293 0C1.55489 0 0.00139703 1.55319 0 3.46273C0 5.37227 1.55349 6.92576 3.46293 6.92576C5.37167 6.92576 6.92436 5.37227 6.92436 3.46273C6.92436 1.55339 5.37157 0 3.46293 0Z"
      fill="black"
    />
    <path
      d="M3.46293 0C1.55489 0 0.00139703 1.55319 0 3.46273C0 5.37227 1.55349 6.92576 3.46293 6.92576C5.37167 6.92576 6.92436 5.37227 6.92436 3.46273C6.92436 1.55339 5.37157 0 3.46293 0Z"
      fill="url(#paint0_linear_1247_170)"
    />
    <path
      d="M6.06025 8.31738H0.86191C0.614636 8.31738 0.414062 8.51786 0.414062 8.76533V25.4972C0.414062 25.7446 0.614636 25.9451 0.86191 25.9451H6.06015C6.30752 25.9451 6.50809 25.7445 6.50809 25.4972V8.76533C6.50819 8.51776 6.30762 8.31738 6.06025 8.31738Z"
      fill="black"
    />
    <path
      d="M6.06025 8.31738H0.86191C0.614636 8.31738 0.414062 8.51786 0.414062 8.76533V25.4972C0.414062 25.7446 0.614636 25.9451 0.86191 25.9451H6.06015C6.30752 25.9451 6.50809 25.7445 6.50809 25.4972V8.76533C6.50819 8.51776 6.30762 8.31738 6.06025 8.31738Z"
      fill="url(#paint1_linear_1247_170)"
    />
    <path
      d="M19.3477 8.12012C17.4453 8.12012 15.7736 8.69938 14.7535 9.64397V8.76504C14.7535 8.51757 14.5529 8.3171 14.3055 8.3171H9.31904C9.07167 8.3171 8.87109 8.51757 8.87109 8.76504V25.4969C8.87109 25.7443 9.07167 25.9448 9.31904 25.9448H14.5124C14.7598 25.9448 14.9603 25.7442 14.9603 25.4969V17.2189C14.9603 14.8437 15.3972 13.3715 17.5775 13.3715C19.7255 13.3741 19.8863 14.9528 19.8863 17.3608V25.4969C19.8863 25.7443 20.0868 25.9448 20.3343 25.9448H25.53C25.7773 25.9448 25.9779 25.7442 25.9779 25.4969V16.3188C25.9778 12.5016 25.2242 8.12012 19.3477 8.12012Z"
      fill="black"
    />
    <path
      d="M19.3477 8.12012C17.4453 8.12012 15.7736 8.69938 14.7535 9.64397V8.76504C14.7535 8.51757 14.5529 8.3171 14.3055 8.3171H9.31904C9.07167 8.3171 8.87109 8.51757 8.87109 8.76504V25.4969C8.87109 25.7443 9.07167 25.9448 9.31904 25.9448H14.5124C14.7598 25.9448 14.9603 25.7442 14.9603 25.4969V17.2189C14.9603 14.8437 15.3972 13.3715 17.5775 13.3715C19.7255 13.3741 19.8863 14.9528 19.8863 17.3608V25.4969C19.8863 25.7443 20.0868 25.9448 20.3343 25.9448H25.53C25.7773 25.9448 25.9779 25.7442 25.9779 25.4969V16.3188C25.9778 12.5016 25.2242 8.12012 19.3477 8.12012Z"
      fill="url(#paint2_linear_1247_170)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1247_170"
        x1="-0.865546"
        y1="2.60971"
        x2="8.10612"
        y2="2.84734"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.411458" stopColor="#6396F9" />
        <stop offset="1" stopColor="#00D1FF" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_1247_170"
        x1="-0.347692"
        y1="14.9597"
        x2="7.55302"
        y2="15.0321"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.411458" stopColor="#6396F9" />
        <stop offset="1" stopColor="#00D1FF" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_1247_170"
        x1="6.73274"
        y1="14.8367"
        x2="28.8987"
        y2="15.4002"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.411458" stopColor="#6396F9" />
        <stop offset="1" stopColor="#00D1FF" />
      </linearGradient>
    </defs>
  </svg>
);

const DropsFormSection = () => (
  <div className="grid grid-cols-3 gap-10">
    <div className="flex flex-col space-y-1">
      <p className={classNames("text-[#9EBBFF]", "text-sm pb-3")}>
        Project Twitter Link
      </p>
      <div className="relative">
        <div
          className={classNames(
            "absolute inset-y-0 flex items-center justify-center w-6 h-10 pt-2 left-1",
            "ml-5"
          )}
        >
          <GradientTweeterIcon />
        </div>
        <input
          type="text"
          className={classNames(
            "pl-14",
            "px-5 py-3 border border-[#576993] bg-transparent",
            "w-full rounded-md",
            "placeholder:font-light placeholder:text-[#576993] z-50",
            "bg-[#101528] rounded-lg"
          )}
          placeholder="@yournftlaunch"
        />
      </div>
    </div>
    <div className="flex flex-col space-y-1">
      <p className={classNames("text-[#9EBBFF]", "text-sm pb-3")}>
        Project Discord Link
      </p>
      <div className="relative">
        <div
          className={classNames(
            "absolute inset-y-0 flex items-center justify-center w-6 h-10 pt-2 left-1",
            "ml-5"
          )}
        >
          <DiscordIcon />
        </div>
        <input
          type="text"
          className={classNames(
            "pl-14",
            "px-5 py-3 border border-[#576993] bg-transparent",
            "w-full rounded-md",
            "placeholder:font-light placeholder:text-[#576993] z-50",
            "bg-[#101528] rounded-lg"
          )}
          placeholder="@yournftlaunch"
        />
      </div>
    </div>
    <div className="flex flex-col space-y-1">
      <p className={classNames("text-[#9EBBFF]", "text-sm pb-3")}>
        Project LinkedIn Link
      </p>
      <div className="relative">
        <div
          className={classNames(
            "absolute inset-y-0 flex items-center justify-center w-6 h-10 pt-2 left-1",
            "ml-5"
          )}
        >
          <LinkedInGIcons />
        </div>
        <GradientBorderContainer active={false}>
          <input
            type="text"
            className={classNames(
              "pl-14 px-5 py-3 w-full rounded-md",
              "placeholder:font-light placeholder:text-[#576993] z-50",
              "bg-[#101528] rounded-lg",
              "border  border-[#576993]  "
            )}
            placeholder="@yournftlaunch"
          />
        </GradientBorderContainer>
      </div>
    </div>
  </div>
);

const BorderedTextArea: React.FC<{
  label: string;
  placeholder: string;
  className?: string;
}> = ({ label, placeholder, children, className }) => (
  <div className={classNames("pt-2", className)}>
    <p className={classNames("text-[#9EBBFF]", "text-sm pb-3")}>{label}</p>
    <textarea
      rows={4}
      className={classNames(
        "px-5 py-3 border border-[#576993] bg-transparent",
        "w-full rounded-md",
        "placeholder:font-light placeholder:text-[#576993] z-50",
        "bg-[#101528] rounded-lg"
      )}
      placeholder={placeholder}
    />
  </div>
);

type TProject = {
  id: string;
  name: string;
  link: string;
};

type TTeammate = {
  id: string;
  name: string;
  position: string;
  twitter: string;
  linkedIn: string;
};

const TeamDetailsSeciton: React.FC = () => {
  const [hasProject, setHasProject] = React.useState(false);
  const [hasTeamDoxes, setHasTeamDoxed] = React.useState(false);

  const { control, register } = useForm<{
    projects: TProject[];
    teammates: TTeammate[];
  }>();
  const {
    fields: projects,
    append: appendProject,
    remove: removeProject,
  } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "projects", // unique name for your Field Array
  });
  const {
    fields: teammates,
    append: appendTeammate,
    remove: removeTeammate,
  } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "teammates", // unique name for your Field Array
  });

  const FieldButton: React.FC<{ name: string; onClick?: () => void }> = ({
    name,
    onClick,
  }) => (
    <button
      className={classNames(
        "bg-[#1C233D] border-[#576993] border",
        "flex justify-center items-center",
        "w-full py-3 rounded-lg"
      )}
      onClick={onClick}
    >
      <div className="flex items-center justify-center space-x-3">
        <span className={classNames("text-2xl", GradientText)}>+</span>
        <p className={classNames("text-lg", GradientText)}>{name}</p>
      </div>
    </button>
  );

  const ProjectsSection = () => {
    return (
      <div className="pt-6 -z-10">
        {projects.length > 0 && (
          <div className="flex flex-col pb-6 space-y-3">
            {projects.map((project, idx) => (
              <div key={project.id} className="relative space-y-2">
                <button
                  className="absolute -top-2 -right-2 bg-[#1C233D] border border-[#576993] p-[5px] rounded-full"
                  onClick={() => {
                    removeProject(idx);
                  }}
                >
                  <GradientTimesIcon />
                </button>
                <input
                  type="text"
                  key={`${project.id}-name`}
                  className={classNames(
                    "px-5 py-3 border border-[#576993] bg-transparent",
                    "w-full rounded-md",
                    "placeholder:font-light placeholder:text-[#576993]",
                    "bg-[#0E1014] rounded-lg"
                  )}
                  placeholder="Project Name"
                  {...register(`projects.${idx}.name` as const)}
                />
                <input
                  type="text"
                  className={classNames(
                    "px-5 py-3 border border-[#576993] bg-transparent",
                    "w-full rounded-md",
                    "placeholder:font-light placeholder:text-[#576993]",
                    "bg-[#0E1014] rounded-lg"
                  )}
                  key={`${project.id}`}
                  placeholder="Project Link"
                  {...register(`projects.${idx}.link` as const)}
                />
              </div>
            ))}
          </div>
        )}
        <FieldButton
          name="Add NFT Project"
          onClick={() => {
            appendProject({ link: "", name: "" });
          }}
        />
      </div>
    );
  };

  const TeamDoxesSection = () => {
    return (
      <div className="pt-6 -z-10">
        {teammates.length > 0 && (
          <div className="flex flex-col pb-6 space-y-3">
            {teammates.map((teammate, idx) => (
              <div
                key={teammate.id}
                className="relative grid grid-cols-2 gap-x-2 gap-y-2"
              >
                <button
                  className="absolute -top-2 -right-2 bg-[#1C233D] border border-[#576993] p-[5px] rounded-full"
                  onClick={() => {
                    removeTeammate(idx);
                  }}
                >
                  <GradientTimesIcon />
                </button>
                <input
                  type="text"
                  className={classNames(
                    "px-5 py-3 border border-[#576993] bg-transparent",
                    "w-full rounded-md",
                    "placeholder:font-light placeholder:text-[#576993]",
                    "bg-[#0E1014] rounded-lg"
                  )}
                  placeholder="Name"
                  id={`${teammate.id}-name`}
                  {...register(`teammates.${idx}.name` as const)}
                />
                <input
                  type="text"
                  className={classNames(
                    "px-5 py-3 border border-[#576993] bg-transparent",
                    "w-full rounded-md",
                    "placeholder:font-light placeholder:text-[#576993]",
                    "bg-[#0E1014] rounded-lg"
                  )}
                  placeholder="Position"
                  id={`${teammate.id}-position`}
                  {...register(`teammates.${idx}.position` as const)}
                />
                <input
                  type="text"
                  className={classNames(
                    "px-5 py-3 border border-[#576993] bg-transparent",
                    "w-full rounded-md",
                    "placeholder:font-light placeholder:text-[#576993]",
                    "bg-[#0E1014] rounded-lg"
                  )}
                  placeholder="Twitter"
                  id={`${teammate.id}-twitter`}
                  {...register(`teammates.${idx}.twitter` as const)}
                />
                <input
                  type="text"
                  className={classNames(
                    "px-5 py-3 border border-[#576993] bg-transparent",
                    "w-full rounded-md",
                    "placeholder:font-light placeholder:text-[#576993]",
                    "bg-[#0E1014] rounded-lg"
                  )}
                  placeholder="Entity"
                  id={`${teammate.id}-linkedin`}
                  {...register(`teammates.${idx}.linkedIn` as const)}
                />
              </div>
            ))}
          </div>
        )}
        <FieldButton
          name="Add Team Member"
          onClick={() => {
            appendTeammate({
              id: `${Math.floor(Math.random() * 10000)}`,
              name: "",
              position: "",
              twitter: "",
              linkedIn: "",
            });
          }}
        />
      </div>
    );
  };

  return (
    <div>
      <p className="mt-16 text-lg text-white">Team Details</p>
      <div className="flex mt-4 space-x-16">
        <div className="flex-1">
          <p className="text-[#9EBBFF] text-sm pb-4">
            Are you a team member of other NFT projects?
          </p>
          <BorderedDropDown
            options={["Yes", "No"]}
            onSelect={(t) => {
              setHasProject(t === "Yes");
            }}
            placeholder="Select"
            rounded="rounded-lg"
          />
          {hasProject && <ProjectsSection />}
        </div>
        <div className="flex-1">
          <p className="text-[#9EBBFF] text-sm pb-4">
            Is the founding team doxed?
          </p>
          <BorderedDropDown
            options={["Yes", "No"]}
            onSelect={(t) => {
              setHasTeamDoxed(t === "Yes");
            }}
            placeholder="Select"
            rounded="rounded-lg"
          />
          {hasTeamDoxes && <TeamDoxesSection />}
        </div>
      </div>
    </div>
  );
};

const LaunchYourNFTModal = () => {
  const [logo, setLogo] = React.useState<File | null>();
  const [rangeValue, setRangeValue] = useState<number | number[]>(20);
  const rangeHandleChange = (event: Event, newValue: number | number[]) => {
    setRangeValue(newValue);
  };

  return (
    <>
      <Header />
      <div
        style={{
          background:
            "linear-gradient(237.69deg, #181e36 2.21%, #0e1014 87.3%)",
        }}
      >
        <div className="w-full h-auto absolute top-0 left-0">
          <Image
            src="/images/launchpad_bg.jpg"
            alt="launchpad_bg"
            width={1917 * 2}
            height={1080 * 2}
          />
        </div>
        <div className="flex justify-center min-h-screen px-4 pt-4 pb-20 relative z-10 mt-[100px]">
          <div
            className={classNames(
              "inline-block text-left align-bottom transition-all transform",
              "shadow-xl sm:my-8 sm:align-middle sm:max-w-6xl sm:w-full",
              "rounded-[30px] relative px-20",
              "bg-[#0E1014] border-2 border-[#576993]"
            )}
          >
            <div className="h-full">
              <p
                className={classNames(
                  "text-8xl mt-16 mb-[100px] text-center font-spaced",
                  GradientText
                )}
              >
                PROJECT LaunchPad
              </p>
              <p className="mt-8 text-lg text-white">Collection Details</p>
              <div className="grid grid-cols-2 gap-20 mt-3">
                <div className="max-w-xl">
                  {/* Collection */}
                  <div className="pt-2">
                    <p className={classNames("text-[#9EBBFF]", "text-sm pb-3")}>
                      Collection Name
                    </p>
                    <input
                      type="text"
                      className={classNames(
                        "px-5 py-3 border border-[#576993] bg-transparent",
                        "w-full rounded-md",
                        "placeholder:font-light placeholder:text-[#576993] z-50",
                        "bg-[#101528] rounded-lg"
                      )}
                      placeholder="Choose a project"
                    />
                    <p
                      className={classNames(
                        "text-xs pt-px text-[#576993] mt-1 leading-5"
                      )}
                    >
                      You must choose a product that has never been minted or
                      listed on TacVue’s marketplace. To procceed, select a
                      delisted project.
                    </p>
                  </div>
                  {/* Drop downs */}
                  <div className="flex mt-8 space-x-8">
                    <div className="flex-1">
                      <p className="text-[#9EBBFF] text-sm pb-4">
                        Is your collection a derivative?
                      </p>
                      <BorderedDropDown
                        options={["Yes", "No"]}
                        onSelect={() => {
                          //
                        }}
                        placeholder="Select"
                        rounded="rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-[#9EBBFF] text-sm pb-4">
                        Are you using original artwork?
                      </p>
                      <BorderedDropDown
                        options={["Yes", "No"]}
                        onSelect={() => {
                          //
                        }}
                        placeholder="Select"
                        rounded="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
                {/* Image Section */}
                <div className="pl-8">
                  <div className="flex flex-col items-start space-y-2">
                    <div>
                      <p className="text-sm text-[#9EBBFF] pl-2">
                        Add a Cover Image
                      </p>
                    </div>
                    <div className="relative pr-12">
                      {/* <NFTDropCoverImageIcon /> */}
                      <input
                        className="absolute inset-0 w-full h-full bg-transparent opacity-0 rounded-xl"
                        type="file"
                        name=""
                        onChange={(e) => {
                          if (e.target.files != null) {
                            setLogo(e.target.files[0]);
                          } else {
                            setLogo(null);
                          }
                        }}
                      />
                      {logo ? (
                        <div className="w-auto h-60">
                          <img
                            src={URL.createObjectURL(logo)}
                            alt=""
                            className="object-cover w-64 h-60 rounded-xl"
                          />
                        </div>
                      ) : (
                        <NFTDropCoverImageIcon />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-16 mt-12">
                <div className="flex-1">
                  <p className="text-[#9EBBFF] text-sm pb-4">
                    # of collection items being minted?
                  </p>
                  <BorderedDropDown
                    options={["Yes", "No"]}
                    onSelect={() => {
                      //
                    }}
                    placeholder="Select"
                    rounded="rounded-lg"
                  />
                </div>
                <div>
                  <p className="text-[#9EBBFF] text-sm pb-4">
                    Starting Mint Price (AVAX)
                  </p>
                  <div className="relative">
                    <div
                      className={classNames(
                        "absolute inset-y-0 flex items-center justify-center w-6 h-10 pt-2 left-1",
                        "ml-3"
                      )}
                    >
                      <AvaxIcon />
                    </div>
                    <input
                      type="text"
                      className={classNames(
                        "pl-14",
                        "px-5 py-3 border border-[#576993] bg-transparent",
                        "w-full rounded-md",
                        "placeholder:font-light placeholder:text-[#576993] z-50",
                        "bg-[#101528] rounded-lg"
                      )}
                      placeholder="0.00"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-[#9EBBFF] text-sm pb-4">
                    Starting Bid Price (AVAX)
                  </p>
                  <div className="relative">
                    <div
                      className={classNames(
                        "absolute inset-y-0 flex items-center justify-center w-6 h-10 pt-2 left-1",
                        "ml-3"
                      )}
                    >
                      <AvaxIcon />
                    </div>
                    <input
                      type="text"
                      className={classNames(
                        "pl-14",
                        "px-5 py-3 border border-[#576993] bg-transparent",
                        "w-full rounded-md",
                        "placeholder:font-light placeholder:text-[#576993] z-50",
                        "bg-[#101528] rounded-lg"
                      )}
                      placeholder="0.00"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-16 mt-12">
                <div className="flex flex-col justify-center">
                  <label className="text-[#9EBBFF] text-sm pb-4">
                    Royalty Percentage
                  </label>
                  <div className="flex items-center gap-5">
                    <div className="grow shrink-0 w-[calc(100%-55px)]">
                      <div className="collections_range_wrapper">
                        <Slider
                          aria-label="Volume"
                          value={rangeValue}
                          size="medium"
                          max={50}
                          onChange={(event, value) => {
                            rangeHandleChange(event, value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="shrink-0">
                      <p
                        className={classNames(
                          "text-xl font-medium",
                          GradientText
                        )}
                      >
                        {rangeValue}%
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[#9EBBFF] text-sm pb-4">
                    Requested mint date
                  </p>
                  <GradientDateSelector />
                </div>
              </div>

              <p className="mt-16 text-lg text-white">Contact Infomation</p>
              <div className="grid grid-cols-2 gap-32 mt-4">
                <div className="pt-2">
                  <p className={classNames("text-[#9EBBFF]", "text-sm pb-3")}>
                    Email address for main contact:
                  </p>
                  <input
                    type="text"
                    className={classNames(
                      "px-5 py-3 border border-[#576993] bg-transparent",
                      "w-full rounded-md",
                      "placeholder:font-light placeholder:text-[#576993] z-50",
                      "bg-[#101528] rounded-lg"
                    )}
                    placeholder="youremail@goeshere.com"
                  />
                </div>
                <div className="pt-2">
                  <p className={classNames("text-[#9EBBFF]", "text-sm pb-3")}>
                    Discord ID for main contact:
                  </p>
                  <input
                    type="text"
                    className={classNames(
                      "px-5 py-3 border border-[#576993] bg-transparent",
                      "w-full rounded-md",
                      "placeholder:font-light placeholder:text-[#576993] z-50",
                      "bg-[#101528] rounded-lg"
                    )}
                    placeholder="@TacvueFan"
                  />
                </div>
              </div>
              <div className="mt-10">
                <DropsFormSection />
              </div>

              <TeamDetailsSeciton />

              <p className="mt-16 text-lg text-white">About Project</p>
              <div className="grid grid-cols-2 mt-4 gap-x-28 gap-y-8">
                <BorderedTextArea
                  label="Give a brief description of your project."
                  placeholder="Add your description here..."
                />
                <BorderedTextArea
                  label="Describe what makes your project unique"
                  placeholder="Add what makes you different here..."
                />
                <BorderedTextArea
                  label="Please describe the long-term goals of your project:"
                  placeholder="Add your goals here..."
                />
                <BorderedTextArea
                  label="Please tell us about your team"
                  placeholder="Describe you team here..."
                />

                {/* 3rd row */}

                <BorderedTextArea
                  label="Any additional comments you would like to make?"
                  placeholder="Any thing you want us to know...."
                  className="col-span-full"
                />

                <div className="bg-[#576993] w-full mx-auto h-px my-4 col-span-full" />
                <div className="flex justify-between pb-8 col-span-full">
                  <div className="flex items-center justify-center space-x-2">
                    <FormControlLabel
                      className="select-none text-white/50"
                      control={<Checkbox />}
                      label="I have read and agreed to the terms of use"
                    />
                  </div>
                  <div className="flex space-x-3">
                    <div>
                      <CreateNFTRoundedButton
                        name="SUBMIT"
                        textSize="text-base"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LaunchYourNFTModal;
