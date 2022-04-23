import Image from "next/image";
import React, { ComponentProps, ReactNode } from "react";
import { BsTwitter } from "react-icons/bs";

type QuickAboutCardProps = {
  img: {
    src: string;
    alt?: string;
    width: number;
    height: number;
  };
  name: ReactNode;
  title?: ReactNode;
  twitter?: string;
};
const QuickAboutCard = ({
  img: { src, width, height, alt },
  name,
  title,
  twitter,
}: QuickAboutCardProps) => {
  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(#0c0b15,#0c0b15) padding-box,linear-gradient(0deg,rgba(255,255,255,0.2),#161d25,#161d25) border-box",
        }}
        className="rounded-[18px] overflow-hidden relative border border-transparent"
      >
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          //   layout='responsive'
          objectFit="cover"
        />

        <div
          style={{
            background:
              "linear-gradient(244.4deg, rgba(17, 32, 91, 0.6) 2.44%, rgba(5, 40, 109, 0.6) 88.04%)",
            backdropFilter: "blur(88.6504px)",
          }}
          className="absolute bottom-0 left-0 px-[26px] py-[18px] rounded-t-[18px] overflow-hidden w-full h-[84px] flex flex-col justify-center"
        >
          <div className="flex items-center justify-between">
            <div>
              <h5 className="font-sans text-white text-xl">{name}</h5>
              {title && (
                <p className="font-semibold font-sans text-base text-white mt-1">
                  {title}
                </p>
              )}
            </div>

            <div>
              <a
                href={twitter || "#"}
                target="_blank"
                rel="noreferrer"
                style={{
                  background:
                    "linear-gradient(#1c1d57,rgb(0,0,0,0)) padding-box padding-box, linear-gradient(180deg, rgb(25 195 254 / 29%) 0%, rgba(25, 195, 254, 0) 79.17%) border-box border-box",
                }}
                className="w-[40px] h-[40px] border-3 border-transparent rounded-full flex items-center justify-center"
              >
                <BsTwitter size={20} color="#fff" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickAboutCard;
